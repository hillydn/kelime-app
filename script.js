// ---- Ayarlar ----
const STORAGE_KEY = "kelime_app_state_v2";
const DAY_MS = 24 * 60 * 60 * 1000;
const INTERVALS = {
  unknown: 0,           // her seferinde tekrar önüne gelsin
  unclear: 2 * DAY_MS,  // 2 gün sonra tekrar
  known: 7 * DAY_MS     // 7 gün sonra tekrar (unutmadığını doğrulamak için)
};

// ---- Durum (state) ----
let deck = [];
let currentIndex = 0;
let progress = {};        // { "a1_0001": { status, due, lastSeen } }
let dailyLog = {};         // { "2026-08-25": 12 }
let dailyGoal = 20;
let lastGoalCelebrated = null;
let selectedLevels = ["A1", "A2", "B1"];
let retestMode = false;
let retestSourceStatus = null;
let quizMode = "card";     // "card" | "mc" | "mixed"
let mcAnswered = false;

// ---- DOM elemanları ----
const levelScreen = document.getElementById("levelScreen");
const appScreen = document.getElementById("appScreen");
const btnStart = document.getElementById("btnStart");
const btnBack = document.getElementById("btnBack");
const dailyGoalInput = document.getElementById("dailyGoalInput");
const streakPreview = document.getElementById("streakPreview");
const btnOpenStatsFromHome = document.getElementById("btnOpenStatsFromHome");

const cardInner = document.getElementById("cardInner");
const card = document.getElementById("card");
const wordEn = document.getElementById("wordEn");
const wordTr = document.getElementById("wordTr");
const wordPos = document.getElementById("wordPos");
const wordLevel = document.getElementById("wordLevel");
const speakBtn = document.getElementById("speakBtn");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const statKnown = document.getElementById("statKnown");
const statUnknown = document.getElementById("statUnknown");
const statUnclear = document.getElementById("statUnclear");
const finishedScreen = document.getElementById("finishedScreen");
const finishedSummary = document.getElementById("finishedSummary");
const cardArea = document.querySelector(".card-area");
const buttonsArea = document.querySelector(".buttons");
const streakDisplay = document.getElementById("streakDisplay");
const todayProgress = document.getElementById("todayProgress");
const btnStats = document.getElementById("btnStats");

const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalList = document.getElementById("modalList");
const modalClose = document.getElementById("modalClose");

const statsOverlay = document.getElementById("statsOverlay");
const statsClose = document.getElementById("statsClose");
const statsSummary = document.getElementById("statsSummary");
const weekChart = document.getElementById("weekChart");

const goalOverlay = document.getElementById("goalOverlay");
const goalStreakText = document.getElementById("goalStreakText");
const btnGoalStop = document.getElementById("btnGoalStop");
const btnGoalContinue = document.getElementById("btnGoalContinue");

const themeToggle = document.getElementById("themeToggle");

const mcArea = document.getElementById("mcArea");
const mcWord = document.getElementById("mcWord");
const mcPos = document.getElementById("mcPos");
const mcLevel = document.getElementById("mcLevel");
const mcSpeakBtn = document.getElementById("mcSpeakBtn");
const mcOptions = document.getElementById("mcOptions");
const btnMcNext = document.getElementById("btnMcNext");

const btnOpenSearch = document.getElementById("btnOpenSearch");
const searchOverlay = document.getElementById("searchOverlay");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

// ---- Tema (koyu/açık mod) ----
function applyTheme() {
  const saved = localStorage.getItem("kelime_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  themeToggle.textContent = saved === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("kelime_theme", next);
  themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
}

// ---- PWA (service worker kaydı) ----
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // localhost/https dışında (file://) çalışmayabilir, sorun değil
    });
  }
}

// ---- Tarih yardımcıları ----
function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function dateKeyOffset(daysAgo) {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

function calcStreak() {
  let streak = 0;
  let offset = (dailyLog[todayKey()] || 0) > 0 ? 0 : 1;
  while (true) {
    const key = dateKeyOffset(offset);
    if ((dailyLog[key] || 0) > 0) {
      streak++;
      offset++;
    } else {
      break;
    }
  }
  return streak;
}

// ---- Başlangıç ----
function init() {
  loadState();
  applyTheme();
  registerServiceWorker();
  fillLevelCounts();
  dailyGoalInput.value = dailyGoal;
  updateStreakPreview();

  themeToggle.addEventListener("click", toggleTheme);

  btnStart.addEventListener("click", startFromLevelScreen);
  btnBack.addEventListener("click", goToLevelScreen);
  btnOpenStatsFromHome.addEventListener("click", () => openStats());
  btnOpenSearch.addEventListener("click", openSearch);
  searchClose.addEventListener("click", closeSearch);
  searchOverlay.addEventListener("click", (e) => { if (e.target === searchOverlay) closeSearch(); });
  searchInput.addEventListener("input", runSearch);

  document.getElementById("btnExport").addEventListener("click", exportProgress);
  document.getElementById("btnImport").addEventListener("click", () => {
    document.getElementById("importFileInput").click();
  });
  document.getElementById("importFileInput").addEventListener("change", importProgress);

  card.addEventListener("click", flipCard);
  speakBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const w = deck[currentIndex];
    if (w) speak(w.en);
  });
  mcSpeakBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const w = deck[currentIndex];
    if (w) speak(w.en);
  });
  btnMcNext.addEventListener("click", advanceCard);

  document.getElementById("btnKnown").addEventListener("click", () => answer("known"));
  document.getElementById("btnUnknown").addEventListener("click", () => answer("unknown"));
  document.getElementById("btnUnclear").addEventListener("click", () => answer("unclear"));
  document.getElementById("btnRestart").addEventListener("click", restart);

  statKnown.addEventListener("click", () => showList("known", "Biliyorum Listesi"));
  statUnknown.addEventListener("click", () => showList("unknown", "Bilmiyorum Listesi"));
  statUnclear.addEventListener("click", () => showList("unclear", "Hatırlamıyorum Listesi"));
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });

  btnStats.addEventListener("click", () => openStats());
  statsClose.addEventListener("click", closeStats);
  statsOverlay.addEventListener("click", (e) => { if (e.target === statsOverlay) closeStats(); });

  btnGoalStop.addEventListener("click", () => {
    goalOverlay.style.display = "none";
    goToLevelScreen();
  });
  btnGoalContinue.addEventListener("click", () => {
    goalOverlay.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (appScreen.style.display === "none") return;
    if (goalOverlay.style.display !== "none") return;
    if (searchOverlay.style.display !== "none") return;
    if (cardArea.style.display !== "none") {
      if (e.code === "Space") { e.preventDefault(); flipCard(); }
      if (e.key === "1") answer("unknown");
      if (e.key === "2") answer("unclear");
      if (e.key === "3") answer("known");
    }
    if (e.key === "Escape") { closeModal(); closeStats(); closeSearch(); }
  });
}

function fillLevelCounts() {
  const counts = { A1: 0, A2: 0, B1: 0 };
  WORD_LIST.forEach(w => counts[w.level]++);
  document.getElementById("countA1").textContent = counts.A1 + " kelime";
  document.getElementById("countA2").textContent = counts.A2 + " kelime";
  document.getElementById("countB1").textContent = counts.B1 + " kelime";
}

function updateStreakPreview() {
  const streak = calcStreak();
  const todayCount = dailyLog[todayKey()] || 0;
  if (streak > 0) {
    streakPreview.textContent = `🔥 ${streak} gündür çalışıyorsun · Bugün: ${todayCount} kelime`;
  } else if (todayCount > 0) {
    streakPreview.textContent = `Bugün: ${todayCount} kelime`;
  } else {
    streakPreview.textContent = "";
  }
}

function startFromLevelScreen() {
  const checked = Array.from(document.querySelectorAll(".levelCheck:checked")).map(c => c.value);
  if (checked.length === 0) return;
  selectedLevels = checked;

  const goalVal = parseInt(dailyGoalInput.value, 10);
  dailyGoal = (goalVal && goalVal > 0) ? goalVal : 20;

  const modeInput = document.querySelector('input[name="quizMode"]:checked');
  quizMode = modeInput ? modeInput.value : "card";

  saveState();

  levelScreen.style.display = "none";
  appScreen.style.display = "flex";
  buildDeck();
  render();
  updateDayInfo();
}

function goToLevelScreen() {
  retestMode = false;
  retestSourceStatus = null;
  appScreen.style.display = "none";
  levelScreen.style.display = "block";
  dailyGoalInput.value = dailyGoal;
  const modeInput = document.querySelector(`input[name="quizMode"][value="${quizMode}"]`);
  if (modeInput) modeInput.checked = true;
  updateStreakPreview();
}

// ---- Kayıt / yükleme ----
function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const parsed = JSON.parse(saved);
    progress = parsed.progress || {};
    dailyLog = parsed.dailyLog || {};
    dailyGoal = parsed.dailyGoal || 20;
    lastGoalCelebrated = parsed.lastGoalCelebrated || null;
    quizMode = parsed.quizMode || "card";
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    progress, dailyLog, dailyGoal, lastGoalCelebrated, quizMode
  }));
}

// ---- Yedekleme (dışa/içe aktarma) ----
function exportProgress() {
  const data = JSON.stringify({ progress, dailyLog, dailyGoal, lastGoalCelebrated }, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kelime-yedek-${todayKey()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.progress) throw new Error("Geçersiz dosya");
      progress = parsed.progress || {};
      dailyLog = parsed.dailyLog || {};
      dailyGoal = parsed.dailyGoal || dailyGoal;
      lastGoalCelebrated = parsed.lastGoalCelebrated || null;
      saveState();
      dailyGoalInput.value = dailyGoal;
      updateStreakPreview();
      alert("Yedek başarıyla yüklendi!");
    } catch (err) {
      alert("Bu dosya okunamadı. Doğru yedek dosyasını seçtiğinden emin ol.");
    }
  };
  reader.readAsText(file);
  e.target.value = "";
}

// ---- Deste oluşturma (aralıklı tekrar mantığı) ----
function buildDeck() {
  const now = Date.now();
  const relevant = WORD_LIST.filter(w => selectedLevels.includes(w.level));

  deck = relevant.filter(w => {
    const p = progress[w.id];
    if (!p) return true;                 // hiç görülmemiş kelime -> her zaman uygun
    if (p.status === "unknown") return true; // bilinmeyenler her zaman öncelikli
    return p.due <= now;                 // unclear/known sadece zamanı geldiyse
  });

  if (deck.length === 0) {
    deck = [...relevant];
  }

  shuffle(deck);
  deck.sort((a, b) => priorityScore(a) - priorityScore(b));
  currentIndex = 0;
}

function priorityScore(w) {
  const p = progress[w.id];
  if (!p) return 0;              // yeni kelime
  if (p.status === "unknown") return 0;
  if (p.status === "unclear") return 1;
  return 2;                      // known (tekrar zamanı gelmiş)
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function render() {
  updateStats();
  updateDayInfo();

  if (currentIndex >= deck.length) {
    showFinished();
    return;
  }

  finishedScreen.style.display = "none";
  const w = deck[currentIndex];
  const mode = pickCardMode();

  if (mode === "mc") {
    cardArea.style.display = "none";
    buttonsArea.style.display = "none";
    mcArea.style.display = "block";
    mcAnswered = false;
    renderMCQuestion(w);
  } else {
    mcArea.style.display = "none";
    cardArea.style.display = "block";
    buttonsArea.style.display = "flex";
    cardInner.classList.remove("flipped");
    wordEn.textContent = w.en;
    wordTr.textContent = w.tr;
    wordPos.textContent = w.pos || "";
    wordLevel.textContent = w.level;
  }

  progressText.textContent = `${currentIndex + 1} / ${deck.length}`;
  progressFill.style.width = `${(currentIndex / deck.length) * 100}%`;
}

function pickCardMode() {
  if (quizMode === "mc") return "mc";
  if (quizMode === "card") return "card";
  return Math.random() < 0.5 ? "card" : "mc"; // karışık
}

function flipCard() {
  cardInner.classList.toggle("flipped");
}

// İlerlemeyi kaydeder ama bir sonraki karta geçmez (MC modunda cevabı
// göstermek için gecikme gerekir, kart modunda hemen geçilir).
function recordAnswer(w, status) {
  const now = Date.now();
  progress[w.id] = {
    status,
    due: now + (INTERVALS[status] || 0),
    lastSeen: now
  };

  if (!retestMode) {
    const key = todayKey();
    dailyLog[key] = (dailyLog[key] || 0) + 1;
  }

  saveState();
}

function advanceCard() {
  currentIndex++;
  render();
  checkGoalReached();
}

function answer(status) {
  const w = deck[currentIndex];
  if (!w) return;

  recordAnswer(w, status);

  const wasFlipped = cardInner.classList.contains("flipped");
  if (wasFlipped) {
    cardInner.classList.add("no-anim");
    cardInner.classList.remove("flipped");
    void cardInner.offsetWidth;
  }

  advanceCard();

  if (wasFlipped) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => cardInner.classList.remove("no-anim"));
    });
  }
}

// ---- Çoktan seçmeli mod ----
function renderMCQuestion(w) {
  mcWord.textContent = w.en;
  mcPos.textContent = w.pos || "";
  mcLevel.textContent = w.level;
  btnMcNext.style.display = "none";

  const pool = WORD_LIST.filter(x => x.id !== w.id && x.tr !== w.tr);
  shuffle(pool);
  const distractors = pool.slice(0, 3).map(x => x.tr);
  const options = shuffle([w.tr, ...distractors]);

  mcOptions.innerHTML = "";
  options.forEach(optText => {
    const btn = document.createElement("button");
    btn.className = "mc-option";
    btn.textContent = optText;
    btn.addEventListener("click", () => selectMCOption(btn, optText, w));
    mcOptions.appendChild(btn);
  });
}

function selectMCOption(btn, optText, w) {
  if (mcAnswered) return;
  mcAnswered = true;

  const correct = optText === w.tr;
  Array.from(mcOptions.children).forEach(b => {
    b.disabled = true;
    if (b.textContent === w.tr) b.classList.add("mc-correct");
    else if (b === btn && !correct) b.classList.add("mc-wrong");
  });

  recordAnswer(w, correct ? "known" : "unknown");
  updateStats();
  updateDayInfo();
  btnMcNext.style.display = "block";
}

function updateStats() {
  const relevant = WORD_LIST.filter(w => selectedLevels.includes(w.level));
  const relevantIds = new Set(relevant.map(w => w.id));
  const entries = Object.entries(progress).filter(([id]) => relevantIds.has(id));

  statKnown.textContent = `Biliyorum: ${entries.filter(([, v]) => v.status === "known").length}`;
  statUnknown.textContent = `Bilmiyorum: ${entries.filter(([, v]) => v.status === "unknown").length}`;
  statUnclear.textContent = `Hatırlamıyorum: ${entries.filter(([, v]) => v.status === "unclear").length}`;
}

function updateDayInfo() {
  const streak = calcStreak();
  const todayCount = dailyLog[todayKey()] || 0;
  streakDisplay.textContent = `🔥 ${streak}`;
  todayProgress.textContent = `Bugün: ${Math.min(todayCount, dailyGoal)}/${dailyGoal}`;
}

function checkGoalReached() {
  const todayCount = dailyLog[todayKey()] || 0;
  if (todayCount >= dailyGoal && lastGoalCelebrated !== todayKey()) {
    lastGoalCelebrated = todayKey();
    saveState();
    const streak = calcStreak();
    goalStreakText.textContent = streak > 1
      ? `${streak} gündür üst üste çalışıyorsun 🔥`
      : "Harika başlangıç, yarın da devam et!";
    goalOverlay.style.display = "flex";
  }
}


function showFinished() {
  cardArea.style.display = "none";
  buttonsArea.style.display = "none";
  finishedScreen.style.display = "block";
  progressFill.style.width = "100%";

  const btnRestart = document.getElementById("btnRestart");

  if (retestMode) {
    const stillSame = deck.filter(w => progress[w.id] && progress[w.id].status === retestSourceStatus).length;
    const improved = deck.length - stillSame;
    finishedSummary.textContent = `${deck.length} kelimeyi tekrar test ettin, ${improved} tanesini artık biliyorsun.`;
    btnRestart.textContent = "Ana Listeye Dön";
  } else {
    const relevant = WORD_LIST.filter(w => selectedLevels.includes(w.level));
    const known = relevant.filter(w => progress[w.id] && progress[w.id].status === "known").length;
    finishedSummary.textContent = `Toplam ${relevant.length} kelimeden ${known} tanesini biliyorsun. Bugün için tekrar edilecek başka kelime yok — yarın devam edebilirsin!`;
    btnRestart.textContent = "Tekrar Başla";
  }
}

function restart() {
  if (retestMode) {
    retestMode = false;
    retestSourceStatus = null;
  }
  buildDeck();
  render();
}

function startRetest(status) {
  const relevant = WORD_LIST.filter(w => selectedLevels.includes(w.level));
  const words = relevant.filter(w => progress[w.id] && progress[w.id].status === status);
  if (words.length === 0) return;

  deck = [...words];
  shuffle(deck);
  currentIndex = 0;
  retestMode = true;
  retestSourceStatus = status;

  closeModal();
  levelScreen.style.display = "none";
  appScreen.style.display = "flex";
  render();
}

// ---- Sesli okuma ----
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "en-US";
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

// ---- Liste modalı ----
function showList(status, title) {
  const relevant = WORD_LIST.filter(w => selectedLevels.includes(w.level));
  const words = relevant.filter(w => progress[w.id] && progress[w.id].status === status);

  modalTitle.textContent = `${title} (${words.length})`;
  modalList.innerHTML = "";

  if ((status === "unknown" || status === "unclear") && words.length > 0) {
    const retestBtn = document.createElement("button");
    retestBtn.className = "modal-retest-btn";
    retestBtn.textContent = `Bu ${words.length} Kelimeyi Test Et`;
    retestBtn.addEventListener("click", () => startRetest(status));
    modalList.appendChild(retestBtn);
  }

  if (words.length === 0) {
    const empty = document.createElement("div");
    empty.className = "modal-empty";
    empty.textContent = "Bu listede henüz kelime yok.";
    modalList.appendChild(empty);
  } else {
    words.forEach(w => {
      const row = document.createElement("div");
      row.className = "modal-row";

      if (status === "known") {
        const backBtn = document.createElement("button");
        backBtn.className = "row-back-btn";
        backBtn.textContent = "↩";
        backBtn.title = "Hatırlamıyorum listesine taşı";
        backBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          progress[w.id] = { status: "unclear", due: Date.now(), lastSeen: Date.now() };
          saveState();
          showList(status, title);
        });
        row.appendChild(backBtn);
      }

      const speakRowBtn = document.createElement("button");
      speakRowBtn.className = "row-speak-btn";
      speakRowBtn.textContent = "🔊";
      speakRowBtn.title = "Telaffuzu dinle";
      speakRowBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        speak(w.en);
      });
      row.appendChild(speakRowBtn);

      const textWrap = document.createElement("div");
      textWrap.className = "row-text";
      textWrap.innerHTML = `<span class="en">${w.en}</span><span class="tr">${w.tr}</span>`;
      row.appendChild(textWrap);

      modalList.appendChild(row);

      const exampleDiv = document.createElement("div");
      exampleDiv.className = "modal-example";
      exampleDiv.style.display = "none";
      const sentence = EXAMPLES[w.en.toLowerCase()];
      exampleDiv.textContent = sentence || "Örnek cümle henüz eklenmedi.";
      modalList.appendChild(exampleDiv);

      row.addEventListener("click", () => {
        exampleDiv.style.display = exampleDiv.style.display === "none" ? "block" : "none";
      });
    });
  }

  modalOverlay.style.display = "flex";
}

function closeModal() {
  modalOverlay.style.display = "none";
}

// ---- Haftalık istatistik ----
function openStats() {
  const streak = calcStreak();
  const totalKnown = Object.values(progress).filter(p => p.status === "known").length;
  const totalSeen = Object.keys(progress).length;

  statsSummary.innerHTML = `
    <strong>${streak}</strong> gün seri &nbsp;·&nbsp;
    <strong>${totalKnown}</strong> bilinen kelime &nbsp;·&nbsp;
    <strong>${totalSeen}</strong> görülen kelime
  `;

  const days = [];
  for (let i = 6; i >= 0; i--) {
    const key = dateKeyOffset(i);
    days.push({ key, count: dailyLog[key] || 0 });
  }
  const maxCount = Math.max(...days.map(d => d.count), dailyGoal, 1);
  const dayNames = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];

  weekChart.innerHTML = "";
  days.forEach(d => {
    const dateObj = new Date(d.key);
    const label = dayNames[dateObj.getDay()];
    const isToday = d.key === todayKey();
    const heightPct = Math.max((d.count / maxCount) * 100, d.count > 0 ? 6 : 2);

    const col = document.createElement("div");
    col.className = "chart-col";
    col.innerHTML = `
      <div class="chart-count">${d.count > 0 ? d.count : ""}</div>
      <div class="chart-bar" style="height:${heightPct}%"></div>
      <div class="chart-label ${isToday ? "is-today" : ""}">${label}</div>
    `;
    weekChart.appendChild(col);
  });

  statsOverlay.style.display = "flex";
}

function closeStats() {
  statsOverlay.style.display = "none";
}

// ---- Kelime arama ----
function openSearch() {
  searchInput.value = "";
  searchResults.innerHTML = "";
  searchOverlay.style.display = "flex";
  setTimeout(() => searchInput.focus(), 50);
}

function closeSearch() {
  searchOverlay.style.display = "none";
}

function runSearch() {
  const q = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";
  if (q.length < 1) return;

  const matches = WORD_LIST.filter(w =>
    w.en.toLowerCase().includes(q) || w.tr.toLowerCase().includes(q)
  ).slice(0, 50);

  if (matches.length === 0) {
    const empty = document.createElement("div");
    empty.className = "modal-empty";
    empty.textContent = "Sonuç bulunamadı.";
    searchResults.appendChild(empty);
    return;
  }

  matches.forEach(w => {
    const row = document.createElement("div");
    row.className = "modal-row";

    const speakRowBtn = document.createElement("button");
    speakRowBtn.className = "row-speak-btn";
    speakRowBtn.textContent = "🔊";
    speakRowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      speak(w.en);
    });
    row.appendChild(speakRowBtn);

    const textWrap = document.createElement("div");
    textWrap.className = "row-text";
    textWrap.innerHTML = `<span class="en">${w.en} <small style="opacity:.5">(${w.level})</small></span><span class="tr">${w.tr}</span>`;
    row.appendChild(textWrap);

    searchResults.appendChild(row);

    const exampleDiv = document.createElement("div");
    exampleDiv.className = "modal-example";
    exampleDiv.style.display = "none";
    const sentence = EXAMPLES[w.en.toLowerCase()];
    exampleDiv.textContent = sentence || "Örnek cümle henüz eklenmedi.";
    searchResults.appendChild(exampleDiv);

    row.addEventListener("click", () => {
      exampleDiv.style.display = exampleDiv.style.display === "none" ? "block" : "none";
    });
  });
}

init();
