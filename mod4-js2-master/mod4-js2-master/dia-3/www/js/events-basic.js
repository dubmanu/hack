const button = document.querySelector('button');

button.onclick = function() {
  console.log('acaban de clicarme!');
};

button.onmouseover = () => console.log('o rato acaba de pasar');

const handleFocus = () => console.log('acaban de facer foco sobre min');

button.onfocus = handleFocus;

window.onresize = () => console.log(window.outerHeight, window.outerWidth);

document.onmousedown = () => console.log('acaban de facer click no documento');
