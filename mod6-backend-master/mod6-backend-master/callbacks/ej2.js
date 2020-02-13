'use strict';

/**
 * A: Definir la funcion asíncrona (usando callbacks)
 * B: Definir la función callback
 * C: Usar la función definida en paso A
 */

 // A: definir función multiplicar
 function mul(n1, n2, callback) {
   setTimeout(() => {
    const result = n1 * n2;
    // mostrarResultado(null, result);
    return callback(null, result);
   }, 1000);
 }


// B: definir función de regreso: La definición es lo mismo que el callback
function mostrarResultado(err, data) {
  if (err) {
    return console.error(err);
  }

  console.log(data);
}

// C: hacemos la operación de multiplicar
mul(3, 5, mostrarResultado);