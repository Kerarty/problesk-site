/* ============================================================
   ПроБлеск — сборка главной страницы
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderMarquee();
  renderHeroFacts();
  renderStage();
  renderCats();
  renderHits();
  renderSets();
  renderGuides();
  renderReviews();
  renderFaq();

  // сообщаем общим скриптам, что контент отрисован
  document.dispatchEvent(new Event('content:ready'));
});

/* ---------- бегущая строка брендов ---------- */
function renderMarquee() {
  const track = document.querySelector('[data-marquee]');
  if (!track) return;
  const row = BRANDS.map(b =>
    `<div class="marquee__item">${b.title}<span>${b.desc}</span></div>`).join('');
  track.innerHTML = row + row; /* два прохода для бесшовной прокрутки */
}

/* ---------- факты под кнопками ---------- */
function renderHeroFacts() {
  const facts = [
    ['star',  'Профессиональные бренды'],
    ['car',   'Ассортимент обновляем каждые 3 недели'],
    ['pin',   'Светлогорск + доставка по Беларуси']
  ];
  const host = document.querySelector('.hero__facts');
  if (!host) return;
  host.innerHTML = facts.map(([i, t]) => `<span class="fact">${icon(i, 16)}${t}</span>`).join('');
}

/* ---------- сцена в hero ---------- */
function renderStage() {
  const host = document.querySelector('[data-stage-bottles]');
  if (host) {
    const pick = ['ss-lollipop', 'ss-bitum', 'ss-ceramic9h', 'ss-wax']
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter(Boolean);
    host.innerHTML = `<div style="display:flex;align-items:flex-end;justify-content:center;gap:10px">
      ${pick.map(p => `<div style="width:${p.type === 'can' ? 22 : 26}%">${productSVG(p.type, p.color)}</div>`).join('')}
    </div>`;
  }

  const badges = {
    ok:     ['checkCircle', 'Всё в наличии'],
    accent: ['shield',      'Керамика 9H'],
    violet: ['bag',         'Оптовые фасовки']
  };
  document.querySelectorAll('[data-badge]').forEach(el => {
    const [name, text] = badges[el.dataset.badge] || [];
    el.innerHTML = `${icon(name, 15)}${text}`;
  });
}

/* ---------- категории ---------- */
function renderCats() {
  const box = document.querySelector('[data-cats]');
  if (!box) return;
  box.innerHTML = CATEGORIES.map(c => `
    <a class="cat reveal" href="catalog.html?cat=${c.id}">
      <div class="cat__icon">${icon(c.icon, 21)}</div>
      <h3>${c.short}</h3>
      <p>${c.desc}</p>
      <span class="cat__arrow">${icon('arrow', 17)}</span>
    </a>`).join('');
}

/* ---------- хиты ---------- */
function renderHits() {
  const box = document.querySelector('[data-hits]');
  if (!box) return;
  const hits = PRODUCTS.filter(p => p.badge && !p.isSet).slice(0, 8);
  box.innerHTML = hits.map(productCard).join('');
}

/* ---------- наборы ---------- */
function renderSets() {
  const box = document.querySelector('[data-sets]');
  if (!box) return;
  const sets = PRODUCTS.filter(p => p.isSet).slice(0, 4);

  box.innerHTML = sets.map(p => `
    <article class="set-card reveal">
      <div class="set-card__media">${productSVG('box', p.color)}</div>
      <div class="set-card__body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div style="display:flex;align-items:center;flex-wrap:wrap;gap:16px">
          ${priceHTML(p)}
          ${p.oldPrice ? `<span class="set-card__save">выгода ${money(p.oldPrice - p.price)} BYN</span>` : ''}
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:18px">
          ${waBtn(`Здравствуйте! Хочу взять набор «${p.name}».`, 'Взять набор', 'btn btn-wa btn-sm')}
          <a class="btn btn-ghost btn-sm" href="product.html?id=${p.id}">Состав</a>
        </div>
      </div>
    </article>`).join('');
}

/* ---------- гайды ---------- */
function renderGuides() {
  const box = document.querySelector('[data-guides]');
  if (!box) return;
  box.innerHTML = GUIDES.map(g => `
    <a class="guide reveal" href="#" onclick="return false">
      <div class="guide__meta"><span class="guide__tag">${g.tag}</span><span>${g.date}</span></div>
      <h3>${g.title}</h3>
      <p>${g.excerpt}</p>
      <span class="guide__more">Читать ${icon('arrow', 16)}</span>
    </a>`).join('');
}

/* ---------- отзывы ---------- */
function renderReviews() {
  const box = document.querySelector('[data-reviews]');
  if (!box) return;
  box.innerHTML = REVIEWS.map(r => `
    <article class="review reveal">
      <div class="review__stars">★★★★★</div>
      <p>«${r.text}»</p>
      <div class="review__author">
        <div class="review__avatar">${r.name.charAt(0)}</div>
        <div><b>${r.name}</b><small>${r.src} · ${r.date}</small></div>
      </div>
    </article>`).join('');
}

/* ---------- FAQ ---------- */
function renderFaq() {
  const box = document.querySelector('[data-faq]');
  if (!box) return;
  box.innerHTML = FAQ.map((f, i) => `
    <div class="faq__item reveal" style="transition-delay:${i * 40}ms">
      <button class="faq__q">${f.q}<span class="faq__sign">+</span></button>
      <div class="faq__a"><p>${f.a}</p></div>
    </div>`).join('');
}