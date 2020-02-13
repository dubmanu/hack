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

async function calculadora(n1, n2) {
  try {
    const resultado = await sumaDiferidaPromise(n1, n2);
    const doble = await doublePromise(resultado);

    console.log(resultado, doble);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log('acabei');
  }
}

calculadora(20, 20);
