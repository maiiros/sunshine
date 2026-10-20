(function () {
  // Il pulsante "Dove siamo" apre le mappe sull'indirizzo del locale.
  // Su iPhone e iPad si apre Apple Maps, sugli altri dispositivi Google Maps.
  var INDIRIZZO = 'Via San Giovanni 19, Livorno';
  var ua = navigator.userAgent || '';
  var apple = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var q = encodeURIComponent(INDIRIZZO);
  var link = apple
    ? 'https://maps.apple.com/?q=' + q
    : 'https://www.google.com/maps/search/?api=1&query=' + q;
  document.querySelectorAll('[data-mappe]').forEach(function (a) {
    a.setAttribute('href', link);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener');
  });

  // Evidenzia il giorno di oggi nell'orario
  var riga = document.querySelector('.settimana li[data-giorno="' + new Date().getDay() + '"]');
  if (riga) riga.classList.add('oggi');

  // Clic su una foto: si apre a tutto schermo
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Foto ingrandita');
  box.innerHTML = '<span class="chiudi" data-t="chiudi">Chiudi</span><img alt="">';
  document.body.appendChild(box);
  var grande = box.querySelector('img');
  function chiudi() { box.classList.remove('aperta'); }
  document.querySelectorAll('.riga img').forEach(function (img) {
    img.addEventListener('click', function () {
      grande.src = img.src; grande.alt = img.alt;
      box.classList.add('aperta');
    });
  });
  box.addEventListener('click', chiudi);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') chiudi(); });

  // Le sezioni salgono dal basso mentre si scorre
  var els = document.querySelectorAll('.rivela');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) {
        if (v.isIntersecting) { v.target.classList.add('visibile'); io.unobserve(v.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visibile'); });
  }
})();
