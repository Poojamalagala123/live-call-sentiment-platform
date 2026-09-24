const API_BASE = 'http://localhost:8010';

const $ = (selector) => document.querySelector(selector);
const serviceState = { gateway: false, phrase: false, sentiment: false, score: false };
let conversationTurns = [];
let conversationScore = 0;
let analyzedCallerTurns = 0;

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
      fetch('http://localhost:8002/health').then((response) => response.json()),
      fetch('http://localhost:8003/health').then((response) => response.json()),
      fetch('http://localhost:8004/health').then((response) => response.json())
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
  $('#final-score').textContent = Number(issue.live_score ?? 0).toFixed(1);
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

function renderTurns() {
  const list = $('#turn-list');
  list.innerHTML = '';
  const nextCallerIndex = conversationTurns.findIndex((item) => item.speaker === 'caller' && !item.analyzed);
  conversationTurns.forEach((turn, index) => {
    const row = document.createElement('article');
    row.className = `turn-row ${turn.speaker}`;
    row.dataset.index = index;
    row.innerHTML = `<div class="turn-number">${String(index + 1).padStart(2, '0')}</div><div class="turn-content"><div class="turn-meta"><span class="speaker-label"></span><span class="turn-score"></span></div><p></p><div class="turn-keywords"></div></div><button class="turn-action" type="button"></button>`;
    row.querySelector('.speaker-label').textContent = turn.speaker;
    row.querySelector('p').textContent = turn.text;
    row.querySelector('.turn-score').textContent = turn.analyzed ? `Score ${Number(turn.score).toFixed(1)}` : turn.speaker === 'caller' ? 'Not analyzed' : 'Context only';
    const action = row.querySelector('.turn-action');
    if (turn.speaker === 'caller') {
      action.textContent = turn.analyzed ? 'Analyzed' : 'Analyze';
      action.disabled = turn.analyzed || turn.loading || index !== nextCallerIndex;
      action.addEventListener('click', () => analyzeCallerTurn(index));
    } else {
      action.textContent = 'Agent turn';
      action.disabled = true;
    }
    if (turn.keywords?.length) {
      row.querySelector('.turn-keywords').textContent = turn.keywords.map((item) => item.keyword).join(' · ');
    }
    list.appendChild(row);
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

async function analyzeCallerTurn(index) {
  const turn = conversationTurns[index];
  if (!turn || turn.speaker !== 'caller' || turn.analyzed) return;
  turn.loading = true;
  renderTurns();
  const started = performance.now();
  try {
    const data = await request('/api/v1/process-text', {
      method: 'POST',
      body: JSON.stringify({
        text: turn.text,
        speaker: 'caller',
        previous_score: conversationScore,
        turn_count: analyzedCallerTurns + 1
      })
    });
    const issue = data.detected_issues?.[0] || {};
    turn.analyzed = true;
    turn.loading = false;
    turn.score = Number(issue.live_score ?? conversationScore);
    turn.emotion = issue.emotion || 'neutral';
    turn.category = issue.sentiment_category || 'neutral';
    turn.confidence = Number(issue.confidence || 0);
    turn.keywords = issue.detected_keywords || [];
    turn.processingTime = data.processing_time_ms ?? Math.round(performance.now() - started);
    conversationScore = turn.score;
    analyzedCallerTurns += 1;
    showTurnResult(turn);
    renderTurns();
  } catch (requestError) {
    turn.loading = false;
    renderTurns();
    $('#analysis-error').textContent = requestError.message;
  }
}

function loadConversation(event) {
  event.preventDefault();
  const error = $('#analysis-error');
  error.textContent = '';
  conversationTurns = parseConversation($('#conversation-text').value);
  conversationScore = Number($('#initial-score').value) || 0;
  analyzedCallerTurns = 0;
  if (!conversationTurns.length) {
    error.textContent = 'Add at least one conversation line.';
    return;
  }
  $('#turns-panel').classList.remove('hidden');
  $('#analysis-result').classList.add('hidden');
  $('#empty-result').classList.remove('hidden');
  renderTurns();
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
    data.keywords.forEach((item) => {
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

$('#conversation-form').addEventListener('submit', loadConversation);
$('#keyword-form').addEventListener('submit', addKeyword);
$('#refresh-button').addEventListener('click', () => Promise.all([refreshStatus(), loadKeywords()]));
refreshStatus();
loadKeywords();
