/*
 * Uso: importe esse modulo uma unica vez
 * https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
*/

function setAppHeight() {
  console.debug(`set --app-height: ${window.innerHeight}px`)
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
  console.debug('--app-height:', getComputedStyle(document.documentElement).getPropertyValue('--app-height'));
}

function updateAppHeight() {
  // seta o AppHeight de imedianto e define um timeout para caso o browser ajuste sem emitir evento.
  setAppHeight();
  setTimeout(() => setAppHeight(), 500);
}

function init() {
  window.addEventListener('resize', updateAppHeight);
  // Load on start
  updateAppHeight();
  console.debug("vhMobileFix initialized");
}

export default { init }
