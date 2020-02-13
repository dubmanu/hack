const suma = (a, b) => a + b;

// console.log(suma(10, 33));

const sumaDiferida = (a, b) => {
  let resultado;

  setTimeout(() => {
    resultado = a + b;
  }, 1000);

  return resultado;
};

// console.log(sumaDiferida(10, 30));

const result = document.querySelector('.result');
const errorP = document.querySelector('.error');
const loading = document.querySelector('.loading');

// Promesas

const sumaDiferidaPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b))
      return reject(new Error('Os valores deben ser números'));

    setTimeout(() => {
      return resolve(a + b);
    }, 2000);
  });
};

const doublePromise = n => {
  return new Promise((resolve, reject) => {
    if (n > 100) reject(new Error('só sei multiplicar ata 100'));
    setTimeout(() => resolve(n * 2), 1000);
  });
};

sumaDiferidaPromise(71, 30)
  .then(doublePromise)
  .then(resultado => {
    //mostrar result
    result.classList.remove('hidden');
    //Poñer texto no resultado
    result.textContent = resultado;
  })
  .catch(error => {
    //mostrar error
    errorP.classList.remove('hidden');

    //Poñer error no resultado
    errorP.textContent = error.message;
  })
  .finally(() => {
    //ocultar o loading
    loading.classList.add('hidden');
  });

// sumaDiferidaPromise(10, 'coruña')
//   .then(r => console.log(r))
//   .catch(error => console.log(error.message))
//   .finally(() => console.log('xa acabei'));

const valores = [[10, 20], [22, 33], [43, 22]];

const sumas = valores.map(v => sumaDiferidaPromise(v[0], v[1]));

Promise.all(sumas).then(console.log);
