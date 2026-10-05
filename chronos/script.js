/* ============================================================
   CHRONOS — script.js (definitivo)
   ============================================================ */

/* ---------- i18n ---------- */
const i18n = {
  it: {
    subLogo: "STUDIO SULLA PERCEZIONE DEL TEMPO",
    menuAtlas: "01 / ATLANTE",
    menuBtn: "IL BOTTONE INUTILE ↗",
    kicker: "NON MISURARLO. ABITALO.",
    mainTitle: "Il tempo non è una linea.",
    mainSub: "È materia che cambia forma. Un'orbita. Ventiquattro ore. Nessuna direzione obbligata.",
    enterHour: "ENTRA NELL'ORA ↗",
    objectBadge: "OGGETTO TEMPORALE / 001",
    orbitHint: "TRASCINA PER ORBITARE — 360°",
    indexHeader: "INDICE / 24 SEZIONI",
    indexNote: "UN GIORNO. VENTIQUATTRO MODI DI SENTIRLO.",
    midRotate: "← RUOTA L'OGGETTO PER CAMBIARE SEZIONE",
    midSpecs: "24 SEZIONI / 15° PER ORA",
    midDeform: "IL MOVIMENTO DEFORMA LA MATERIA",
    clockLabel: "ORA LOCALE / ROMA — UTC+02",
    speedLabel: "VELOCITÀ DEL MOUSE",
    soundLabel: "SUONO PROCEDURALE",
    spectrumLabel: "SPETTRO LOCALE / 17-18",
    noScroll: "ESPERIENZA SENZA SCROLL",
    conceptStatus: "CONCEPT / STATO STATICO",
    nowPrefix: "ADESSO / SEZIONE",
    audioMute: "⊙ MUTO",
    audioActive: "⊙ ATTIVO",
    modalDetails: "Stai esplorando la dimensione temporale di questa sezione. Ogni istante è una coordinata nello spazio della percezione umana.",
    sections: [
      { num: "00", name: "Soglia", desc: "Il punto di passaggio tra il nulla e il primo istante di percezione." },
      { num: "01", name: "Eco", desc: "La risonanza delle decisioni passate che ancora vibra nel presente." },
      { num: "02", name: "Abisso", desc: "La profondità del tempo non misurato quando ci si abbandona all'oscurità." },
      { num: "03", name: "Insonnia", desc: "Ore che si dilatano mentre la mente rincorre pensieri in circolo." },
      { num: "04", name: "Attesa", desc: "La sospensione del tempo prima di un evento decisivo." },
      { num: "05", name: "Presagio", desc: "L'intuizione del futuro che si manifesta in un istante impercettibile." },
      { num: "06", name: "Risveglio", desc: "Il riallineamento dei sensi con il ritmo del mondo esterno." },
      { num: "07", name: "Slancio", desc: "L'accelerazione dell'azione che liquida ogni esitazione." },
      { num: "08", name: "Ritmo", desc: "La cadenza costante del battito e della respirazione sincronizzata." },
      { num: "09", name: "Traiettoria", desc: "Il percorso vettoriale verso una destinazione definita." },
      { num: "10", name: "Attrito", desc: "La resistenza della materia contro il flusso inarrestabile delle ore." },
      { num: "11", name: "Apice", desc: "Il punto di massima intensità sensoriale della giornata." },
      { num: "12", name: "Sospensione", desc: "Il mezzogiorno esatto, dove l'ombra scompare e il tempo tace." },
      { num: "13", name: "Deriva", desc: "Il lento scivolare lontano dalla rigidità della pianificazione." },
      { num: "14", name: "Ripetizione", desc: "Il loop rassicurante e ipnotico dei gesti quotidiani." },
      { num: "15", name: "Inerzia", desc: "Il movimento che prosegue per forza propria senza ulteriore sforzo." },
      { num: "16", name: "Ombra", desc: "L'allungarsi della proiezione che preannuncia il declino della luce." },
      { num: "17", name: "Dilatazione", desc: "Ci sono minuti che contengono un'intera giornata." },
      { num: "18", name: "Transizione", desc: "Il mutare dei colori dello spettro mentre la luce cede al buio." },
      { num: "19", name: "Ritorno", desc: "La convergenza dei percorsi verso il punto di partenza originario." },
      { num: "20", name: "Distanza", desc: "Lo spazio prospettico che si crea tra noi e gli eventi trascorsi." },
      { num: "21", name: "Memoria", desc: "La ricostruzione imperfetta ma viva di ciò che è già stato." },
      { num: "22", name: "Silenzio", desc: "L'assenza di rumore che permette di ascoltare lo scorrere interno." },
      { num: "23", name: "Dissolvenza", desc: "Il riassorbimento finale di tutte le forme nel ciclo che ricomincia." }
    ]
  },
  en: {
    subLogo: "STUDY ON THE PERCEPTION OF TIME",
    menuAtlas: "01 / ATLAS",
    menuBtn: "THE USELESS BUTTON ↗",
    kicker: "DON'T MEASURE IT. INHABIT IT.",
    mainTitle: "Time is not a line.",
    mainSub: "It is matter changing shape. An orbit. Twenty-four hours. No required direction.",
    enterHour: "ENTER THE HOUR ↗",
    objectBadge: "TEMPORAL OBJECT / 001",
    orbitHint: "DRAG TO ORBIT — 360°",
    indexHeader: "INDEX / 24 SECTIONS",
    indexNote: "ONE DAY. TWENTY-FOUR WAYS TO FEEL IT.",
    midRotate: "← ROTATE OBJECT TO CHANGE SECTION",
    midSpecs: "24 SECTIONS / 15° PER HOUR",
    midDeform: "MOVEMENT DEFORMS MATTER",
    clockLabel: "LOCAL TIME / ROME — UTC+02",
    speedLabel: "TOUCH/MOUSE SPEED",
    soundLabel: "PROCEDURAL SOUND",
    spectrumLabel: "LOCAL SPECTRUM / 17-18",
    noScroll: "SCROLL-LESS EXPERIENCE",
    conceptStatus: "CONCEPT / STATIC STATE",
    nowPrefix: "NOW / SECTION",
    audioMute: "⊙ MUTE",
    audioActive: "⊙ ACTIVE",
    modalDetails: "You are exploring the temporal dimension of this section. Each instant is a coordinate in the space of human perception.",
    sections: [
      { num: "00", name: "Threshold", desc: "The transition point between nothingness and the first instant of perception." },
      { num: "01", name: "Echo", desc: "The resonance of past decisions still vibrating in the present." },
      { num: "02", name: "Abyss", desc: "The depth of unmeasured time when surrendering to darkness." },
      { num: "03", name: "Insomnia", desc: "Hours stretching while the mind chases thoughts in circles." },
      { num: "04", name: "Waiting", desc: "The suspension of time before a decisive moment." },
      { num: "05", name: "Omen", desc: "The intuition of the future manifesting in an imperceptible instant." },
      { num: "06", name: "Awakening", desc: "The realignment of senses with the rhythm of the outside world." },
      { num: "07", name: "Momentum", desc: "The acceleration of action clearing all hesitation." },
      { num: "08", name: "Rhythm", desc: "The steady cadence of heartbeat and synchronized breathing." },
      { num: "09", name: "Trajectory", desc: "The vector path towards a defined destination." },
      { num: "10", name: "Friction", desc: "The resistance of matter against the unstoppable flow of hours." },
      { num: "11", name: "Peak", desc: "The point of maximum sensory intensity of the day." },
      { num: "12", name: "Suspension", desc: "Exact noon, where shadow disappears and time falls silent." },
      { num: "13", name: "Drift", desc: "The slow sliding away from the rigidity of planning." },
      { num: "14", name: "Repetition", desc: "The reassuring and hypnotic loop of daily gestures." },
      { num: "15", name: "Inertia", desc: "Movement continuing by its own force without further effort." },
      { num: "16", name: "Shadow", desc: "The lengthening projection foretelling the decline of light." },
      { num: "17", name: "Dilatation", desc: "There are minutes that contain an entire day." },
      { num: "18", name: "Transition", desc: "The shifting colors of the spectrum as light surrenders to dark." },
      { num: "19", name: "Return", desc: "The convergence of paths back to the original starting point." },
      { num: "20", name: "Distance", desc: "The perspective space created between us and past events." },
      { num: "21", name: "Memory", desc: "The imperfect yet vivid reconstruction of what has already been." },
      { num: "22", name: "Silence", desc: "The absence of noise allowing us to listen to internal flow." },
      { num: "23", name: "Fadeout", desc: "The final reabsorption of all forms into the restarting cycle." }
    ]
  }
};

/* ---------- STATO ---------- */
let currentLang = 'it';
let activeIndex = 17;
let isTimeFrozen = false;
let scene, camera, renderer, networkGroup, nodesMesh, linesMesh;
let positions = [], colors = [];
const nodeCount = 180;
let isDragging = false;
let previousPointer = { x: 0, y: 0 };
let lastPointerPos = { x: 0, y: 0 };
let pointerSpeed = 0;
let audioCtx = null, osc = null, gainNode = null;
let isAutoRotating = true;

/* ---------- LINGUA ---------- */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.getElementById('lang-it').classList.toggle('active-lang', lang === 'it');
  document.getElementById('lang-en').classList.toggle('active-lang', lang === 'en');

  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  updateAudioButtonUI();
  renderIndexList();
  updateSectionDataUI(activeIndex);
}

function updateAudioButtonUI() {
  const dict = i18n[currentLang];
  const btn = document.getElementById('audio-toggle');
  if (!btn) return;
  btn.textContent = (audioCtx && audioCtx.state === 'running') ? dict.audioActive : dict.audioMute;
}

/* ---------- INDICE ---------- */
function renderIndexList() {
  const listEl = document.getElementById('index-list');
  if (!listEl) return;
  listEl.innerHTML = '';
  const sections = i18n[currentLang].sections;

  sections.forEach((sec, idx) => {
    const li = document.createElement('li');
    li.className = `index-item ${idx === activeIndex ? 'active' : ''}`;
    li.setAttribute('role', 'button');
    li.setAttribute('tabindex', '0');
    li.innerHTML = `<span class="item-num">${sec.num}</span><span class="item-name">${sec.name}</span>`;
    li.addEventListener('click', () => { if (!isTimeFrozen) selectSection(idx); });
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (!isTimeFrozen) selectSection(idx);
      }
    });
    listEl.appendChild(li);
  });
}

function updateSectionDataUI(idx) {
  const data = i18n[currentLang].sections[idx];
  const dict = i18n[currentLang];

  const kickerEl = document.getElementById('section-kicker');
  const titleEl = document.getElementById('section-title');
  const descEl = document.getElementById('section-desc');
  if (kickerEl) kickerEl.textContent = `${dict.nowPrefix} ${data.num}`;
  if (titleEl) titleEl.textContent = data.name;
  if (descEl) descEl.textContent = data.desc;
}

function selectSection(idx) {
  if (idx === activeIndex || isTimeFrozen) return;
  activeIndex = idx;

  document.querySelectorAll('.index-item').forEach((item, i) => {
    item.classList.toggle('active', i === idx);
    if (i === idx) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  if (window.gsap) {
    gsap.to(['#section-title', '#section-desc'], {
      opacity: 0, y: -6, duration: 0.15,
      onComplete: () => {
        updateSectionDataUI(activeIndex);
        gsap.to(['#section-title', '#section-desc'], { opacity: 1, y: 0, duration: 0.25 });
      }
    });
  } else {
    updateSectionDataUI(activeIndex);
  }

  if (osc && audioCtx && audioCtx.state === 'running') {
    const freq = 120 + idx * 18;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    const freqEl = document.getElementById('freq-val');
    if (freqEl) freqEl.textContent = `${Math.round(freq)} HZ`;
  }
}

/* ---------- 3D ---------- */
function init3D() {
  const canvas = document.getElementById('webgl-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 7.5);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  networkGroup = new THREE.Group();
  positions = [];
  colors = [];

  const baseColor = new THREE.Color(0xdddddd);
  const limeColor = new THREE.Color(0xd7ff3f);

  for (let i = 0; i < nodeCount; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.0 + (Math.random() - 0.5) * 0.4;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    positions.push(x, y, z);

    const mixColor = baseColor.clone().lerp(limeColor, Math.random() * 0.45);
    colors.push(mixColor.r, mixColor.g, mixColor.b);
  }

  const nodesGeo = new THREE.BufferGeometry();
  nodesGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  nodesGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const nodesMat = new THREE.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.95,
    sizeAttenuation: true
  });

  nodesMesh = new THREE.Points(nodesGeo, nodesMat);
  networkGroup.add(nodesMesh);

  const linePositions = [];
  const lineColors = [];
  const maxDist = 0.85;
  const maxDistSq = maxDist * maxDist;

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const distSq = dx * dx + dy * dy + dz * dz;

      if (distSq < maxDistSq) {
        linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
        linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);

        lineColors.push(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
        lineColors.push(colors[j * 3], colors[j * 3 + 1], colors[j * 3 + 2]);
      }
    }
  }

  const linesGeo = new THREE.BufferGeometry();
  linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  linesGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));

  const linesMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.35
  });

  linesMesh = new THREE.LineSegments(linesGeo, linesMat);
  networkGroup.add(linesMesh);

  networkGroup.rotation.y = (activeIndex / 24) * Math.PI * 2;
  scene.add(networkGroup);

  window.addEventListener('resize', onResize, { passive: true });
}

function onResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

/* ---------- INTERAZIONI ---------- */
function initInteractions() {
  const cursor = document.getElementById('cursor');
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (cursor && isTouch) cursor.style.display = 'none';

  const speedEl = document.getElementById('speed-val');

  function handlePointerMove(clientX, clientY) {
    if (cursor && !isTouch) {
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;
    }

    const dx = clientX - lastPointerPos.x;
    const dy = clientY - lastPointerPos.y;
    pointerSpeed = Math.sqrt(dx * dx + dy * dy) * 0.05;
    lastPointerPos = { x: clientX, y: clientY };

    if (speedEl) speedEl.textContent = `${pointerSpeed.toFixed(2)} M/S`;
    updateSparkline(pointerSpeed);

    if (isDragging && networkGroup && !isTimeFrozen) {
      const deltaX = clientX - previousPointer.x;
      const deltaY = clientY - previousPointer.y;

      networkGroup.rotation.y += deltaX * 0.008;
      networkGroup.rotation.x += deltaY * 0.008;

      // Clamp rotazione X per evitare flip
      networkGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, networkGroup.rotation.x));

      let normalizedAngle = (networkGroup.rotation.y % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
      let calculatedIndex = Math.floor((normalizedAngle / (Math.PI * 2)) * 24);
      calculatedIndex = (calculatedIndex + 24) % 24;

      selectSection(calculatedIndex);
    }
    previousPointer = { x: clientX, y: clientY };
  }

  window.addEventListener('mousemove', (e) => handlePointerMove(e.clientX, e.clientY), { passive: true });
  window.addEventListener('mousedown', (e) => {
    isDragging = true;
    isAutoRotating = false;
    previousPointer = { x: e.clientX, y: e.clientY };
    lastPointerPos = { x: e.clientX, y: e.clientY };
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
    isAutoRotating = true;
  });

  window.addEventListener('touchstart', (e) => {
    isDragging = true;
    isAutoRotating = false;
    const touch = e.touches[0];
    previousPointer = { x: touch.clientX, y: touch.clientY };
    lastPointerPos = { x: touch.clientX, y: touch.clientY };
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    handlePointerMove(touch.clientX, touch.clientY);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
    isAutoRotating = true;
  });

  // Effetto hover cursore
  const hoverables = document.querySelectorAll('a, button, [role="button"], .menu-item, .index-item, .lang-switch, .brand, .card-link, .audio-toggle');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor && cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor && cursor.classList.remove('hovered'));
  });

  // Audio
  const btnAudio = document.getElementById('audio-toggle');
  if (btnAudio) btnAudio.addEventListener('click', toggleAudio);

  // Lingua
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.addEventListener('click', () => setLanguage(currentLang === 'it' ? 'en' : 'it'));

  // Logo → torna alla soglia
  const btnLogo = document.getElementById('btn-logo');
  if (btnLogo) {
    btnLogo.addEventListener('click', goToThreshold);
    btnLogo.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToThreshold(); }
    });
  }

  // Atlas
  const btnAtlas = document.getElementById('btn-atlas');
  if (btnAtlas) btnAtlas.addEventListener('click', goToAtlas);

  // Bottone inutile
  const btnUseless = document.getElementById('btn-useless');
  if (btnUseless) btnUseless.addEventListener('click', triggerUselessPulse);

  // Link "entra nell'ora"
  const sectionLink = document.getElementById('section-link');
  if (sectionLink) sectionLink.addEventListener('click', openModal);

  // Modale
  const modalClose = document.getElementById('modal-close');
  if (modalClose) modalClose.addEventListener('click', closeModal);

  const modal = document.getElementById('modal-hour');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.id === 'modal-hour') closeModal();
    });
  }

  // ESC chiude modale
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) closeModal();
  });

  // Sparkline iniziale
  updateSparkline(0);
}

function goToThreshold() {
  if (isTimeFrozen || !networkGroup || !window.gsap) return;
  gsap.to(networkGroup.rotation, { x: 0, y: 0, duration: 1.2, ease: "power2.inOut" });
  selectSection(0);
}

function goToAtlas() {
  if (isTimeFrozen || !networkGroup || !window.gsap) return;
  const targetY = (17 / 24) * Math.PI * 2;
  gsap.to(networkGroup.rotation, { x: 0, y: targetY, duration: 1.2, ease: "power2.inOut" });
  selectSection(17);
}

function triggerUselessPulse() {
  if (!networkGroup || !window.gsap) return;

  gsap.to(networkGroup.scale, {
    x: 1.3, y: 1.3, z: 1.3,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: "power2.out"
  });

  if (osc && audioCtx && audioCtx.state === 'running') {
    const baseFreq = 120 + activeIndex * 18;
    osc.frequency.cancelScheduledValues(audioCtx.currentTime);
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    setTimeout(() => {
      if (osc && audioCtx) osc.frequency.setValueAtTime(baseFreq, audioCtx.currentTime);
    }, 300);
  }
}

/* ---------- MODALE ---------- */
function openModal() {
  isTimeFrozen = true;
  const modal = document.getElementById('modal-hour');
  const dict = i18n[currentLang];
  const sec = dict.sections[activeIndex];

  document.getElementById('modal-kicker').textContent = `${dict.nowPrefix} ${sec.num}`;
  document.getElementById('modal-title').textContent = sec.name;
  document.getElementById('modal-body').textContent = `${sec.desc}\n\n${dict.modalDetails}`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  isTimeFrozen = false;
  document.getElementById('modal-hour').classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------- SPARKLINE ---------- */
const sparklineVals = new Array(12).fill(2);
function updateSparkline(val) {
  sparklineVals.shift();
  sparklineVals.push(Math.min(Math.max(val * 5, 2), 16));

  const container = document.getElementById('sparkline');
  if (!container) return;
  container.innerHTML = '';
  sparklineVals.forEach(v => {
    const bar = document.createElement('div');
    bar.className = 'spark-bar';
    bar.style.height = `${v}px`;
    container.appendChild(bar);
  });
}

/* ---------- AUDIO ---------- */
function toggleAudio() {
  if (!audioCtx) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      audioCtx = new AudioCtx();
      osc = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(120 + activeIndex * 18, audioCtx.currentTime);
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

      osc.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      osc.start();

      // Fade-in
      gainNode.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 0.3);
    } catch (e) {
      console.warn('Audio non disponibile:', e);
      return;
    }
  } else if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  } else {
    audioCtx.suspend();
  }
  updateAudioButtonUI();
}

/* ---------- OROLOGIO ---------- */
function updateClock() {
  const el = document.getElementById('clock-val');
  if (!el) return;
  el.textContent = new Date().toTimeString().split(' ')[0];
}

/* ---------- ANIMATE ---------- */
let lastTime = 0;
function animate(time) {
  requestAnimationFrame(animate);

  const delta = time - lastTime;
  lastTime = time;

  if (isAutoRotating && !isDragging && networkGroup && !isTimeFrozen) {
    // Rotazione lenta, indipendente dal framerate
    const speed = 0.0004;
    networkGroup.rotation.y += speed * Math.min(delta, 50);

    let normalizedAngle = (networkGroup.rotation.y % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
    let calculatedIndex = Math.floor((normalizedAngle / (Math.PI * 2)) * 24);
    calculatedIndex = (calculatedIndex + 24) % 24;
    selectSection(calculatedIndex);
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

/* ---------- INIT ---------- */
window.addEventListener('DOMContentLoaded', () => {
  init3D();
  setLanguage('it');
  initInteractions();
  animate(0);
  setInterval(updateClock, 1000);
  updateClock();
});