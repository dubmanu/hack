const loremP = document.querySelectorAll('section p');

console.log(loremP.length);
console.log(loremP.item(0));
console.log(loremP.keys());
console.log(loremP[0].textContent);
loremP[0].textContent = 'Ola amiguis!!!!!';

// const b = document.querySelector('body');
const b = document.body;
// isto cambiaria todo o contido do body
// b.textContent = 'you have been hacked';

//ups!
loremP.item(1).textContent = 'Vendo <strong>repolos!</strong>';

const header = document.querySelector('body > header');

console.log(header.innerHTML);
console.log(header.outerHTML);

header.innerHTML += `
  <ul>
    <li>un</li>
    <li>dous</li>
  </ul>
`;

//Modificando atributos
const button = document.querySelector('button');

button.setAttribute('disabled', true);
button.setAttribute(
  'style',
  'background: blue; color:orange; font-size: 3rem;'
);

header.setAttribute('class', 'importante');

console.log(document.querySelector('h1').getAttribute('id'));

if (button.hasAttribute('style')) {
  console.log('ten o atributo');
}

header.removeAttribute('class');
