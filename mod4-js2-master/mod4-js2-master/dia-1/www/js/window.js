//O obxecto window
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

console.log('Altura e anchura do viewport:');
console.log(windowHeight + 'px', windowWidth + 'px');

const completeWindowHeight = window.outerHeight;
const completeWindowWidth = window.outerWidth;

console.log('Altura e anchura da ventana do navegador');
console.log(completeWindowHeight + 'px', completeWindowWidth + 'px');

const url = window.location.href;

const cambiarURL = url => (window.location.href = url);

console.log('URL actual');
console.log(url);

const navigatorInfo = window.navigator.userAgent;

console.log('Información sobre o navegador:');
console.log(navigatorInfo);

const abrirTab = url => window.open(url);
