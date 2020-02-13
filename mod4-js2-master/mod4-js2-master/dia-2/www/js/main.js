// const body = document.querySelector('body');
// body.innerHTML += '<p>aquí tes un elemento</p><p>aquí tes outro</p>'; // REGULAR

const header = document.querySelector('header');

const title = document.createElement('h1');

title.style.color = 'red';

const titleText = document.createTextNode('Acabo de nacer');

title.appendChild(titleText);
header.appendChild(title);

const section = document.getElementById('content');

const colors = [
  {
    name: 'Laranxa',
    color: 'orange'
  },
  {
    name: 'Verde',
    color: 'green'
  },
  {
    name: 'Púrpura',
    color: 'rebeccapurple'
  },
  {
    name: 'Tomate',
    color: 'tomato'
  }
];

const list = document.createElement('ul');
list.classList.add('lista');

const addColorItem = ({ name, color }) => {
  const item = document.createElement('li');
  const text = document.createTextNode(name);
  item.appendChild(text);
  item.style.backgroundColor = color;

  return item;
};

for (const color of colors) {
  list.appendChild(addColorItem(color));
}

section.appendChild(list);

//Helpers para xerar elementos aleatorios
const rand = max => Math.floor(Math.random() * max);

const c = () => {
  const color = `rgb(${rand(256)},${rand(256)},${rand(256)})`;

  return {
    name: color,
    color: color
  };
};

//Engadir elementos ao principio
const buttonAdd = document.querySelector('#add');

buttonAdd.onclick = () => {
  // list.appendChild(addColorItem(color)); //Engade ao final
  // list.insertBefore(addColorItem(color), list.firstElementChild); //Engade ao principio

  // list.append(addColorItem(color));
  list.prepend(addColorItem(c()));
};

const p = document.createElement('p');
p.textContent = 'pulsa o botón para crear elementos aleatorios';

section.insertAdjacentElement('beforeend', p);

const purple = list.querySelector('li:nth-child(3)');

purple.insertAdjacentElement('beforebegin', addColorItem(c()));

//Borrar primeiro elemento da lista
const buttonDelete = document.querySelector('#remove');

buttonDelete.onclick = () => {
  if (list.children.length > 0) {
    const itemToDelete = list.firstElementChild;

    // list.removeChild(itemToDelete); //Vale para todos
    itemToDelete.remove(); //non funciona en ie11
  }
};
