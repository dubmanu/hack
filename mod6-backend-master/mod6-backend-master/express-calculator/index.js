'use strict';

const express = require('express');

const app = express();
app.use(express.json()); // for parsing application/json

function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function mul(n1, n2) {
  return n1 * n2;
}

function div(n1, n2) {
  if (n2 === 0) {
    throw new Error('no se puede dividir por 0');
  }

  return n1 / n2;
}

app.post('/operacion/:tipoOperacion', async (req, res) => {
  console.log('body', req.body); // `body ${req.body}`

  const {
    n1,
    n2,
  } = req.body;

  const result = sum(n1, n2);

  res.status(200).send({
    result,
    operation: 'sum',
  });
});

app.get('/operacion/:tipoOperacion', (req, res) => {
  const timeInit = process.hrtime();
  const { tipoOperacion } = req.params;

  const operacionesValidas = [
    'sum',
    'sub',
    'mul',
    'div'
  ];

  if (!operacionesValidas.includes(tipoOperacion)) {
    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.setHeader('content-type', 'text/plain');
    res.setHeader('x-request-time', `${seconds * 1000 + nanoseconds / 1000000}ms`);
    return res.status(400).send('La operacion no es correcta, debe ser: /operacion/[sum|sub|mul|div]');
  }

  const n1 = parseFloat(req.query.n1);
  const n2 = parseFloat(req.query.n2);
  if (isNaN(n1) || isNaN(n2)) {
    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.setHeader('content-type', 'text/plain');
    res.setHeader('x-request-time', `${seconds * 1000 + nanoseconds / 1000000}ms`);
    return res.status(400).send('n1 y n2 deben ser valores numéricos');
  }

  try {
    let resultado;

    if (tipoOperacion === 'sum') {
      resultado = sum(n1, n2);
    } else if (tipoOperacion === 'sub') {
      resultado = sub(n1, n2);
    } else if (tipoOperacion === 'mul') {
      resultado = mul(n1, n2);
    } else if (tipoOperacion === 'div') {
      resultado = div(n1, n2);
    }

    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.setHeader('x-request-time', `${seconds * 1000 + nanoseconds / 1000000}ms`);

    const operacionesNombre = {
      sum: 'sumar',
      sub: 'restar',
      mul: 'multiplicar',
      div: 'dividir',
    };
    const output = {
      resultado,
      operacion: operacionesNombre[tipoOperacion],
    };

    return res.send(output);
  } catch (e) {
    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.setHeader('content-type', 'text/plain');
    res.setHeader('x-request-time', `${seconds * 1000 + nanoseconds / 1000000}ms`);

    return res.status(409).send(e.message);
  }
});

const port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log(`Server listening at port ${port}`);
});
