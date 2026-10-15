/* ============================================================
   ПроБлеск — страница товара
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-product-page]');
  if (!root) return;

  const id = new URLSearchParams(location.search).get('id');
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];
  const brand = brandById(p.brand);
  const cat = catById(p.cat);

  document.title = `${p.name} — ${cat.title} — ПроБлеск Светлогорск`;
  renderCrumbs(p, cat);
  renderMain(p, brand);
  renderRelated(p);
});

function renderCrumbs(p, cat) {
  const el = document.querySelector('[data-crumbs]');
  if (!el) return;
  el.innerHTML = `
    <div class="crumbs">
      <a href="index.html">Главная</a> /
      <a href="catalog.html">Каталог</a> /
      <a href="catalog.html?cat=${cat.id}">${cat.short}</a> /
      <span>${p.name}</span>
    </div>`;
}

function renderMain(p, brand) {
  const el = document.querySelector('[data-product]');
  if (!el) return;

  el.innerHTML = `
    <div class="pp">
      <div class="pp__media">${productSVG(p.type, p.color)}</div>
      <div>
        <div class="pp__brand">${brand ? brand.title : ''}</div>
        <h1 class="pp__title">${p.name}</h1>

        <div class="pp__meta">
          <span class="pp__tag">${icon('layers', 14)} ${p.vol}</span>
          <span class="pp__tag">${icon('star', 14)} ${brand ? brand.desc : ''}</span>
          <span class="pp__tag stock ${p.stock ? '' : 'stock--out'}">${p.stock ? 'В наличии в магазине' : 'Под заказ, 1–3 дня'}</span>
        </div>

        <div class="pp__price">
          <b>${money(p.price)} <span class="price__cur">BYN</span></b>
          ${p.oldPrice ? `<s>${money(p.oldPrice)} BYN</s>` : ''}
        </div>

        <p class="pp__desc">${p.desc}</p>

        <div class="pp__btns">
          ${waBtn(
            `Здравствуйте! Хочу уточнить наличие и цену на «${p.name}» (${p.vol}).`,
            'Уточнить наличие', 'btn btn-wa btn-lg')}
          <a class="btn btn-ghost btn-lg" href="tel:${SHOP.phoneHref}">${icon('phone', 17)} Позвонить</a>
        </div>

        <div class="pp__specs">
          <div class="pp__spec"><span>Бренд</span><b>${brand ? brand.title : '—'}</b></div>
          <div class="pp__spec"><span>Объём / фасовка</span><b>${p.vol}</b></div>
          <div class="pp__spec"><span>Категория</span><b><a href="catalog.html?cat=${p.cat}" style="color:var(--accent)">${catById(p.cat).title}</a></b></div>
          <div class="pp__spec"><span>Наличие</span><b>${p.stock ? 'В магазине' : 'Под заказ'}</b></div>
          <div class="pp__spec"><span>Самовывоз</span><b>${SHOP.address}</b></div>
          <div class="pp__spec"><span>Доставка</span><b>По Светлогорску в день заказа</b></div>
        </div>
      </div>
    </div>`;
}

function renderRelated(p) {
  const box = document.querySelector('[data-related]');
  if (!box) return;

  const related = PRODUCTS
    .filter(x => x.cat === p.cat && x.id !== p.id)
    .slice(0, 4);

  if (!related.length) {
    box.closest('section')?.remove();
    return;
  }

  box.innerHTML = related.map(productCard).join('');
  box.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}