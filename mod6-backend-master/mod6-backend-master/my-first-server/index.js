'use strict';

const http = require('http');
const qs = require('querystring');

/**
 * DESCRIPCIÓN
 * ====================
 * Aplicación servidor que permite realizar las siguientes operaciones
 * sobre 2 números dados en la url ?n1=X&n2=Y:
 *  * sumar, restar, multiplicar, dividir
 * y también nos tiene que indicar el tiempo que tardó la request del usuario desde que llegó al backend
 * hasta que nos devolvió la respuesta, en milisegundos
 * DETALLES TÉCNICOS
 * =====================
 * La url vendrá con el siguiente formato
 *  http://localhost:PUERTO_QUE_SEA/operacion/[sum|sub|mul|div]?n1=[Number]&n2=[Number]
 * Comprobaremos lo siguiente:
 *  - Si la request no viene por el método http GET, daremos error de 405 Method Not Allowed
 *  - Si la url no está bien formada (no es /operacion/LA_OPERACION) devolveremos un 404 Not Found
 *  - Si la operación no es correcta o no nos pasan n1 y n2 o estos valores son incorrectos,
 *    devolveremos un 400 Bad request + un mensaje explicando qué pasó
 * Para llevar a cabo la tarea anterior necesitamos:
 *  1. Ver el método http
 *  2. Parsear la url y sacar:
 *    a. la operación, que está en el pathname de la url
 *    b. los parámetros n1 y n2 que están como query param
 *  3. Mirar la fecha al entrar la request, al final y restar:
 *    a. Podemos utilizar new Date().getTime() o mejor todavía process.hrtime
 *    b. Al finalizar calculamos la fecha de nuevo
 *    c. Se restar y se añade el header x-request-time
 * SALIDA
 * =====================
 * El servidor debe devolver:
 *  * Un objecto JSON (mimetype application/json) con el formato:
 *    {
 *      "operacion": ["sumar", "restar", "multiplicar", "dividir"],
 *      "resultado": "X"
 *    }
 *  * Un header llamado x-request-time con el tiempo en ms que tardó la request
 * INFO EXTRA
 * ======================
 *  * Estructura url: https://nodejs.org/docs/latest/api/url.html
 */

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

const server = http.createServer((req, res) => {
  const timeInit = process.hrtime();

  /**
   * destructuring, lo mismo que:
   *  const url = req.url;
   *  const method = req.method;
   */
  const {
    url,
    method,
  } = req;

  console.log(url, method);
  /**
   * Si la request no viene por el método http GET, daremos error de 405 Method Not Allowed
   */
  if (method !== 'GET') {
    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.writeHead(405, {
      'x-request-time': `${seconds}.${nanoseconds / 1000000}s`,
    });
    return res.end();
  }

  /**
   * parsear url para coger el pathname por un lado y
   * los query param por otro, ejemplo:
   *  1. url es '/operacion/sum?n1=5&n2=3
   *  2. haremos un array asi ['/operacion/sum', 'n1=5&n2=3']
   *  3. convertiremos 'n1=5&n2=3' a un objecto { n1: 5, n2: 3 }
   */
  // destructuring arrays, hay ejemplo explicándolo más abajo (casi al final)
  const [pathname, stringParams] = url.split('?');
  const validPathnames = [
    '/operacion/sum',
    '/operacion/sub',
    '/operacion/mul',
    '/operacion/div',
  ];

  if (validPathnames.includes(pathname) === false) {
    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.writeHead(404, {
      'content-type': 'text/plain',
      'x-request-time': `${seconds * 1000 + nanoseconds / 1000000}ms`,
    });
  
    res.end('La operacion no es correcta, debe ser: /operacion/[sum|sub|mul|div]');
  }

  /**
   *  3. convertiremos 'n1=5&n2=3' a un objecto { n1: 5, n2: 3 }
   * convertir el stringParams a un object y declarar la variable n1 y n2
   * como números float
   */
  const params = qs.parse(stringParams);
  const n1 = parseFloat(params.n1);
  const n2 = parseFloat(params.n2);

  /**
   * Si la operación no es correcta o no nos pasan n1 y n2 o estos valores son incorrectos,
   * devolveremos un 400 Bad request + un mensaje explicando qué pasó
   */
  if (isNaN(n1) || isNaN(n2)) {
    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.writeHead(400, {
      'content-type': 'text/plain',
      'x-request-time': `${seconds * 1000 + nanoseconds / 1000000}ms`,
    });

    return res.end('n1 y n2 deben ser valores numéricos');
  }

  /**
   * Realizamos la operación. Tenemos que pathname es '/operacion/LA_OPERACION',
   * necesitamos quedarnos solamente con el nombre de la operacion, para eso, podemos hacer
   * un split por / y quedarnos con el último parámetro
   */
  const [ , , operacion] = pathname.split('/');
  let resultado;
  try {
    if (operacion === 'sum') {
      resultado = sum(n1, n2);
    } else if (operacion === 'sub') {
      resultado = sub(n1, n2);
    } else if (operacion === 'mul') {
      resultado = mul(n1, n2);
    } else if (operacion === 'div') {
      resultado = div(n1, n2);
    }

    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.writeHead(200, {
      'content-type': 'application/json',
      'x-request-time': `${seconds * 1000 + nanoseconds / 1000000}ms`,
    });

    const operacionesNombre = {
      sum: 'sumar',
      sub: 'restar',
      mul: 'multiplicar',
      div: 'dividir',
    };
    const output = {
      resultado,
      operacion: operacionesNombre[operacion],
    };

    /**
     * solo podemos mandar un string, asi que convertimos el objeto output a string
     * usando la función JSON.stringify
     */
    return res.end(JSON.stringify(output));
  } catch (e) {
    const [seconds, nanoseconds] = process.hrtime(timeInit);
    res.writeHead(409, {
      'content-type': 'text/plain',
      'x-request-time': `${seconds * 1000 + nanoseconds / 1000000}ms`,
    });

    return res.end(e.message);
  }
});

server.listen(3000, 'localhost', (err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  }

  console.log('server listening!');
});
