/* ============================================================
   ПроБлеск — поведение сайта
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderMobileMenu();
  renderFooter();
  renderFloatWA();

  initHeader();
  initBurger();
  initForms();
  initSmoothScroll();

  // контент, который рисуют страничные скрипты, появляется позже —
  // поэтому инициализируем повторно по событию и один раз по таймеру
  document.addEventListener('content:ready', refresh);
  setTimeout(refresh, 0);
});

function refresh() {
  initIcons();
  initAccordions();
  initReveal();
}

/* ---------- иконки в разметке ---------- */
function initIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    el.insertAdjacentHTML('afterbegin', icon(el.dataset.icon, Number(el.dataset.size) || 20));
  });

  document.querySelectorAll('[data-list]').forEach(el => {
    el.insertAdjacentHTML('afterbegin', icon(el.dataset.list, 20));
  });
}

/* ---------- шапка при скролле ---------- */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header || header.dataset.bound) return;
  header.dataset.bound = '1';

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- бургер-меню ---------- */
function initBurger() {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (!burger || !menu || burger.dataset.bound) return;
  burger.dataset.bound = '1';

  const toggle = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  };

  burger.addEventListener('click', toggle);
  menu.addEventListener('click', e => { if (e.target.closest('a')) toggle(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('open')) toggle();
  });
}

/* ---------- появление при прокрутке ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible):not([data-reveal])');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px' });

  els.forEach(el => { el.dataset.reveal = '1'; io.observe(el); });
}

/* ---------- аккордеон FAQ ---------- */
function initAccordions() {
  document.querySelectorAll('.faq__q').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';

    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const body = item.querySelector('.faq__a');
      const open = item.classList.contains('open');

      // закрываем остальные
      item.closest('.faq')?.querySelectorAll('.faq__item.open').forEach(other => {
        if (other === item) return;
        other.classList.remove('open');
        other.querySelector('.faq__a').style.maxHeight = null;
      });

      item.classList.toggle('open', !open);
      body.style.maxHeight = open ? null : body.scrollHeight + 40 + 'px';
    });
  });
}

/* ---------- формы: прототип без отправки на сервер ---------- */
function initForms() {
  document.querySelectorAll('[data-form]').forEach(form => {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';

    form.addEventListener('submit', e => {
      e.preventDefault();
      const note = form.querySelector('[data-form-note]');
      const input = form.querySelector('input');
      const value = input?.value.trim();

      if (!value) { input?.focus(); return; }

      if (note) {
        note.textContent = 'Спасибо! Заявка принята — напишем или позвоним в рабочее время.';
        note.style.color = 'var(--ok)';
      }

      // в прототипе вместо отправки на сервер открываем мессенджер
      if (form.dataset.form === 'subscribe') {
        window.open(waLink(`Здравствуйте! Хочу подписаться на новинки. Мой контакт: ${value}`), '_blank');
      }

      input.value = '';
    });
  });
}

/* ---------- плавный переход по якорям ---------- */
function initSmoothScroll() {
  if (document.body.dataset.smoothBound) return;
  document.body.dataset.smoothBound = '1';

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#' || id.length < 2) return;
    if (e.defaultPrevented) return;

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}