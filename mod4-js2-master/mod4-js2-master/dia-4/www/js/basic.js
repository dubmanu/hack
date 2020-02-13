// const form = document.querySelector('form');

// Acceso rápido a formulario e elementos
const form = document.forms.login;
const user = form.elements.user;

// console.log(user);

// console.log(user.form);

const pass = document.getElementById('password');

// Acceso ao formulario asociado
console.log(pass.form);

form.addEventListener('submit', function(e) {
  const targetForm = e.target;
  e.preventDefault();

  // console.log(user.getAttribute('value'));
  console.log(user.value);

  console.log(targetForm.elements.remember.checked);
  targetForm.elements.remember.checked = true;
});

/*

*/
