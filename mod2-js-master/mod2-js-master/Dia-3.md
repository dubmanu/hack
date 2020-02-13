# Día 3

## Funciones

[Funciones en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones)

Podemos pensar en una función como un trozo de código al que le pondremos un nombre y que podemos reutilizar, aunque más adelante veremos que no siempre es el caso. Vamos a hacer una declaración de función.

	function soySencilla () {
		console.log('Antes muerta que sencilla');
	}
	
De la siguiente manera declararemos una expresión de función:

	let despertador = function () {
		console.log('RIN RIN');
	}
	
Si nos fijamos podemos ver que esta última función no tiene nombre, a esto se le llama función anónima.

Para lanzar una función deberemos añadir dos paréntesis tras su nombre, sino estaremos haciendo referencia a la función como conjunto.

	despertador(); // esto invocará la función despertador que declaramos antes

La principal diferencia entre estas dos maneras de declarar funciones es que la primera puede usar una funcionalidad de Javascript llamada `hoisting`. El hoisting consiste en que cuando hacemos una declaración de función, esta será desplazada hasta el principio del bloque en el que se encuentra, por lo que podemos hacer algo así:

	funcionQueAunNoHeDeclarado();
	
	function funcionQueAunNoHeDeclarado () {
		console.log('Esto funciona!');
	}

Por el contrario, esto no funcionaría con las expresiones de función;

	funcionQueAunNoHeDeclarado(); //Aquí recebiríamos un fallo porque no encuentra la funcion
	
	let funcionQueAunNoHeDeclarado = function () {
		console.log('Esto ni se llega a ejecutar!');
	}
	
Una función que solo ejecuta el mismo código de la misma manera y sin variaciones no es demasiado útil. Por eso a las funciones se les pueden pasar parámetros:

	function eco ( mensaje ) {
		console.log(mensaje);
	}
	
Una función puede tener múltiples parámetros, pero no es recomendable excederse, normalmente cuando una función tiene demasiados parámetros suele ser signo de que estña haciendo demasiadas cosas y deberíamos partirla.

Otra de las características de las funciones es la capacidad de devolver un valor de retorno con la palabra clave `return`.

	function suma ( primerParametro, segundoParametro) {
		return primerParametro + segundoParametro
	}
	
	const numeroSuperImportante = suma(10, 4);

Esto nos permite usar las funciones como "cajas negras" en las que nosotros aportamos unos datos de entrada y sólo nos importan los valores de salida. La lógica que implica esos valores no nos sería relevante.

Otro término importante es el de función pura. Una función es pura, cuando con los mismos parámetros de entrada siempre devuelve los mismos valores de salida. De esta manera nos garantizamos que tenemos la menor cantidad de efectos colaterales y el código se hace más fácil de depurar.

¿Cómo podemos construir una función que no es pura?

	function multiplicaPorDos (){
	return miNumero * 2;
	}
	let miNumero = 14;
	let resultado;
	resultado = multiplicaPorDos(); //28
	resultado = multiplicaPorDos(); //56
	
Cada vez que llamamos a la función nos va a devolver un resultado distinto, esta función no es pura. La podríamos convertir en pura así

	function multiplicaPorDos ( numeroAMultiplicar ){
		return miNumero * 2;
	}
	let miNumero = 14;
	let resultado;
	resultado = multiplicaPorDos(miNumero); //28
	resultado = multiplicaPorDos(miNumero); //28
	
### This
	
[This en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this)

This es el objeto contexto en el que se está ejecutando el código en ese preciso momento.

Una diferencia de usar `'use strict'` la podemos ver aquí

	function sinStrict (){
		return this;
	}
	
	function conStrict () {
		'use strict'
		return this; // Devuelve undefined
	}

Si queremos acceder al valor this de fuera de la función deberemos usar bind

## Bucles

[Bucles e iteración en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Bucles_e_iteraci%C3%B3n)

[While en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/while)

[do...while en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/do...while)

[For en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for)

Si con las variables podemos reutilizar valores y con las funciones podemos reutilizar código. Con los bucles podremos repetir operaciones con las funciones y variables un número determinado de veces.

Un bucle repetirá el código que indiquemos hasta que se alcance una condición de terminación. Cuando no se cumple nunca esta condición estaremos ante un bucle infinito

El bucle más sencillo que podemos implementar es un bucle `while`. La sintaxis de `while` es la siguiente;

	let esteValor = 0
	while (esteValor < 5){
		console.log('repito esto')
		esteValor++
	}

Otra variante de `while` es `do...while`, la principal diferencia es que con `do while` la comprobación en lugar de hacerse al inicio se hace al final. Por este motivo el código dentro de un `do...while` se ejecutará como mínimo una vez.

	let esteValor = 0
	do {
		console.log('repito esto otro')
		esteValor++
	} while (esteValor < 5)
	
Por último tenemos el bucle `for`, que consiste en tres expresiones opcionales **separadas por puntos y comas**, la primera es para inicializar los valores de una variable, la segunda expresará la condición de terminación del bucle y la última indica como incrementaremos el valor de la variable que usamos para iterar.

	for (let index = 0; index < 5; index++) {
		console.log('Esto lo repito 5 veces');
	}
	
Usando `break` dentro del código de uno de estos bucles detendremos la ejecución del bucle. Si usamos `continue` lo que haremos será finalizar la actual iteración del bucle y pasar a la siguiente.
