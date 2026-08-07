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
    ["summary", "flashcards", "quiz", "exam"].forEach((s) => {
      $("#sub-" + s).hidden = s !== state.sub;
    });
  }

  function renderSub() {
    const ch = findChapter(state.chapterId);
    if (state.sub === "summary") renderSummary(ch);
    if (state.sub === "flashcards") renderFlashcards(ch);
    if (state.sub === "quiz") renderQuiz(ch);
    if (state.sub === "exam") renderExam(ch);
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
