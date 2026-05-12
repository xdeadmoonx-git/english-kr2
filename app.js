// ============ UTILITIES ============
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom(arr, n, exclude) {
  const pool = arr.filter(x => x !== exclude);
  return shuffle(pool).slice(0, n);
}

function normalize(str) {
  return String(str)
    .toLowerCase()
    .replace(/ё/g, 'е')
    .replace(/[«»"'`]/g, '')
    .replace(/[.,;:!?()\[\]/\\\-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function levenshtein(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i-1] === b[j-1]
        ? dp[i-1][j-1]
        : 1 + Math.min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
    }
  }
  return dp[a.length][b.length];
}

// Lenient comparison: allows the user to enter ONE of several acceptable variants
// separated by commas/semicolons/slashes in the source data, and is forgiving on small typos.
function answerMatches(userInput, correctAnswer) {
  const u = normalize(userInput);
  if (!u) return false;
  const correct = normalize(correctAnswer);
  if (u === correct) return true;

  const variants = correct.split(/[,;/]/).map(s => s.trim()).filter(Boolean);
  for (const v of variants) {
    if (u === v) return true;
    const userVariants = u.split(/[,;/]/).map(s => s.trim()).filter(Boolean);
    if (userVariants.includes(v)) return true;
    // close match on a single variant
    if (v.length > 6 && levenshtein(u, v) <= Math.max(1, Math.floor(v.length * 0.08))) return true;
  }

  if (correct.length > 6 && levenshtein(u, correct) <= Math.max(1, Math.floor(correct.length * 0.08))) {
    return true;
  }
  return false;
}

// ============ APP STATE ============
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

const STATE = {
  currentScreen: 'home',
  session: null
};

function show(screenId) {
  $$('.screen').forEach(s => s.classList.add('hidden'));
  $('#' + screenId).classList.remove('hidden');
  STATE.currentScreen = screenId;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
  STATE.session = null;
  show('screen-home');
}

// ============ TRANSLATION MODULE ============
const Translation = {
  start(difficulty, direction) {
    const items = shuffle(TRANSLATIONS).slice(0, 25);
    STATE.session = {
      type: 'translation',
      difficulty, direction,
      items, idx: 0, correct: 0, wrong: 0,
      mistakes: []
    };
    show('screen-translation');
    this.render();
  },

  render() {
    const s = STATE.session;
    if (s.idx >= s.items.length) return this.finish();
    const item = s.items[s.idx];
    const isEn2Ru = s.direction === 'en2ru';
    const prompt = isEn2Ru ? item.en : item.ru;

    const total = s.items.length;
    $('#tr-progress-fill').style.width = `${(s.idx / total) * 100}%`;
    $('#tr-counter').textContent = `${s.idx + 1} / ${total}`;
    $('#tr-correct').textContent = s.correct;
    $('#tr-wrong').textContent = s.wrong;
    $('#tr-prompt-label').textContent = isEn2Ru ? 'Переведи на русский' : 'Translate to English';
    $('#tr-prompt').textContent = prompt;
    $('#tr-feedback').className = 'feedback';

    if (s.difficulty === 'easy') {
      $('#tr-options-wrap').classList.remove('hidden');
      $('#tr-input-wrap').classList.add('hidden');
      this.renderOptions(item, isEn2Ru);
    } else {
      $('#tr-options-wrap').classList.add('hidden');
      $('#tr-input-wrap').classList.remove('hidden');
      $('#tr-input').value = '';
      $('#tr-input').disabled = false;
      $('#tr-submit').classList.remove('hidden');
      $('#tr-next').classList.add('hidden');
      $('#tr-hint').textContent = isEn2Ru ? 'Type the Russian translation. Press Enter.' : 'Type the English translation. Press Enter.';
      setTimeout(() => $('#tr-input').focus(), 50);
    }
  },

  renderOptions(item, isEn2Ru) {
    const correctAnswer = isEn2Ru ? item.ru : item.en;
    const others = pickRandom(TRANSLATIONS, 3, item).map(o => isEn2Ru ? o.ru : o.en);
    const opts = shuffle([correctAnswer, ...others]);
    const wrap = $('#tr-options');
    wrap.innerHTML = '';
    opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
      btn.onclick = () => this.selectOption(btn, opt, correctAnswer, wrap);
      wrap.appendChild(btn);
    });
  },

  selectOption(btn, choice, correct, wrap) {
    const s = STATE.session;
    [...wrap.children].forEach(b => b.disabled = true);
    if (choice === correct) {
      btn.classList.add('correct');
      s.correct++;
    } else {
      btn.classList.add('wrong');
      [...wrap.children].forEach(b => {
        if (b.querySelector('span:last-child').textContent === correct) b.classList.add('correct');
      });
      s.wrong++;
      s.mistakes.push(s.items[s.idx]);
    }
    $('#tr-correct').textContent = s.correct;
    $('#tr-wrong').textContent = s.wrong;
    setTimeout(() => { s.idx++; this.render(); }, 950);
  },

  submit() {
    const s = STATE.session;
    const item = s.items[s.idx];
    const isEn2Ru = s.direction === 'en2ru';
    const correct = isEn2Ru ? item.ru : item.en;
    const input = $('#tr-input').value;
    const ok = answerMatches(input, correct);

    $('#tr-input').disabled = true;
    $('#tr-submit').classList.add('hidden');
    $('#tr-next').classList.remove('hidden');
    setTimeout(() => $('#tr-next').focus(), 50);

    const fb = $('#tr-feedback');
    if (ok) {
      s.correct++;
      fb.className = 'feedback show right';
      fb.innerHTML = `<strong>Верно</strong>${correct}`;
    } else {
      s.wrong++;
      s.mistakes.push(item);
      fb.className = 'feedback show wrong';
      fb.innerHTML = `<strong>Правильный ответ</strong><span class="answer">${correct}</span><br><span style="color:var(--ink-muted); font-size:13px; margin-top:6px; display:inline-block">Твой: ${input || '—'}</span>`;
    }
    $('#tr-correct').textContent = s.correct;
    $('#tr-wrong').textContent = s.wrong;
  },

  next() {
    STATE.session.idx++;
    this.render();
  },

  finish() {
    const s = STATE.session;
    showResult({
      score: s.correct,
      total: s.items.length,
      onAgain: () => Translation.start(s.difficulty, s.direction),
      onMistakes: s.mistakes.length ? () => {
        const mistakes = s.mistakes;
        STATE.session = {
          type: 'translation',
          difficulty: s.difficulty,
          direction: s.direction,
          items: mistakes,
          idx: 0, correct: 0, wrong: 0, mistakes: []
        };
        show('screen-translation');
        Translation.render();
      } : null
    });
  }
};

// ============ ABBREVIATION MODULE ============
const Abbreviation = {
  start(difficulty) {
    const items = shuffle(ABBREVIATIONS).slice(0, 25);
    STATE.session = {
      type: 'abbreviation',
      difficulty,
      items, idx: 0, correct: 0, wrong: 0,
      mistakes: []
    };
    show('screen-abbreviation');
    this.render();
  },

  render() {
    const s = STATE.session;
    if (s.idx >= s.items.length) return this.finish();
    const item = s.items[s.idx];

    const total = s.items.length;
    $('#ab-progress-fill').style.width = `${(s.idx / total) * 100}%`;
    $('#ab-counter').textContent = `${s.idx + 1} / ${total}`;
    $('#ab-correct').textContent = s.correct;
    $('#ab-wrong').textContent = s.wrong;
    $('#ab-prompt').textContent = item.abbr;
    $('#ab-feedback').className = 'feedback';

    if (s.difficulty === 'easy') {
      $('#ab-options-wrap').classList.remove('hidden');
      $('#ab-input-wrap').classList.add('hidden');
      this.renderOptions(item);
    } else {
      $('#ab-options-wrap').classList.add('hidden');
      $('#ab-input-wrap').classList.remove('hidden');
      $('#ab-input').value = '';
      $('#ab-input').disabled = false;
      $('#ab-submit').classList.remove('hidden');
      $('#ab-next').classList.add('hidden');
      setTimeout(() => $('#ab-input').focus(), 50);
    }
  },

  renderOptions(item) {
    const others = pickRandom(ABBREVIATIONS, 3, item).map(o => o.full);
    const opts = shuffle([item.full, ...others]);
    const wrap = $('#ab-options');
    wrap.innerHTML = '';
    opts.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'opt';
      btn.innerHTML = `<span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
      btn.onclick = () => this.selectOption(btn, opt, item.full, wrap);
      wrap.appendChild(btn);
    });
  },

  selectOption(btn, choice, correct, wrap) {
    const s = STATE.session;
    [...wrap.children].forEach(b => b.disabled = true);
    if (choice === correct) {
      btn.classList.add('correct');
      s.correct++;
    } else {
      btn.classList.add('wrong');
      [...wrap.children].forEach(b => {
        if (b.querySelector('span:last-child').textContent === correct) b.classList.add('correct');
      });
      s.wrong++;
      s.mistakes.push(s.items[s.idx]);
    }
    $('#ab-correct').textContent = s.correct;
    $('#ab-wrong').textContent = s.wrong;
    setTimeout(() => { s.idx++; this.render(); }, 950);
  },

  submit() {
    const s = STATE.session;
    const item = s.items[s.idx];
    const input = $('#ab-input').value;
    const ok = answerMatches(input, item.full);

    $('#ab-input').disabled = true;
    $('#ab-submit').classList.add('hidden');
    $('#ab-next').classList.remove('hidden');
    setTimeout(() => $('#ab-next').focus(), 50);

    const fb = $('#ab-feedback');
    if (ok) {
      s.correct++;
      fb.className = 'feedback show right';
      fb.innerHTML = `<strong>Верно</strong>${item.full}`;
    } else {
      s.wrong++;
      s.mistakes.push(item);
      fb.className = 'feedback show wrong';
      fb.innerHTML = `<strong>Правильный ответ</strong><span class="answer">${item.full}</span><br><span style="color:var(--ink-muted); font-size:13px; margin-top:6px; display:inline-block">Твой: ${input || '—'}</span>`;
    }
    $('#ab-correct').textContent = s.correct;
    $('#ab-wrong').textContent = s.wrong;
  },

  next() {
    STATE.session.idx++;
    this.render();
  },

  finish() {
    const s = STATE.session;
    showResult({
      score: s.correct,
      total: s.items.length,
      onAgain: () => Abbreviation.start(s.difficulty),
      onMistakes: s.mistakes.length ? () => {
        const mistakes = s.mistakes;
        STATE.session = {
          type: 'abbreviation',
          difficulty: s.difficulty,
          items: mistakes,
          idx: 0, correct: 0, wrong: 0, mistakes: []
        };
        show('screen-abbreviation');
        Abbreviation.render();
      } : null
    });
  }
};

// ============ DEFINITIONS MODULE ============
const Definitions = {
  selectedTopics: new Set(),
  mode: 'flashcard',

  init() {
    const wrap = $('#def-topic-list');
    wrap.innerHTML = '';
    const allChip = this.makeChip('Все темы', null);
    allChip.classList.add('active');
    wrap.appendChild(allChip);
    DEFINITIONS.forEach(t => wrap.appendChild(this.makeChip(t.topic, t.topic)));
  },

  makeChip(label, topicId) {
    const btn = document.createElement('button');
    btn.className = 'topic-chip';
    btn.textContent = label;
    btn.dataset.topic = topicId || 'ALL';
    btn.onclick = () => {
      if (topicId === null) {
        this.selectedTopics.clear();
        $$('#def-topic-list .topic-chip').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
      } else {
        $('#def-topic-list .topic-chip[data-topic="ALL"]').classList.remove('active');
        if (this.selectedTopics.has(topicId)) {
          this.selectedTopics.delete(topicId);
          btn.classList.remove('active');
        } else {
          this.selectedTopics.add(topicId);
          btn.classList.add('active');
        }
        if (this.selectedTopics.size === 0) {
          $('#def-topic-list .topic-chip[data-topic="ALL"]').classList.add('active');
        }
      }
      this.refresh();
    };
    return btn;
  },

  getItems() {
    let items = [];
    DEFINITIONS.forEach(t => {
      if (this.selectedTopics.size === 0 || this.selectedTopics.has(t.topic)) {
        t.items.forEach(it => items.push({ ...it, topic: t.topic }));
      }
    });
    return items;
  },

  setMode(mode) {
    this.mode = mode;
    $$('#def-modes button').forEach(b => b.classList.toggle('active', b.dataset.mode === mode));
    this.refresh();
  },

  refresh() {
    const items = this.getItems();
    $('#def-flashcard-view').classList.add('hidden');
    $('#def-fillblank-view').classList.add('hidden');
    $('#def-browse-view').classList.add('hidden');

    if (this.mode === 'flashcard') {
      $('#def-flashcard-view').classList.remove('hidden');
      this.startFlashcards(items);
    } else if (this.mode === 'fillblank') {
      $('#def-fillblank-view').classList.remove('hidden');
      this.startFillBlank(items);
    } else {
      $('#def-browse-view').classList.remove('hidden');
      this.renderBrowse(items);
    }
  },

  startFlashcards(items) {
    if (!items.length) return;
    this.fcSession = {
      items: shuffle(items),
      idx: 0,
      again: [],
      reviewed: 0,
      total: items.length
    };
    this.renderFlashcard();
  },

  renderFlashcard() {
    const s = this.fcSession;
    if (s.idx >= s.items.length) {
      if (s.again.length > 0) {
        s.items = shuffle(s.again);
        s.again = [];
        s.idx = 0;
      } else {
        this.showFcDone();
        return;
      }
    }
    const it = s.items[s.idx];
    $('#fc-term').textContent = it.term;
    $('#fc-def').textContent = it.def;
    $('#fc-topic').textContent = it.topic;
    $('#fc-def').classList.remove('show');
    $('#fc-hint').textContent = 'Кликни по карточке или нажми Space, чтобы открыть';
    $('#fc-actions').classList.add('hidden');
    $('#fc-counter').textContent = `${s.reviewed + 1} / ${s.total}${s.again.length ? ` · +${s.again.length} to review` : ''}`;
    const pct = s.total === 0 ? 0 : (s.reviewed / s.total) * 100;
    $('#fc-progress-fill').style.width = `${pct}%`;
    $('#fc-done').classList.add('hidden');
    $('#fc-card').classList.remove('hidden');
  },

  reveal() {
    $('#fc-def').classList.add('show');
    $('#fc-hint').textContent = 'Насколько хорошо вспомнил?';
    $('#fc-actions').classList.remove('hidden');
  },

  grade(level) {
    const s = this.fcSession;
    const it = s.items[s.idx];
    if (level === 'again') {
      s.again.push(it);
    } else {
      s.reviewed++;
    }
    s.idx++;
    this.renderFlashcard();
  },

  showFcDone() {
    $('#fc-card').classList.add('hidden');
    $('#fc-done').classList.remove('hidden');
  },

  startFillBlank(items) {
    if (!items.length) return;
    this.fbSession = {
      items: shuffle(items),
      idx: 0,
      correct: 0,
      total: items.length
    };
    this.renderFillBlank();
  },

  renderFillBlank() {
    const s = this.fbSession;
    if (s.idx >= s.items.length) {
      this.showFbDone();
      return;
    }
    const it = s.items[s.idx];
    $('#fb-term').textContent = it.term;
    $('#fb-topic').textContent = it.topic;
    $('#fb-counter').textContent = `${s.idx + 1} / ${s.total}`;
    $('#fb-correct').textContent = s.correct;
    $('#fb-progress-fill').style.width = `${(s.idx / s.total) * 100}%`;
    $('#fb-done').classList.add('hidden');
    $('#fb-card').classList.remove('hidden');

    let text = it.def;
    const replacements = [];
    it.keywords.forEach((kw, i) => {
      const lower = text.toLowerCase();
      const pos = lower.indexOf(kw.toLowerCase());
      if (pos !== -1) {
        const actual = text.substring(pos, pos + kw.length);
        text = text.substring(0, pos) + `@@BLANK_${i}@@` + text.substring(pos + kw.length);
        replacements[i] = actual;
      } else {
        replacements[i] = null;
      }
    });

    const wrap = $('#fb-text');
    wrap.innerHTML = '';
    const parts = text.split(/(@@BLANK_\d+@@)/);
    parts.forEach(part => {
      const m = part.match(/^@@BLANK_(\d+)@@$/);
      if (m) {
        const i = parseInt(m[1]);
        if (replacements[i] === null) return;
        const inp = document.createElement('input');
        inp.type = 'text';
        inp.className = 'blank';
        inp.dataset.answer = replacements[i];
        inp.size = Math.max(8, replacements[i].length + 2);
        inp.placeholder = '___';
        inp.autocomplete = 'off';
        inp.spellcheck = false;
        wrap.appendChild(inp);
      } else if (part) {
        const span = document.createElement('span');
        span.textContent = part;
        wrap.appendChild(span);
      }
    });

    $('#fb-check').classList.remove('hidden');
    $('#fb-reveal').classList.remove('hidden');
    $('#fb-next').classList.add('hidden');

    setTimeout(() => {
      const first = wrap.querySelector('.blank');
      if (first) first.focus();
    }, 50);
  },

  checkFillBlank() {
    const blanks = $$('#fb-text .blank');
    let allRight = true;
    blanks.forEach(inp => {
      const u = normalize(inp.value);
      const a = normalize(inp.dataset.answer);
      const ok = u && (u === a || (a.length > 4 && levenshtein(u, a) <= 1));
      inp.classList.remove('right', 'wrong');
      if (ok) inp.classList.add('right');
      else { inp.classList.add('wrong'); allRight = false; }
      inp.disabled = true;
    });
    if (allRight) this.fbSession.correct++;
    $('#fb-correct').textContent = this.fbSession.correct;
    $('#fb-check').classList.add('hidden');
    $('#fb-reveal').classList.add('hidden');
    $('#fb-next').classList.remove('hidden');

    $$('#fb-text .blank.wrong').forEach(inp => {
      const sup = document.createElement('span');
      sup.className = 'answer-show';
      sup.textContent = ` → ${inp.dataset.answer}`;
      inp.after(sup);
    });
    setTimeout(() => $('#fb-next').focus(), 50);
  },

  revealFillBlank() {
    $$('#fb-text .blank').forEach(inp => {
      inp.value = inp.dataset.answer;
      inp.classList.add('right');
      inp.disabled = true;
    });
    $('#fb-check').classList.add('hidden');
    $('#fb-reveal').classList.add('hidden');
    $('#fb-next').classList.remove('hidden');
    setTimeout(() => $('#fb-next').focus(), 50);
  },

  nextFillBlank() {
    this.fbSession.idx++;
    this.renderFillBlank();
  },

  showFbDone() {
    $('#fb-card').classList.add('hidden');
    $('#fb-done').classList.remove('hidden');
    $('#fb-done-score').textContent = `${this.fbSession.correct} / ${this.fbSession.total}`;
  },

  renderBrowse(items) {
    const wrap = $('#def-browse-list');
    wrap.innerHTML = '';
    if (!items.length) {
      wrap.innerHTML = '<div class="done-state"><h2>Пусто</h2><p>Выбери хотя бы одну тему сверху.</p></div>';
      return;
    }
    const byTopic = {};
    items.forEach(it => {
      if (!byTopic[it.topic]) byTopic[it.topic] = [];
      byTopic[it.topic].push(it);
    });
    Object.entries(byTopic).forEach(([topic, list]) => {
      const h = document.createElement('div');
      h.style.cssText = 'font-family: "JetBrains Mono", monospace; font-size: 12px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.15em; margin: 24px 0 12px;';
      h.textContent = topic;
      wrap.appendChild(h);
      list.forEach(it => {
        const row = document.createElement('div');
        row.className = 'def-row';
        row.innerHTML = `<div class="def-row-term">${it.term}</div><div class="def-row-def">${it.def}</div>`;
        wrap.appendChild(row);
      });
    });
  }
};

// ============ RESULT SCREEN ============
function showResult({ score, total, onAgain, onMistakes }) {
  $('#result-score').innerHTML = `${score}<span class="total">/${total}</span>`;
  const pct = Math.round((score / total) * 100);
  let msg = '';
  if (pct === 100) msg = 'Идеально. Ты готов.';
  else if (pct >= 85) msg = 'Сильно. Подчисти остаток.';
  else if (pct >= 65) msg = 'Хорошая база — повтори ошибки.';
  else if (pct >= 40) msg = 'Полпути пройдено. Повторяй и пробуй снова.';
  else msg = 'Тяжёлый раунд — перезапусти и сфокусируйся на ошибках.';
  $('#result-text').textContent = msg;

  $('#result-again').onclick = onAgain;
  if (onMistakes) {
    $('#result-mistakes').classList.remove('hidden');
    $('#result-mistakes').onclick = onMistakes;
  } else {
    $('#result-mistakes').classList.add('hidden');
  }
  show('screen-result');
}

// ============ KEYBOARD ============
document.addEventListener('keydown', e => {
  if (STATE.currentScreen === 'screen-definitions' && Definitions.mode === 'flashcard') {
    const defShown = $('#fc-def').classList.contains('show');
    if (e.code === 'Space' && !defShown && !$('#fc-card').classList.contains('hidden')) {
      e.preventDefault();
      Definitions.reveal();
      return;
    }
    if (defShown) {
      if (e.key === '1') { e.preventDefault(); Definitions.grade('again'); }
      else if (e.key === '2') { e.preventDefault(); Definitions.grade('hard'); }
      else if (e.key === '3') { e.preventDefault(); Definitions.grade('good'); }
    }
  }
  if (e.key === 'Enter') {
    if (STATE.currentScreen === 'screen-translation') {
      if (!$('#tr-next').classList.contains('hidden')) {
        e.preventDefault();
        Translation.next();
      } else if (!$('#tr-submit').classList.contains('hidden') && document.activeElement === $('#tr-input')) {
        e.preventDefault();
        Translation.submit();
      }
    } else if (STATE.currentScreen === 'screen-abbreviation') {
      if (!$('#ab-next').classList.contains('hidden')) {
        e.preventDefault();
        Abbreviation.next();
      } else if (!$('#ab-submit').classList.contains('hidden') && document.activeElement === $('#ab-input')) {
        e.preventDefault();
        Abbreviation.submit();
      }
    } else if (STATE.currentScreen === 'screen-definitions' && Definitions.mode === 'fillblank') {
      const active = document.activeElement;
      if (!$('#fb-next').classList.contains('hidden')) {
        e.preventDefault();
        Definitions.nextFillBlank();
      } else if (!$('#fb-check').classList.contains('hidden') && active && active.classList.contains('blank')) {
        e.preventDefault();
        Definitions.checkFillBlank();
      }
    }
  }
});

// ============ INIT ============
function initApp() {
  $('#go-definitions').onclick = () => {
    Definitions.setMode('flashcard');
    show('screen-definitions');
  };
  $('#go-translation').onclick = () => show('screen-translation-config');
  $('#go-abbreviation').onclick = () => show('screen-abbreviation-config');

  $$('.home-link').forEach(b => b.onclick = goHome);

  let trDifficulty = 'easy';
  let trDirection = 'en2ru';
  $$('#tr-cfg-diff button').forEach(b => {
    b.onclick = () => {
      trDifficulty = b.dataset.value;
      $$('#tr-cfg-diff button').forEach(x => x.classList.toggle('active', x === b));
    };
  });
  $$('#tr-cfg-dir button').forEach(b => {
    b.onclick = () => {
      trDirection = b.dataset.value;
      $$('#tr-cfg-dir button').forEach(x => x.classList.toggle('active', x === b));
    };
  });
  $('#tr-cfg-start').onclick = () => Translation.start(trDifficulty, trDirection);

  let abDifficulty = 'easy';
  $$('#ab-cfg-diff button').forEach(b => {
    b.onclick = () => {
      abDifficulty = b.dataset.value;
      $$('#ab-cfg-diff button').forEach(x => x.classList.toggle('active', x === b));
    };
  });
  $('#ab-cfg-start').onclick = () => Abbreviation.start(abDifficulty);

  $('#tr-submit').onclick = () => Translation.submit();
  $('#tr-next').onclick = () => Translation.next();

  $('#ab-submit').onclick = () => Abbreviation.submit();
  $('#ab-next').onclick = () => Abbreviation.next();

  Definitions.init();
  $$('#def-modes button').forEach(b => {
    b.onclick = () => Definitions.setMode(b.dataset.mode);
  });
  $('#fc-reveal').onclick = () => Definitions.reveal();
  $('#fc-card').onclick = (e) => {
    if (e.target.closest('button')) return;
    if (!$('#fc-def').classList.contains('show')) Definitions.reveal();
  };
  $('#fc-again').onclick = () => Definitions.grade('again');
  $('#fc-hard').onclick = () => Definitions.grade('hard');
  $('#fc-good').onclick = () => Definitions.grade('good');
  $('#fc-restart').onclick = () => Definitions.refresh();

  $('#fb-check').onclick = () => Definitions.checkFillBlank();
  $('#fb-reveal').onclick = () => Definitions.revealFillBlank();
  $('#fb-next').onclick = () => Definitions.nextFillBlank();
  $('#fb-restart').onclick = () => Definitions.refresh();

  $('#tr-cfg-diff button[data-value="easy"]').classList.add('active');
  $('#tr-cfg-dir button[data-value="en2ru"]').classList.add('active');
  $('#ab-cfg-diff button[data-value="easy"]').classList.add('active');

  // Counts on home cards
  $('#count-defs').textContent = DEFINITIONS.reduce((sum, t) => sum + t.items.length, 0);
  $('#count-trans').textContent = TRANSLATIONS.length;
  $('#count-abbr').textContent = ABBREVIATIONS.length;

  show('screen-home');
}

document.addEventListener('DOMContentLoaded', initApp);
