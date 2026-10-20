(function () {
  // Lingue disponibili, nell'ordine in cui compaiono nel menu.
  // Il nome del bar, "Sunshine", non viene mai tradotto.
  var LINGUE = [
    { c: 'it', n: 'Italiano' },
    { c: 'en', n: 'English' },
    { c: 'ru', n: 'Русский' },
    { c: 'es', n: 'Español' },
    { c: 'fr', n: 'Français' }
  ];

  // L'italiano è il testo già scritto nelle pagine; qui ci sono le altre lingue.
  var T = {
    en: {
      'n.foto': 'Photos', 'n.orario': 'Hours', 'n.prezzi': 'Prices', 'n.dove': 'Find us', 'b.dove': 'Find us',
      'aria.isola': 'Site shortcuts', 'aria.home': 'Sunshine, back to home',
      'citta': 'Livorno', 'sotto': 'Breakfasts, lunches, dinners and sunset aperitifs.',
      'striscia': 'The right place for quick, tasty lunches',
      'sapori.t': 'Flavours', 'sapori.l': 'For every moment',
      'sapori.p': 'From breakfast to aperitif, by way of lunch and dinner: here there is a flavour for every moment of the day. Fresh, light dishes, heartier ones, something sweet to finish. Choose what you feel like, and for prices have a look at the dedicated page.',
      'sapori.alt': 'Two filled focaccias: one with prosciutto, stracchino cheese and rocket, one with prosciutto and mozzarella',
      'aper.t': 'Aperitivo', 'aper.l': 'At sunset',
      'aper.p1': 'As Dante used to say, an aperitif with someone special is a tonic for the soul. Even though Dante never actually said these words, you can come and try our magical aperitifs with all the people you love.',
      'aper.p2': 'Tasty bites and bubbles for your aperitif.',
      'aper.alt': 'Small cups of salad with courgette, salmon and redcurrants, in front of bottles of sparkling wine',
      'vista.t': 'View', 'vista.l': 'The terrace',
      'vista.p1': 'From our terrace you can enjoy the view of the Fortezza Vecchia (Old Fortress), one of the most famous structures in Livorno: built by the Medici in the sixteenth century, it overlooks the port and stands on the remains of an older castle.',
      'vista.p2': 'A few steps from its entrance gate stands the Monument of the Four Moors, another symbol of the city: the statue of Ferdinando I de&rsquo; Medici with four bronze prisoners at his feet. It is said that finding the spot from which all four noses can be seen brings good luck.',
      'vista.alt': 'Table with a view of the port of Livorno at sunset',
      'fin.t': 'See you soon', 'o.t': 'Opening hours',
      'g1': 'Monday', 'g2': 'Tuesday', 'g3': 'Wednesday', 'g4': 'Thursday', 'g5': 'Friday', 'g6': 'Saturday', 'g0': 'Sunday', 'chiuso': 'Closed',
      'foot.o': 'Hours: Monday &ndash; Saturday 8:00 &ndash; 21:00, Sunday closed',
      'chiudi': 'Close',
      'p.t': 'Prices', 'p.home': 'Back to home',
      'c1': 'Salads', 'c2': 'First courses', 'c3': 'Main courses', 'c4': 'Desserts',
      'e1': '', 'e2': '', 'e3': '', 'e4': '',
      'd.sunshine': 'Lettuce, mozzarella, tomatoes, egg, tuna, corn',
      'd.caprese': 'Tomatoes, mozzarella, oregano',
      'd.carpaccio': 'Bresaola carpaccio (thinly sliced cured beef) with grana cheese and salad',
      'd.lasagne': 'Lasagne with tomato and meat',
      'd.lasagneveg': 'Vegetarian lasagne with seasonal vegetables',
      'd.gnocchetti': 'Gnocchetti with four cheeses',
      'd.carbonara': 'Pasta with bacon and eggs',
      'd.linguine': 'Linguine with shellfish',
      'd.orata': 'Steamed sea bream fillet',
      'd.salmone': 'Steamed salmon steak',
      'd.polpette': 'Meatballs in tomato sauce',
      'd.tagliere': 'Mix of cured meats and cheeses, for 2 people',
      'd.crema': 'Crème brûlée',
      'servizio': 'Service charge &euro; 2'
    },
    es: {
      'n.foto': 'Fotos', 'n.orario': 'Horario', 'n.prezzi': 'Precios', 'n.dove': 'Ubicación', 'b.dove': 'Dónde estamos',
      'aria.isola': 'Atajos del sitio', 'aria.home': 'Sunshine, volver al inicio',
      'citta': 'Livorno', 'sotto': 'Desayunos, comidas, cenas y aperitivos al atardecer.',
      'striscia': 'El sitio ideal para comidas rápidas y sabrosas',
      'sapori.t': 'Sabores', 'sapori.l': 'Para cada momento',
      'sapori.p': 'Del desayuno al aperitivo, pasando por la comida y la cena: aquí hay un sabor para cada momento del día. Platos frescos y ligeros, otros más contundentes y algo dulce para terminar. Elige según tu antojo y, para los precios, echa un vistazo a la página dedicada.',
      'sapori.alt': 'Dos focaccias rellenas: una con jamón curado, stracchino y rúcula, otra con jamón curado y mozzarella',
      'aper.t': 'Aperitivo', 'aper.l': 'Al atardecer',
      'aper.p1': 'Como decía Dante, un aperitivo con una persona especial es un bálsamo para el alma. Aunque Dante nunca dijo estas palabras, puedes venir a probar nuestros mágicos aperitivos con todas las personas que amas.',
      'aper.p2': 'Bocados y burbujas para el aperitivo.',
      'aper.alt': 'Vasitos con ensalada, calabacín, salmón y grosellas rojas, delante de botellas de espumoso',
      'vista.t': 'Vistas', 'vista.l': 'La terraza',
      'vista.p1': 'Desde nuestra terraza puedes disfrutar de la vista de la Fortezza Vecchia (Fortaleza Vieja), una de las estructuras más famosas de Livorno: construida por los Médici en el siglo XVI, da al puerto y se alza sobre los restos de un castillo más antiguo.',
      'vista.p2': 'A pocos pasos de su puerta de entrada se encuentra el monumento de los Cuatro Moros, otro símbolo de la ciudad: la estatua de Fernando I de Médici con cuatro prisioneros de bronce a sus pies. Se dice que encontrar el punto desde el que se ven las cuatro narices trae buena suerte.',
      'vista.alt': 'Mesa con vistas al puerto de Livorno al atardecer',
      'fin.t': 'Nos vemos', 'o.t': 'Horario',
      'g1': 'Lunes', 'g2': 'Martes', 'g3': 'Miércoles', 'g4': 'Jueves', 'g5': 'Viernes', 'g6': 'Sábado', 'g0': 'Domingo', 'chiuso': 'Cerrado',
      'foot.o': 'Horario: lunes &ndash; sábado 8:00 &ndash; 21:00, domingo cerrado',
      'chiudi': 'Cerrar',
      'p.t': 'Precios', 'p.home': 'Volver al inicio',
      'c1': 'Ensaladas', 'c2': 'Primeros platos', 'c3': 'Segundos platos', 'c4': 'Postres',
      'e1': '', 'e2': '', 'e3': '', 'e4': '',
      'd.sunshine': 'Lechuga, mozzarella, tomates, huevo, atún, maíz',
      'd.caprese': 'Tomates, mozzarella, orégano',
      'd.carpaccio': 'Carpaccio de bresaola (ternera curada en lonchas finas) con grana y ensalada',
      'd.lasagne': 'Lasaña con tomate y carne',
      'd.lasagneveg': 'Lasaña vegetariana con verduras de temporada',
      'd.gnocchetti': 'Ñoquis con cuatro quesos',
      'd.carbonara': 'Pasta con panceta y huevos',
      'd.linguine': 'Linguine con marisco',
      'd.orata': 'Filete de dorada al vapor',
      'd.salmone': 'Rodaja de salmón al vapor',
      'd.polpette': 'Albóndigas con salsa de tomate',
      'd.tagliere': 'Surtido de embutidos y quesos, para 2 personas',
      'd.crema': 'Crema con azúcar caramelizado',
      'servizio': 'Servicio &euro; 2'
    },
    fr: {
      'n.foto': 'Photos', 'n.orario': 'Horaires', 'n.prezzi': 'Prix', 'n.dove': 'Adresse', 'b.dove': 'Où nous trouver',
      'aria.isola': 'Raccourcis du site', 'aria.home': 'Sunshine, retour à l\'accueil',
      'citta': 'Livorno', 'sotto': 'Petits-déjeuners, déjeuners, dîners et apéritifs au coucher du soleil.',
      'striscia': 'L\'endroit idéal pour des déjeuners rapides et savoureux',
      'sapori.t': 'Saveurs', 'sapori.l': 'Pour chaque moment',
      'sapori.p': 'Du petit-déjeuner à l&rsquo;apéritif, en passant par le déjeuner et le dîner : chez nous, il y a une saveur pour chaque moment de la journée. Des plats frais et légers, d&rsquo;autres plus copieux, une touche sucrée pour finir. Choisissez selon vos envies et, pour les prix, jetez un œil à la page dédiée.',
      'sapori.alt': 'Deux focaccias garnies : l\'une au jambon cru, stracchino et roquette, l\'autre au jambon cru et mozzarella',
      'aper.t': 'Apéritif', 'aper.l': 'Au coucher du soleil',
      'aper.p1': 'Comme le disait Dante, un apéritif avec une personne spéciale est un baume pour l&rsquo;âme. Même si Dante n&rsquo;a jamais prononcé ces mots, vous pouvez venir goûter nos magiques apéritifs avec tous ceux que vous aimez.',
      'aper.p2': 'Des bouchées et des bulles pour l&rsquo;apéritif.',
      'aper.alt': 'Verrines de salade avec courgette, saumon et groseilles, devant des bouteilles de vin pétillant',
      'vista.t': 'Vue', 'vista.l': 'La terrasse',
      'vista.p1': 'Depuis notre terrasse, vous profitez de la vue sur la Fortezza Vecchia (Vieille Forteresse), l&rsquo;une des constructions les plus célèbres de Livorno : bâtie par les Médicis au XVIᵉ siècle, elle domine le port et s&rsquo;élève sur les vestiges d&rsquo;un château plus ancien.',
      'vista.p2': 'À deux pas de sa porte d&rsquo;entrée se dresse le monument des Quatre Maures, autre symbole de la ville : la statue de Ferdinand Iᵉʳ de Médicis entourée de quatre prisonniers en bronze. On dit que trouver l&rsquo;endroit d&rsquo;où l&rsquo;on voit les quatre nez porte bonheur.',
      'vista.alt': 'Table avec vue sur le port de Livorno au coucher du soleil',
      'fin.t': 'À bientôt', 'o.t': 'Horaires',
      'g1': 'Lundi', 'g2': 'Mardi', 'g3': 'Mercredi', 'g4': 'Jeudi', 'g5': 'Vendredi', 'g6': 'Samedi', 'g0': 'Dimanche', 'chiuso': 'Fermé',
      'foot.o': 'Horaires : lundi &ndash; samedi 8:00 &ndash; 21:00, fermé le dimanche',
      'chiudi': 'Fermer',
      'p.t': 'Prix', 'p.home': 'Retour à l&rsquo;accueil',
      'c1': 'Salades', 'c2': 'Premiers plats', 'c3': 'Plats principaux', 'c4': 'Desserts',
      'e1': '', 'e2': '', 'e3': '', 'e4': '',
      'd.sunshine': 'Laitue, mozzarella, tomates, œuf, thon, maïs',
      'd.caprese': 'Tomates, mozzarella, origan',
      'd.carpaccio': 'Carpaccio de bresaola (bœuf séché finement tranché) avec grana et salade',
      'd.lasagne': 'Lasagnes à la tomate et à la viande',
      'd.lasagneveg': 'Lasagnes végétariennes aux légumes de saison',
      'd.gnocchetti': 'Gnocchetti aux quatre fromages',
      'd.carbonara': 'Pâtes au lard et aux œufs',
      'd.linguine': 'Linguine aux fruits de mer',
      'd.orata': 'Filet de dorade à la vapeur',
      'd.salmone': 'Pavé de saumon à la vapeur',
      'd.polpette': 'Boulettes de viande à la sauce tomate',
      'd.tagliere': 'Assortiment de charcuterie et de fromages, pour 2 personnes',
      'd.crema': 'Crème brûlée',
      'servizio': 'Service &euro; 2'
    },
    ru: {
      'n.foto': 'Фото', 'n.orario': 'График', 'n.prezzi': 'Цены', 'n.dove': 'Где мы', 'b.dove': 'Где мы находимся',
      'aria.isola': 'Быстрые ссылки', 'aria.home': 'Sunshine, на главную',
      'citta': 'Ливорно', 'sotto': 'Завтраки, обеды, ужины и аперитивы на закате.',
      'striscia': 'Идеальное место для быстрых и вкусных обедов',
      'sapori.t': 'Вкусы', 'sapori.l': 'Для любого момента',
      'sapori.p': 'От завтрака до аперитива, включая обед и ужин: у нас найдётся вкус для каждого момента дня. Свежие и лёгкие блюда, более сытные, что-нибудь сладкое на десерт. Выбирайте по настроению, а цены смотрите на отдельной странице.',
      'sapori.alt': 'Две фокаччи с начинкой: с вяленой ветчиной, страккино и руколой и с вяленой ветчиной и моцареллой',
      'aper.t': 'Аперитив', 'aper.l': 'На закате',
      'aper.p1': 'Как говорил Данте, аперитив с особенным человеком — лекарство для души. Хотя Данте никогда не произносил этих слов, вы можете прийти и попробовать наши волшебные аперитивы со всеми, кого любите.',
      'aper.p2': 'Закуски и игристое к аперитиву.',
      'aper.alt': 'Стаканчики с салатом, цукини, лососем и красной смородиной перед бутылками игристого',
      'vista.t': 'Вид', 'vista.l': 'Терраса',
      'vista.p1': 'С нашей террасы открывается вид на Фортецца Веккья (Старую крепость) — одно из самых известных сооружений Ливорно: построенная Медичи в XVI веке, она смотрит на порт и стоит на месте более древнего замка.',
      'vista.p2': 'В двух шагах от её входных ворот стоит памятник «Четыре мавра» — ещё один символ города: статуя Фердинандо I Медичи, у ног которой четыре бронзовых пленника. Говорят, что если найти место, с которого видны все четыре носа, это принесёт удачу.',
      'vista.alt': 'Столик с видом на порт Ливорно на закате',
      'fin.t': 'До встречи', 'o.t': 'Часы работы',
      'g1': 'Понедельник', 'g2': 'Вторник', 'g3': 'Среда', 'g4': 'Четверг', 'g5': 'Пятница', 'g6': 'Суббота', 'g0': 'Воскресенье', 'chiuso': 'Закрыто',
      'foot.o': 'Часы работы: понедельник &ndash; суббота 8:00 &ndash; 21:00, воскресенье выходной',
      'chiudi': 'Закрыть',
      'p.t': 'Цены', 'p.home': 'На главную',
      'c1': 'Салаты', 'c2': 'Первые блюда', 'c3': 'Вторые блюда', 'c4': 'Десерты',
      'e1': '', 'e2': '', 'e3': '', 'e4': '',
      'd.sunshine': 'Салат, моцарелла, помидоры, яйцо, тунец, кукуруза',
      'd.caprese': 'Помидоры, моцарелла, орегано',
      'd.carpaccio': 'Карпаччо из брезаолы (тонко нарезанная вяленая говядина) с грана и салатом',
      'd.lasagne': 'Лазанья с томатным соусом и мясом',
      'd.lasagneveg': 'Вегетарианская лазанья с сезонными овощами',
      'd.gnocchetti': 'Ньокетти с четырьмя видами сыра',
      'd.carbonara': 'Паста с беконом и яйцами',
      'd.linguine': 'Лингвине с морепродуктами',
      'd.orata': 'Филе дорады на пару',
      'd.salmone': 'Стейк из лосося на пару',
      'd.polpette': 'Мясные фрикадельки в томатном соусе',
      'd.tagliere': 'Ассорти из мясных и сырных деликатесов, на 2 персоны',
      'd.crema': 'Крем-брюле',
      'servizio': 'Сервисный сбор &euro; 2'
    }
  };

  var contaId = 0;
  function bandiera(c) {
    var i = ++contaId;
    var f = {
      it: '<svg viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ce2b37"/></svg>',
      fr: '<svg viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" fill="#0055a4"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ef4135"/></svg>',
      es: '<svg viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height="2" fill="#aa151b"/><rect y=".5" width="3" height="1" fill="#f1bf00"/></svg>',
      ru: '<svg viewBox="0 0 3 2" aria-hidden="true"><rect width="3" height=".6667" fill="#fff"/><rect y=".6667" width="3" height=".6667" fill="#0039a6"/><rect y="1.3333" width="3" height=".6667" fill="#d52b1e"/></svg>',
      en: '<svg viewBox="0 0 60 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><clipPath id="gb-s' + i + '"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="gb-t' + i + '"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#gb-s' + i + ')"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#gb-t' + i + ')" stroke="#c8102e" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#c8102e" stroke-width="6"/></g></svg>'
    };
    return '<span class="bandiera">' + f[c] + '</span>';
  }

  var corrente = 'it';
  try { var salvata = localStorage.getItem('sunshine-lingua'); if (salvata && /^(it|en|ru|es|fr)$/.test(salvata)) corrente = salvata; } catch (e) {}

  function applica(c) {
    corrente = c;
    document.documentElement.lang = c;
    document.querySelectorAll('[data-t]').forEach(function (el) {
      if (el.dataset.orig === undefined) el.dataset.orig = el.innerHTML;
      var k = el.getAttribute('data-t');
      el.innerHTML = (c !== 'it' && T[c] && T[c][k] !== undefined) ? T[c][k] : el.dataset.orig;
    });
    document.querySelectorAll('[data-ta]').forEach(function (el) {
      if (el.dataset.origAria === undefined) el.dataset.origAria = el.getAttribute('aria-label') || '';
      var k = el.getAttribute('data-ta');
      el.setAttribute('aria-label', (c !== 'it' && T[c] && T[c][k] !== undefined) ? T[c][k] : el.dataset.origAria);
    });
    document.querySelectorAll('[data-talt]').forEach(function (el) {
      if (el.dataset.origAlt === undefined) el.dataset.origAlt = el.getAttribute('alt') || '';
      var k = el.getAttribute('data-talt');
      el.setAttribute('alt', (c !== 'it' && T[c] && T[c][k] !== undefined) ? T[c][k] : el.dataset.origAlt);
    });
    document.querySelectorAll('.lingua').forEach(function (box) {
      box.querySelector('.lingua-btn .bandiera-slot').innerHTML = bandiera(c);
      box.querySelectorAll('.lingua-menu button').forEach(function (b) {
        b.setAttribute('aria-current', b.dataset.lang === c ? 'true' : 'false');
      });
    });
    try { localStorage.setItem('sunshine-lingua', c); } catch (e) {}
  }

  function chiudiTutti() {
    document.querySelectorAll('.lingua.aperta').forEach(function (b) {
      b.classList.remove('aperta');
      b.querySelector('.lingua-btn').setAttribute('aria-expanded', 'false');
    });
  }

  // Selettore di lingua dentro l'isola in alto: sempre visibile
  document.querySelectorAll('.isola').forEach(function (isola) {
    var box = document.createElement('div');
    box.className = 'lingua';
    box.innerHTML = '<button class="lingua-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Lingua / Language"><span class="bandiera-slot"></span><span class="freccia" aria-hidden="true"></span></button>' +
      '<ul class="lingua-menu">' + LINGUE.map(function (l) {
        return '<li><button type="button" data-lang="' + l.c + '" lang="' + l.c + '">' + bandiera(l.c) + '<span>' + l.n + '</span></button></li>';
      }).join('') + '</ul>';
    isola.appendChild(box);
    var btn = box.querySelector('.lingua-btn');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var apri = !box.classList.contains('aperta');
      chiudiTutti();
      if (apri) { box.classList.add('aperta'); btn.setAttribute('aria-expanded', 'true'); }
    });
    box.querySelectorAll('.lingua-menu button').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        applica(b.dataset.lang);
        chiudiTutti();
      });
    });
  });
  document.addEventListener('click', chiudiTutti);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') chiudiTutti(); });

  applica(corrente);
})();
