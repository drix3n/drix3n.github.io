/* ============================================================
   AETHER — script.js
   Catalogo prodotti + carrello, checkout, contatti
   ============================================================ */

/* ------------------------------------------------------------
   DATI PRODOTTI — Collezione permanente (20 oggetti)
   ------------------------------------------------------------ */
const products = [
  { id: 1,  name: "Lampada Monolite Lumina",   category: "illuminazione",  material: "alluminio", price: 240, stock: 12, img: "img/lampada-monolite-lumina.jpg", desc: "Lampada da tavolo scultorea in alluminio spazzolato con diffusore in vetro opalino. Luce calda regolabile." },
  { id: 2,  name: "Lampada ad Arco Halo",      category: "illuminazione",  material: "alluminio", price: 310, stock: 7,  img: "img/lampada-ad-arco-halo.png", desc: "Arco luminoso a LED integrati, regolabile in intensità e temperatura colore." },
  { id: 3,  name: "Applique Ceramica Ember",   category: "illuminazione",  material: "ceramica",  price: 190, stock: 15, img: "img/Applique-Ceramica-Ember.png", desc: "Applique in ceramica opaca con finitura ambra e luce calda diffusa." },
  { id: 4,  name: "Sospensione Vetro Fumé",    category: "illuminazione",  material: "vetro",     price: 285, stock: 9,  img: "img/Sospensione-Vetro-Fume.png", desc: "Sospensione in vetro fumè soffiato a bocca, con cavo in tessuto intrecciato." },

  { id: 5,  name: "Vaso Portapenne Ceramica",  category: "organizzazione", material: "ceramica",  price: 85,  stock: 24, img: "img/Vaso-Portapenne-Ceramica.png", desc: "Vaso portapenne tornito a mano in ceramica opaca, smalto avorio." },
  { id: 6,  name: "Supporto Laptop Anodizzato",category: "organizzazione", material: "alluminio", price: 110, stock: 18, img: "img/Supporto-Laptop-Anodizzato.png", desc: "Supporto per laptop in alluminio anodizzato, inclinazione regolabile, gommini antiscivolo." },
  { id: 7,  name: "Vassoio Scrivania Grid",    category: "organizzazione", material: "alluminio", price: 95,  stock: 14, img: "img/Vassoio-Scrivania-Grid.png", desc: "Vassoio modulare per piccoli oggetti, con inserti in feltro grigio." },
  { id: 8,  name: "Portapenne Vetro Minerale", category: "organizzazione", material: "vetro",     price: 60,  stock: 30, img: "img/Portapenne-Vetro-Minerale.png", desc: "Portapenne in vetro minerale fumè." },
  { id: 9,  name: "Cartelletta Sospesa Flottante", category: "organizzazione", material: "alluminio", price: 120, stock: 11, img: "img/Cartelletta-Sospesa-Flottante.png", desc: "Cartelletta portadocumenti sospesa, design minimale, capacità 200 fogli." },
  { id: 10, name: "Fermacarte Ceramica",       category: "organizzazione", material: "ceramica",  price: 45,  stock: 40, img: "img/Fermacarte-Ceramica.png", desc: "Fermacarte in ceramica smaltata, peso calibrato 380g." },
  { id: 11, name: "Tappetino Scrivania Pelle", category: "organizzazione", material: "pelle",     price: 130, stock: 8,  img: "img/Tappetino-Scrivania-Pelle.png", desc: "Tappetino da scrivania in pelle marrone pieno fiore, cuciture a mano." },
  { id: 12, name: "Portabiglietti Metallico",  category: "organizzazione", material: "alluminio", price: 45,  stock: 22, img: "img/Portabiglietti.png", desc: "Portabiglietti in metallo spazzolato con inserto nero, finitura opaca." },

  { id: 13, name: "Stabilizzatore Resonance 5", category: "audio",         material: "alluminio", price: 220, stock: 6,  img: "img/Blocco-Sonoro-Resonance.png", desc: "Peso stabilizzatore in alluminio anodizzato nero con anima in grafite, ideale per giradischi." },
  { id: 14, name: "Pannello Fonoassorbente Echo", category: "audio",       material: "alluminio", price: 130, stock: 16, img: "img/Pannello-Fonoassorbente-Echo.png", desc: "Pannello fonoassorbente rigido con rivestimento tecnico, 40×40 cm, riduce l'eco del 30%." },
  { id: 15, name: "Cubi Acustici Silenziosi",  category: "audio",          material: "lana",      price: 65,  stock: 13, img: "img/Cubo-Acustico-Silenzioso.png", desc: "Cubi acustici in schiuma ad alta densità, smorzano le riflessioni primarie." },
  { id: 16, name: "Diffusore Vetro Rosso",     category: "audio",          material: "vetro",     price: 175, stock: 5,  img: "img/Diffusore-Vetro-Fume.png", desc: "Diffusore per ambiente in vetro rosso rubino con bastoncini in rattan nero." },
  { id: 17, name: "Isolatori Ceramica Bianca", category: "audio",          material: "ceramica",  price: 55,  stock: 20, img: "img/Piastrella-Acustica-Lana.png", desc: "Coppia di isolatori in ceramica smaltata bianca per cavi e supporti audio." },
  { id: 18, name: "Supporto Cuffie Alluminio", category: "audio",          material: "alluminio", price: 165, stock: 10, img: "img/Supporto-Cuffie-Titanio.png", desc: "Supporto per cuffie in alluminio nero opaco con base in metallo pesante." },
  { id: 19, name: "Organizer Cavi Sottoscrivania", category: "audio",      material: "alluminio", price: 45,  stock: 28, img: "img/Dock-Cavi.png", desc: "Rastrelliera sottoscrivania in acciaio verniciato bianco, con ganci per cavi." },
  { id: 20, name: "Vaso Marmorizzato",         category: "organizzazione", material: "ceramica",  price: 75,  stock: 17, img: "img/Vaso-Marmorizzato.png", desc: "Vaso cilindrico in ceramica marmorizzata bianca, ideale come portapenne o organizer." },
];

/* ------------------------------------------------------------
   EDIZIONE LIMITATA (3 oggetti numerati)
   ------------------------------------------------------------ */
const limitedProducts = [
  { id: 101, name: "Aether N. 01 — Monolite",  category: "illuminazione", material: "ceramica",  price: 890,  stock: 3, img: "img/Aether-01-Monolite.png", desc: "Scultura monolitica in ceramica raku con venature naturali, tiratura di 50 esemplari numerati.", edition: "ED. 01 / 50" },
  { id: 102, name: "Aether N. 02 — Vaso",      category: "organizzazione", material: "vetro",     price: 640,  stock: 2, img: "img/Aether-02-Vaso.png", desc: "Vaso scultoreo in vetro soffiato a bocca con decoro a rete bianca, tiratura di 30 esemplari.", edition: "ED. 02 / 30" },
  { id: 103, name: "Aether N. 03 — Amplificatore", category: "audio",      material: "alluminio", price: 1180, stock: 1, img: "img/Aether-03-Risonanza.png", desc: "Amplificatore integrato in alluminio spazzolato, finitura bicolore argento/arancio, tiratura di 20 esemplari.", edition: "ED. 03 / 20" },
];

const FALLBACK_IMG = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80";

/* ------------------------------------------------------------
   STATO GLOBALE
   ------------------------------------------------------------ */
let selectedCategory = 'all';
let selectedMaterial = 'all';
let searchQuery = '';
let sortBy = 'default';

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem('aether-cart') || '[]');
  if (!Array.isArray(cart)) cart = [];
} catch (_) { cart = []; }

const sortLabels = {
  'default': 'Predefinito',
  'price-asc': 'Prezzo crescente',
  'price-desc': 'Prezzo decrescente',
  'name': 'Nome A–Z'
};

/* ------------------------------------------------------------
   HELPER
   ------------------------------------------------------------ */
const allProducts = () => [...products, ...limitedProducts];
const findProduct = id => allProducts().find(p => p.id === id);
const fmt = n => `€${n.toLocaleString('it-IT')}`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[c]));

function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (_) {}
}

function showToast(message, type = 'info') {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .3s';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

/* ------------------------------------------------------------
   FILTRI E ORDINAMENTO
   ------------------------------------------------------------ */
function getFilteredProducts() {
  let list = products.filter(p => {
    const mc = selectedCategory === 'all' || p.category === selectedCategory;
    const mm = selectedMaterial === 'all' || p.material === selectedMaterial;
    const ms = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return mc && mm && ms;
  });
  if (sortBy === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (sortBy === 'name')       list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function setCategory(cat, btn) {
  selectedCategory = cat;
  document.querySelectorAll('.filter-block .filter-btn').forEach(b => b.classList.remove('active'));
  btn?.classList.add('active');
  renderProducts();
}

function setMaterial(mat, btn) {
  selectedMaterial = mat;
  const blocks = document.querySelectorAll('.filter-block');
  if (blocks[1]) {
    blocks[1].querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  }
  btn?.classList.add('active');
  renderProducts();
}

function filterProducts() {
  const input = document.getElementById('search-input');
  if (!input) return;
  searchQuery = input.value;
  renderProducts();
}

function toggleSortMenu() {
  document.querySelector('.sort-wrap')?.classList.toggle('open');
}

function setSort(value) {
  sortBy = value;
  const labelEl = document.getElementById('sort-value');
  if (labelEl) labelEl.innerText = sortLabels[value] || 'Predefinito';
  document.querySelectorAll('.sort-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.value === value);
  });
  document.querySelector('.sort-wrap')?.classList.remove('open');
  renderProducts();
}

document.addEventListener('click', (e) => {
  const wrap = document.querySelector('.sort-wrap');
  if (wrap && !wrap.contains(e.target)) wrap.classList.remove('open');
  const mobileNav = document.getElementById('mobile-nav');
  const menuToggle = document.querySelector('.menu-toggle');
  if (mobileNav && mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) && menuToggle && !menuToggle.contains(e.target)) {
    mobileNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

/* ------------------------------------------------------------
   RENDER CATALOGO
   ------------------------------------------------------------ */
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  const filtered = getFilteredProducts();
  const countEl = document.getElementById('search-count');
  if (countEl) countEl.innerText = `${filtered.length} ${filtered.length === 1 ? 'oggetto' : 'oggetti'}`;

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="color: var(--text-sub); grid-column: 1/-1;">Nessun oggetto trovato.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <a href="product.html?id=${p.id}">
        <div class="image-container">
          <img src="${esc(p.img)}" alt="${esc(p.name)}" class="product-image" loading="lazy" decoding="async"
               onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="product-info">
          <div class="product-title">${esc(p.name)}</div>
          <div class="product-material">${esc(p.material)}</div>
          <div class="product-price">${fmt(p.price)}</div>
          <div class="product-stock">${p.stock} disponibili</div>
        </div>
      </a>
      <div class="qty-row">
        <div class="qty-picker">
          <button type="button" onclick="changeQty(${p.id}, -1, event)" aria-label="Riduci">−</button>
          <input type="number" id="qty-${p.id}" value="1" min="1" max="${p.stock}"
                 onchange="setQty(${p.id}, this.value)" aria-label="Quantità">
          <button type="button" onclick="changeQty(${p.id}, 1, event)" aria-label="Aumenta">+</button>
        </div>
        <button class="add-btn" onclick="addToCartWithQty(${p.id})">Aggiungi</button>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------
   RENDER EDIZIONE LIMITATA (card cliccabili → modal dettaglio)
   ------------------------------------------------------------ */
function renderLimited() {
  const grid = document.getElementById('limited-grid');
  if (!grid) return;

  grid.innerHTML = limitedProducts.map(p => `
    <div class="limited-card">
      <div class="edition-num">${esc(p.edition)}</div>

      <button type="button" class="limited-card-trigger"
              onclick="openLimitedModal(${p.id})"
              aria-label="Scopri ${esc(p.name)}">
        <div class="image-container">
          <img src="${esc(p.img)}" alt="${esc(p.name)}" class="product-image" loading="lazy" decoding="async"
               onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
        </div>
        <div class="product-info">
          <div class="product-title">${esc(p.name)}</div>
          <div class="product-material">${esc(p.material)}</div>
          <p style="color: var(--text-sub); font-size: 13px; margin: 10px 0 16px;">${esc(p.desc)}</p>
          <div class="product-price">${fmt(p.price)}</div>
          <div class="product-stock">Solo ${p.stock} disponibili</div>
          <span class="limited-discover">Scopri l'edizione →</span>
        </div>
      </button>

      <div class="qty-row" style="margin-top: 16px;">
        <div class="qty-picker">
          <button type="button" onclick="changeQty(${p.id}, -1, event)" aria-label="Riduci">−</button>
          <input type="number" id="qty-${p.id}" value="1" min="1" max="${p.stock}"
                 onchange="setQty(${p.id}, this.value)" aria-label="Quantità">
          <button type="button" onclick="changeQty(${p.id}, 1, event)" aria-label="Aumenta">+</button>
        </div>
        <button class="add-btn" onclick="addToCartWithQty(${p.id}, true)">Aggiungi</button>
      </div>
    </div>
  `).join('');
}

/* ------------------------------------------------------------
   MODAL EDIZIONE LIMITATA
   ------------------------------------------------------------ */
function openLimitedModal(id) {
  const p = limitedProducts.find(x => x.id === id);
  if (!p) return;

  // Crea il modal se non esiste
  let modal = document.getElementById('limited-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'limited-modal';
    modal.className = 'limited-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <div class="limited-modal-backdrop" onclick="closeLimitedModal()"></div>
      <div class="limited-modal-panel" role="document">
        <button type="button" class="limited-modal-close" onclick="closeLimitedModal()" aria-label="Chiudi">&times;</button>
        <div class="limited-modal-content" id="limited-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modal);

    // ESC per chiudere
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLimitedModal();
    });
  }

  const content = document.getElementById('limited-modal-content');
  content.innerHTML = `
    <div class="limited-modal-image">
      <img src="${esc(p.img)}" alt="${esc(p.name)}"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </div>
    <div class="limited-modal-info">
      <div class="hero-tag">${esc(p.edition)}</div>
      <h2>${esc(p.name)}</h2>
      <div class="limited-modal-material">${esc(p.material.toUpperCase())}</div>
      <div class="limited-modal-price">${fmt(p.price)}</div>
      <p class="limited-modal-desc">${esc(p.desc)}</p>

      <div class="limited-modal-specs">
        <div class="spec-row"><span>Tiratura</span><span>${esc(p.edition)}</span></div>
        <div class="spec-row"><span>Materiale</span><span>${esc(p.material)}</span></div>
        <div class="spec-row"><span>Categoria</span><span>${esc(p.category)}</span></div>
        <div class="spec-row"><span>Disponibilità</span><span>${p.stock} pezzi rimasti</span></div>
        <div class="spec-row"><span>Certificato</span><span>Scheda d'autore firmata</span></div>
        <div class="spec-row"><span>Spedizione</span><span>Gratuita in EU</span></div>
      </div>

      <div class="limited-modal-actions">
        <button type="button" class="add-btn" onclick="addFromModal(${p.id})">
          Aggiungi alla selezione
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLimitedModal() {
  const modal = document.getElementById('limited-modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function addFromModal(id) {
  addToCartWithQty(id, true);
  closeLimitedModal();
}

window.openLimitedModal = openLimitedModal;
window.closeLimitedModal = closeLimitedModal;
window.addFromModal = addFromModal;

/* ------------------------------------------------------------
   GESTIONE QUANTITÀ
   ------------------------------------------------------------ */
function setQty(id, val) {
  const input = document.getElementById(`qty-${id}`);
  if (!input) return;
  let v = parseInt(val) || 1;
  const min = parseInt(input.min) || 1;
  const max = parseInt(input.max) || 99;
  if (v < min) v = min;
  if (v > max) v = max;
  input.value = v;
}

function changeQty(id, delta, event) {
  if (event) event.preventDefault();
  const input = document.getElementById(`qty-${id}`);
  if (!input) return;
  const current = parseInt(input.value) || 1;
  setQty(id, current + delta);
}

/* ------------------------------------------------------------
   DETTAGLIO PRODOTTO (product.html)
   ------------------------------------------------------------ */
function renderProductDetail() {
  const container = document.getElementById('product-detail');
  if (!container) return;

  const id = parseInt(new URLSearchParams(window.location.search).get('id'), 10);
  const product = findProduct(id);

  if (!product) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 40px 0;">
        <p style="color: var(--text-sub);">Prodotto non trovato.
          <a href="index.html" style="color:var(--accent); text-decoration: underline;">Torna al catalogo</a>
        </p>
      </div>`;
    return;
  }

  const isLimited = !!product.edition;

  container.innerHTML = `
    <div class="detail-image">
      <img src="${esc(product.img)}" alt="${esc(product.name)}"
           onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
    </div>
    <div class="detail-info">
      ${isLimited ? `<div class="hero-tag">${esc(product.edition)}</div>` : ''}
      <h1>${esc(product.name)}</h1>
      <div class="detail-material">${esc(product.material.toUpperCase())}</div>
      <div class="detail-price">${fmt(product.price)}</div>
      <p class="detail-desc">${esc(product.desc)}</p>
      <div class="detail-specs">
        <div class="spec-row"><span>Categoria</span><span>${esc(product.category)}</span></div>
        <div class="spec-row"><span>Materiale</span><span>${esc(product.material)}</span></div>
        <div class="spec-row"><span>Disponibilità</span><span>${product.stock} pezzi in magazzino</span></div>
        <div class="spec-row"><span>Spedizione</span><span>Gratuita in EU</span></div>
        <div class="spec-row"><span>Garanzia</span><span>2 anni</span></div>
      </div>
      <div class="qty-row" style="margin-bottom: 20px;">
        <div class="qty-picker">
          <button type="button" onclick="changeQty(${product.id}, -1, event)" aria-label="Riduci">−</button>
          <input type="number" id="qty-${product.id}" value="1" min="1" max="${product.stock}"
                 onchange="setQty(${product.id}, this.value)" aria-label="Quantità">
          <button type="button" onclick="changeQty(${product.id}, 1, event)" aria-label="Aumenta">+</button>
        </div>
      </div>
      <button class="checkout-btn" onclick="addToCartWithQty(${product.id}, ${isLimited})">
        Aggiungi alla selezione
      </button>
    </div>
  `;
}

/* ------------------------------------------------------------
   CARRELLO
   ------------------------------------------------------------ */
function addToCartWithQty(id, isLimited = false) {
  const input = document.getElementById(`qty-${id}`);
  const qty = input ? Math.max(1, parseInt(input.value) || 1) : 1;
  addToCart(id, isLimited, qty);
}

function addToCart(id, isLimited = false, qty = 1) {
  const item = findProduct(id);
  if (!item) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, item.stock);
  } else {
    cart.push({ id: item.id, name: item.name, price: item.price, img: item.img, qty: Math.min(qty, item.stock) });
  }
  saveCart();
  updateCart();
  toggleCart(true);
  showToast(`${item.name} aggiunto`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCart();
}

function changeCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  const product = findProduct(id);
  const max = product?.stock ?? 99;
  item.qty = Math.min(Math.max(1, item.qty + delta), max);
  saveCart();
  updateCart();
}

function saveCart() {
  safeSet('aether-cart', JSON.stringify(cart));
}
function cartTotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
function cartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

function updateCart() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    countEl.innerText = cartCount();
    countEl.classList.add('bump');
    setTimeout(() => countEl.classList.remove('bump'), 200);
  }

  const container = document.getElementById('cart-items');
  if (container) {
    if (cart.length === 0) {
      container.innerHTML = '<p style="color: var(--text-sub); font-size: 13px;">La tua selezione è vuota.</p>';
    } else {
      container.innerHTML = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-thumb">
            <img src="${esc(item.img)}" alt="${esc(item.name)}" onerror="this.onerror=null;this.src='${FALLBACK_IMG}'">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-title">${esc(item.name)}</div>
            <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
            <div class="cart-item-qty">
              <button type="button" onclick="changeCartQty(${item.id}, -1)" aria-label="Riduci">−</button>
              <span>${item.qty}</span>
              <button type="button" onclick="changeCartQty(${item.id}, 1)" aria-label="Aumenta">+</button>
            </div>
          </div>
          <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Rimuovi">×</button>
        </div>
      `).join('');
    }
  }

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.innerText = fmt(cartTotal());

  renderCheckoutSummary();
}

/* ------------------------------------------------------------
   DRAWER CARRELLO
   ------------------------------------------------------------ */
let lastFocusedEl = null;

function toggleCart(forceOpen = false) {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  if (!drawer || !overlay) return;

  const isOpen = drawer.classList.contains('open');
  const shouldOpen = forceOpen || !isOpen;

  if (shouldOpen) {
    lastFocusedEl = document.activeElement;
    drawer.classList.add('open');
    overlay.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastFocusedEl?.focus?.();
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const drawer = document.getElementById('drawer');
    if (drawer?.classList.contains('open')) toggleCart();
  }
});

/* ------------------------------------------------------------
   MENU MOBILE
   ------------------------------------------------------------ */
function toggleMobileNav() {
  const nav = document.getElementById('mobile-nav');
  const btn = document.querySelector('.menu-toggle');
  if (!nav) return;
  const isOpen = nav.classList.contains('open');
  nav.classList.toggle('open');
  btn?.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
}

/* ------------------------------------------------------------
   NAVIGAZIONE CON INVIO
   ------------------------------------------------------------ */
function focusNextOnEnter(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const fields = Array.from(form.querySelectorAll('input, select, textarea'))
    .filter(el => !el.disabled && el.offsetParent !== null);

  fields.forEach((field, idx) => {
    if (field.dataset.enterBound === '1') return;
    field.dataset.enterBound = '1';

    field.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;

      if (field.tagName === 'TEXTAREA') {
        if (e.ctrlKey || e.metaKey) {
          e.preventDefault();
          form.requestSubmit();
        }
        return;
      }

      e.preventDefault();

      if (!field.checkValidity()) {
        field.reportValidity();
        return;
      }

      const next = fields[idx + 1];
      if (next) {
        next.focus();
        if (next.select) { try { next.select(); } catch (_) {} }
      } else {
        form.requestSubmit();
      }
    });
  });
}

/* ------------------------------------------------------------
   CHECKOUT
   ------------------------------------------------------------ */
function renderCheckoutSummary() {
  const summary = document.getElementById('checkout-summary');
  if (!summary) return;

  if (cart.length === 0) {
    summary.innerHTML = `
      <h3>RIEPILOGO ORDINE</h3>
      <p style="color: var(--text-sub); font-size: 13px; margin-bottom: 20px;">Il carrello è vuoto.</p>
      <a href="index.html" class="checkout-btn" style="display:block; text-align:center;">Torna al catalogo</a>
    `;
    return;
  }

  summary.innerHTML = `
    <h3>RIEPILOGO ORDINE</h3>
    ${cart.map(i => `
      <div class="summary-item">
        <span class="name">${esc(i.name)}</span>
        <span class="qty">× ${i.qty}</span>
        <span class="price">${fmt(i.price * i.qty)}</span>
      </div>
    `).join('')}
    <div class="summary-line" style="margin-top: 18px;"><span>Spedizione</span><span>Gratuita</span></div>
    <div class="summary-line total"><span>Totale</span><span>${fmt(cartTotal())}</span></div>
  `;
}

function placeOrder(e) {
  if (e) e.preventDefault();

  if (cart.length === 0) {
    showToast('Il carrello è vuoto.', 'error');
    return;
  }

  const form = document.getElementById('checkout-form');
  if (!form) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const getVal = (id) => form.querySelector(`#${id}`)?.value || '';
  const nome = getVal('nome');
  const cognome = getVal('cognome');
  const email = getVal('email');
  const telefono = getVal('telefono');
  const indirizzo = getVal('indirizzo');
  const citta = getVal('citta');
  const cap = getVal('cap');
  const provincia = getVal('provincia');
  const paese = getVal('paese') || 'Italia';
  const note = getVal('note');

  const orderNum = 'AET-' + Math.random().toString(36).slice(2, 8).toUpperCase();
  const now = new Date();
  const dataOrdine = now.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });
  const oraOrdine = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const consegnaStimata = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000)
    .toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });

  const itemsHtml = cart.map(i => `
    <div class="order-item">
      <span class="n">${esc(i.name)}</span>
      <span class="q">× ${i.qty}</span>
      <span class="p">${fmt(i.price * i.qty)}</span>
    </div>
  `).join('');

  const subtotale = cartTotal();
  const spedizione = 0;
  const totale = subtotale + spedizione;

  const container = document.getElementById('checkout-container');
  if (!container) return;

  container.innerHTML = `
    <div class="confirm-screen">
      <div class="order-number-box">
        <span class="label">Rif. ordine</span>
        <span class="value">${orderNum}</span>
      </div>

      <div class="confirm-icon">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <h1>Ordine confermato</h1>
      <p>Grazie ${esc(nome) || 'per il tuo ordine'}! Abbiamo ricevuto la tua richiesta e ti contatteremo a breve${email ? ` all'indirizzo <strong style="color:var(--text-main)">${esc(email)}</strong>` : ''}.</p>

      <div class="order-details-card">
        <h3>Dettagli ordine</h3>
        <div class="detail-row"><span class="k">Data ordine</span><span class="v">${dataOrdine} · ${oraOrdine}</span></div>
        <div class="detail-row"><span class="k">Consegna stimata</span><span class="v">${consegnaStimata}</span></div>
        <div class="detail-row"><span class="k">Metodo spedizione</span><span class="v">Corriere espresso · Gratuita</span></div>

        <div class="order-list">
          <div class="order-list-title">Articoli</div>
          ${itemsHtml || '<div class="order-item"><span class="n">—</span></div>'}
        </div>

        <div class="detail-row" style="margin-top: 12px;"><span class="k">Subtotale</span><span class="v">${fmt(subtotale)}</span></div>
        <div class="detail-row"><span class="k">Spedizione</span><span class="v">${spedizione === 0 ? 'Gratuita' : fmt(spedizione)}</span></div>
        <div class="detail-row total"><span class="k">Totale</span><span class="v">${fmt(totale)}</span></div>

        <h3 style="margin-top: 28px;">Dati di spedizione</h3>
        <div class="detail-row"><span class="k">Destinatario</span><span class="v">${esc((nome + ' ' + cognome).trim()) || '—'}</span></div>
        <div class="detail-row"><span class="k">Email</span><span class="v">${esc(email) || '—'}</span></div>
        <div class="detail-row"><span class="k">Telefono</span><span class="v">${esc(telefono) || '—'}</span></div>
        <div class="detail-row"><span class="k">Indirizzo</span><span class="v">${esc(indirizzo) || '—'}</span></div>
        <div class="detail-row"><span class="k">Città</span><span class="v">${esc(citta) || '—'}${cap ? ` · ${esc(cap)}` : ''}${provincia ? ` (${esc(provincia)})` : ''}</span></div>
        <div class="detail-row"><span class="k">Paese</span><span class="v">${esc(paese)}</span></div>
        ${note ? `<div class="detail-row"><span class="k">Note</span><span class="v">${esc(note)}</span></div>` : ''}
      </div>

      <div class="confirm-actions">
        <a href="index.html" class="checkout-btn">Torna al catalogo</a>
      </div>
    </div>
  `;

  cart = [];
  saveCart();
  updateCart();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------------------------------------------------------
   CONTATTI
   ------------------------------------------------------------ */
function submitContact(e) {
  if (e) e.preventDefault();

  const form = document.getElementById('contact-form');
  if (!form) return;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const getVal = (id) => form.querySelector(`#${id}`)?.value || '';
  const nome = getVal('c-nome');
  const cognome = getVal('c-cognome');
  const email = getVal('c-email');
  const oggetto = getVal('c-oggetto');
  const messaggio = getVal('c-messaggio');

  const now = new Date();
  const dataMsg = now.toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' });
  const oraMsg = now.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const rifMsg = 'MSG-' + Math.random().toString(36).slice(2, 8).toUpperCase();

  const container = document.getElementById('contact-container');
  if (!container) return;

  container.innerHTML = `
    <div class="confirm-screen">
      <div class="order-number-box">
        <span class="label">Rif. messaggio</span>
        <span class="value">${rifMsg}</span>
      </div>

      <div class="confirm-icon">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <h1>Messaggio inviato</h1>
      <p>Grazie ${esc(nome) || ''}! Abbiamo ricevuto il tuo messaggio e ti risponderemo entro 48 ore${email ? ` all'indirizzo <strong style="color:var(--text-main)">${esc(email)}</strong>` : ''}.</p>

      <div class="order-details-card">
        <h3>Dettagli messaggio</h3>
        <div class="detail-row"><span class="k">Data invio</span><span class="v">${dataMsg} · ${oraMsg}</span></div>
        <div class="detail-row"><span class="k">Mittente</span><span class="v">${esc((nome + ' ' + cognome).trim()) || '—'}</span></div>
        <div class="detail-row"><span class="k">Email</span><span class="v">${esc(email) || '—'}</span></div>
        <div class="detail-row"><span class="k">Oggetto</span><span class="v">${esc(oggetto) || '—'}</span></div>
        <div class="detail-row"><span class="k">Tempo di risposta</span><span class="v">Entro 48 ore</span></div>
        ${messaggio ? `<div class="detail-row"><span class="k">Messaggio</span><span class="v" style="max-width: 60%; white-space: pre-wrap;">${esc(messaggio)}</span></div>` : ''}
      </div>

      <div class="confirm-actions">
        <a href="index.html" class="checkout-btn">Torna al catalogo</a>
      </div>
    </div>
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ------------------------------------------------------------
   TEMA CHIARO/SCURO
   ------------------------------------------------------------ */
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('aether-theme'); } catch (_) {}
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeIcon(theme);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  safeSet('aether-theme', next);
  updateThemeIcon(next);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  icon.innerHTML = theme === 'dark'
    ? `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>`
    : `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;
}

window.addEventListener('beforeunload', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  safeSet('aether-theme', current);
});

/* ------------------------------------------------------------
   INIT
   ------------------------------------------------------------ */
initTheme();

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderLimited();
  renderProductDetail();
  renderCheckoutSummary();
  updateCart();
  focusNextOnEnter('checkout-form');
  focusNextOnEnter('contact-form');
});

/* ------------------------------------------------------------
   ESPOSIZIONE GLOBALE (per onclick inline)
   ------------------------------------------------------------ */
window.setCategory = setCategory;
window.setMaterial = setMaterial;
window.filterProducts = filterProducts;
window.toggleSortMenu = toggleSortMenu;
window.setSort = setSort;
window.changeQty = changeQty;
window.setQty = setQty;
window.addToCartWithQty = addToCartWithQty;
window.removeFromCart = removeFromCart;
window.changeCartQty = changeCartQty;
window.toggleCart = toggleCart;
window.toggleMobileNav = toggleMobileNav;
window.toggleTheme = toggleTheme;
window.placeOrder = placeOrder;
window.submitContact = submitContact;