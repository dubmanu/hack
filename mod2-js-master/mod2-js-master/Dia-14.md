

# setTimeout

[setTimeout en MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Con `setTimeout` podemos aplazar la ejecución de un fragmento de código. Para cancelar un `setTimeout` debemos de guardar lo que nos devuelve cuando lo llamamos y posteriormente hacer un `clearTimeout`

	// Así empezamos un timeout
	idTimeout = setTimeout(() => console.log('Esto tarda 2s'),2000);
	// Esto cancela el timeout
	clearTimeout(idTimeout)
	
# setInterval

[setInterval en MDN](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

Con `setInterval` podemos repetir periodicamente la ejecución de un fragmento de código. Para cancelar un `setInterval` debemos de guardar lo que nos devuelve cuando lo llamamos y posteriormente hacer un `clearInterval`

	// Así empezamos un timeout
	idInterval = setInterval(() => console.log('Esto se repite cada 2s'),2000);
	// Esto cancela el timeout
	clearInterval(idInterval)

# Promise

[Promise en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Una promise representa un valor que puede estar disponible ahora, en el futuro, o nunca. Then devuelve una nueva promesa. Para resolver una promesa debemos usar el primer parámetro del callback, para rechazar la promesa usaremos el segundo parámetro

	var myPromise = new Promise(function(resolve, reject) {
	  setTimeout(function() {
	    resolve('El valor');
	  }, 300);
	});
	
	myPromise.then(function(value) {
	  console.log(value);
	});
	
## Promise all

[Promise all en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/all)

Espera a que todas las promesas de un array de promesas terminen, entonces en el callback del `then` tendremos disponible un array de valores, los valores estarán en el mismo orden que las promesas iniciales.

	function promiseGenerator() {
	  const randomNumber = Math.random() * 10000;
	  return new Promise((resolve) => {
	    console.log('Espero ->', randomNumber);
	    setTimeout(() => {
	      console.log('Resolviendo ->', randomNumber);
	      resolve(randomNumber);
	    }, randomNumber);
	  });
	}
	
	const allPromises = [];
	allPromises.push(promiseGenerator());
	allPromises.push(promiseGenerator());
	allPromises.push(promiseGenerator());
	
	Promise.all(allPromises).then((allData) => {
	  console.log(allData);
	});

## Promise race

[Promise race en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise/race)

En cuanto termina la primera promesa ejecuta el callback y tendremos el valor de esa promesa en el parámetro del callback. El callback no se vuelve a ejecutar aunque terminen el resto de promesas.

	function promiseGenerator() {
	  const randomNumber = Math.random() * 10000;
	  return new Promise((resolve) => {
	    console.log('Espero ->', randomNumber);
	    setTimeout(() => {
	      console.log('Resolviendo ->', randomNumber);
	      resolve(randomNumber);
	    }, randomNumber);
	  });
	}
	
	const allPromises = [];
	allPromises.push(promiseGenerator());
	allPromises.push(promiseGenerator());
	allPromises.push(promiseGenerator());
	
	Promise.race(allPromises).then((raceData) => {
	  console.log(raceData);
	});


## Async await

[async en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

[await en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

Con async await podemos tener el mismo código que con then pero de una manera que se lee más fácil.

	async function oneFunction() {
	  let aValue1 = await promiseGenerator();
	  console.log('AWAIT1', aValue1);
	  const aValue2 = await promiseGenerator();
	  console.log('AWAIT2', aValue2);
	  const aValue3 = await promiseGenerator();
	  console.log('AWAIT3', aValue3);
	}
	
El mismo código con then es bastante menos legible
	
	function otherFunction() {
	  promiseGenerator().then((aValue1) => {
	    console.log('AWAIT1', aValue1);
	    const aValue2 = promiseGenerator().then((aValue2) => {
	      console.log('AWAIT2', aValue2);
	      const aValue3 = promiseGenerator().then((aValue3) => {
	        console.log('AWAIT3', aValue3);
	      });
	    });
	  });
	}

# try...catch

[try...catch en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

`try...catch` especifica un bloque de código que se intentará ejecutar y que se deberá hacer en caso de que salte una excepción.

	try {
	  nonExistentFunction();
	}
	catch(error) {
	  console.error(error);
	}

	
Con `throw` podemos lanzar nuestra propia excepción.

	try {
	  throw 'myException'; // genera una excepción
	}
	catch (e) {
	  console.log(e);
	}

`Finally` se ejecuta despues de que try y catch terminen de ejecutarse

	try {
	  doThis;
	}
	finally {
	  doOtherThing(); // Siempre se ejecuta después del try
	}