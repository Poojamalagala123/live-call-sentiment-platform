const LOCAL_PREVIEW = location.protocol === 'file:' ||
  (['localhost', '127.0.0.1'].includes(location.hostname) && location.port === '3000');
const API_BASE = LOCAL_PREVIEW ? 'http://localhost:8010' : '';
const healthUrl = (service, port) => LOCAL_PREVIEW ? `http://localhost:${port}/health` : `/services/${service}/health`;

const $ = (selector) => document.querySelector(selector);
const serviceState = { gateway: false, phrase: false, sentiment: false, score: false };
let conversationTurns = [];
let conversationScore = 0;
let analyzedCallerTurns = 0;
let analysisRun = 0;
let analysisController;
let selectedTurnIndex = null;
let followLatest = true;
let uploadSequence = 0;

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(detail || `Request failed (${response.status})`);
  }
  return response.json();
}

function setServiceLight(selector, online) {
  const light = $(selector);
  light.style.background = online ? '#67b27c' : '#ef806a';
}

async function refreshStatus() {
  $('#last-sync').textContent = 'Syncing';
  try {
    const gateway = await request('/health');
    serviceState.gateway = gateway.status === 'healthy';
    const [phrase, sentiment, score] = await Promise.all([
      fetch(healthUrl('phrase', 8002)).then((response) => response.json()),
      fetch(healthUrl('sentiment', 8003)).then((response) => response.json()),
      fetch(healthUrl('score', 8004)).then((response) => response.json())
    ]);
    serviceState.phrase = phrase.database?.connected === true;
    serviceState.sentiment = sentiment.model_loaded === true;
    serviceState.score = score.status === 'healthy';
    const onlineCount = Object.values(serviceState).filter(Boolean).length;
    $('#service-count').textContent = `${onlineCount} / 4`;
    $('#overall-status').textContent = onlineCount === 4 ? 'All systems go' : 'Degraded';
    $('#overall-status').style.background = onlineCount === 4 ? 'var(--lime)' : 'var(--gold)';
    $('#sentiment-state').textContent = serviceState.sentiment ? 'Online' : 'Loading';
    $('#keyword-count').textContent = phrase.database?.total_keywords ?? '--';
    setServiceLight('#sentiment-light', serviceState.sentiment);
    setServiceLight('#phrase-light', serviceState.phrase);
    $('#last-sync').textContent = `Synced ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  } catch (error) {
    $('#service-count').textContent = '0 / 4';
    $('#overall-status').textContent = 'Offline';
    $('#last-sync').textContent = 'Gateway unavailable';
    setServiceLight('#sentiment-light', false);
    setServiceLight('#phrase-light', false);
  }
}

function renderAnalysis(data) {
  const issue = data.detected_issues?.[0] || {};
  $('#empty-result').classList.add('hidden');
  $('#analysis-result').classList.remove('hidden');
  $('#result-emotion').textContent = issue.emotion || 'neutral';
  $('#result-category').textContent = issue.sentiment_category || 'neutral';
  $('#result-confidence').textContent = `${Math.round((issue.confidence || 0) * 100)}%`;
  $('#result-score').textContent = Number(issue.live_score ?? 0).toFixed(1);

  $('#result-time').textContent = `${data.processing_time_ms ?? '--'} ms`;
  $('#result-trend').textContent = issue.live_score <= -65 ? 'Escalating' : 'Stable';
  const keywords = $('#result-keywords');
  keywords.innerHTML = '';
  const matches = issue.detected_keywords || [];
  if (!matches.length) {
    keywords.innerHTML = '<span class="muted">None detected</span>';
  } else {
    matches.forEach((match) => {
      const chip = document.createElement('span');
      chip.className = 'keyword-chip';
      chip.textContent = match.category ? `${match.keyword} · ${match.category}` : match.keyword;
      keywords.appendChild(chip);
    });
  }
  $('#escalation-banner').classList.toggle('hidden', issue.live_score > -65);
}

function parseConversation(value) {
  return value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => {
    const match = line.match(/^(caller|agent)\s*:\s*(.+)$/i);
    return {
      speaker: match ? match[1].toLowerCase() : 'caller',
      text: match ? match[2].trim() : line
    };
  });
}

function initScriptLibrary() {
  const select = $('#script-select');
  select.innerHTML = '<option value="">Choose a conversation...</option>';
  testScripts.forEach((script) => {
    const option = document.createElement('option');
    option.value = script.id;
    option.textContent = script.title;
    select.appendChild(option);
  });
  $('#script-count').textContent = `${testScripts.length} calls`;
}

function loadSelectedScript() {
  uploadSequence += 1;
  const script = testScripts.find((item) => item.id === $('#script-select').value);
  if (!script) {
    $('#conversation-text').value = '';
    loadConversation();
    return;
  }
  $('#conversation-text').value = script.turns.map((turn) => `${turn.speaker}: ${turn.text}`).join('\n');
  loadConversation(undefined, script.turns);
}

function svgElement(name, attributes, text) {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  if (text !== undefined) element.textContent = text;
  return element;
}

function selectTurn(index, manual = true) {
  const turn = conversationTurns[index];
  if (!turn?.analyzed) return;
  selectedTurnIndex = index;
  if (manual) followLatest = false;
  $('#selected-turn-label').textContent = `Client statement - transcript turn ${index + 1}`;
  $('#selected-turn-text').textContent = turn.text;
  $('#selected-turn').classList.remove('hidden');
  showTurnResult(turn);
  const change = turn.score - turn.previousScore;
  $('#score-change').textContent = `${change > 0 ? '+' : ''}${change.toFixed(1)}`;
  $('#score-change').dataset.direction = change > 0 ? 'up' : change < 0 ? 'down' : 'flat';
  $('#result-trend').textContent = `${change > 0 ? 'Up' : change < 0 ? 'Down' : 'Unchanged'} from ${turn.previousScore.toFixed(1)} before this statement`;
  document.querySelectorAll('.chart-point').forEach((point) => {
    point.setAttribute('aria-pressed', String(Number(point.dataset.index) === index));
  });
}

function renderChart() {
  const svg = $('#score-chart');
  svg.replaceChildren();
  const callers = conversationTurns.map((turn, index) => ({ turn, index })).filter(({ turn }) => turn.speaker === 'caller');
  const x = (position) => callers.length < 2 ? 430 : 64 + position * 716 / (callers.length - 1);
  const y = (score) => 28 + (100 - score) * 1.2;
  [100, 50, 0, -50, -100].forEach((score) => {
    svg.append(svgElement('line', { x1: 64, x2: 780, y1: y(score), y2: y(score), class: 'chart-grid' }));
    svg.append(svgElement('text', { x: 52, y: y(score) + 4, 'text-anchor': 'end', class: 'chart-label' }, score));
  });
  svg.append(svgElement('line', { x1: 64, x2: 780, y1: y(-65), y2: y(-65), class: 'chart-threshold' }));
  svg.append(svgElement('text', { x: 780, y: y(-65) - 6, 'text-anchor': 'end', class: 'chart-label' }, 'Alert -65'));
  const analyzed = callers.map((item, position) => ({ ...item, position })).filter(({ turn }) => turn.analyzed);
  svg.append(svgElement('polyline', {
    points: analyzed.map(({ turn, position }) => `${x(position)},${y(turn.score)}`).join(' '),
    class: 'chart-line'
  }));
  callers.forEach(({ index }, position) => {
    svg.append(svgElement('text', { x: x(position), y: 291, 'text-anchor': 'middle', class: 'chart-label' }, index + 1));
  });
  svg.append(svgElement('text', { x: 430, y: 320, 'text-anchor': 'middle', class: 'chart-label' }, 'Transcript turn (client statements)'));
  analyzed.forEach(({ turn, index, position }) => {
    const point = svgElement('circle', {
      cx: x(position), cy: y(turn.score), r: 8, class: 'chart-point',
      tabindex: 0, role: 'button', 'data-index': index,
      'aria-pressed': String(selectedTurnIndex === index),
      'aria-label': `Turn ${index + 1}, score ${turn.score.toFixed(1)}: ${turn.text}`
    });
    point.append(svgElement('title', {}, `Score ${turn.score.toFixed(1)}: ${turn.text}`));
    point.addEventListener('click', () => selectTurn(index));
    point.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        selectTurn(index);
      }
    });
    svg.append(point);
  });
}
function showTurnResult(turn) {
  renderAnalysis({ processing_time_ms: turn.processingTime, detected_issues: [{
    emotion: turn.emotion,
    sentiment_category: turn.category,
    confidence: turn.confidence,
    live_score: turn.score,
    detected_keywords: turn.keywords || []
  }] });
}

async function analyzeCallerTurn(index, run, signal) {
  const turn = conversationTurns[index];
  turn.loading = true;
  const started = performance.now();
  const data = await request('/api/v1/process-text', {
    method: 'POST',
    signal,
    body: JSON.stringify({
      text: turn.text,
      speaker: 'caller',
      previous_score: conversationScore,
      turn_count: analyzedCallerTurns + 1
    })
  });
  if (run !== analysisRun) return;
  const issue = data.detected_issues?.[0];
  if (!issue || typeof issue.live_score !== 'number' || !Number.isFinite(issue.live_score) ||
      Object.values(data.services_status || {}).some((status) => /error|failed|unavailable|degraded/i.test(String(status)))) {
    throw new Error('Analysis services did not return a valid score. Please retry.');
  }
  Object.assign(turn, {
    analyzed: true, loading: false, score: issue.live_score, previousScore: conversationScore,
    emotion: issue.emotion || 'neutral', category: issue.sentiment_category || 'neutral',
    confidence: Number(issue.confidence || 0), keywords: issue.detected_keywords || [],
    processingTime: data.processing_time_ms ?? Math.round(performance.now() - started)
  });
  conversationScore = turn.score;
  analyzedCallerTurns += 1;
  renderChart();
  $('#overall-score').textContent = conversationScore.toFixed(1);
  $('#overall-caption').textContent = 'Running score - analysis in progress';
  $('#analysis-progress').value = analyzedCallerTurns;
  if (followLatest) selectTurn(index, false);
}

async function loadConversation(event, turns) {
  event?.preventDefault();
  analysisController?.abort();
  const run = ++analysisRun;
  analysisController = new AbortController();
  const signal = analysisController.signal;
  selectedTurnIndex = null;
  followLatest = true;
  $('#analysis-error').textContent = '';
  conversationTurns = turns ? turns.map(({ speaker, text }) => ({ speaker, text })) : parseConversation($('#conversation-text').value);
  conversationScore = Number($('#initial-score').value) || 0;
  analyzedCallerTurns = 0;
  $('#analysis-result').classList.add('hidden');
  $('#empty-result').classList.remove('hidden');
  $('#selected-turn').classList.add('hidden');
  $('#overall-score').textContent = '--';
  $('#chart-panel').classList.toggle('hidden', !conversationTurns.length);
  $('#start-state').classList.toggle('hidden', !!conversationTurns.length);
  $('#transcript-panel').classList.toggle('hidden', !conversationTurns.length);
  $('#overall-caption').textContent = 'Waiting for the first score';
  $('#analysis-state').textContent = 'Analyzing';
  $('#retry-analysis').classList.add('hidden');
  $('#analysis-progress').value = 0;
  const script = testScripts.find((item) => item.id === $('#script-select').value);
  $('#conversation-name').textContent = event ? 'Edited conversation' : script?.title || 'Custom conversation';
  renderChart();
  const callerCount = conversationTurns.filter((turn) => turn.speaker === 'caller').length;
  $('#analysis-progress').max = callerCount || 1;
  if (!callerCount) {
    $('#chart-panel').setAttribute('aria-busy', 'false');
    $('#chart-status').textContent = 'Add a conversation with at least one customer statement.';
    $('#analysis-state').textContent = 'No customer statements';
    $('#overall-caption').textContent = 'No score available';
    return;
  }
  $('#chart-panel').setAttribute('aria-busy', 'true');
  try {
    for (let index = 0; index < conversationTurns.length; index += 1) {
      if (conversationTurns[index].speaker !== 'caller') continue;
      $('#chart-status').textContent = `Analyzing client statement ${analyzedCallerTurns + 1} of ${callerCount}...`;
      await analyzeCallerTurn(index, run, signal);
      if (run !== analysisRun) return;
    }
    $('#overall-score').textContent = conversationScore.toFixed(1);
    $('#overall-caption').textContent = 'Final running score for this conversation';
    $('#analysis-state').textContent = 'Complete';
    $('#chart-status').textContent = `Analysis complete - ${callerCount} client statements. Select a point to review what the client said.`;
  } catch (error) {
    if (run !== analysisRun) return;
    conversationTurns.forEach((turn) => { turn.loading = false; });
    $('#analysis-error').textContent = error.message;
    $('#analysis-state').textContent = 'Incomplete';
    $('#overall-caption').textContent = analyzedCallerTurns ? 'Partial score - analysis incomplete' : 'No score available';
    $('#retry-analysis').classList.remove('hidden');
    $('#chart-status').textContent = `Analysis stopped after ${analyzedCallerTurns} of ${callerCount} client statements. Select Retry analysis to try again.`;
  } finally {
    if (run === analysisRun) {
      $('#chart-panel').setAttribute('aria-busy', 'false');
    }
  }
}
async function loadKeywords() {
  const list = $('#watchlist');
  try {
    const data = await request('/api/v1/admin-keywords');
    list.innerHTML = '';
    if (!data.keywords?.length) {
      list.innerHTML = '<div class="list-loading">No monitored phrases yet.</div>';
      return;
    }
    [...data.keywords].sort((a, b) => a.keyword.localeCompare(b.keyword, 'en', { sensitivity: 'base' })).forEach((item) => {
      const row = document.createElement('div');
      row.className = 'keyword-item';
      row.innerHTML = `<div class="keyword-item-main"><strong></strong><small></small></div><button class="delete-button" title="Remove phrase" aria-label="Remove phrase">×</button>`;
      row.querySelector('strong').textContent = item.keyword;
      row.querySelector('small').textContent = item.category || 'Uncategorized';
      row.querySelector('.delete-button').addEventListener('click', () => removeKeyword(item.keyword));
      list.appendChild(row);
    });
  } catch (error) {
    list.innerHTML = '<div class="list-loading">Phrase service unavailable.</div>';
  }
}

async function addKeyword(event) {
  event.preventDefault();
  const keyword = $('#keyword').value.trim();
  const category = $('#category').value.trim();
  if (!keyword) return;
  try {
    await request('/api/v1/add-keyword', { method: 'POST', body: JSON.stringify({ keyword, category: category || null }) });
    $('#keyword-form').reset();
    await Promise.all([loadKeywords(), refreshStatus()]);
  } catch (error) {
    window.alert(`Could not add phrase: ${error.message}`);
  }
}

async function removeKeyword(keyword) {
  if (!window.confirm(`Remove "${keyword}" from the watchlist?`)) return;
  try {
    await request(`/api/v1/delete-keyword/${encodeURIComponent(keyword)}`, { method: 'DELETE' });
    await Promise.all([loadKeywords(), refreshStatus()]);
  } catch (error) {
    window.alert(`Could not remove phrase: ${error.message}`);
  }
}

function parseTranscriptFile(content, filename) {
  let data;
  try {
    data = JSON.parse(content.replace(/^\uFEFF/, ''));
  } catch {
    throw new Error('This file is not valid JSON. Use the downloadable example as a guide.');
  }
  const rows = Array.isArray(data) ? data : data?.turns;
  if (!Array.isArray(rows) || !rows.length) {
    throw new Error('The JSON must contain a non-empty "turns" array, or be an array of turns.');
  }
  const turns = rows.map((row, index) => {
    const speaker = typeof row?.speaker === 'string' ? row.speaker.trim().toLowerCase() : '';
    if (!['caller', 'customer', 'client', 'agent'].includes(speaker) ||
        typeof row?.text !== 'string' || !row.text.trim()) {
      throw new Error(`Turn ${index + 1} needs a speaker (customer or agent) and non-empty text.`);
    }
    return { speaker: speaker === 'agent' ? 'agent' : 'caller', text: row.text.trim() };
  });
  if (!turns.some((turn) => turn.speaker === 'caller')) {
    throw new Error('Include at least one customer statement to analyze.');
  }
  return {
    title: typeof data?.title === 'string' && data.title.trim() ? data.title.trim() : filename.replace(/\.json$/i, ''),
    turns
  };
}

async function uploadTranscript(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const sequence = ++uploadSequence;
  const run = analysisRun;
  $('#upload-status').textContent = 'Reading transcript...';
  $('#analysis-error').textContent = '';
  try {
    if (!/\.json$/i.test(file.name)) throw new Error('Please select a .json transcript file.');
    if (file.size > 5 * 1024 * 1024) throw new Error('Please select a JSON file smaller than 5 MB.');
    const content = await file.text();
    if (sequence !== uploadSequence || run !== analysisRun) return;
    const transcript = parseTranscriptFile(content, file.name);
    const script = { ...transcript, id: `upload-${Date.now()}-${sequence}` };
    testScripts.push(script);
    initScriptLibrary();
    $('#script-select').value = script.id;
    $('#initial-score').value = '0';
    $('#upload-status').textContent = `Loaded ${script.title} - ${script.turns.length} turns.`;
    loadSelectedScript();
  } catch (error) {
    if (sequence === uploadSequence && run === analysisRun) {
      $('#analysis-error').textContent = error.message;
      $('#upload-status').textContent = '';
    }
  } finally {
    event.target.value = '';
    if (sequence === uploadSequence && run !== analysisRun) $('#upload-status').textContent = '';
  }
}

$('#upload-transcript').addEventListener('click', () => $('#transcript-file').click());
$('#transcript-file').addEventListener('change', uploadTranscript);
$('#conversation-form').addEventListener('submit', loadConversation);
$('#retry-analysis').addEventListener('click', () => loadConversation());
$('#script-select').addEventListener('change', loadSelectedScript);
$('#keyword-form').addEventListener('submit', addKeyword);
$('#refresh-button').addEventListener('click', () => Promise.all([refreshStatus(), loadKeywords()]));
refreshStatus();
loadKeywords();
initScriptLibrary();
