const button = document.querySelector('button');

// Doble clic
button.addEventListener('dblclick', function() {
  console.log('acaban de dobleclicarme!');
});

// Mouse out
function handleButtonMouseOut() {
  console.log('o rato estaba e xa non está');
}

button.addEventListener('mouseout', handleButtonMouseOut);

// Clic

const handleButtonClick = () => console.log('Acaban de facer clic en min');
const handleButtonClick2 = () => console.log('Outro mensaxe despois do clic');

button.addEventListener('click', handleButtonClick);
button.addEventListener('click', handleButtonClick2);

// Quitar eventos

button.removeEventListener('click', handleButtonClick2);
