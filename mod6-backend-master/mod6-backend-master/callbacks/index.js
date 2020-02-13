'use strict';

/**
 * Función asíncrona que suma dos números y
 * devuelve su suma
 * @param {Number} n1
 * @param {Number} n2
 * @param {Function} callback 
 * @returns {Numberr} resultado Suma
 */
function sum(n1, n2, callback) {
  setTimeout(() => {
    const result = n1 + n2;
    return callback(null, result);
  }, 2000);
}

function div(n1, n2, callback) {
  if (n2 === 0) {
    const error = new Error('no se puede dividir por 0');
    return callback(error);
  }

  setTimeout(() => {
    const result = n1 / n2;
    return callback(null, result);
  }, 2000);
}

function mostrarResultado(err, result) {
  if (err) {
    return console.error(err);
  }

  console.log(result);
}

sum(5, 3, mostrarResultado);

div(5, 0, (err, result) => {
  if (err) {
    return console.error(err);
  }

  console.log(result);
});
