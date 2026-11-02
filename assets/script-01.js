
/* Contador compatível com Safari iOS: inicia ao abrir a página. */
(function () {
  'use strict';
  var el = document.getElementById('offer-countdown');
  if (!el) return;
  var endTime = new Date().getTime() + 10 * 60 * 1000;
  var lastText = '';
  function updateCountdown() {
    var remaining = Math.max(0, Math.ceil((endTime - new Date().getTime()) / 1000));
    var minutes = Math.floor(remaining / 60);
    var seconds = remaining % 60;
    var text = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    if (text !== lastText) { el.textContent = text; lastText = text; }
  }
  updateCountdown();
  window.setInterval(updateCountdown, 250);
  document.addEventListener('visibilitychange', updateCountdown, false);
  window.addEventListener('pageshow', updateCountdown, false);
  window.addEventListener('focus', updateCountdown, false);
  window.addEventListener('touchstart', updateCountdown, {passive:true});
  /* iOS pode suspender intervalos; o horário final absoluto corrige a contagem ao retomar. */
})();
