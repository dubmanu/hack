const form = document.forms.login;

const user = form.elements.user;
const password = form.elements.password;

const p = document.querySelector('p');

user.addEventListener('focus', function(e) {
  console.log('acaban de facer foco en min');
  password.value = '';
});

user.addEventListener('blur', function(e) {
  if (user.value === 'berto') {
    console.log('CAMBIA O TEXTO');

    // user.focus();
  }
});

user.addEventListener('change', function(e) {
  console.log('acaban de cambiar o meu valor');
});

user.addEventListener('input', function(e) {
  p.textContent = user.value;
});
