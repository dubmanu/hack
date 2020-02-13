'use strict';

/**
 * 
 * @param {Number} n1
 * @param {Number} n2
 * @returns {Promise<Number>} result
 */
function div(n1, n2) {
  if (n2 === 0) {
    return Promise.reject(new Error('no se puede dividir por 0'));
  }

  const result = n1 / n2;

  return Promise.resolve(result);
}

function mostrarResultado(result) {
  console.log(result);
}

function mostrarError(error) {
  console.error(error.message);
}

div(5, 0).then(mostrarResultado).catch(mostrarError);

div(5, 3).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error.message);
});
