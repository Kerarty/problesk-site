/* ============================================================
   ПроБлеск — страница каталога
   ============================================================ */

const state = {
  cats:   new Set(),
  brands: new Set(),
  onlyStock: false,
  sort: 'popular'
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-catalog]');
  if (!root) return;

  // начальные фильтры из адресной строки
  const params = new URLSearchParams(location.search);
  if (params.get('cat')) state.cats.add(params.get('cat'));
  if (params.get('brand')) state.brands.add(params.get('brand'));

  renderFilters(root);
  renderProducts();

  const reset = document.querySelector('[data-reset]');
  reset?.addEventListener('click', resetAll);

  document.querySelector('[data-sort]')?.addEventListener('change', e => {
    state.sort = e.target.value;
    renderProducts();
  });

  document.querySelector('[data-filters-open]')?.addEventListener('click', () => {
    document.querySelector('[data-filters]').classList.add('open');
  });
  document.querySelector('[data-filters-close]')?.addEventListener('click', () => {
    document.querySelector('[data-filters]').classList.remove('open');
  });
});

/* ---------- панель фильтров ---------- */
function renderFilters(root) {
  const box = root.querySelector('[data-filters]');
  if (!box) return;

  const countBy = (fn) => PRODUCTS.filter(fn).length;

  box.innerHTML = `
    <div class="filters__head">
      <b>Фильтры</b>
      <button class="filters__reset" data-reset>Сбросить</button>
    </div>

    <div class="fgroup">
      <b>Наличие</b>
      <label class="check">
        <input type="checkbox" data-f="stock"><span class="check__box"></span>
        <span>Только в наличии</span>
      </label>
    </div>

    <div class="fgroup">
      <b>Категория</b>
      ${ALL_CATS.map(c => `
        <label class="check">
          <input type="checkbox" data-f="cat" value="${c.id}">
          <span class="check__box"></span>
          <span>${c.short}</span>
          <span class="count">${countBy(p => p.cat === c.id)}</span>
        </label>`).join('')}
    </div>

    <div class="fgroup">
      <b>Бренд</b>
      ${BRANDS.filter(b => countBy(p => p.brand === b.id)).map(b => `
        <label class="check">
          <input type="checkbox" data-f="brand" value="${b.id}">
          <span class="check__box"></span>
          <span>${b.title}</span>
          <span class="count">${countBy(p => p.brand === b.id)}</span>
        </label>`).join('')}
    </div>`;

  box.querySelectorAll('input[data-f]').forEach(input => {
    // восстанавливаем состояние из URL
    if (input.dataset.f === 'cat' && state.cats.has(input.value)) input.checked = true;
    if (input.dataset.f === 'brand' && state.brands.has(input.value)) input.checked = true;

    input.addEventListener('change', () => {
      const f = input.dataset.f;
      const value = input.value;   /* именно свойство value, а не data-value */
      if (f === 'stock') state.onlyStock = input.checked;
      if (f === 'cat')   input.checked ? state.cats.add(value) : state.cats.delete(value);
      if (f === 'brand') input.checked ? state.brands.add(value) : state.brands.delete(value);
      renderProducts();
    });
  });
}

/* ---------- выборка и сортировка ---------- */
function filtered() {
  let list = PRODUCTS.filter(p => {
    if (state.cats.size && !state.cats.has(p.cat)) return false;
    if (state.brands.size && !state.brands.has(p.brand)) return false;
    if (state.onlyStock && !p.stock) return false;
    return true;
  });

  const byName = (a, b) => a.name.localeCompare(b.name, 'ru');
  const byPrice = (a, b) => a.price - b.price;

  const sorters = {
    popular: (a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0) || byPrice(a, b),
    'price-asc': byPrice,
    'price-desc': (a, b) => byPrice(b, a),
    name: byName,
    stock: (a, b) => (b.stock ? 1 : 0) - (a.stock ? 1 : 0) || byPrice(a, b)
  };

  return list.sort(sorters[state.sort] || sorters.popular);
}

/* ---------- отрисовка ---------- */
function renderProducts() {
  const grid = document.querySelector('[data-products]');
  const count = document.querySelector('[data-count]');
  const chips = document.querySelector('[data-chips]');
  if (!grid) return;

  const list = filtered();

  count.innerHTML = list.length
    ? `Найдено <b>${list.length}</b> ${plural(list.length, 'товар', 'товара', 'товаров')}`
    : 'Ничего не нашлось';

  grid.innerHTML = list.length
    ? list.map(productCard).join('')
    : `<div class="empty">${icon('search', 48)}<p>По этим фильтрам ничего нет.</p>
       <p style="font-size:14px;margin-top:8px">Попробуйте снять часть условий или напишите нам — скорее всего, товар есть.</p></div>`;

  renderChips(chips);
  grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

function renderChips(box) {
  if (!box) return;
  const items = [];

  state.cats.forEach(id => {
    const c = catById(id);
    if (c) items.push([id, 'cat', c.short]);
  });
  state.brands.forEach(id => {
    const b = brandById(id);
    if (b) items.push([id, 'brand', b.title]);
  });
  if (state.onlyStock) items.push(['stock', 'stock', 'Только в наличии']);

  box.innerHTML = items.map(([val, type, label]) =>
    `<span class="chip">${label}<button data-remove="${type}" data-value="${val}" aria-label="Убрать">×</button></span>`
  ).join('');

  box.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const { remove, value } = btn.dataset;
      if (remove === 'stock') state.onlyStock = false;
      else state[remove === 'cat' ? 'cats' : 'brands'].delete(value);

      document.querySelectorAll('[data-filters] input').forEach(i => {
        if (i.dataset.f === remove && i.value === value) i.checked = false;
        if (i.dataset.f === 'stock' && remove === 'stock') i.checked = false;
      });
      renderProducts();
    });
  });
}

function resetAll() {
  state.cats.clear();
  state.brands.clear();
  state.onlyStock = false;
  document.querySelectorAll('[data-filters] input').forEach(i => { i.checked = false; });
  renderProducts();
}

function plural(n, one, few, many) {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return few;
  return many;
}