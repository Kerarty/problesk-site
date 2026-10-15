/* ============================================================
   ПроБлеск — демонстрационные данные каталога
   ВНИМАНИЕ: это прототип. Цены и позиции условные,
   перед запуском заменяются на реальный прайс магазина.
   Подтверждённые бренды: Shine Systems, Leraton, ProBlesk
   ============================================================ */

const CATEGORIES = [
  { id: 'moika',      title: 'Мойка и очистка кузова',  short: 'Мойка кузова',      icon: 'drop',     desc: 'Шампуни, пена, бесконтактные составы для ручной и аппаратной мойки' },
  { id: 'ochistiteli',title: 'Очистители и концентраты',short: 'Очистители',         icon: 'flask',    desc: 'Битум, тормоза, ДВС, цепь, шасси — то, что не берут обычной мойкой' },
  { id: 'polirovka',  title: 'Полировка',              short: 'Полировка',         icon: 'sparkle',  desc: 'Пасты, абразивы, круги и пады для восстановления ЛКП' },
  { id: 'zashchita',  title: 'Защита ЛКП и стекла',    short: 'Защита',            icon: 'shield',   desc: 'Воски, силиконы, керамика и «антидождь» на кузов и стёкла' },
  { id: 'salon',      title: 'Уход за салоном и кожей', short: 'Салон и кожа',      icon: 'seat',     desc: 'Очистка, консервация и питание кожи, уход за пластиком салона' },
  { id: 'himchistka', title: 'Химчистка и пятновыводители', short: 'Химчистка',    icon: 'bubbles',  desc: 'Пятновыводители для текстиля, пена для глубокой чистки салона' },
  { id: 'plastik',    title: 'Пластик и приборная панель', short: 'Пластик',       icon: 'panel',    desc: 'Матирование, кондиционеры, антистатик для торпедо и бамперов' },
  { id: 'rashodniki', title: 'Расходники и инвентарь',  short: 'Расходники',        icon: 'brush',    desc: 'Перчатки, микрофибра, вёдра, кисти, триггеры и компрессоры' },
  { id: 'aromaty',    title: 'Автопарфюм и ароматизация', short: 'Ароматизация',    icon: 'wind',     desc: 'Автопарфюмы и ароматизаторы салона — последний штрих к чистоте' },
  { id: 'universal',  title: 'Универсальные средства',  short: 'Для дома и быта',   icon: 'home',     desc: 'То же, что в гараже, но и для зеркал, мебели, ковров и техники' }
];

const BRANDS = [
  { id: 'shinesystems', title: 'Shine Systems', desc: 'Профессиональная химия', color: '#4cc9f0' },
  { id: 'leraton',      title: 'Leraton',      desc: 'Профессиональная химия', color: '#a78bfa' },
  { id: 'problesk',     title: 'ProBlesk',     desc: 'Собственная линейка',     color: '#38bdf8' },
  { id: 'grass',        title: 'GRASS',        desc: 'Белорусский бренд',       color: '#34d399' },
  { id: 'koch',         title: 'Koch-Chemie',  desc: 'Германия, с 1968 года',   color: '#fbbf24' },
  { id: 'meguia',       title: "Meguiar's",    desc: 'США',                     color: '#f472b6' },
  { id: 'sonax',        title: 'Sonax',        desc: 'Германия',                color: '#22d3ee' },
  { id: 'turtlewax',    title: 'Turtle Wax',   desc: 'Классика ухода',          color: '#4ade80' }
];

/* type: bottle | can | jar | trigger | box */
const PRODUCTS = [
  // Мойка и очистка кузова
  { id: 'ss-lollipop', name: 'Lollipop Shampoo', brand: 'shinesystems', cat: 'moika', vol: '1 л', price: 24.90, type: 'bottle', color: '#c084fc', stock: true, badge: 'хит', desc: 'Яркий шампунь с активной пеной. Хорошо пенится даже в жёсткой воде, смывается без разводов. Подходит для ежедневной мойки и для предварительного замачивания.' },
  { id: 'ss-otto', name: 'Otto Shine Foam', brand: 'shinesystems', cat: 'moika', vol: '20 л', price: 68.00, type: 'can', color: '#38bdf8', stock: true, desc: 'Пена для бесконтактной мойки. Держится на кузове несколько минут и уносит основную грязь, облегчая ручную мойку. Хватает на несколько автомобилей.' },
  { id: 'ss-blackstar', name: 'Black Star Shine гель', brand: 'shinesystems', cat: 'moika', vol: '1 л', price: 21.50, type: 'bottle', color: '#1e3a8a', stock: true, desc: 'Гель для мойки с сильной пеной. Дозируется через пенную пистолетную насадку, экономичен в расходе.' },
  { id: 'ss-apc', name: 'Universal Cleaner', brand: 'shinesystems', cat: 'moika', vol: '5 л', price: 41.00, type: 'can', color: '#60a5fa', stock: true, desc: 'Универсальный очиститель для кузова и салона. Разводится водой в зависимости от загрязнения.' },
  { id: 'gr-shampoo', name: 'Шампунь для мойки', brand: 'grass', cat: 'moika', vol: '5 л', price: 33.50, type: 'can', color: '#34d399', stock: true, desc: 'Мягкое моющее средство белорусского бренда. Подходит и для бесконтактной мойки, и для ручной пены.' },
  { id: 'sx-pfll', name: 'PFLL пена для пыли', brand: 'sonax', cat: 'moika', vol: '5 л', price: 87.00, type: 'can', color: '#22d3ee', stock: false, desc: 'Пена для бесконтактного нанесения. Отлично работает как «второе пенное» средство при сильной грязи.' },
  { id: 'tw-shampoo', name: 'Car Wash Shampoo', brand: 'turtlewax', cat: 'moika', vol: '2.5 л', price: 45.00, type: 'bottle', color: '#4ade80', stock: true, desc: 'Классический шампунь с воском. Придаёт лёгкий блеск даже без отдельного воска.' },

  // Очистители и концентраты
  { id: 'ss-bitum', name: 'Очиститель битума и карамели', brand: 'shinesystems', cat: 'ochistiteli', vol: '1 л', price: 29.90, type: 'bottle', color: '#78350f', stock: true, badge: 'хит', desc: 'Растворяет битум, следы насекомых и птичьего помёта. Наносится на сухой кузов, выдерживается пару минут, смывается пеной.' },
  { id: 'ss-brake', name: 'Очиститель тормозов', brand: 'shinesystems', cat: 'ochistiteli', vol: '500 мл', price: 19.50, type: 'trigger', color: '#dc2626', stock: true, desc: 'Растворяет пыль с колодок и дисков. Не оставляет следов на резине и лакокраске.' },
  { id: 'ss-carb', name: 'Очиститель карбюратора и дросселя', brand: 'shinesystems', cat: 'ochistiteli', vol: '500 мл', price: 21.00, type: 'trigger', color: '#0ea5e9', stock: true, desc: 'Вытягивает нагар из заслонок и впуска. Без остатка, не оставляет масляной плёнки.' },
  { id: 'ss-engine', name: 'Очиститель двигателя пенный', brand: 'shinesystems', cat: 'ochistiteli', vol: '1 л', price: 26.00, type: 'bottle', color: '#475569', stock: true, desc: 'Пена для мойки двигательного отсека. Не сушит резиновые патрубки и проводку при соблюдении дозировки.' },
  { id: 'ss-chain', name: 'Очиститель цепи', brand: 'shinesystems', cat: 'ochistiteli', vol: '500 мл', price: 23.00, type: 'trigger', color: '#f59e0b', stock: true, desc: 'Выносит грязь и старую смазку из цепи ГРМ, не притягивая пыль обратно.' },
  { id: 'lr-chain', name: 'Цепь: очистка и смазка', brand: 'leraton', cat: 'ochistiteli', vol: '400 мл', price: 27.50, type: 'trigger', color: '#a78bfa', stock: true, desc: 'Двухфазное средство: сначала очищает, потом оставляет защитную смазку.' },
  { id: 'ss-asphalt', name: 'Антибитумный гель', brand: 'shinesystems', cat: 'ochistiteli', vol: '1 л', price: 34.00, type: 'bottle', color: '#92400e', stock: true, desc: 'Гелевая текстура дольше держится на вертикальных поверхностях — удобно для арок и порогов.' },

  // Полировка
  { id: 'ss-xxl', name: 'XXL Ceramic', brand: 'shinesystems', cat: 'polirovka', vol: '100 мл', price: 39.90, type: 'jar', color: '#f8fafc', stock: true, badge: 'топ', desc: 'Полировальная «зубная паста». Срезает голограммы и равномерно выравнивает тон, финишный этап перед финишной защитой.' },
  { id: 'ss-hard', name: 'Абразивная полировальная паста', brand: 'shinesystems', cat: 'polirovka', vol: '1 кг', price: 62.00, type: 'jar', color: '#fb923c', stock: true, desc: 'Резащая паста для глубокого восстановления. Требует опыта и контроля температуры.' },
  { id: 'ss-gloss', name: 'Полировальный состав средней агрессии', brand: 'shinesystems', cat: 'polirovka', vol: '1 л', price: 44.00, type: 'bottle', color: '#e2e8f0', stock: true, desc: 'Основной рабочий состав для большинства задач: сколы, помутнения, неравномерность ЛКП.' },
  { id: 'ss-disk', name: 'Полировальный круг грубый', brand: 'shinesystems', cat: 'polirovka', vol: '150 мм', price: 18.50, type: 'box', color: '#64748b', stock: true, desc: 'Жёсткий синтетический круг для начального этапа полировки.' },
  { id: 'ss-disc-mid', name: 'Полировальный круг средний', brand: 'shinesystems', cat: 'polirovka', vol: '150 мм', price: 17.50, type: 'box', color: '#38bdf8', stock: true, desc: 'Универсальный круг для основного этапа — работает по большинству покрытий.' },
  { id: 'ss-disc-soft', name: 'Полировальный круг мягкий', brand: 'shinesystems', cat: 'polirovka', vol: '150 мм', price: 16.50, type: 'box', color: '#22d3ee', stock: true, desc: 'Финишный круг для нанесения паст и восков без разводов.' },
  { id: 'ss-pad-green', name: 'Поролоновая подложка', brand: 'shinesystems', cat: 'polirovka', vol: '150 мм', price: 22.00, type: 'box', color: '#4ade80', stock: true, desc: 'Толстая подложка для жёстких паст, заменяет тарелку на финишном этапе.' },

  // Защита ЛКП и стекла
  { id: 'ss-ceramic9h', name: 'Shine Ceramic 9H H2O', brand: 'shinesystems', cat: 'zashchita', vol: '500 мл', price: 69.00, type: 'bottle', color: '#22d3ee', stock: true, badge: 'топ', desc: 'Гибридный керамический состав 9H. Держится несколько месяцев, отталкивает воду и зимнюю грязь. Для кузова и стёкол.' },
  { id: 'ss-antidrain', name: 'Антидождь для стёкол', brand: 'shinesystems', cat: 'zashchita', vol: '500 мл', price: 32.00, type: 'trigger', color: '#0ea5e9', stock: true, badge: 'хит', desc: 'Работает как водоотталкиватель в дождь и как антиicing зимой. Два стекла в одну секунду.' },
  { id: 'lr-ceramic', name: 'Керамика для кузова', brand: 'leraton', cat: 'zashchita', vol: '500 мл', price: 58.00, type: 'bottle', color: '#a78bfa', stock: true, desc: 'Жидкий керамический защитный состав с высокой твёрдостью и глубоким блеском.' },
  { id: 'ss-wax', name: 'Твёрдый воск', brand: 'shinesystems', cat: 'zashchita', vol: '400 мл', price: 38.50, type: 'jar', color: '#fbbf24', stock: true, desc: 'Классический твёрдый воск. Наносится тонким слоем, убирает мелкие царапины и оставляет тёплый блеск.' },
  { id: 'ss-silicone', name: 'Силиконовая защита пластика', brand: 'shinesystems', cat: 'zashchita', vol: '1 л', price: 28.00, type: 'bottle', color: '#818cf8', stock: true, desc: 'Восстанавливает и защищает резиновые и пластиковые детали, возвращает насыщенный цвет.' },
  { id: 'ss-glass-coat', name: 'Покрытие для стекла', brand: 'shinesystems', cat: 'zashchita', vol: '500 мл', price: 45.00, type: 'bottle', color: '#93c5fd', stock: true, desc: 'Гидрофобное покрытие для автомобильного стекла. Вода скатывается, дворники работают тише.' },

  // Салон и кожа
  { id: 'ss-leather', name: 'Очиститель кожи салона', brand: 'shinesystems', cat: 'salon', vol: '500 мл', price: 24.00, type: 'trigger', color: '#a16207', stock: true, badge: 'хит', desc: 'Мягко очищает кожу, не пересушивая её. Убирает заломы и следы от рук, подходит для светлых тканей.' },
  { id: 'ss-leather-cond', name: 'Кондиционер для кожи', brand: 'shinesystems', cat: 'salon', vol: '500 мл', price: 26.00, type: 'bottle', color: '#b45309', stock: true, desc: 'Питает кожу после очистки, возвращает эластичность и снимает матовость.' },
  { id: 'ss-textile', name: 'Пятновыводитель для текстиля', brand: 'shinesystems', cat: 'salon', vol: '500 мл', price: 22.50, type: 'trigger', color: '#34d399', stock: true, desc: 'Работает по свежим и застарелым пятнам на креслах, коврах и потолке.' },
  { id: 'lr-leather', name: 'Уход за кожей: комплект', brand: 'leraton', cat: 'salon', vol: '2 × 500 мл', price: 47.00, type: 'box', color: '#a78bfa', stock: true, desc: 'Очиститель и кондиционер в одной упаковке — оптимальная пара для регулярного ухода.' },
  { id: 'ss-plastic-clean', name: 'Очиститель пластика', brand: 'shinesystems', cat: 'salon', vol: '1 л', price: 23.00, type: 'bottle', color: '#64748b', stock: true, desc: 'Убирает жирный налёт и следы от еды с пластиковых панелей салона.' },
  { id: 'ss-antistatic', name: 'Антистатик салона', brand: 'shinesystems', cat: 'salon', vol: '1 л', price: 20.00, type: 'bottle', color: '#c084fc', stock: true, desc: 'Пыль не садится на несколько недель после обработки.' },

  // Химчистка
  { id: 'ss-foam', name: 'Пена для глубокой чистки', brand: 'shinesystems', cat: 'himchistka', vol: '1 л', price: 30.00, type: 'can', color: '#38bdf8', stock: true, desc: 'Работает с пылесосом или вручную. Поднимает грязь из ворса и швов.' },
  { id: 'ss-oxicleaner', name: 'Универсальный пятновыводитель', brand: 'shinesystems', cat: 'himchistka', vol: '1 л', price: 27.00, type: 'bottle', color: '#10b981', stock: true, desc: 'Кислородный состав: работает даже с застарелыми и застарелыми пятнами на обивке.' },
  { id: 'gr-spray', name: 'Спрей-антистатик', brand: 'grass', cat: 'himchistka', vol: '500 мл', price: 14.00, type: 'trigger', color: '#34d399', stock: true, desc: 'Бюджетное решение для регулярного ухода за пластиком и стеклом.' },
  { id: 'ss-protect-suite', name: 'Защитные костюмы для покраски', brand: 'shinesystems', cat: 'himchistka', vol: '1 шт', price: 38.00, type: 'box', color: '#fbbf24', stock: true, desc: 'Синтетический костюм для малярных работ и локальной покраски. Не впитывает краску.' },

  // Расходники
  { id: 'ss-gloves', name: 'Перчатки для мойки', brand: 'shinesystems', cat: 'rashodniki', vol: 'пара', price: 8.50, type: 'box', color: '#22d3ee', stock: true, badge: 'хит', desc: 'Многоразовые, не царапают лак при правильной технике мойки. Размер L.' },
  { id: 'ss-microfiber', name: 'Микрофибра 40×40', brand: 'shinesystems', cat: 'rashodniki', vol: '1 шт', price: 5.00, type: 'box', color: '#38bdf8', stock: true, desc: 'Плотная салфетка без ворса для финишной сушки и нанесения воска.' },
  { id: 'ss-microfiber-xl', name: 'Микрофибра 60×90', brand: 'shinesystems', cat: 'rashodniki', vol: '1 шт', price: 9.00, type: 'box', color: '#0ea5e9', stock: true, desc: 'Большая салфетка для кузова и раскрыш дверей.' },
  { id: 'ss-towel', name: 'Полотенце с коротким ворсом', brand: 'shinesystems', cat: 'rashodniki', vol: '50×80 см', price: 16.00, type: 'box', color: '#818cf8', stock: true, desc: 'Для бесконтактной сушки окна и зеркала — без полос.' },
  { id: 'ss-bucket', name: 'Ведро 10 л с решёткой', brand: 'shinesystems', cat: 'rashodniki', vol: '10 л', price: 11.50, type: 'box', color: '#475569', stock: true, desc: 'Два ведра — одно для чистой воды, второе для пены. Разделение окунаний.' },
  { id: 'ss-brush', name: 'Щётка для мойки колеса', brand: 'shinesystems', cat: 'rashodniki', vol: '1 шт', price: 13.00, type: 'box', color: '#fb923c', stock: true, desc: 'Жёсткая щётинка для арок и дисков. Удлинённая ручка — достаёт до низа.' },
  { id: 'ss-detail-brush', name: 'Кисть детальная', brand: 'shinesystems', cat: 'rashodniki', vol: '1 шт', price: 6.50, type: 'box', color: '#f472b6', stock: true, desc: 'Для сеток радиатора, надписей и узких щелей.' },
  { id: 'ss-trigger', name: 'Пульверизатор 750 мл', brand: 'shinesystems', cat: 'rashodniki', vol: '750 мл', price: 7.50, type: 'trigger', color: '#94a3b8', stock: true, desc: 'Сменный пульверизатор для домашних составов.' },
  { id: 'ss-compressor', name: 'Компрессор для продувки', brand: 'shinesystems', cat: 'rashodniki', vol: '1 шт', price: 45.00, type: 'box', color: '#e2e8f0', stock: false, desc: 'Убирает влагу из воздушных логтей и зеркал после мойки.' },

  // Ароматизация
  { id: 'sc-venty', name: 'Автопарфюм SCENTINY Premium', brand: 'problesk', cat: 'aromaty', vol: '300 г', price: 18.50, type: 'can', color: '#818cf8', stock: true, badge: 'хит', desc: 'Ненавязчивый аромат, который раскрывается постепенно. Держится около двух месяцев.' },
  { id: 'sc-ornate', name: 'Автопарфюм SCENTINY Ornate', brand: 'problesk', cat: 'aromaty', vol: '300 г', price: 18.50, type: 'can', color: '#f472b6', stock: true, desc: 'Вторая ароматическая линейка — для тех, кому нужен другой характер запаха.' },
  { id: 'ss-ozone', name: 'Озонирование салона', brand: 'shinesystems', cat: 'aromaty', vol: '1 шт', price: 35.00, type: 'can', color: '#38bdf8', stock: true, desc: 'Убирает запах табака, животных и затхлости. Работает как гель или генератор.' },

  // Универсальные
  { id: 'ss-univ', name: 'Универсальный очиститель 5 л', brand: 'problesk', cat: 'universal', vol: '5 л', price: 26.50, type: 'can', color: '#38bdf8', stock: true, desc: 'Стекло, зеркала, мебель, ковры, техника. Из гаража — в быт.' },
  { id: 'ss-ceramic-univ', name: 'Полироль для мебели и пластика', brand: 'problesk', cat: 'universal', vol: '500 мл', price: 19.00, type: 'bottle', color: '#0ea5e9', stock: true, desc: 'Придаёт глянец ламинированным поверхностям и пластику.' },
  { id: 'ss-glass-univ', name: 'Стеклоочиститель', brand: 'problesk', cat: 'universal', vol: '750 мл', price: 8.00, type: 'trigger', color: '#a78bfa', stock: true, desc: 'Без разводов на стекле и зеркалах, обычное бытовое решение.' },
  { id: 'lr-univ', name: 'Универсальный очиститель Leraton', brand: 'leraton', cat: 'universal', vol: '5 л', price: 31.00, type: 'can', color: '#a78bfa', stock: true, desc: 'Концентрат для любых твёрдых поверхностей. Разводится от 1:20 до 1:100.' },

  // Готовые наборы
  { id: 'set-start', name: 'Стартовый набор для мойки', brand: 'problesk', cat: 'sets', vol: 'комплект', price: 89.00, oldPrice: 112.60, type: 'box', color: '#38bdf8', stock: true, badge: 'выгодно', desc: 'Всё для первой качественной мойки дома: шампунь, пена для бесконтактной мойки, перчатки, две салфетки и ведро с решёткой. Экономия 21%.', isSet: true },
  { id: 'set-winter', name: 'Зимний набор', brand: 'problesk', cat: 'sets', vol: 'комплект', price: 134.00, oldPrice: 168.50, type: 'box', color: '#22d3ee', stock: true, badge: 'сезон', desc: 'Для мойки после соляных реагентов: активная пена, очиститель тормозов, антидождь, перчатки и тряпка. Экономия 20%.', isSet: true },
  { id: 'set-salon', name: 'Набор для салона', brand: 'problesk', cat: 'sets', vol: 'комплект', price: 118.00, oldPrice: 148.50, type: 'box', color: '#a78bfa', stock: true, badge: 'выгодно', desc: 'Очиститель кожи, кондиционер, пятновыводитель и микрофибра. Экономия 21%.', isSet: true },
  { id: 'set-detailing', name: 'Набор для полировки', brand: 'problesk', cat: 'sets', vol: 'комплект', price: 235.00, oldPrice: 301.50, type: 'box', color: '#fbbf24', stock: true, badge: 'про', desc: 'Для тех, кто делает полировку сам: паста средней агрессии, финишная паста, два круга, подложка и перчатки. Экономия 22%.', isSet: true },
  { id: 'set-detail-pro', name: 'Профессиональный набор для детейлинга', brand: 'problesk', cat: 'sets', vol: 'комплект', price: 412.00, oldPrice: 520.00, type: 'box', color: '#f472b6', stock: false, badge: 'про', desc: 'Большая фасовка профессиональной химии: очиститель, шампунь, керамика, воск и расходники. Экономия 21%.', isSet: true }
];

const CATEGORY_SET = { id: 'sets', title: 'Готовые наборы', short: 'Наборы', icon: 'box', desc: 'Собранные комплекты под типовые задачи — дешевле, чем по отдельности' };

const REVIEWS = [
  { name: 'Максим Р.', src: 'Яндекс.Карты', text: 'Если нужна автохимия, то вам сюда. Золотое яблоко для мужиков.', date: '25 августа' },
  { name: 'Андрей, детейлинг-студия', src: 'Instagram', text: 'Беру очиститель цепи и пасты регулярно. Всё свежее, что заказывают — приезжает в тот же день. Приятно работать.', date: 'октябрь' },
  { name: 'Ольга', src: 'Instagram', text: 'Набрала набор для салона по телефону, помогли подобрать под тканевые кресла. Ушла с полным пакетом и не разбиралась сама.', date: 'сентябрь' }
];

const FAQ = [
  { q: 'Работаете ли вы с организациями?', a: 'Да. С автомойками, детейлинг-студиями и автосервисами — отсрочка и безналичный расчёт с закрывающими документами. Для крупных объёмов подберём фасовку под ваш расход.' },
  { q: 'Как быстро доставляете?', a: 'По Светлогорску — в день заказа при оформлении до 15:00. По Гомельской и Брестской областям — 1–2 дня. Отправляем по Беларуси.' },
  { q: 'Можно заказать товар, которого нет в наличии?', a: 'Да, напишите в мессенджер или позвоните. Большую часть позиций привозим под заказ за 1–3 дня, редкие — уточним срок.' },
  { q: 'Поможете подобрать средство под мою задачу?', a: 'Это основная часть работы. Опишите, что хотите сделать — подберём состав и объём, скажем, хватит ли одного. Консультация бесплатная и без обязательств.' },
  { q: 'Как часто нужно обновлять защиту?', a: 'Керамика и силикон — 3–6 месяцев в зависимости от условий и мойки. Твёрдый воск держится дольше и дешевле в поддержке.' },
  { q: 'Можно ли вымыть машину зимой на улице?', a: 'Технически да, но есть риск: на холоде вода в швах и замках замерзает, а пена хуже вспенивается. Мы советуем мойть в отапливаемом помещении или убирать соль в тепле.' },
  { q: 'Подойдут ли средства из магазина для уборки дома?', a: 'Да, значительная часть составов универсальна — стекло, мебель, ковры, техника. В каталоге для таких позиций есть отдельная категория «Для дома и быта».' },
  { q: 'Какие бренды у вас есть?', a: 'Shine Systems, Leraton и собственная линейка ProBlesk — профессиональная химия. Плюс GRASS, Koch-Chemie, Meguiar’s, Sonax, Turtle Wax. Ассортимент обновляем примерно каждые три недели.' }
];

const GUIDES = [
  { title: 'Как убрать битум с кузова: 5 способов, которые реально работают', tag: 'Очистка', date: '12 октября 2026', excerpt: 'Битюм плавится на солнце и въедается в лак. Разбираем, что работает безопасно и без снятия покрытия.' },
  { title: 'Антидождь, керамика или воск — в чём разница', tag: 'Защита', date: '28 сентября 2026', excerpt: 'Три разных бюджета и три разных срока службы. Объясняем простыми словами, что выбрать и в каком порядке наносить.' },
  { title: 'Как правильно мыть машину зимой в Беларуси', tag: 'Сезон', date: '14 сентября 2026', excerpt: 'Соль, реагенты, минусовые температуры. Пошаговый порядок мойки, который не убивает ЛКП.' }
];

const SHOP = {
  name: 'ПроБлеск',
  legal: 'ООО «БуселАвто», УНП 491662355',
  address: 'г. Светлогорск, ул. Мирошниченко, 25/1, помещение 4',
  phone: '+375 (29) 150-24-93',
  phoneHref: '+375291502493',
  email: 'ab.buslik@yandex.by',
  hours: [
    { d: 'Понедельник — пятница', t: '09:00 — 19:00' },
    { d: 'Суббота', t: '09:00 — 15:00' },
    { d: 'Воскресенье', t: 'выходной' }
  ],
  coords: '52.625584,29.751250',
  whatsapp: '375291502493',
  viber: '375291502493',
  instagram: 'https://www.instagram.com/problesk.svetlogorsk/',
  tiktok: 'https://www.tiktok.com/@problesk.svetlogorsk'
};