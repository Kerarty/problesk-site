/* ============================================================
   ПроБлеск — общие UI-примитивы прототипа
   Иконки, генератор SVG-картинок товаров, рендер карточек
   ============================================================ */

/* ---------- иконки (24×24) ---------- */
const ICON = {
  drop:     '<path d="M12 2.7 6.8 8.6a7.2 7.2 0 1 0 10.4 0L12 2.7Z"/><path d="M9.4 14.2a2.6 2.6 0 0 0 2.6 2.9"/>',
  flask:    '<path d="M9.5 2.5h5M10.5 2.5v6.2L5.4 18a2 2 0 0 0 1.7 3h9.8a2 2 0 0 0 1.7-3l-5.1-9.3V2.5"/><path d="M7.4 14.8h9.2"/>',
  sparkle:  '<path d="M12 2.6 13.9 9l6.4 1.9-6.4 1.9L12 19.2 10.1 12.8 3.7 10.9 10.1 9 12 2.6Z"/><path d="M19 3v3M20.5 4.5h-3"/>',
  shield:   '<path d="M12 2.7 4.8 5.6v5.5c0 4.5 3 8.3 7.2 10.2 4.2-1.9 7.2-5.7 7.2-10.2V5.6L12 2.7Z"/><path d="m9.2 11.9 2 2 3.6-3.8"/>',
  seat:     '<path d="M7 3.5h3.6l1 7.2h4.2a3 3 0 0 1 3 3v5.8H8.4a2 2 0 0 1-2-2V3.5Z"/><path d="M17.4 10.7 19.5 19h2"/>',
  bubbles:  '<circle cx="8.6" cy="9.4" r="4.4"/><circle cx="15.4" cy="14.2" r="5.6"/><circle cx="8.2" cy="17.4" r="2.6"/>',
  panel:    '<rect x="2.6" y="4.6" width="18.8" height="12" rx="2.4"/><path d="M7 20.5h10M6.6 12.6l2.4-3 2.6 2.6 2.8-3.6 3 4"/>',
  brush:    '<path d="m14.5 3.3 6.2 6.2-7.4 7.4-6.2-6.2 7.4-7.4Z"/><path d="m7.1 10.7-3.9 3.9a2.4 2.4 0 0 0-.3 3.1l1.6 1.6a2.4 2.4 0 0 0 3.1-.3l3.9-3.9"/>',
  wind:     '<path d="M3.5 8.4h9.7a2.9 2.9 0 1 0-2.9-2.9M3.5 15.6h12.9a2.9 2.9 0 1 1-2.9 2.9M3.5 12h16.2"/>',
  home:     '<path d="M3.4 10.4 12 3.4l8.6 7v9a1.6 1.6 0 0 1-1.6 1.6H5a1.6 1.6 0 0 1-1.6-1.6v-9Z"/><path d="M9.4 21V13h5.2v8"/>',
  box:      '<path d="M20.6 7.7 12 3.2 3.4 7.7v8.6L12 20.8l8.6-4.5V7.7Z"/><path d="m3.4 7.7 8.6 4.5 8.6-4.5M12 20.8v-8.6"/>',
  arrow:    '<path d="M4.5 12h15M13.5 6l6 6-6 6"/>',
  check:    '<path d="m4.5 12.5 5 5 10-11"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12.2 2.7 2.7L16 9.5"/>',
  phone:    '<path d="M21 16.4v2.8a1.9 1.9 0 0 1-2 1.9 18.6 18.6 0 0 1-8.1-2.9 18.3 18.3 0 0 1-5.6-5.6A18.6 18.6 0 0 1 2.4 4.5a1.9 1.9 0 0 1 1.9-2H7a1.9 1.9 0 0 1 1.9 1.6c.1.9.3 1.8.6 2.7a1.9 1.9 0 0 1-.4 2L7.9 10a15 15 0 0 0 5.6 5.6l1.2-1.2a1.9 1.9 0 0 1 2-.4c.9.3 1.8.5 2.7.6A1.9 1.9 0 0 1 21 16.4Z"/>',
  pin:      '<path d="M20 10.3c0 6.1-8 12.2-8 12.2s-8-6.1-8-12.2a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.8"/>',
  clock:    '<circle cx="12" cy="12" r="9"/><path d="M12 6.8V12l3.4 2"/>',
  car:      '<path d="M5.2 16.8h13.6M4 16.8v2.4a1 1 0 0 1-1 1H2.6a1 1 0 0 1-1-1v-2.4M22.4 16.8v2.4a1 1 0 0 1-1 1h-.4a1 1 0 0 1-1-1v-2.4"/><path d="M2.2 16.8v-4l2-4.4a1.6 1.6 0 0 1 1.5-1h12.6a1.6 1.6 0 0 1 1.5 1l2 4.4v4Z"/><path d="M4.6 12.8h14.8"/>',
  star:     '<path d="m12 2.8 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.6l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.8Z"/>',
  sliders:  '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2.2"/><circle cx="10" cy="17" r="2.2"/>',
  close:    '<path d="M6 6l12 12M18 6 6 18"/>',
  search:   '<circle cx="10.8" cy="10.8" r="7.2"/><path d="m16.2 16.2 4.4 4.4"/>',
  whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Z" fill="currentColor" stroke="none"/><path d="M8.6 7.4c.3 0 .5.2.6.5l.5 1.3c.1.2 0 .4-.1.6l-.4.5c-.2.2-.2.4-.1.6a7 7 0 0 0 3.3 3.2c.3.1.4 0 .6-.1l.5-.5c.2-.2.4-.2.6-.1l1.3.6c.3.1.4.3.4.6v.6c0 .4-.3.8-.7.9-.4.2-.9.3-1.4.2-1.3-.2-2.9-.9-4.4-2.4-1.5-1.5-2.3-3-2.6-4.4-.1-.5 0-1 .2-1.4Z" fill="#04241a" stroke="none"/>',
  telegram: '<path d="M21.9 4.3 2.9 11.5c-.9.3-.9 1.6 0 1.9l4.8 1.5 1.8 5.6c.3.8 1.3 1 1.8.4l2.6-2.9 4.9 3.6c.7.5 1.7.1 1.9-.7l3.1-15c.2-.8-.6-1.5-1.9-1.6Z" fill="currentColor" stroke="none"/><path d="m7.7 14.9 11-8.6-7.6 7.2-.3 4.2-3.1-2.8Z" fill="#04241a" stroke="none"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/>',
  tiktok:   '<path d="M14.4 2.6v12.9a3.4 3.4 0 1 1-3-3.4" stroke-width="1.9"/><path d="M14.4 2.6a5.4 5.4 0 0 0 5.2 5.2"/>',
  vk:       '<path d="M3 6.6h2.6c.3 2.3 1.5 4.3 2.6 4.3.3 0 .4-.2.4-.7V6.6h2.3v4.3c0 .5.1.7.3.7.4 0 1.4-1.6 1.8-3.6h2.3c-.2 1.7-.9 3.2-1.7 4.1 1 .8 1.9 2.2 2.4 4h-2.6c-.4-1.4-1.2-2.6-1.9-2.6-.4 0-.5.2-.5.7v1.9c0 .6-.4.9-1 .9-2.4 0-5-2.3-6.4-5.3H3V6.6Z" fill="currentColor" stroke="none"/>',
  mail:     '<rect x="2.5" y="4.5" width="19" height="15" rx="2.4"/><path d="m3 6.5 9 6.5 9-6.5"/>',
  bag:      '<path d="M4 7.5h16l-1.2 12.1a1.7 1.7 0 0 1-1.7 1.5H6.9a1.7 1.7 0 0 1-1.7-1.5L4 7.5Z"/><path d="M8.6 7.5V6a3.4 3.4 0 0 1 6.8 0v1.5"/>',
  info:     '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4.5M12 8.2h.01"/>',
  tag:      '<path d="M11.4 2.8H4.2a1.4 1.4 0 0 0-1.4 1.4v7.2a2 2 0 0 0 .6 1.4l8.2 8.2a1.4 1.4 0 0 0 2 0l6.4-6.4a1.4 1.4 0 0 0 0-2l-8.2-8.2a2 2 0 0 0-1.4-.6Z"/><circle cx="7.6" cy="7.6" r="1.3"/>',
  layers:   '<path d="m12 2.8 9 4.6-9 4.6-9-4.6 9-4.6Z"/><path d="m3 12.4 9 4.6 9-4.6M3 16.9l9 4.6 9-4.6"/>',
  ruler:    '<rect x="2" y="8" width="20" height="8" rx="1.6"/><path d="M6.5 8v3M10 8v2M13.5 8v3M17 8v2"/>',
  split:    '<path d="M12 3v18"/><path d="m9.4 7-3.2 5 3.2 5M14.6 7l3.2 5-3.2 5"/>'
};

function icon(name, size = 20, stroke = 1.7) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none"
    stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${ICON[name] || ''}</svg>`;
}

/* ---------- генератор картинки товара ---------- */
let uidCounter = 0;

/* ---------- кузов: «до» (матовое) и «после» (глянец) ---------- */
/* Один и тот же силуэт в двух состояниях — их накладывают друг на друга
   и режут вертикальной границей, которую можно таскать мышью */
const CAR_BODY =
  'M 18 144 L 18 121 C 18 113 25 107 35 106 L 100 100 L 144 60 ' +
  'C 154 50 168 45 184 45 L 252 45 C 268 45 282 50 291 61 L 324 100 ' +
  'L 365 107 C 375 108 382 114 382 122 L 382 144 L 334 144 ' +
  'A 28 28 0 0 0 278 144 L 126 144 A 28 28 0 0 0 70 144 Z';

const CAR_GLASS_F = 'M 148 95 L 163 59 L 205 59 L 205 95 Z';
const CAR_GLASS_R = 'M 213 59 L 251 59 L 284 95 L 213 95 Z';

function carArt(mode) {
  const u = 'p' + (++uidCounter);
  const glossy = mode === 'after';

  const paint = glossy
    ? `<stop offset="0" stop-color="#0e4463"/>
       <stop offset=".38" stop-color="#0a2b43"/>
       <stop offset=".58" stop-color="#14618a"/>
       <stop offset=".8" stop-color="#0a2c45"/>
       <stop offset="1" stop-color="#05161f"/>`
    : `<stop offset="0" stop-color="#4a525c"/>
       <stop offset=".4" stop-color="#3e464f"/>
       <stop offset=".72" stop-color="#343b43"/>
       <stop offset="1" stop-color="#2c323a"/>`;

  const glass = glossy ? '#04121c' : '#272d34';

  /* блики по покрытию — только у «после» */
  const streaks = glossy ? `
    <g filter="url(#${u}blur)">
      <path d="M44 118 C 120 110 208 100 316 92" stroke="#ffffff"
            stroke-opacity=".55" stroke-width="5" stroke-linecap="round" fill="none"/>
      <path d="M104 84 C 158 72 226 68 292 80" stroke="#9ee2ff"
            stroke-opacity=".38" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M26 130 C 120 126 250 120 374 110" stroke="#ffffff"
            stroke-opacity=".16" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </g>
    <path d="M18 121 C 18 113 25 107 35 106 L 100 100 L 144 60
             C 154 50 168 45 184 45 L 252 45 C 268 45 282 50 291 61 L 324 100"
          fill="none" stroke="#cdeeff" stroke-opacity=".5" stroke-width="1.6"/>
    <path d="M36 110 L 100 104" stroke="#ffffff" stroke-opacity=".75"
          stroke-width="2" stroke-linecap="round" fill="none"/>` : '';

  /* разводы, пыль и водяные пятна — только у «до» */
  const grime = glossy ? '' : `
    <g fill="#c8d2de" fill-opacity=".3">
      <circle cx="128" cy="122" r="5"/><circle cx="196" cy="112" r="3.4"/>
      <circle cx="268" cy="126" r="4.2"/><circle cx="316" cy="108" r="2.8"/>
      <circle cx="88" cy="130" r="3.6"/><circle cx="236" cy="134" r="2.6"/>
      <circle cx="162" cy="118" r="2.4"/>
    </g>
    <g stroke="#d2dae4" stroke-opacity=".16" stroke-width="1.4" fill="none">
      <path d="M60 126 C 150 112 250 106 356 100"/>
      <path d="M52 132 C 146 120 244 114 360 106"/>
    </g>
    <g fill="#59616b" fill-opacity=".4">
      <ellipse cx="120" cy="146" rx="34" ry="5"/>
      <ellipse cx="300" cy="146" rx="30" ry="5"/>
    </g>`;

  const rim = glossy ? '#5fc8f5' : '#454d57';
  const rimFill = glossy ? '#0d3d59' : '#2c333b';

  return `<svg viewBox="8 34 384 164" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="${u}p" x1="0" y1="0" x2="1" y2="1">${paint}</linearGradient>
      <filter id="${u}blur" x="-15%" y="-40%" width="130%" height="180%">
        <feGaussianBlur stdDeviation="3.2"/>
      </filter>
      <filter id="${u}sh" x="-20%" y="-30%" width="140%" height="170%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000" flood-opacity=".55"/>
      </filter>
    </defs>

    <ellipse cx="200" cy="176" rx="168" ry="11" fill="#000" opacity=".5"/>
    <g filter="url(#${u}sh)">
      <path d="${CAR_BODY}" fill="url(#${u}p)"/>
      <path d="${CAR_GLASS_F}" fill="${glass}" opacity=".92"/>
      <path d="${CAR_GLASS_R}" fill="${glass}" opacity=".92"/>
      <path d="${CAR_GLASS_F}" fill="none" stroke="${rim}" stroke-opacity=".3" stroke-width="1"/>
      <path d="${CAR_GLASS_R}" fill="none" stroke="${rim}" stroke-opacity=".3" stroke-width="1"/>
      ${streaks}
      ${grime}
      <path d="M70 144 A 28 28 0 0 1 126 144" fill="none" stroke="${rim}" stroke-opacity=".35" stroke-width="1.4"/>
      <path d="M278 144 A 28 28 0 0 1 334 144" fill="none" stroke="${rim}" stroke-opacity=".35" stroke-width="1.4"/>
    </g>

    <g>
      <circle cx="98" cy="150" r="26" fill="#0a0e13"/>
      <circle cx="98" cy="150" r="26" fill="none" stroke="${rim}" stroke-opacity=".45" stroke-width="2"/>
      <circle cx="98" cy="150" r="13" fill="${rimFill}"/>
      ${glossy
        ? '<g fill="#9fe4ff" fill-opacity=".55"><rect x="94.5" y="143" width="3.5" height="6" rx="1.6" transform="rotate(0 98 146)"/><rect x="101" y="139" width="3.5" height="14" rx="1.6"/><rect x="94.5" y="152" width="3.5" height="10" rx="1.6"/><rect x="88.5" y="144" width="3.5" height="10" rx="1.6"/></g>'
        : '<circle cx="98" cy="150" r="13" fill="none" stroke="#4d555f" stroke-width="2"/>'}

      <circle cx="306" cy="150" r="26" fill="#0a0e13"/>
      <circle cx="306" cy="150" r="26" fill="none" stroke="${rim}" stroke-opacity=".45" stroke-width="2"/>
      <circle cx="306" cy="150" r="13" fill="${rimFill}"/>
      ${glossy
        ? '<g fill="#9fe4ff" fill-opacity=".55"><rect x="302.5" y="143" width="3.5" height="6" rx="1.6"/><rect x="309" y="139" width="3.5" height="14" rx="1.6"/><rect x="302.5" y="152" width="3.5" height="10" rx="1.6"/><rect x="296.5" y="144" width="3.5" height="10" rx="1.6"/></g>'
        : '<circle cx="306" cy="150" r="13" fill="none" stroke="#4d555f" stroke-width="2"/>'}

      <rect x="188" y="132" width="26" height="4" rx="2" fill="${rim}" opacity=".5"/>
      <rect x="24" y="128" width="14" height="5" rx="2.5" fill="${rim}" opacity=".55"/>
      <rect x="358" y="126" width="14" height="5" rx="2.5" fill="${rim}" opacity=".3"/>
    </g>
  </svg>`;
}

function productSVG(type, color) {
  const uid = 'g' + (++uidCounter);
  const c = color || '#4cc9f0';
  const defs = `
    <defs>
      <linearGradient id="${uid}b" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff" stop-opacity=".38"/>
        <stop offset=".28" stop-color="#ffffff" stop-opacity=".06"/>
        <stop offset="1" stop-color="#000000" stop-opacity=".28"/>
      </linearGradient>
      <linearGradient id="${uid}c" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${c}" stop-opacity=".95"/>
        <stop offset="1" stop-color="${c}" stop-opacity=".6"/>
      </linearGradient>
      <linearGradient id="${uid}m" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#4a5768"/>
        <stop offset="1" stop-color="#222b36"/>
      </linearGradient>
    </defs>`;

  let body = '';

  if (type === 'can') {
    body = `
      <ellipse cx="60" cy="36" rx="25" ry="7" fill="url(#${uid}m)"/>
      <rect x="35" y="36" width="50" height="106" fill="url(#${uid}b)"/>
      <rect x="35" y="58" width="50" height="62" fill="url(#${uid}c)"/>
      <rect x="35" y="86" width="50" height="5" fill="#0b0f14" opacity=".35"/>
      <rect x="35" y="97" width="50" height="4" fill="#0b0f14" opacity=".28"/>
      <rect x="35" y="70" width="14" height="42" fill="#fff" opacity=".14"/>
      <ellipse cx="60" cy="142" rx="25" ry="6" fill="url(#${uid}m)"/>
      <rect x="50" y="34" width="20" height="4" rx="2" fill="#0b0f14" opacity=".5"/>`;
  } else if (type === 'jar') {
    body = `
      <rect x="26" y="52" width="68" height="20" rx="6" fill="url(#${uid}m)"/>
      <rect x="30" y="70" width="60" height="74" rx="10" fill="url(#${uid}b)"/>
      <rect x="30" y="86" width="60" height="46" fill="url(#${uid}c)"/>
      <rect x="30" y="86" width="13" height="46" fill="#fff" opacity=".16"/>
      <rect x="44" y="102" width="32" height="4" rx="2" fill="#0b0f14" opacity=".3"/>
      <rect x="44" y="112" width="22" height="3" rx="1.5" fill="#0b0f14" opacity=".25"/>
      <ellipse cx="60" cy="146" rx="30" ry="6" fill="#000" opacity=".3"/>`;
  } else if (type === 'trigger') {
    body = `
      <path d="M46 30h26v14H46z" fill="url(#${uid}m)"/>
      <path d="M40 26h40v10a6 6 0 0 1-6 6H46a6 6 0 0 1-6-6V26Z" fill="url(#${uid}m)"/>
      <rect x="78" y="29" width="16" height="8" rx="4" fill="url(#${uid}m)"/>
      <path d="M44 42h32l6 16v84a10 10 0 0 1-10 10H48a10 10 0 0 1-10-10V58l6-16Z" fill="url(#${uid}b)"/>
      <rect x="40" y="72" width="40" height="56" fill="url(#${uid}c)"/>
      <rect x="40" y="72" width="11" height="56" fill="#fff" opacity=".16"/>
      <rect x="48" y="94" width="24" height="4" rx="2" fill="#0b0f14" opacity=".3"/>
      <rect x="48" y="104" width="16" height="3" rx="1.5" fill="#0b0f14" opacity=".25"/>
      <ellipse cx="60" cy="154" rx="22" ry="5" fill="#000" opacity=".3"/>`;
  } else if (type === 'box') {
    body = `
      <path d="M60 20 96 34v12L60 32 24 46V34l36-14Z" fill="${c}" opacity=".8"/>
      <path d="M24 46 60 32v92L24 138V46Z" fill="url(#${uid}b)"/>
      <path d="M60 32 96 46v92l-36 18V32Z" fill="url(#${uid}b)" opacity=".6"/>
      <path d="M60 32 96 46v92l-36 18V32Z" fill="${c}" opacity=".28"/>
      <rect x="64" y="66" width="28" height="42" fill="${c}" opacity=".55"/>
      <rect x="28" y="66" width="28" height="42" fill="#0b0f14" opacity=".25"/>
      <rect x="32" y="76" width="20" height="4" rx="2" fill="#fff" opacity=".22"/>
      <ellipse cx="60" cy="160" rx="36" ry="7" fill="#000" opacity=".32"/>`;
  } else {
    /* bottle по умолчанию */
    body = `
      <rect x="50" y="26" width="20" height="14" fill="url(#${uid}m)"/>
      <rect x="46" y="14" width="28" height="16" rx="4" fill="url(#${uid}m)"/>
      <path d="M50 40h20v14c0 3 8 8 8 16v66a10 10 0 0 1-10 10H52a10 10 0 0 1-10-10V70c0-8 8-13 8-16V40Z" fill="url(#${uid}b)"/>
      <rect x="42" y="76" width="36" height="52" fill="url(#${uid}c)"/>
      <rect x="42" y="76" width="10" height="52" fill="#fff" opacity=".16"/>
      <rect x="49" y="94" width="22" height="4" rx="2" fill="#0b0f14" opacity=".3"/>
      <rect x="49" y="104" width="14" height="3" rx="1.5" fill="#0b0f14" opacity=".25"/>
      <ellipse cx="60" cy="150" rx="21" ry="5" fill="#000" opacity=".3"/>`;
  }

  return `<svg viewBox="0 0 120 168" fill="none" xmlns="http://www.w3.org/2000/svg">${defs}${body}</svg>`;
}

/* ---------- утилиты ---------- */
const ALL_CATS = [...CATEGORIES, CATEGORY_SET];
const catById   = id => ALL_CATS.find(c => c.id === id);
const brandById = id => BRANDS.find(b => b.id === id);

const money = v => v.toFixed(2).replace('.', ',');

function priceHTML(p) {
  return `<div class="price">
    <b>${money(p.price)} <span class="price__cur">BYN</span></b>
    ${p.oldPrice ? `<s>${money(p.oldPrice)}</s>` : ''}
  </div>`;
}

function badgeHTML(p) {
  if (!p.badge) return '';
  const cls = p.badge === 'выгодно' || p.badge === 'сезон' ? 'badge--sale'
            : p.badge === 'про' ? 'badge--pro' : '';
  return `<span class="badge ${cls}">${p.badge}</span>`;
}

function waLink(text) {
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
}

function waBtn(text, label, cls = 'btn btn-wa btn-sm') {
  return `<a class="${cls}" href="${waLink(text)}" target="_blank" rel="noopener">${icon('whatsapp', 17)}${label}</a>`;
}

/* ---------- рендер карточки товара ---------- */
function productCard(p) {
  const brand = brandById(p.brand);
  return `
  <article class="product reveal">
    <a class="product__media" href="product.html?id=${p.id}">
      ${badgeHTML(p)}
      <span class="sr-only">${p.name}</span>
      ${productSVG(p.type, p.color)}
    </a>
    <div class="product__body">
      <div class="product__brand">${brand ? brand.title : ''}</div>
      <h3 class="product__name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <div class="product__vol">${p.vol}</div>
      <div class="product__foot">
        ${priceHTML(p)}
        <span class="stock ${p.stock ? '' : 'stock--out'}">${p.stock ? 'В наличии' : 'Под заказ'}</span>
      </div>
    </div>
  </article>`;
}

/* ---------- общие страницы ---------- */
function renderHeader() {
  const el = document.querySelector('[data-header]');
  if (!el) return;
  el.innerHTML = `
    <div class="container header__inner">
      <a class="logo" href="index.html">
        <span class="logo__mark">${logoMark(20)}</span>
        <span class="logo__text">Про<span>Блеск</span></span>
      </a>
      <nav class="nav">
        <a href="index.html#catalog">Каталог</a>
        <a href="catalog.html">Все товары</a>
        <a href="index.html#sets">Наборы</a>
        <a href="index.html#brands">Бренды</a>
        <a href="index.html#guides">Гайды</a>
        <a href="about.html">О магазине</a>
        <a href="delivery.html">Доставка</a>
        <a href="contacts.html">Контакты</a>
      </nav>
      <div class="header__actions">
        <a class="header__phone" href="tel:${SHOP.phoneHref}">
          <b>${SHOP.phone}</b>
          <small>Пн–Пт 9:00–19:00</small>
        </a>
        ${waBtn('Здравствуйте! Подскажите, что есть в наличии?', 'Написать', 'btn btn-wa btn-sm')}
        <button class="burger" data-burger aria-label="Меню"><span></span><span></span><span></span></button>
      </div>
    </div>`;
}

function renderMobileMenu() {
  const el = document.querySelector('[data-mobile-menu]');
  if (!el) return;
  const links = [
    ['index.html#catalog', 'Каталог'], ['catalog.html', 'Все товары'],
    ['index.html#sets', 'Готовые наборы'], ['index.html#brands', 'Бренды'],
    ['index.html#guides', 'Гайды'], ['index.html#faq', 'Вопросы'],
    ['about.html', 'О магазине'], ['delivery.html', 'Доставка и оплата'],
    ['contacts.html', 'Контакты']
  ];
  el.innerHTML = `
    <div class="container">
      ${links.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
      <a href="tel:${SHOP.phoneHref}">${SHOP.phone}</a>
      ${waBtn('Здравствуйте! Хочу уточнить ассортимент.', 'Написать в WhatsApp', 'btn btn-wa btn-block')}
    </div>`;
}

function renderFooter() {
  const el = document.querySelector('[data-footer]');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <a class="logo" href="index.html">
            <span class="logo__mark">${logoMark(20)}</span>
            <span class="logo__text">Про<span>Блеск</span></span>
          </a>
          <p>Магазин автохимии, автокосметики и товаров для детейлинга в Светлогорске. Профессиональные бренды, честные цены и помощь в подборе.</p>
          <div class="footer__social">
            <a href="${SHOP.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram', 18)}</a>
            <a href="${SHOP.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${icon('tiktok', 18)}</a>
            <a href="https://vk.com/wall-112504277_101069" target="_blank" rel="noopener" aria-label="VK">${icon('vk', 18)}</a>
            <a href="https://wa.me/${SHOP.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('whatsapp', 18)}</a>
          </div>
        </div>

        <div>
          <h3>Каталог</h3>
          <ul>
            <li><a href="catalog.html?cat=moika">Мойка кузова</a></li>
            <li><a href="catalog.html?cat=ochistiteli">Очистители</a></li>
            <li><a href="catalog.html?cat=polirovka">Полировка</a></li>
            <li><a href="catalog.html?cat=zashchita">Защита ЛКП</a></li>
            <li><a href="catalog.html?cat=salon">Салон и кожа</a></li>
            <li><a href="catalog.html?cat=sets">Готовые наборы</a></li>
          </ul>
        </div>

        <div>
          <h3>Покупателям</h3>
          <ul>
            <li><a href="about.html">О магазине</a></li>
            <li><a href="delivery.html">Доставка и оплата</a></li>
            <li><a href="delivery.html#oplata">Способы оплаты</a></li>
            <li><a href="index.html#faq">Частые вопросы</a></li>
            <li><a href="index.html#guides">Гайды по уходу</a></li>
            <li><a href="contacts.html">Контакты</a></li>
          </ul>
        </div>

        <div>
          <h3>Адрес и часы</h3>
          <ul>
            <li><span>${SHOP.address}</span></li>
            <li><a href="tel:${SHOP.phoneHref}">${SHOP.phone}</a></li>
            <li><span>${SHOP.hours[0].d}: ${SHOP.hours[0].t}<br>Сб: ${SHOP.hours[1].t}<br>Вс: ${SHOP.hours[2].t}</span></li>
            <li><a href="https://yandex.by/maps/org/problesk/236214146885/" target="_blank" rel="noopener">Открыть в Яндекс.Картах</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} ${SHOP.name} · ${SHOP.legal}</span>
        <span>Демонстрационный прототип сайта</span>
      </div>
    </div>`;
}

function logoMark(size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none">
    <path d="M13.5 2 5 13.2h5.2L9.4 22l8.6-11.6h-5.4L13.5 2Z" fill="#04202c"/>
  </svg>`;
}

function renderFloatWA() {
  if (document.querySelector('.float-wa')) return;
  const a = document.createElement('a');
  a.className = 'float-wa';
  a.href = waLink('Здравствуйте! Подскажите, что есть в наличии?');
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Написать в WhatsApp');
  a.innerHTML = icon('whatsapp', 28);
  document.body.appendChild(a);
}