'use strict';

const express = require('express');

const app = express();

function div(n1, n2) {
  if (n2 === 0) {
    throw new Error('no se puede dividir por 0');
  }

  return n1 / n2;
}

function registerRequestInitTime(req, res, next) {
  console.log('estoy dentro de la función registerRequestInitTime');

  req.initTime = process.hrtime();

  return next();
}

app.use(registerRequestInitTime);
app.use((req, res, next) => {
  console.log('req.body', req.body);

  next();
});
app.use(express.json());

app.post('/hola', (req, res) => {
  return res.send('hola que tal');
});

app.post('/operacion/:tipoOperacion', async (req, res, next) => {
  console.log('body', req.body); // `body ${req.body}`
  console.log('initTime', req.initTime);

  /*
  const timeInit = process.hrtime();

    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.setHeader('x-request-time', `${seconds * 1000 + nanoseconds / 1000000}ms`);
  */

  const {
    n1,
    n2,
  } = req.body;

  const result = div(n1, n2);

  req.habStatusCode = 200;
  req.habBodyResponse = {
    result,
    operation: 'div',
  };

  return next();
});

app.use(function sendRequest(req, res, next) {
  res.header('x-timeInit', req.initTime[0]);
  res.status(req.habStatusCode).send(req.habBodyResponse);
});

const port = 3000;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log(`Server listening at port ${port}`);
});
