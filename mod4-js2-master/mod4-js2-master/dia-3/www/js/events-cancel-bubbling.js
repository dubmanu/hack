// Cancelando links
const links = document.querySelectorAll('a[href^="http"]');

const handleLinkClick = e => {
  e.preventDefault();

  console.log(`Cancelada navegación a: ${e.target.getAttribute('href')}`);
};

for (const link of links) {
  link.addEventListener('click', handleLinkClick);
}

// Formulario
const form = document.querySelector('form');
const user = document.getElementById('user');
const pass = document.getElementById('password');
const error = document.querySelector('p.error');

function handleFormSubmit(e) {
  const userValue = user.value;
  const passValue = pass.value;

  if (
    userValue.length < 2 ||
    passValue.length < 2 ||
    userValue.startsWith('berto')
  ) {
    e.preventDefault();
    error.textContent =
      'A lonxitude do usuario ou pass é menor que 2 ou o usuario é berto';
  }
}

form.addEventListener('submit', handleFormSubmit);

// Bubbling
const deepUl = document.querySelector('.button-list');
const deepButton = document.querySelector('.deep');

const handleButonClick = e => {
  e.stopPropagation();

  console.log('cliquei no boton');
};

const handleUlClick = e => {
  console.log('cliquei na lista');
};

deepButton.addEventListener('click', handleButonClick);
deepUl.addEventListener('click', handleUlClick);
