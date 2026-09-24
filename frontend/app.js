const API_BASE = 'http://localhost:8010';

const $ = (selector) => document.querySelector(selector);
const serviceState = { gateway: false, phrase: false, sentiment: false, score: false };
let conversationTurns = [];
let conversationScore = 0;
let analyzedCallerTurns = 0;

const testScripts = [
  ['Billing double charge', 'billing', ['I was charged twice this month.', 'I will review the billing details.', 'I want a refund for the duplicate charge.', 'I can submit a refund request.', 'Thank you for helping me.']],
  ['Account cancellation', 'churn', ['I want to cancel account immediately.', 'I can help with your cancellation request.', 'This service has been terrible.', 'I understand your frustration.', 'I want to talk to supervisor now.']],
  ['Refund escalation', 'billing', ['I demand a refund for this charge.', 'I will check the transaction.', 'Nobody has resolved this problem.', 'I am sorry and will escalate the request.', 'I want to talk to supervisor.']],
  ['Legal concern', 'compliance', ['I need to speak with a lawyer.', 'I can document your concern.', 'My personal information was mishandled.', 'I will send this to compliance.', 'I expect a formal response.']],
  ['Positive resolution', 'satisfaction', ['My issue has finally been resolved.', 'I am glad we could fix it.', 'Thank you for your excellent service.', 'You are welcome.', 'I really appreciate your help.']],
  ['Long wait complaint', 'escalation', ['I have been waiting for hours.', 'I apologize for the delay.', 'Nobody has explained what is happening.', 'I will investigate it now.', 'This is unacceptable.']],
  ['Payment failure', 'billing', ['My payment keeps getting declined.', 'I will check the payment status.', 'The charge still appears on my account.', 'I can review the transaction history.', 'Please fix this billing issue.']],
  ['Subscription dispute', 'churn', ['I want to cancel subscription.', 'I can review the subscription.', 'I was billed after I cancelled.', 'I am sorry about that.', 'I need this charge refunded.']],
  ['Manager request', 'escalation', ['Please let me speak to manager.', 'I can continue helping you.', 'No, I need a manager now.', 'I understand and will arrange that.', 'This situation is unacceptable.']],
  ['Service outage', 'escalation', ['Your service has been down all morning.', 'I will check the outage status.', 'I have lost important work because of this.', 'I understand the impact.', 'I need this escalated.']],
  ['Password recovery', 'satisfaction', ['I cannot access my account.', 'I can help reset your password.', 'The reset link worked.', 'That is good to hear.', 'Thank you for your help.']],
  ['Address update', 'billing', ['I need to update my billing address.', 'I can update that for you.', 'The new address is 25 Main Street.', 'I have saved the change.', 'Please confirm it is correct.']],
  ['Privacy request', 'compliance', ['I want to know how my data is used.', 'I can explain our privacy process.', 'Please delete my personal information.', 'I will route that request to compliance.', 'I expect confirmation in writing.']],
  ['Poor support experience', 'satisfaction', ['I have spoken to three agents already.', 'I am sorry you had that experience.', 'Nobody has solved my problem.', 'I will take ownership now.', 'This has been very disappointing.']],
  ['Quick resolution', 'satisfaction', ['I need help with a small account issue.', 'I can take care of that.', 'That fixed it immediately.', 'Excellent.', 'Thank you so much.']],
  ['Incorrect invoice', 'billing', ['My invoice contains the wrong amount.', 'I will compare it with the account.', 'The total is still incorrect.', 'I will correct the invoice.', 'Please send the updated bill.']],
  ['Close account', 'churn', ['Please close my account.', 'I can explain the closure process.', 'I have decided to leave.', 'I understand.', 'Confirm when the account is closed.']],
  ['Fraud alert', 'compliance', ['There is a charge I do not recognize.', 'I will secure the account.', 'I believe this may be fraud.', 'I will escalate this for investigation.', 'Please block further charges.']],
  ['Repeated outage', 'escalation', ['This outage keeps happening every week.', 'I will review the incident history.', 'Your previous fix did not work.', 'I understand why you are upset.', 'I want a permanent solution.']],
  ['Agent appreciation', 'satisfaction', ['The agent yesterday solved my issue.', 'I am glad to hear that.', 'I want to say thank you.', 'Your feedback is appreciated.', 'The support was excellent.']],
  ['Missing refund', 'billing', ['My refund has not arrived.', 'I will check the refund status.', 'It has been ten business days.', 'I will investigate the delay.', 'Please resolve this today.']],
  ['Contract concern', 'compliance', ['I have a concern about the contract.', 'I can explain the account terms.', 'I may need legal advice.', 'I can document your question.', 'Please send me the agreement.']],
  ['Cancellation save', 'churn', ['I am thinking about leaving.', 'I would like to understand why.', 'The price is too high.', 'I can review available options.', 'I still want to cancel subscription.']],
  ['Damaged order', 'billing', ['My order arrived damaged.', 'I am sorry about the condition.', 'I want a refund.', 'I can arrange a replacement or refund.', 'A refund is best.']],
  ['Unacceptable delay', 'escalation', ['The delivery is weeks late.', 'I will check the shipment.', 'This delay is unacceptable.', 'I understand and will escalate it.', 'Please have a manager contact me.']],
  ['Account locked', 'compliance', ['My account was locked without explanation.', 'I will verify your identity.', 'Why do you need all this information?', 'It is required for account security.', 'I want this reviewed by compliance.']],
  ['Neutral information', 'satisfaction', ['My customer ID is 98765.', 'Thank you, I have located the account.', 'My billing address is 25 Main Street.', 'I have updated the address.', 'Can you confirm the next payment date?']],
  ['Good service feedback', 'satisfaction', ['I appreciate the patience today.', 'I am happy to help.', 'You explained everything clearly.', 'Thank you for saying that.', 'This was excellent service.']],
  ['Multiple issues', 'billing', ['I was charged twice and the refund is missing.', 'I will review both billing records.', 'I have waited long enough.', 'I understand and will prioritize it.', 'Please escalate this billing dispute.']],
  ['Final warning', 'escalation', ['I have contacted support many times.', 'I am sorry this remains unresolved.', 'If this is not fixed I will cancel account.', 'I will escalate this immediately.', 'I want to talk to supervisor now.']]
].map(([title, category, lines], index) => ({
  id: `script-${index + 1}`,
  title,
  category,
  duration: '10+ min',
  turns: lines.map((text, turnIndex) => ({ speaker: turnIndex % 2 === 0 ? 'caller' : 'agent', text }))
}));

const followUpTurns = [
  ['agent', 'I am reviewing the details now and will keep you updated.'],
  ['caller', 'I appreciate that, but I need a clear answer today.'],
  ['agent', 'I have checked the account history and found the relevant details.'],
  ['caller', 'Can you explain what happens next and how long it will take?'],
  ['agent', 'The next step is documented and I will make sure it is completed.'],
  ['caller', 'I want to make sure there are no additional charges or problems.'],
  ['agent', 'I have confirmed the current status and noted your request.'],
  ['caller', 'Please send me confirmation when this has been completed.'],
  ['agent', 'I will send the confirmation and record the outcome in your case.'],
  ['caller', 'Thank you. I will wait for the confirmation before closing this call.'],
  ['agent', 'Before we finish, is there anything else I can clarify for you?'],
  ['caller', 'No, that covers everything I needed to discuss today.'],
  ['agent', 'Thank you for your time. I have added the final notes to the case.'],
  ['caller', 'I understand. I will follow up if the issue is not resolved.'],
  ['agent', 'Your case remains open until the requested action is complete.'],
  ['caller', 'That is fine. Please make sure the request is not missed.']
];

testScripts.forEach((script) => {
  script.turns = script.turns.concat(followUpTurns.map(([speaker, text]) => ({ speaker, text })));
});

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

function initScriptLibrary() {
  const select = $('#script-select');
  select.innerHTML = '<option value="">Select a conversation script...</option>';
  testScripts.forEach((script) => {
    const option = document.createElement('option');
    option.value = script.id;
    option.textContent = `${script.title} · ${script.category} · ${script.duration} · ${script.turns.length} turns`;
    select.appendChild(option);
  });
  $('#script-count').textContent = `${testScripts.length} scripts`;
}

function loadSelectedScript() {
  const script = testScripts.find((item) => item.id === $('#script-select').value);
  if (!script) return;
  $('#conversation-text').value = script.turns.map((turn) => `${turn.speaker[0].toUpperCase()}${turn.speaker.slice(1)}: ${turn.text}`).join('\n');
  $('#analysis-error').textContent = `${script.title} loaded. Click Load conversation to begin.`;
  $('#conversation-text').focus();
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
$('#load-script').addEventListener('click', loadSelectedScript);
$('#keyword-form').addEventListener('submit', addKeyword);
$('#refresh-button').addEventListener('click', () => Promise.all([refreshStatus(), loadKeywords()]));
refreshStatus();
loadKeywords();
initScriptLibrary();
