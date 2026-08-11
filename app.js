/* ==========================================================================
   AKTE // Lernplattform – App-Logik
   ========================================================================== */

(function () {
  "use strict";

  const DATA = window.APP_DATA.chapters;
  const STORAGE_KEY = "akte-buero-progress-v1";

  /* ---------------------------------------------------------------- */
  /* Helpers                                                           */
  /* ---------------------------------------------------------------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html !== undefined) n.innerHTML = html;
    return n;
  };
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
  const findChapter = (id) => DATA.find((c) => c.id === id);
  const pad2 = (n) => String(n).padStart(2, "0");
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  /* ---------------------------------------------------------------- */
  /* Progress (persisted, degrades gracefully without storage)         */
  /* ---------------------------------------------------------------- */

  function defaultProgress() {
    const p = {};
    DATA.forEach((ch) => {
      p[ch.id] = {
        flashKnown: {},
        quiz: { answers: new Array(ch.quiz.length).fill(null), index: 0, finished: false },
        examDone: new Array(ch.exam.length).fill(false)
      };
    });
    return p;
  }

  function loadProgress() {
    const fallback = defaultProgress();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return fallback;
      const saved = JSON.parse(raw);
      // Merge safely with defaults so new chapters/questions never crash old saves
      DATA.forEach((ch) => {
        const s = saved[ch.id];
        if (!s) return;
        if (s.flashKnown) fallback[ch.id].flashKnown = s.flashKnown;
        if (s.quiz && Array.isArray(s.quiz.answers)) {
          const answers = new Array(ch.quiz.length).fill(null);
          s.quiz.answers.forEach((a, i) => { if (i < answers.length) answers[i] = a; });
          fallback[ch.id].quiz = {
            answers,
            index: clamp(s.quiz.index || 0, 0, ch.quiz.length),
            finished: !!s.quiz.finished
          };
        }
        if (Array.isArray(s.examDone)) {
          const done = new Array(ch.exam.length).fill(false);
          s.examDone.forEach((d, i) => { if (i < done.length) done[i] = !!d; });
          fallback[ch.id].examDone = done;
        }
      });
      return fallback;
    } catch (e) {
      return fallback;
    }
  }

  function saveProgress() {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (e) {
      /* runs fine without persistence – progress just stays in-memory for this session */
    }
  }

  /* ---------------------------------------------------------------- */
  /* Progress math                                                     */
  /* ---------------------------------------------------------------- */

  function chapterStats(ch) {
    const prog = state.progress[ch.id];
    const flashTotal = ch.flashcards.length;
    const flashKnown = Object.values(prog.flashKnown).filter(Boolean).length;

    const quizTotal = ch.quiz.length;
    const quizCorrect = prog.quiz.answers.filter((a) => a && a.correct).length;

    const examTotal = ch.exam.length;
    const examDone = prog.examDone.filter(Boolean).length;

    const flashPct = flashTotal ? flashKnown / flashTotal : 0;
    const quizPct = quizTotal ? quizCorrect / quizTotal : 0;
    const examPct = examTotal ? examDone / examTotal : 0;
    const percent = Math.round(((flashPct + quizPct + examPct) / 3) * 100);

    return { flashTotal, flashKnown, quizTotal, quizCorrect, examTotal, examDone, percent };
  }

  function globalStats() {
    let sum = { flashTotal: 0, flashKnown: 0, quizTotal: 0, quizCorrect: 0, examTotal: 0, examDone: 0, percentSum: 0 };
    DATA.forEach((ch) => {
      const s = chapterStats(ch);
      sum.flashTotal += s.flashTotal;
      sum.flashKnown += s.flashKnown;
      sum.quizTotal += s.quizTotal;
      sum.quizCorrect += s.quizCorrect;
      sum.examTotal += s.examTotal;
      sum.examDone += s.examDone;
      sum.percentSum += s.percent;
    });
    sum.globalPercent = DATA.length ? Math.round(sum.percentSum / DATA.length) : 0;
    return sum;
  }

  /* ---------------------------------------------------------------- */
  /* Prüfungssimulation – Fragenpool & letztes Ergebnis (persistiert)  */
  /* ---------------------------------------------------------------- */

  const EXAMSIM_KEY = "akte-buero-examsim-v1";
  const EXAMSIM_PASS_PERCENT = 50;
  const EXAMSIM_SECONDS_PER_QUESTION = 180; // 3 Min./Frage → 20 Fragen = 60 Minuten

  function buildExamPool() {
    const pool = [];
    DATA.forEach((ch) => {
      ch.quiz.forEach((q) => {
        pool.push({
          q: q.q,
          options: q.options,
          correct: q.correct,
          explain: q.explain,
          chapterCode: ch.code,
          chapterTitle: ch.title
        });
      });
    });
    return pool;
  }

  const EXAM_POOL_TOTAL = buildExamPool().length;

  const EXAMSIM_PRESETS = [
    { count: 10, label: "Kurztest", meta: "10 Fragen · ca. 30 Minuten" },
    { count: 20, label: "Klausursimulation", meta: "20 Fragen · ca. 60 Minuten" },
    { count: 40, label: "Große Simulation", meta: "40 Fragen · ca. 120 Minuten" },
    { count: EXAM_POOL_TOTAL, label: "Alle Fragen (Marathon)", meta: EXAM_POOL_TOTAL + " Fragen · ca. " + Math.round(EXAM_POOL_TOTAL * EXAMSIM_SECONDS_PER_QUESTION / 60) + " Minuten" }
  ];

  function loadLastExamResult() {
    try {
      const raw = window.localStorage.getItem(EXAMSIM_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function saveLastExamResult(result) {
    try {
      window.localStorage.setItem(EXAMSIM_KEY, JSON.stringify(result));
    } catch (e) {
      /* kein Speicher verfügbar – Ergebnis bleibt nur für diese Sitzung sichtbar */
    }
  }

  const examState = {
    active: false,
    finished: false,
    questions: [],
    answers: [],
    index: 0,
    totalSeconds: 0,
    remainingSeconds: 0,
    timerId: null
  };

  /* ---------------------------------------------------------------- */
  /* State                                                             */
  /* ---------------------------------------------------------------- */

  const state = {
    progress: loadProgress(),
    view: "dashboard",
    chapterId: null,
    sub: "summary",
    flashIndex: 0
  };

  /* ---------------------------------------------------------------- */
  /* Sidebar navigation                                                */
  /* ---------------------------------------------------------------- */

  function buildSidebarTabs() {
    const nav = $("#tabNav");
    DATA.forEach((ch) => {
      const btn = el("button", "tab");
      btn.dataset.target = "chapter:" + ch.id;
      btn.innerHTML =
        '<span class="tab-code">' + ch.code + '</span>' +
        '<span class="tab-label">' + ch.title + '</span>';
      nav.appendChild(btn);
    });

    nav.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (!btn) return;
      const target = btn.dataset.target;
      if (target === "dashboard") {
        goDashboard();
      } else if (target === "examsim") {
        goExamSim();
      } else {
        goChapter(target.split(":")[1]);
      }
      closeSidebarMobile();
    });
  }

  function setActiveTab() {
    $all(".tab").forEach((t) => t.classList.remove("is-active"));
    if (state.view === "dashboard") {
      $(".tab-dashboard").classList.add("is-active");
    } else if (state.view === "examsim") {
      $(".tab-examsim").classList.add("is-active");
    } else {
      const btn = $('.tab[data-target="chapter:' + state.chapterId + '"]');
      if (btn) btn.classList.add("is-active");
    }
  }

  /* mobile off-canvas */
  function openSidebarMobile() {
    $("#sidebar").classList.add("is-open");
    $("#sidebarScrim").classList.add("is-open");
  }
  function closeSidebarMobile() {
    $("#sidebar").classList.remove("is-open");
    $("#sidebarScrim").classList.remove("is-open");
  }

  /* ---------------------------------------------------------------- */
  /* View: Dashboard                                                   */
  /* ---------------------------------------------------------------- */

  function goDashboard() {
    state.view = "dashboard";
    $("#view-dashboard").hidden = false;
    $("#view-chapter").hidden = true;
    $("#view-examsim").hidden = true;
    $("#topbarEyebrow").textContent = "Dashboard";
    $("#topbarTitle").textContent = "Willkommen zurück";
    $("#topbarStamp").hidden = true;
    setActiveTab();
    renderDashboard();
    window.scrollTo(0, 0);
  }

  function renderDashboard() {
    const g = globalStats();
    $("#globalPercent").textContent = g.globalPercent + "%";
    $("#globalProgressFill").style.width = g.globalPercent + "%";

    const statRow = $("#statRow");
    statRow.innerHTML = "";
    const stats = [
      { value: g.globalPercent + "%", label: "Gesamtfortschritt" },
      { value: g.flashKnown + " / " + g.flashTotal, label: "Karteikarten gewusst" },
      { value: g.quizCorrect + " / " + g.quizTotal, label: "Quizfragen richtig" },
      { value: g.examDone + " / " + g.examTotal, label: "Prüfungsaufgaben bearbeitet" }
    ];
    stats.forEach((s) => {
      const card = el("div", "stat-card");
      card.innerHTML = '<span class="stat-value">' + s.value + '</span><span class="stat-label">' + s.label + '</span>';
      statRow.appendChild(card);
    });

    const grid = $("#folderGrid");
    grid.innerHTML = "";
    DATA.forEach((ch) => {
      const s = chapterStats(ch);
      const card = el("div", "folder-card");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Kapitel öffnen: " + ch.title);
      card.innerHTML =
        '<div class="folder-top">' +
          '<span class="folder-code">Akte Nr. ' + pad2(DATA.indexOf(ch) + 1) + ' · ' + ch.code + '</span>' +
          '<span class="stamp" style="width:40px;height:40px;font-size:10.5px;">' + s.percent + '%</span>' +
        '</div>' +
        '<h3>' + ch.title + '</h3>' +
        '<p class="folder-desc">' + ch.subtitle + '</p>' +
        '<div class="folder-meta">' +
          '<div class="progress-track"><div class="progress-fill" style="width:' + s.percent + '%"></div></div>' +
          '<span class="folder-percent">' + s.percent + '%</span>' +
        '</div>';
      const open = () => goChapter(ch.id);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* View: Chapter                                                     */
  /* ---------------------------------------------------------------- */

  function goChapter(id, sub) {
    state.view = "chapter";
    state.chapterId = id;
    state.sub = sub || "summary";
    state.flashIndex = 0;

    $("#view-dashboard").hidden = true;
    $("#view-chapter").hidden = false;
    $("#view-examsim").hidden = true;

    const ch = findChapter(id);
    const idx = DATA.indexOf(ch) + 1;
    $("#topbarEyebrow").textContent = "Kapitel " + ch.code;
    $("#topbarTitle").textContent = ch.title;
    $("#chapterTag").textContent = "AKTE NR. " + pad2(idx) + " / " + ch.code;
    $("#chapterTitle").textContent = ch.title;
    $("#chapterSubtitle").textContent = ch.subtitle;

    const hasDiagrams = !!(ch.diagrams && ch.diagrams.length);
    $("#subtabDiagrams").hidden = !hasDiagrams;
    if (state.sub === "diagrams" && !hasDiagrams) state.sub = "summary";

    const hasGames = !!(ch.terms && ch.terms.length);
    $("#subtabHangman").hidden = !hasGames;
    $("#subtabCrossword").hidden = !hasGames;
    if ((state.sub === "hangman" || state.sub === "crossword") && !hasGames) state.sub = "summary";

    const s = chapterStats(ch);
    $("#topbarStamp").hidden = false;
    $("#topbarStampValue").textContent = s.percent + "%";

    setActiveTab();
    setActiveSubtab();
    renderSub();
    window.scrollTo(0, 0);
  }

  function setActiveSubtab() {
    $all(".subtab").forEach((t) => t.classList.toggle("is-active", t.dataset.sub === state.sub));
    ["summary", "diagrams", "flashcards", "quiz", "exam", "hangman", "crossword"].forEach((s) => {
      $("#sub-" + s).hidden = s !== state.sub;
    });
  }

  function renderSub() {
    const ch = findChapter(state.chapterId);
    if (state.sub === "summary") renderSummary(ch);
    if (state.sub === "diagrams") renderDiagrams(ch);
    if (state.sub === "flashcards") renderFlashcards(ch);
    if (state.sub === "quiz") renderQuiz(ch);
    if (state.sub === "exam") renderExam(ch);
    if (state.sub === "hangman") renderHangman(ch);
    if (state.sub === "crossword") renderCrossword(ch);
  }

  $("#subtabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".subtab");
    if (!btn) return;
    state.sub = btn.dataset.sub;
    state.flashIndex = 0;
    setActiveSubtab();
    renderSub();
  });

  /* ---------------------------------------------------------------- */
  /* Sub-view: Zusammenfassung / Erklär-Karten                        */
  /* ---------------------------------------------------------------- */

  function renderSummary(ch) {
    const grid = $("#explainerGrid");
    grid.innerHTML = "";
    ch.summary.forEach((item) => {
      const card = el("div", "explainer-card");
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Erklär-Karte umdrehen: " + item.q);
      card.innerHTML =
        '<div class="explainer-inner">' +
          '<div class="explainer-face explainer-front">' +
            '<span class="explainer-kicker">Erklär-Karte</span>' +
            '<p>' + item.q + '</p>' +
            '<span class="explainer-cta">Tippen für die Erklärung →</span>' +
          '</div>' +
          '<div class="explainer-face explainer-back">' +
            '<span class="explainer-kicker">Erklärung</span>' +
            '<p>' + item.a + '</p>' +
          '</div>' +
        '</div>';
      const flip = () => card.classList.toggle("is-flipped");
      card.addEventListener("click", flip);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); }
      });
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Sub-view: Diagramme                                               */
  /* ---------------------------------------------------------------- */

  function renderDiagrams(ch) {
    const grid = $("#diagramsGrid");
    grid.innerHTML = "";
    (ch.diagrams || []).forEach((d) => {
      const card = el("div", "diagram-card");
      card.innerHTML =
        '<span class="diagram-title">' + d.title + '</span>' +
        '<span class="diagram-note">' + d.note + '</span>' +
        '<div class="diagram-svg-wrap">' + d.svg + '</div>';
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Sub-view: Hangman ("Begriffe raten")                              */
  /* ---------------------------------------------------------------- */

  const HANGMAN_MAX_WRONG = 6;
  const HANGMAN_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const hangState = {
    chapterId: null,
    order: [],
    index: 0,
    guessed: new Set(),
    wrong: 0,
    finished: false,
    won: false
  };

  function initHangman(ch) {
    if (hangState.chapterId === ch.id) return;
    hangState.chapterId = ch.id;
    hangState.order = shuffle(ch.terms.map((_, i) => i));
    hangState.index = 0;
    hangState.guessed = new Set();
    hangState.wrong = 0;
    hangState.finished = false;
    hangState.won = false;
  }

  function currentHangmanTerm(ch) {
    return ch.terms[hangState.order[hangState.index]];
  }

  function hangmanStageSVG(wrong) {
    const parts = [
      wrong >= 1 ? '<circle cx="130" cy="58" r="16" fill="none" class="ds-stamp" stroke-width="3"/>' : "",
      wrong >= 2 ? '<line x1="130" y1="74" x2="130" y2="132" class="ds-stamp" stroke-width="3" stroke-linecap="round"/>' : "",
      wrong >= 3 ? '<line x1="130" y1="92" x2="108" y2="116" class="ds-stamp" stroke-width="3" stroke-linecap="round"/>' : "",
      wrong >= 4 ? '<line x1="130" y1="92" x2="152" y2="116" class="ds-stamp" stroke-width="3" stroke-linecap="round"/>' : "",
      wrong >= 5 ? '<line x1="130" y1="132" x2="110" y2="168" class="ds-stamp" stroke-width="3" stroke-linecap="round"/>' : "",
      wrong >= 6 ? '<line x1="130" y1="132" x2="150" y2="168" class="ds-stamp" stroke-width="3" stroke-linecap="round"/>' : ""
    ].join("");
    return '<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">' +
      '<line x1="20" y1="200" x2="120" y2="200" class="ds-ink" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="50" y1="200" x2="50" y2="20" class="ds-ink" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="50" y1="20" x2="130" y2="20" class="ds-ink" stroke-width="4" stroke-linecap="round"/>' +
      '<line x1="130" y1="20" x2="130" y2="42" class="ds-ink" stroke-width="4" stroke-linecap="round"/>' +
      parts +
      "</svg>";
  }

  function renderHangman(ch) {
    initHangman(ch);
    const term = currentHangmanTerm(ch);
    const word = term.word;

    $("#hangmanStage").innerHTML = hangmanStageSVG(hangState.wrong);
    $("#hangmanClue").textContent = term.clue;

    const displayed = word
      .split("")
      .map((letter) => (hangState.guessed.has(letter) || hangState.finished ? letter : "_"))
      .join(" ");
    $("#hangmanWord").textContent = displayed;

    const statusEl = $("#hangmanStatus");
    const nextBtn = $("#hangmanNext");
    if (hangState.finished) {
      statusEl.hidden = false;
      if (hangState.won) {
        statusEl.textContent = "Richtig erraten! 🎉";
        statusEl.className = "hangman-status is-win";
      } else {
        statusEl.textContent = "Leider verloren – gesucht war: " + word;
        statusEl.className = "hangman-status is-lose";
      }
      nextBtn.hidden = false;
    } else {
      statusEl.hidden = true;
      nextBtn.hidden = true;
    }

    $("#hangmanTally").textContent =
      "Fehler: " + hangState.wrong + " / " + HANGMAN_MAX_WRONG + " · Begriff " + (hangState.index + 1) + " / " + ch.terms.length;

    const kb = $("#hangmanKeyboard");
    kb.innerHTML = "";
    HANGMAN_ALPHABET.forEach((letter) => {
      const btn = el("button", "hangman-key");
      btn.textContent = letter;
      const used = hangState.guessed.has(letter);
      btn.disabled = used || hangState.finished;
      if (used) btn.classList.add(word.includes(letter) ? "is-correct" : "is-wrong");
      btn.addEventListener("click", () => guessHangmanLetter(ch, letter));
      kb.appendChild(btn);
    });
  }

  function guessHangmanLetter(ch, letter) {
    if (hangState.finished || hangState.guessed.has(letter)) return;
    hangState.guessed.add(letter);
    const term = currentHangmanTerm(ch);
    if (!term.word.includes(letter)) hangState.wrong += 1;

    const allGuessed = term.word.split("").every((l) => hangState.guessed.has(l));
    if (allGuessed) {
      hangState.finished = true;
      hangState.won = true;
    } else if (hangState.wrong >= HANGMAN_MAX_WRONG) {
      hangState.finished = true;
      hangState.won = false;
    }
    renderHangman(ch);
  }

  $("#hangmanNext").addEventListener("click", () => {
    const ch = findChapter(state.chapterId);
    hangState.index += 1;
    if (hangState.index >= hangState.order.length) {
      hangState.order = shuffle(ch.terms.map((_, i) => i));
      hangState.index = 0;
    }
    hangState.guessed = new Set();
    hangState.wrong = 0;
    hangState.finished = false;
    hangState.won = false;
    renderHangman(ch);
  });

  /* ---------------------------------------------------------------- */
  /* Sub-view: Kreuzworträtsel                                         */
  /* ---------------------------------------------------------------- */

  const crosswordState = { chapterId: null, puzzle: null };

  function buildCrossword(terms) {
    const words = terms
      .map((t) => ({ word: t.word.toUpperCase().replace(/[^A-Z]/g, ""), clue: t.clue }))
      .filter((w) => w.word.length > 0)
      .sort((a, b) => b.word.length - a.word.length);

    const cells = {};
    const placed = [];

    function canPlace(word, row, col, dir) {
      for (let i = 0; i < word.length; i++) {
        const r = dir === "V" ? row + i : row;
        const c = dir === "H" ? col + i : col;
        const existing = cells[r + "," + c];
        if (existing && existing !== word[i]) return false;
      }
      const beforeR = dir === "V" ? row - 1 : row;
      const beforeC = dir === "H" ? col - 1 : col;
      if (cells[beforeR + "," + beforeC]) return false;
      const afterR = dir === "V" ? row + word.length : row;
      const afterC = dir === "H" ? col + word.length : col;
      if (cells[afterR + "," + afterC]) return false;

      for (let i = 0; i < word.length; i++) {
        const r = dir === "V" ? row + i : row;
        const c = dir === "H" ? col + i : col;
        if (cells[r + "," + c]) continue; // Kreuzungspunkt, erlaubt
        if (dir === "H") {
          if (cells[(r - 1) + "," + c] || cells[(r + 1) + "," + c]) return false;
        } else {
          if (cells[r + "," + (c - 1)] || cells[r + "," + (c + 1)]) return false;
        }
      }
      return true;
    }

    function place(word, row, col, dir) {
      for (let i = 0; i < word.length; i++) {
        const r = dir === "V" ? row + i : row;
        const c = dir === "H" ? col + i : col;
        cells[r + "," + c] = word[i];
      }
      placed.push({ word, row, col, dir });
    }

    place(words[0].word, 0, 0, "H");
    words[0]._pos = { row: 0, col: 0, dir: "H" };

    for (let wi = 1; wi < words.length; wi++) {
      const w = words[wi].word;
      let bestPlacement = null;

      outer: for (const p of placed) {
        for (let pi = 0; pi < p.word.length; pi++) {
          const letter = p.word[pi];
          for (let wj = 0; wj < w.length; wj++) {
            if (w[wj] !== letter) continue;
            const dir = p.dir === "H" ? "V" : "H";
            const crossR = p.dir === "H" ? p.row : p.row + pi;
            const crossC = p.dir === "H" ? p.col + pi : p.col;
            const row = dir === "V" ? crossR - wj : crossR;
            const col = dir === "H" ? crossC - wj : crossC;
            if (canPlace(w, row, col, dir)) {
              bestPlacement = { row, col, dir };
              break outer;
            }
          }
        }
      }

      if (bestPlacement) {
        place(w, bestPlacement.row, bestPlacement.col, bestPlacement.dir);
        words[wi]._pos = bestPlacement;
      } else {
        let maxRow = 0;
        placed.forEach((p) => {
          const endRow = p.dir === "V" ? p.row + p.word.length - 1 : p.row;
          maxRow = Math.max(maxRow, endRow);
        });
        const row = maxRow + 2;
        place(w, row, 0, "H");
        words[wi]._pos = { row, col: 0, dir: "H" };
      }
    }

    let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
    Object.keys(cells).forEach((k) => {
      const [r, c] = k.split(",").map(Number);
      minR = Math.min(minR, r);
      maxR = Math.max(maxR, r);
      minC = Math.min(minC, c);
      maxC = Math.max(maxC, c);
    });

    const startsMap = {};
    const orderedStarts = placed
      .map((p) => ({ key: p.row + "," + p.col, row: p.row, col: p.col }))
      .sort((a, b) => (a.row === b.row ? a.col - b.col : a.row - b.row));
    let num = 1;
    orderedStarts.forEach((s) => {
      if (!(s.key in startsMap)) {
        startsMap[s.key] = num;
        num++;
      }
    });

    const across = [];
    const down = [];
    words.forEach((w) => {
      const pos = w._pos;
      const key = pos.row + "," + pos.col;
      const entry = { number: startsMap[key], clue: w.clue, word: w.word, row: pos.row, col: pos.col, dir: pos.dir, length: w.word.length };
      if (pos.dir === "H") across.push(entry);
      else down.push(entry);
    });
    across.sort((a, b) => a.number - b.number);
    down.sort((a, b) => a.number - b.number);

    return { cells, minR, maxR, minC, maxC, startsMap, across, down };
  }

  function findCrosswordInput(r, c) {
    return document.querySelector('#crosswordGrid input[data-r="' + r + '"][data-c="' + c + '"]');
  }

  function focusCrosswordWord(entry) {
    $all("#crosswordGrid .cw-cell.is-highlighted").forEach((c) => c.classList.remove("is-highlighted"));
    for (let i = 0; i < entry.length; i++) {
      const r = entry.dir === "V" ? entry.row + i : entry.row;
      const c = entry.dir === "H" ? entry.col + i : entry.col;
      const input = findCrosswordInput(r, c);
      if (input) input.closest(".cw-cell").classList.add("is-highlighted");
    }
    const first = findCrosswordInput(entry.row, entry.col);
    if (first) first.focus();
  }

  function buildCrosswordDOM(puzzle) {
    const rows = puzzle.maxR - puzzle.minR + 1;
    const cols = puzzle.maxC - puzzle.minC + 1;
    const gridEl = $("#crosswordGrid");
    gridEl.innerHTML = "";
    gridEl.style.gridTemplateColumns = "repeat(" + cols + ", 30px)";
    gridEl.style.gridTemplateRows = "repeat(" + rows + ", 30px)";

    for (let r = puzzle.minR; r <= puzzle.maxR; r++) {
      for (let c = puzzle.minC; c <= puzzle.maxC; c++) {
        const key = r + "," + c;
        const letter = puzzle.cells[key];
        const cellDiv = el("div", "cw-cell" + (letter ? "" : " is-blocked"));

        if (letter) {
          const num = puzzle.startsMap[key];
          if (num) cellDiv.appendChild(el("span", "cw-number", String(num)));

          const input = document.createElement("input");
          input.type = "text";
          input.setAttribute("maxlength", "1");
          input.dataset.r = r;
          input.dataset.c = c;
          input.dataset.answer = letter;
          input.addEventListener("input", (e) => {
            e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(-1);
            e.target.closest(".cw-cell").classList.remove("is-correct", "is-wrong");
            if (e.target.value) {
              const right = findCrosswordInput(r, c + 1);
              if (right) right.focus();
            }
          });
          input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value) {
              const left = findCrosswordInput(r, c - 1);
              if (left) left.focus();
            }
          });
          cellDiv.appendChild(input);
        }
        gridEl.appendChild(cellDiv);
      }
    }

    const cluesEl = $("#crosswordClues");
    cluesEl.innerHTML = "";

    const acrossGroup = el("div", "crossword-clue-group", "<h4>Waagerecht</h4>");
    const acrossList = el("ol", "crossword-clue-list");
    puzzle.across.forEach((entry) => {
      const li = el("li", "crossword-clue-item", '<span class="cw-clue-num">' + entry.number + ".</span>" + entry.clue);
      li.addEventListener("click", () => focusCrosswordWord(entry));
      acrossList.appendChild(li);
    });
    acrossGroup.appendChild(acrossList);

    const downGroup = el("div", "crossword-clue-group", "<h4>Senkrecht</h4>");
    const downList = el("ol", "crossword-clue-list");
    puzzle.down.forEach((entry) => {
      const li = el("li", "crossword-clue-item", '<span class="cw-clue-num">' + entry.number + ".</span>" + entry.clue);
      li.addEventListener("click", () => focusCrosswordWord(entry));
      downList.appendChild(li);
    });
    downGroup.appendChild(downList);

    cluesEl.appendChild(acrossGroup);
    cluesEl.appendChild(downGroup);
    $("#crosswordFeedback").textContent = "";
  }

  function renderCrossword(ch) {
    if (crosswordState.chapterId !== ch.id) {
      crosswordState.chapterId = ch.id;
      crosswordState.puzzle = buildCrossword(ch.terms);
      buildCrosswordDOM(crosswordState.puzzle);
    }
  }

  $("#crosswordCheck").addEventListener("click", () => {
    const inputs = $all("#crosswordGrid input");
    let correct = 0, filled = 0;
    inputs.forEach((inp) => {
      const cellDiv = inp.closest(".cw-cell");
      cellDiv.classList.remove("is-correct", "is-wrong");
      if (inp.value) {
        filled++;
        if (inp.value === inp.dataset.answer) {
          correct++;
          cellDiv.classList.add("is-correct");
        } else {
          cellDiv.classList.add("is-wrong");
        }
      }
    });
    const feedback = $("#crosswordFeedback");
    feedback.textContent =
      correct === inputs.length ? "🎉 Vollständig gelöst!" : correct + " von " + inputs.length + " Feldern richtig (" + filled + " ausgefüllt).";
  });

  $("#crosswordSolve").addEventListener("click", () => {
    $all("#crosswordGrid input").forEach((inp) => {
      inp.value = inp.dataset.answer;
      const cellDiv = inp.closest(".cw-cell");
      cellDiv.classList.remove("is-wrong");
      cellDiv.classList.add("is-correct");
    });
    $("#crosswordFeedback").textContent = "Lösung eingeblendet.";
  });

  /* ---------------------------------------------------------------- */
  /* Sub-view: Karteikarten                                            */
  /* ---------------------------------------------------------------- */

  function renderFlashcards(ch) {
    const total = ch.flashcards.length;
    state.flashIndex = clamp(state.flashIndex, 0, total - 1);
    const card = ch.flashcards[state.flashIndex];

    $("#flashPos").textContent = "Karte " + (state.flashIndex + 1) + " / " + total;
    $("#flashFront").textContent = card.front;
    $("#flashBack").textContent = card.back;
    $("#indexCard").classList.remove("is-flipped");

    $("#flashPrev").disabled = state.flashIndex === 0;
    $("#flashNext").disabled = state.flashIndex === total - 1;
  }

  $("#indexCard").addEventListener("click", () => {
    $("#indexCard").classList.toggle("is-flipped");
  });
  $("#indexCard").addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      $("#indexCard").classList.toggle("is-flipped");
    }
  });

  function goFlash(delta) {
    const ch = findChapter(state.chapterId);
    const total = ch.flashcards.length;
    state.flashIndex = clamp(state.flashIndex + delta, 0, total - 1);
    renderFlashcards(ch);
  }

  $("#flashPrev").addEventListener("click", () => goFlash(-1));
  $("#flashNext").addEventListener("click", () => goFlash(1));

  function markFlash(known) {
    const ch = findChapter(state.chapterId);
    const prog = state.progress[ch.id];
    if (known) {
      prog.flashKnown[state.flashIndex] = true;
    } else {
      delete prog.flashKnown[state.flashIndex];
    }
    saveProgress();
    refreshProgressChrome(ch);
    if (state.flashIndex < ch.flashcards.length - 1) {
      goFlash(1);
    } else {
      renderFlashcards(ch);
    }
  }

  $("#flashKnown").addEventListener("click", () => markFlash(true));
  $("#flashUnknown").addEventListener("click", () => markFlash(false));

  $("#flashReset").addEventListener("click", () => {
    const ch = findChapter(state.chapterId);
    state.progress[ch.id].flashKnown = {};
    state.flashIndex = 0;
    saveProgress();
    refreshProgressChrome(ch);
    renderFlashcards(ch);
  });

  /* ---------------------------------------------------------------- */
  /* Sub-view: Quiz                                                    */
  /* ---------------------------------------------------------------- */

  function renderQuiz(ch) {
    const prog = state.progress[ch.id].quiz;
    const total = ch.quiz.length;

    if (prog.finished || prog.index >= total) {
      renderQuizResult(ch);
      return;
    }

    $("#quizWrap").hidden = false;
    $("#quizResult").hidden = true;

    const qData = ch.quiz[prog.index];
    $("#quizPos").textContent = "Frage " + (prog.index + 1) + " / " + total;
    $("#quizProgressFill").style.width = Math.round((prog.index / total) * 100) + "%";
    $("#quizQuestion").textContent = qData.q;
    $("#quizExplain").hidden = true;
    $("#quizNext").hidden = true;

    const optionsWrap = $("#quizOptions");
    optionsWrap.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E", "F"];
    const already = prog.answers[prog.index];

    qData.options.forEach((optText, i) => {
      const optBtn = el("button", "quiz-option");
      optBtn.innerHTML = '<span class="opt-letter">' + letters[i] + '</span><span>' + optText + '</span>';
      optBtn.disabled = !!already;
      if (already) {
        if (i === qData.correct) optBtn.classList.add("is-correct");
        if (i === already.selected && i !== qData.correct) optBtn.classList.add("is-wrong");
      }
      optBtn.addEventListener("click", () => answerQuiz(ch, i));
      optionsWrap.appendChild(optBtn);
    });

    if (already) {
      $("#quizExplain").hidden = false;
      $("#quizExplain").textContent = qData.explain;
      $("#quizNext").hidden = false;
    }
  }

  function answerQuiz(ch, selectedIndex) {
    const prog = state.progress[ch.id].quiz;
    const qData = ch.quiz[prog.index];
    if (prog.answers[prog.index]) return; // already answered
    prog.answers[prog.index] = { selected: selectedIndex, correct: selectedIndex === qData.correct };
    saveProgress();
    refreshProgressChrome(ch);
    renderQuiz(ch);
  }

  $("#quizNext").addEventListener("click", () => {
    const ch = findChapter(state.chapterId);
    const prog = state.progress[ch.id].quiz;
    prog.index += 1;
    if (prog.index >= ch.quiz.length) prog.finished = true;
    saveProgress();
    renderQuiz(ch);
  });

  function renderQuizResult(ch) {
    $("#quizWrap").hidden = true;
    $("#quizResult").hidden = false;

    const prog = state.progress[ch.id].quiz;
    const total = ch.quiz.length;
    const correct = prog.answers.filter((a) => a && a.correct).length;
    const pct = total ? Math.round((correct / total) * 100) : 0;

    $("#quizResultStamp").textContent = pct + "%";
    $("#quizResultTitle").textContent =
      pct >= 80 ? "Stark – fast sitzt es!" : pct >= 50 ? "Solide Basis, weiter üben" : "Noch Luft nach oben";
    $("#quizResultText").textContent = correct + " von " + total + " Fragen richtig beantwortet.";
  }

  $("#quizRestart").addEventListener("click", () => {
    const ch = findChapter(state.chapterId);
    state.progress[ch.id].quiz = { answers: new Array(ch.quiz.length).fill(null), index: 0, finished: false };
    saveProgress();
    refreshProgressChrome(ch);
    renderQuiz(ch);
  });

  /* ---------------------------------------------------------------- */
  /* Sub-view: Prüfungsaufgaben                                        */
  /* ---------------------------------------------------------------- */

  function renderExam(ch) {
    const list = $("#examList");
    list.innerHTML = "";
    const prog = state.progress[ch.id];

    ch.exam.forEach((task, i) => {
      const done = !!prog.examDone[i];
      const card = el("div", "exam-card");
      card.innerHTML =
        '<div class="exam-top">' +
          '<span class="exam-title">' + task.title + '</span>' +
          '<span class="exam-points">' + task.points + ' Punkte</span>' +
        '</div>' +
        '<p class="exam-task">' + task.task + '</p>' +
        '<div class="exam-solution" hidden>' + task.solution + '</div>' +
        '<div class="exam-footer">' +
          '<button class="btn btn-primary exam-toggle">Musterlösung anzeigen</button>' +
          '<span class="exam-done-badge" ' + (done ? "" : "hidden") + '>✓ bearbeitet</span>' +
        '</div>';

      const solutionEl = card.querySelector(".exam-solution");
      const toggleBtn = card.querySelector(".exam-toggle");
      const badge = card.querySelector(".exam-done-badge");
      if (done) {
        solutionEl.hidden = false;
        toggleBtn.textContent = "Musterlösung verbergen";
      }

      toggleBtn.addEventListener("click", () => {
        const nowHidden = !solutionEl.hidden;
        solutionEl.hidden = nowHidden;
        toggleBtn.textContent = nowHidden ? "Musterlösung anzeigen" : "Musterlösung verbergen";
        if (!nowHidden) {
          prog.examDone[i] = true;
          badge.hidden = false;
          saveProgress();
          refreshProgressChrome(ch);
        }
      });

      list.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- */
  /* Chrome refresh (stamps / progress bars) after any progress change */
  /* ---------------------------------------------------------------- */

  function refreshProgressChrome(ch) {
    const s = chapterStats(ch);
    if (!$("#topbarStamp").hidden) $("#topbarStampValue").textContent = s.percent + "%";
    const g = globalStats();
    $("#globalPercent").textContent = g.globalPercent + "%";
    $("#globalProgressFill").style.width = g.globalPercent + "%";
  }

  /* ---------------------------------------------------------------- */
  /* View: Prüfungssimulation                                          */
  /* ---------------------------------------------------------------- */

  function goExamSim() {
    state.view = "examsim";
    $("#view-dashboard").hidden = true;
    $("#view-chapter").hidden = true;
    $("#view-examsim").hidden = false;
    $("#topbarEyebrow").textContent = "Prüfungssimulation";
    $("#topbarTitle").textContent = "Große Prüfungssimulation";
    $("#topbarStamp").hidden = true;
    setActiveTab();

    if (examState.active && !examState.finished) {
      showExamPanel("running");
      renderExamQuestion();
    } else if (examState.finished) {
      showExamPanel("result");
      renderExamResult();
    } else {
      showExamPanel("setup");
      renderExamSetup();
    }
    window.scrollTo(0, 0);
  }

  function showExamPanel(which) {
    $("#examsimSetup").hidden = which !== "setup";
    $("#examsimRunning").hidden = which !== "running";
    $("#examsimResult").hidden = which !== "result";
  }

  function renderExamSetup() {
    const wrap = $("#examsimOptions");
    wrap.innerHTML = "";
    EXAMSIM_PRESETS.forEach((preset) => {
      const card = el("button", "examsim-option-card");
      card.innerHTML =
        '<span class="examsim-option-title">' + preset.label + '</span>' +
        '<span class="examsim-option-meta">' + preset.meta + '</span>';
      card.addEventListener("click", () => startExamSim(preset.count));
      wrap.appendChild(card);
    });

    const last = loadLastExamResult();
    const lastEl = $("#examsimLast");
    if (last) {
      lastEl.hidden = false;
      lastEl.textContent =
        "Letzter Versuch: " + last.percent + "% (" + last.correct + " / " + last.total + " Fragen, " +
        (last.percent >= EXAMSIM_PASS_PERCENT ? "bestanden" : "nicht bestanden") + ") – " + last.date;
    } else {
      lastEl.hidden = true;
    }
  }

  function startExamSim(count) {
    const pool = shuffle(buildExamPool());
    examState.questions = pool.slice(0, Math.min(count, pool.length));
    examState.answers = new Array(examState.questions.length).fill(null);
    examState.index = 0;
    examState.totalSeconds = examState.questions.length * EXAMSIM_SECONDS_PER_QUESTION;
    examState.remainingSeconds = examState.totalSeconds;
    examState.active = true;
    examState.finished = false;

    showExamPanel("running");
    renderExamQuestion();
    startExamTimer();
  }

  function startExamTimer() {
    stopExamTimer();
    updateExamTimerDisplay();
    examState.timerId = window.setInterval(() => {
      examState.remainingSeconds -= 1;
      updateExamTimerDisplay();
      if (examState.remainingSeconds <= 0) {
        finishExamSim();
      }
    }, 1000);
  }

  function stopExamTimer() {
    if (examState.timerId) {
      window.clearInterval(examState.timerId);
      examState.timerId = null;
    }
  }

  function updateExamTimerDisplay() {
    const secs = Math.max(0, examState.remainingSeconds);
    const mm = pad2(Math.floor(secs / 60));
    const ss = pad2(secs % 60);
    const timerEl = $("#examsimTimer");
    timerEl.textContent = mm + ":" + ss;
    timerEl.classList.toggle("is-low", secs <= 60);
  }

  function renderExamQuestion() {
    const total = examState.questions.length;
    const i = examState.index;
    const qData = examState.questions[i];

    $("#examsimPos").textContent = "Frage " + (i + 1) + " / " + total;
    $("#examsimProgressFill").style.width = Math.round((i / total) * 100) + "%";
    $("#examsimQChapter").textContent = "Kapitel " + qData.chapterCode + " · " + qData.chapterTitle;
    $("#examsimQuestion").textContent = qData.q;

    const answeredCount = examState.answers.filter((a) => a !== null).length;
    $("#examsimAnswered").textContent = answeredCount + " von " + total + " beantwortet";

    const optionsWrap = $("#examsimOptionsList");
    optionsWrap.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E", "F"];
    const selected = examState.answers[i];

    qData.options.forEach((optText, oi) => {
      const optBtn = el("button", "quiz-option");
      if (selected === oi) optBtn.classList.add("is-selected");
      optBtn.innerHTML = '<span class="opt-letter">' + letters[oi] + '</span><span>' + optText + '</span>';
      optBtn.addEventListener("click", () => {
        examState.answers[i] = oi;
        renderExamQuestion();
      });
      optionsWrap.appendChild(optBtn);
    });

    $("#examsimPrev").disabled = i === 0;
    const isLast = i === total - 1;
    $("#examsimNext").hidden = isLast;
    $("#examsimSubmit").hidden = !isLast;
  }

  function goExamQuestion(delta) {
    examState.index = clamp(examState.index + delta, 0, examState.questions.length - 1);
    renderExamQuestion();
  }

  function finishExamSim() {
    stopExamTimer();
    examState.active = false;
    examState.finished = true;

    const total = examState.questions.length;
    const correct = examState.questions.filter((q, i) => examState.answers[i] === q.correct).length;
    const percent = total ? Math.round((correct / total) * 100) : 0;

    saveLastExamResult({
      percent, correct, total,
      date: new Date().toLocaleDateString("de-DE")
    });

    showExamPanel("result");
    renderExamResult();
  }

  function renderExamResult() {
    const total = examState.questions.length;
    const correct = examState.questions.filter((q, i) => examState.answers[i] === q.correct).length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    const passed = percent >= EXAMSIM_PASS_PERCENT;

    $("#examsimResultStamp").textContent = percent + "%";
    $("#examsimResultTitle").textContent = passed ? "Bestanden!" : "Noch nicht bestanden";
    $("#examsimResultText").textContent =
      correct + " von " + total + " Fragen richtig (" + percent + " %). Bestehensgrenze: " + EXAMSIM_PASS_PERCENT + " %.";

    const review = $("#examsimReview");
    review.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E", "F"];

    examState.questions.forEach((qData, i) => {
      const given = examState.answers[i];
      const isCorrect = given === qData.correct;
      const card = el("div", "exam-card " + (isCorrect ? "review-item-correct" : "review-item-wrong"));
      const givenText = given === null || given === undefined ? "keine Antwort" : letters[given] + " – " + qData.options[given];
      const correctText = letters[qData.correct] + " – " + qData.options[qData.correct];

      card.innerHTML =
        '<div class="exam-top">' +
          '<span class="exam-title">' + qData.q + '</span>' +
          '<span class="exam-points">Kapitel ' + qData.chapterCode + '</span>' +
        '</div>' +
        '<p class="review-answer"><span class="review-answer-label">Deine Antwort</span>' + givenText + '</p>' +
        (isCorrect ? '' : '<p class="review-answer"><span class="review-answer-label">Richtig wäre</span>' + correctText + '</p>') +
        '<div class="exam-solution" style="margin-top:8px;">' + qData.explain + '</div>';

      review.appendChild(card);
    });
  }

  function resetExamSim() {
    stopExamTimer();
    examState.active = false;
    examState.finished = false;
    examState.questions = [];
    examState.answers = [];
    examState.index = 0;
    showExamPanel("setup");
    renderExamSetup();
  }

  $("#examsimPrev").addEventListener("click", () => goExamQuestion(-1));
  $("#examsimNext").addEventListener("click", () => goExamQuestion(1));
  $("#examsimSubmit").addEventListener("click", finishExamSim);
  $("#examsimRestart").addEventListener("click", resetExamSim);

  /* ---------------------------------------------------------------- */
  /* Mobile menu wiring                                                 */
  /* ---------------------------------------------------------------- */

  $("#menuBtn").addEventListener("click", openSidebarMobile);
  $("#sidebarClose").addEventListener("click", closeSidebarMobile);
  $("#sidebarScrim").addEventListener("click", closeSidebarMobile);

  /* ---------------------------------------------------------------- */
  /* Boot                                                               */
  /* ---------------------------------------------------------------- */

  buildSidebarTabs();
  goDashboard();
})();
