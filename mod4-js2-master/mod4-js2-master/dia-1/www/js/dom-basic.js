/*
  SINGLE
*/

//Seleccionar un elemento por id
const mainTitle = document.getElementById('main-title');

mainTitle.style.fontSize = '3rem';

const rand = () => Math.floor(Math.random() * 256);

const tick = () => {
  mainTitle.style.color = `rgb(${rand()}, ${rand()}, ${rand()})`;
};

setInterval(tick, 200);

//Seleccionar un elemento por selector
const sec = document.querySelector('section');

sec.style.backgroundColor = 'gold';

console.log(sec.children);
console.log(sec.firstElementChild);
console.log(sec.lastElementChild);
console.log(sec.previousElementSibling);
console.log(sec.nextElementSibling);
console.log(sec.parentElement.firstElementChild);

// console.log(sec.childNodes);

/*  
  MULTIPLES
*/

//Seleccionar varios nodos por clase
const ps = document.getElementsByClassName('intro');

// console.log(ps);

//Seleccionar varios nodos por tipo de tag
const h2s = document.getElementsByTagName('h2');

// console.log(h2s);

for (const h2 of h2s) {
  h2.style.textDecoration = 'underline';
}

//Seleccionar varios nodos por selector
const lastChilds = document.querySelectorAll('body :last-child');

// console.log(lastChilds);
