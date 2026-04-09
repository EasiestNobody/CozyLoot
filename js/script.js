// ============================================
// CozyLoot — Sanrio TikTok Shop
// ============================================

// ---- SANRIO ITEM DATABASE (for spin wheel) ----
const itemDB = {
  'hello-kitty': {
    common: [
      { name: 'Hello Kitty Sticker Sheet', value: 99, img: 'assets/hk-stationery.png' },
      { name: 'Hello Kitty Pencil Set', value: 149, img: 'assets/hk-stationery.png' },
      { name: 'Hello Kitty Eraser Pack', value: 79, img: 'assets/hk-stationery.png' },
      { name: 'Hello Kitty Washi Tape', value: 129, img: 'assets/hk-stationery.png' },
    ],
    rare: [
      { name: 'Hello Kitty Mini Plush', value: 499, img: 'assets/hk-plush.png' },
      { name: 'Hello Kitty Tote Bag', value: 599, img: 'assets/hk-accessories.png' },
    ],
    ultra: [
      { name: 'Hello Kitty Giant Plush', value: 1499, img: 'assets/hk-plush.png' },
    ]
  },
  'my-melody': {
    common: [
      { name: 'My Melody Notebook', value: 149, img: 'assets/mm-stationery.png' },
      { name: 'My Melody Hair Clips', value: 129, img: 'assets/mm-accessories.png' },
      { name: 'My Melody Pen', value: 99, img: 'assets/mm-stationery.png' },
      { name: 'My Melody Lip Balm', value: 179, img: 'assets/mm-selfcare.png' },
    ],
    rare: [
      { name: 'My Melody Plush', value: 549, img: 'assets/mm-plush.png' },
      { name: 'My Melody Phone Case', value: 399, img: 'assets/mm-accessories.png' },
    ],
    ultra: [
      { name: 'My Melody Collector Plush', value: 1599, img: 'assets/mm-plush.png' },
    ]
  },
  'kuromi': {
    common: [
      { name: 'Kuromi Sticker Pack', value: 99, img: 'assets/kuromi-stationery.png' },
      { name: 'Kuromi Keychain', value: 149, img: 'assets/kuromi-accessories.png' },
      { name: 'Kuromi Memo Pad', value: 119, img: 'assets/kuromi-stationery.png' },
      { name: 'Kuromi Face Mask', value: 159, img: 'assets/kuromi-selfcare.png' },
    ],
    rare: [
      { name: 'Kuromi Gothic Plush', value: 549, img: 'assets/kuromi-plush.png' },
      { name: 'Kuromi Crossbody Bag', value: 699, img: 'assets/kuromi-accessories.png' },
    ],
    ultra: [
      { name: 'Kuromi Limited Ed. Plush', value: 1799, img: 'assets/kuromi-plush.png' },
    ]
  },
  'cinnamoroll': {
    common: [
      { name: 'Cinnamoroll Stickers', value: 89, img: 'assets/cinnamoroll-stationery.png' },
      { name: 'Cinnamoroll Hand Cream', value: 199, img: 'assets/cinnamoroll-selfcare.png' },
      { name: 'Cinnamoroll Pen', value: 109, img: 'assets/cinnamoroll-stationery.png' },
      { name: 'Cinnamoroll Badge Set', value: 99, img: 'assets/cinnamoroll-accessories.png' },
    ],
    rare: [
      { name: 'Cinnamoroll Cloud Plush', value: 599, img: 'assets/cinnamoroll-plush.png' },
      { name: 'Cinnamoroll Blanket', value: 499, img: 'assets/cinnamoroll-plush.png' },
    ],
    ultra: [
      { name: 'Cinnamoroll Jumbo Plush', value: 1699, img: 'assets/cinnamoroll-plush.png' },
    ]
  },
  'pompompurin': {
    common: [
      { name: 'Pompompurin Eraser', value: 79, img: 'assets/pompompurin-stationery.png' },
      { name: 'Pompompurin Sticker', value: 89, img: 'assets/pompompurin-stationery.png' },
      { name: 'Pompompurin Bath Bomb', value: 179, img: 'assets/pompompurin-selfcare.png' },
      { name: 'Pompompurin Pin', value: 99, img: 'assets/pompompurin-accessories.png' },
    ],
    rare: [
      { name: 'Pompompurin Plush', value: 549, img: 'assets/pompompurin-plush.png' },
      { name: 'Pompompurin Lunchbox', value: 399, img: 'assets/pompompurin-accessories.png' },
    ],
    ultra: [
      { name: 'Pompompurin Giant Plush', value: 1499, img: 'assets/pompompurin-plush.png' },
    ]
  },
  'korilakkuma': {
    common: [
      { name: 'Korilakkuma Sticker Set', value: 99, img: 'assets/kl-stationery.png' },
      { name: 'Korilakkuma Memo Pad', value: 119, img: 'assets/kl-stationery.png' },
      { name: 'Korilakkuma Badge', value: 89, img: 'assets/kl-accessories.png' },
      { name: 'Korilakkuma Lip Gloss', value: 159, img: 'assets/kl-selfcare.png' },
    ],
    rare: [
      { name: 'Korilakkuma Plush', value: 549, img: 'assets/kl-plush.png' },
      { name: 'Korilakkuma Pouch', value: 449, img: 'assets/kl-accessories.png' },
    ],
    ultra: [
      { name: 'Korilakkuma XL Plush', value: 1599, img: 'assets/kl-plush.png' },
    ]
  }
};

// ---- PRODUCTS for Shop Grid (unique per character, no fake sold counts) ----
const products = [
  // Hello Kitty
  { id: 1, name: 'Hello Kitty Classic Plush 20cm', price: 549, original: 699, img: 'assets/hk-plush.png', badge: 'New', cat: 'hello-kitty', rating: 0 },
  { id: 2, name: 'Hello Kitty Bow Stationery Set', price: 299, original: 399, img: 'assets/hk-stationery.png', badge: '', cat: 'hello-kitty', rating: 0 },
  { id: 3, name: 'Hello Kitty Ribbon Tote Bag', price: 599, original: 0, img: 'assets/hk-accessories.png', badge: '', cat: 'hello-kitty', rating: 0 },
  { id: 4, name: 'Hello Kitty Lip Balm & Hand Cream Set', price: 349, original: 0, img: 'assets/hk-selfcare.png', badge: '', cat: 'hello-kitty', rating: 0 },

  // My Melody
  { id: 5, name: 'My Melody Flower Plush 25cm', price: 599, original: 799, img: 'assets/mm-plush.png', badge: 'New', cat: 'my-melody', rating: 0 },
  { id: 6, name: 'My Melody Pastel Notebook Bundle', price: 249, original: 0, img: 'assets/mm-stationery.png', badge: '', cat: 'my-melody', rating: 0 },
  { id: 7, name: 'My Melody Pink Phone Case', price: 399, original: 499, img: 'assets/mm-accessories.png', badge: '', cat: 'my-melody', rating: 0 },
  { id: 8, name: 'My Melody Rose Face Mask Pack', price: 279, original: 0, img: 'assets/mm-selfcare.png', badge: '', cat: 'my-melody', rating: 0 },

  // Kuromi
  { id: 9, name: 'Kuromi Gothic Plush 20cm', price: 549, original: 0, img: 'assets/kuromi-plush.png', badge: 'New', cat: 'kuromi', rating: 0 },
  { id: 10, name: 'Kuromi Dark Aesthetic Pen Set', price: 199, original: 279, img: 'assets/kuromi-stationery.png', badge: '', cat: 'kuromi', rating: 0 },
  { id: 11, name: 'Kuromi Skull Crossbody Bag', price: 699, original: 899, img: 'assets/kuromi-accessories.png', badge: '', cat: 'kuromi', rating: 0 },
  { id: 12, name: 'Kuromi Purple Bath Bomb Set', price: 329, original: 0, img: 'assets/kuromi-selfcare.png', badge: '', cat: 'kuromi', rating: 0 },

  // Cinnamoroll
  { id: 13, name: 'Cinnamoroll Cloud Plush 30cm', price: 699, original: 899, img: 'assets/cinnamoroll-plush.png', badge: 'New', cat: 'cinnamoroll', rating: 0 },
  { id: 14, name: 'Cinnamoroll Sky Blue Pencil Case', price: 249, original: 0, img: 'assets/cinnamoroll-stationery.png', badge: '', cat: 'cinnamoroll', rating: 0 },
  { id: 15, name: 'Cinnamoroll Fluffy Keychain', price: 199, original: 0, img: 'assets/cinnamoroll-accessories.png', badge: '', cat: 'cinnamoroll', rating: 0 },
  { id: 16, name: 'Cinnamoroll Vanilla Hand Cream', price: 229, original: 299, img: 'assets/cinnamoroll-selfcare.png', badge: '', cat: 'cinnamoroll', rating: 0 },

  // Pompompurin
  { id: 17, name: 'Pompompurin Pudding Plush 22cm', price: 549, original: 0, img: 'assets/pompompurin-plush.png', badge: 'New', cat: 'pompompurin', rating: 0 },
  { id: 18, name: 'Pompompurin Honey Washi Tape Set', price: 149, original: 0, img: 'assets/pompompurin-stationery.png', badge: '', cat: 'pompompurin', rating: 0 },
  { id: 19, name: 'Pompompurin Beret Pin Set', price: 179, original: 0, img: 'assets/pompompurin-accessories.png', badge: '', cat: 'pompompurin', rating: 0 },
  { id: 20, name: 'Pompompurin Honey Lip Balm', price: 199, original: 249, img: 'assets/pompompurin-selfcare.png', badge: '', cat: 'pompompurin', rating: 0 },

  // Korilakkuma
  { id: 21, name: 'Korilakkuma Strawberry Plush 20cm', price: 549, original: 699, img: 'assets/kl-plush.png', badge: 'New', cat: 'korilakkuma', rating: 0 },
  { id: 22, name: 'Korilakkuma Mini Notebook Set', price: 199, original: 0, img: 'assets/kl-stationery.png', badge: '', cat: 'korilakkuma', rating: 0 },
  { id: 23, name: 'Korilakkuma Cat Ear Headband', price: 249, original: 0, img: 'assets/kl-accessories.png', badge: '', cat: 'korilakkuma', rating: 0 },
  { id: 24, name: 'Korilakkuma Berry Face Mist', price: 299, original: 379, img: 'assets/kl-selfcare.png', badge: '', cat: 'korilakkuma', rating: 0 },

  // Mystery Boxes
  { id: 25, name: 'Sanrio Mystery Box - 5 Random Items', price: 499, original: 799, img: 'assets/sanrio-mystery-box.png', badge: 'Best Value', cat: 'mystery', rating: 0 },
  { id: 26, name: 'Sanrio Premium Mystery Box - 8 Items', price: 899, original: 1399, img: 'assets/sanrio-mystery-box.png', badge: 'Premium', cat: 'mystery', rating: 0 },
  { id: 27, name: 'Hello Kitty Exclusive Mystery Box', price: 599, original: 0, img: 'assets/sanrio-mystery-box.png', badge: 'Exclusive', cat: 'mystery', rating: 0 },
  { id: 28, name: 'Kuromi Dark Mystery Box', price: 599, original: 0, img: 'assets/sanrio-mystery-box.png', badge: 'Exclusive', cat: 'mystery', rating: 0 },
];

// ---- CART STATE ----
let cart = [];

// ---- WISHLIST STATE ----
let wishlist = [];

// ---- STATE ----
let currentCharacter = 'hello-kitty';
let currentType = 'plushie';
let currentProductFilter = 'all';
let isSpinning = false;
let spinRotation = 0;

// ---- ANTI-ABUSE ----
function canSpinToday() {
  const lastSpin = localStorage.getItem('lastSpinDate');
  return lastSpin !== new Date().toDateString();
}

// ---- WHEEL COLORS (vivid, high-contrast) ----
const wheelColors = [
  ['#E91E63', '#F06292'],
  ['#9C27B0', '#BA68C8'],
  ['#FF6F00', '#FFA726'],
  ['#00897B', '#4DB6AC'],
  ['#D81B60', '#F48FB1'],
  ['#5E35B1', '#9575CD'],
];

// ---- BUILD WHEEL ITEMS ----
function getWheelItems() {
  const charData = itemDB[currentCharacter];
  if (!charData) return [];
  const items = [];
  charData.common.forEach(item => items.push({ ...item, rarity: 'common' }));
  charData.rare.forEach(item => items.push({ ...item, rarity: 'rare' }));
  charData.ultra.forEach(item => items.push({ ...item, rarity: 'ultra' }));
  return items.sort(() => Math.random() - 0.5).slice(0, 8);
}

let currentWheelItems = [];

// ---- DRAW WHEEL ----
function drawWheel(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  const cx = w / 2, cy = h / 2, r = cx - 4;

  currentWheelItems = getWheelItems();
  const items = currentWheelItems;
  if (items.length === 0) return;
  const sliceAngle = (2 * Math.PI) / items.length;

  ctx.clearRect(0, 0, w, h);

  items.forEach((item, i) => {
    const start = i * sliceAngle;
    const end = start + sliceAngle;
    const colors = wheelColors[i % wheelColors.length];

    // Slice gradient
    const grad = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
    grad.addColorStop(0, colors[1]);
    grad.addColorStop(1, colors[0]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Divider line
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(start), cy + r * Math.sin(start));
    ctx.strokeStyle = 'rgba(255,255,255,0.7)';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Text - Uniform standard wheel layout, center to edge without flipping
    ctx.save();
    ctx.translate(cx, cy);
    const midAngle = start + sliceAngle / 2;
    ctx.rotate(midAngle);
    
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    const fontSize = w >= 400 ? 15 : 12;
    const maxChars = w >= 400 ? 20 : 14;
    ctx.font = `bold ${fontSize}px Inter, sans-serif`;

    const label = item.name.length > maxChars ? item.name.substring(0, maxChars - 1) + '\u2026' : item.name;
    const textX = r - 22;

    // Dark outline for contrast
    ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    ctx.strokeText(label, textX, 0);

    // Font fill
    ctx.fillStyle = '#FFFFFF';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 4;
    ctx.fillText(label, textX, 0);
    ctx.shadowBlur = 0;

    // Rarity dot
    if (item.rarity !== 'common') {
      const dotColor = item.rarity === 'ultra' ? '#FFD700' : '#FF69B4';
      ctx.beginPath();
      ctx.arc(r - 10, 0, 4, 0, 2 * Math.PI);
      ctx.fillStyle = dotColor;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#fff';
      ctx.stroke();
    }

    ctx.restore();
  });

}

// ---- TICK SOUND ----
let audioCtx = null;
function playTickSound() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = 'sine';
  osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.03);
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.06);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + 0.06);
}

let tickInterval = null;
function startTickSounds(durationMs) {
  let elapsed = 0;
  let interval = 40;
  function tick() {
    if (elapsed >= durationMs) { tickInterval = null; return; }
    playTickSound();
    elapsed += interval;
    interval = 40 + (elapsed / durationMs) * 260;
    tickInterval = setTimeout(tick, interval);
  }
  tick();
}

// ---- SPIN MODAL ----
function openSpinModal() {
  const modal = document.getElementById('spinModal');
  modal.classList.add('open');
  document.body.classList.add('modal-open');
  // Redraw the big wheel
  drawWheel('spinWheel');
  // Hide result panel
  document.getElementById('spinResultPanel').classList.remove('show');
  document.querySelector('.spin-modal-wheel-area').style.display = 'flex';
}

function closeSpinModal() {
  const modal = document.getElementById('spinModal');
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

// ---- SPIN WHEEL ----
function spinWheel() {
  if (isSpinning) return;
  if (!canSpinToday()) {
    showToast('Come back tomorrow for another spin!', 'warning');
    return;
  }

  const canvas = document.getElementById('spinWheel');
  if (!canvas) return;

  isSpinning = true;
  localStorage.setItem('lastSpinDate', new Date().toDateString());
  updateSpinCounter();

  document.getElementById('spinResultPanel').classList.remove('show');
  document.getElementById('spinResultLabel')?.classList.remove('show');

  // Pick winner
  const items = currentWheelItems;
  const rng = Math.random();
  let winnerIdx;
  if (rng < 0.01) {
    const ultras = items.map((it, i) => it.rarity === 'ultra' ? i : -1).filter(i => i >= 0);
    winnerIdx = ultras.length ? ultras[Math.floor(Math.random() * ultras.length)] : Math.floor(Math.random() * items.length);
  } else if (rng < 0.10) {
    const rares = items.map((it, i) => it.rarity === 'rare' ? i : -1).filter(i => i >= 0);
    winnerIdx = rares.length ? rares[Math.floor(Math.random() * rares.length)] : Math.floor(Math.random() * items.length);
  } else {
    const commons = items.map((it, i) => it.rarity === 'common' ? i : -1).filter(i => i >= 0);
    winnerIdx = commons.length ? commons[Math.floor(Math.random() * commons.length)] : Math.floor(Math.random() * items.length);
  }

  const sliceAngle = 360 / items.length;
  const targetAngle = 360 - (winnerIdx * sliceAngle + sliceAngle / 2);
  const extraSpins = 360 * (6 + Math.floor(Math.random() * 3));
  const finalRotation = spinRotation + extraSpins + targetAngle - (spinRotation % 360);

  spinRotation = finalRotation;
  canvas.style.transition = 'transform 4.5s cubic-bezier(0.17, 0.67, 0.12, 0.99)';
  canvas.style.transform = `rotate(${spinRotation}deg)`;

  const wrapper = document.getElementById('modalWheelWrapper');
  wrapper?.classList.add('spinning');
  startTickSounds(4400);

  setTimeout(() => {
    isSpinning = false;
    wrapper?.classList.remove('spinning');
    const winner = items[winnerIdx];
    showSpinResult(winner);
  }, 4600);
}

function showSpinResult(item) {
  // Hide wheel area, show result panel
  document.querySelector('.spin-modal-wheel-area').style.display = 'none';
  const panel = document.getElementById('spinResultPanel');

  const tag = document.getElementById('resultRarityTag');
  if (tag) {
    const labels = { common: 'Nice Pull!', rare: 'Rare Find!', ultra: 'ULTRA RARE!' };
    tag.textContent = labels[item.rarity] || 'Nice Pull!';
    tag.className = 'result-rarity-tag ' + item.rarity;
  }

  const card = document.getElementById('resultItemCard');
  if (card) {
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
      <div class="item-name">${item.name}</div>
    `;
  }

  const discountRate = 0.8; // 80% discount
  const discountedPrice = Math.floor(item.value * (1 - discountRate));

  const value = document.getElementById('resultValue');
  if (value) {
    value.innerHTML = `<span style="text-decoration: line-through; color: var(--text-light); font-size: 0.8em; margin-right: 8px;">P${item.value.toLocaleString()}</span>P${discountedPrice.toLocaleString()}`;
  }

  panel.classList.add('show');

  // Auto-add to cart
  addToCart({ ...item, value: discountedPrice });

  // Confetti for rare/ultra
  if (item.rarity !== 'common') {
    fireConfetti();
    const wrapper = document.getElementById('modalWheelWrapper');
    wrapper?.classList.add('winner');
    setTimeout(() => wrapper?.classList.remove('winner'), 700);
  }
}


// ---- CART ----
function addToCart(item) {
  cart.push({
    name: item.name,
    price: item.value || item.price,
    img: item.img,
    rarity: item.rarity || 'common'
  });
  updateCartUI();
  showToast('Added to cart: ' + item.name);
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
}

function updateCartUI() {
  // Badge
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = cart.length;

  // Body
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    if (footer) footer.style.display = 'none';
    return;
  }

  if (footer) footer.style.display = 'block';

  body.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-rarity">${item.rarity}</div>
        <div class="cart-item-price">P${item.price.toLocaleString()}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${i})">x</button>
    </div>
  `).join('');

  const total = cart.reduce((s, i) => s + i.price, 0);
  const totalEl = document.getElementById('cartTotal');
  if (totalEl) totalEl.textContent = 'P' + total.toLocaleString();
}

function toggleCartDrawer() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.getElementById('cartDrawer').classList.toggle('open');
}

// ---- CHARACTER / TYPE SELECTION ----
function selectCharacter(char) {
  currentCharacter = char;
  document.querySelectorAll('.char-chip').forEach(el =>
    el.classList.toggle('active', el.dataset.char === char)
  );
  drawWheel('previewWheel');
}

function selectType(type) {
  currentType = type;
  document.querySelectorAll('.type-chip').forEach(el =>
    el.classList.toggle('active', el.dataset.type === type)
  );
  drawWheel('previewWheel');
}

function updateSpinCounter() {
  const el = document.getElementById('spinCounter');
  if (!el) return;
  const canSpin = canSpinToday();
  el.textContent = canSpin ? '1 spin available today' : 'No spins left today';
  if (!canSpin) {
    el.classList.add('low');
    document.getElementById('spinBtn')?.setAttribute('disabled', 'true');
    document.getElementById('spinBtnInline')?.setAttribute('disabled', 'true');
  } else {
    el.classList.remove('low');
    document.getElementById('spinBtn')?.removeAttribute('disabled');
    document.getElementById('spinBtnInline')?.removeAttribute('disabled');
  }
}

// ---- FLASH DEALS ----
function renderFlashDeals() {
  const grid = document.getElementById('flashGrid');
  if (!grid) return;

  const deals = products.filter(p => p.original > 0 && p.original > p.price).slice(0, 8);
  grid.innerHTML = '';

  deals.forEach(product => {
    const discount = Math.round((1 - product.price / product.original) * 100);
    const card = document.createElement('div');
    card.className = 'flash-card';
    card.innerHTML = `
      <div class="flash-discount">-${discount}%</div>
      <div class="flash-card-img">
        <img src="${product.img}" alt="${product.name}" onerror="this.style.display='none'">
      </div>
      <div class="flash-card-body">
        <div class="flash-card-name">${product.name}</div>
        <div>
          <span class="flash-card-price">P${product.price}</span>
          <span class="flash-card-original">P${product.original}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ---- PRODUCT GRID ----
function filterProducts(cat) {
  currentProductFilter = cat;
  document.querySelectorAll('.cat-chip').forEach(el =>
    el.classList.toggle('active', el.dataset.cat === cat)
  );
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = currentProductFilter === 'all'
    ? products
    : products.filter(p => p.cat === currentProductFilter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#999;padding:40px;">No products in this category yet.</p>';
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-card-img">
        <img src="${product.img}" alt="${product.name}" onerror="this.style.display='none'">
        ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
        <button class="product-card-fav" data-id="${product.id}" onclick="event.stopPropagation(); toggleFav(${product.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
        </button>
      </div>
      <div class="product-card-body">
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-price-row">
          <span class="product-card-price">P${product.price}</span>
          ${product.original > 0 ? `<span class="product-card-original">P${product.original}</span>` : ''}
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function toggleFav(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast('Removed from wishlist');
  } else {
    wishlist.push(product);
    showToast('Added to wishlist! ❤️');
  }
  updateWishlistUI();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) {
    badge.textContent = wishlist.length;
    badge.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }
  // Update heart icons in grid
  document.querySelectorAll('.product-card-fav').forEach(btn => {
    const id = parseInt(btn.getAttribute('data-id'));
    if (wishlist.some(w => w.id === id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function toggleWishlistDrawer() {
  const drawer = document.getElementById('wishlistDrawer');
  const overlay = document.getElementById('wishlistOverlay');
  drawer?.classList.toggle('open');
  overlay?.classList.toggle('open');
  renderWishlistDrawer();
}

function renderWishlistDrawer() {
  const body = document.getElementById('wishlistBody');
  if (!body) return;
  if (wishlist.length === 0) {
    body.innerHTML = '<p class="cart-empty">Your wishlist is empty ❤️</p>';
    return;
  }
  body.innerHTML = wishlist.map((item, i) => `
    <div class="cart-item">
      <div class="cart-item-img">
        <img src="${item.img}" alt="${item.name}" onerror="this.style.display='none'">
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">P${item.price.toLocaleString()}</div>
      </div>
      <button class="cart-item-remove" onclick="toggleFav(${item.id}); renderWishlistDrawer();">✕</button>
    </div>
  `).join('');
}

// ---- FLASH TIMER ----
function startFlashTimer() {
  let totalSeconds = 2 * 3600 + 45 * 60 + 30;
  function update() {
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const hEl = document.getElementById('timerH');
    const mEl = document.getElementById('timerM');
    const sEl = document.getElementById('timerS');
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
    totalSeconds--;
    if (totalSeconds < 0) totalSeconds = 9930;
  }
  update();
  setInterval(update, 1000);
}

// ---- SEARCH ----
function initSearch() {
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) { renderProducts(); return; }
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
    );

    if (filtered.length === 0) {
      grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:#999;padding:40px;">No results found</p>';
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-card-img">
          <img src="${product.img}" alt="${product.name}" onerror="this.style.display='none'">
          ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
          <button class="product-card-fav" onclick="event.stopPropagation()">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </button>
        </div>
        <div class="product-card-body">
          <div class="product-card-name">${product.name}</div>
          <div class="product-card-price-row">
            <span class="product-card-price">P${product.price}</span>
            ${product.original > 0 ? `<span class="product-card-original">P${product.original}</span>` : ''}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  });
}

// ---- CONFETTI ----
function fireConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.add('active');

  const ctx = canvas.getContext('2d');
  const colors = ['#FF6B8A', '#FFD93D', '#9B59B6', '#FF4D6D', '#FFB5C8', '#C39BD3'];
  const pieces = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 5 + 3,
    d: Math.random() * 120,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: 0,
    tiltInc: 0.05 + Math.random() * 0.07
  }));

  let raf;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p, i) => {
      p.tilt += p.tiltInc;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      const t = Math.sin(p.tilt) * 12;
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + t + p.r / 3, p.y);
      ctx.lineTo(p.x + t, p.y + t + p.r / 3);
      ctx.stroke();
      if (p.y > canvas.height) pieces[i] = { ...p, y: -20, x: Math.random() * canvas.width };
    });
    raf = requestAnimationFrame(draw);
  }
  draw();
  setTimeout(() => {
    cancelAnimationFrame(raf);
    canvas.classList.remove('active');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 5000);
}

// ---- TOAST ----
function showToast(msg, type = '') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- MOBILE NAV ----
function initMobileNav() {
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.mobile-nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  drawWheel('previewWheel');
  // Redraw after fonts load to ensure text renders
  setTimeout(() => drawWheel('previewWheel'), 300);
  renderFlashDeals();
  renderProducts();
  updateSpinCounter();
  startFlashTimer();
  initSearch();
  initMobileNav();
  updateCartUI();

  window.addEventListener('resize', () => {
    const cc = document.getElementById('confettiCanvas');
    if (cc) { cc.width = window.innerWidth; cc.height = window.innerHeight; }
  });
});
