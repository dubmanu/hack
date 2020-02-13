# Primeros pasos

## Qué es javascript
Es un lenguaje de programación interpretado de alto nivel, que se adapta a la especificación de ECMAScript. Con HTML y CSS son las tecnologías claves que constituyen la WWW. La gran mayoría de las webs lo usa de una manera u otra y es esencial para realizar aplicaciones web y hacer que las páginas sean interactivas, los navegadores lo interpretan con lo que se denomina motor de Javascript.

Inicialmente solo se ejecutaba en el lado del cliente, pero los usos ahora son mucho más extensos, incluyendo aplicaciones en el servidor.

Javascript y Java solo tienen en común el “Java” del nombre, ambos funcionan de forma distinta, de hecho inicialmente Javascript se llamaba Livescript.

Lo que vamos a ver en este módulo se denomina Vanilla (que no ha sido modificado, JS puro).


## Modo estricto

	use strict

[Modo estricto en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Modo_estricto)

Fue introducido en ES5. Permite a los motores de ejecución una mejor optimización del código al usar una variante restringida del lenguaje.

El modo estricto tiene varios cambios en la semántica normal de JavaScript:

* Elimina algunos errores silenciosos de JavaScript cambiándolos a que lancen errores.
* Corrige errores que hacen difícil para los motores de JavaScript realizar optimizaciones: a veces, el código en modo estricto puede correr más rápido que un código idéntico pero no estricto.
* Prohibe cierta sintaxis que probablemente sean definidas en futuras versiones de ECMAScript.


## Comentarios

[Comentarios en MDN](https://developer.mozilla.org/es/docs/Web/CSS/Comentarios)
Son bloques de texto que no se ejecutan, son información que los propios desarrolladores dejan para sí mismos.

	// Esto es un mensaje de una linea que dejo para el yo del futuro
	
	/*
	* También puedo dejar comentarios de varias lineas
	*/
	
	console.log('Odio al yo del futuro'); //Los comentarios también pueden ir aquí
	
Los comentarios deben ser descriptivos y no debemos usarlos para describir cosas obvias. Si lo hiciésemos estaríamos empeorando la legibilidad de nuestro código.

## Variables let const var

Documentación en MDN:

* [let](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let)
* [const](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/const)
* [var](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/var)

Las variables son la herramienta que usamos para almacenar información, son almacenamiento con un nombre al que luego nos vamos a poder referir.

Una variable se declara con 
	
	let miVariable;
	
Para asignarle un valor a la variable podemos hacerlo así

	miVariable = 14;
	
Aunque también se puede hacer todo en una linea 

	let miVariable = 14;

O multiples variables en una linea 

	let patasPerro = 4, patasAraña = 8;
	
O multiples variables en varias lineas 

	let patasPerro = 4, 
		patasAraña = 8;

Antes en lugar de let se usaba `var` para declarar variables, pero let tiene ventajas sobre `var` que veremos más adelante. Lo importante es que **NO** debemos usar `var`.

### Nombrado de variables

El nombre de las variables puede contener letras mayúsculas y minúsculas, números `$` y `_` pero aunque pueden tener números en el nombre, el **primer carácter no puede ser un dígito**.

Para variables que están compuestas de varias palabras, se suele usar `camelCase`, que consiste en quitar los espacios que separan las palabras y empezar cada una de las palabras en mayuscula, aunque la primera letra será en minúscula.

	let codigosParaMisilesNucleares = 42;

Los nombres de las variables son `case sensitive`, esto es que variables con el mismo nombre pero distinto uso de las mayúsculas serán efectivamente variables distintas

	let Ivan; // Es una variable distinta a 
	let ivan;

Los caracteres especiales deben de ser evitados, letras como ñ o las vocales con tilde.

Con `const` podemos declarar variables a las que sólo podremos asignar un valor

	const aEstoNoLePuedoCambiarElValor = ‘Ivan’

Si intentamos cambiar el valor de una constante tendremos un error

	aEstoNoLePuedoCambiarElValor = ‘Clodoveo’ //esto falla

A veces usamos constantes al principio del codigo como alias de valores que querremos usar luego. Estas constantes suelen tener su nombre todo en mayúsculas y las palabras se suelen separar por _, no es obligatorio, es un convenio.

	const TELEFONO_DE_CASA = ‘981999999’

Referirnos al nombre de la constante es más facil que recordar el valor que contiene, además si usamos este valor en múltiples puntos del código y después lo queremos cambiar, solo lo tendremos que cambiar en un sitio.

**Los nombres de las variables tienen que ser descriptivos**, esto nos ayudará mucho a entender tanto nuestro propio código como a que nuestros compañeros lo entiendan. Nuestro trabajo no suele ser “escribir código” suele ser “leer y entender código”. No usar nombres de variable como:

	let a
	let valor
	let chirimbolo

## Indentaciones tabs vs espacios vs prettier
El codigo bien indentado es mucho más legible, solemos indentar con la tecla de tabulador y la cantidad de espacio que se inserta se define para todo el proyecto. Un convenio entre todos los desarrolladores para hacer que el código sea más homogéneo.

Se puede elegir indentar con espacios o con tabuladores, y la cantidad puede variar también.

Solemos indentar el código de forma gerárquica, de modo que el cuando una parte del codigo depende de otra estará más desplazado a la derecha.

	if ( quieroIndentar ) {
		pongoMasEspacios();
	}

Hay extensiones que hacen este trabajo mucho más facil como Prettier, que nos permiten configurar reglas para el proyecto y estas se aplicarán sin cambiar la lógica de lo que hemos programado. Por ejemplo corregir indentaciones, añadir `;` al final de las lineas...

## Console

[Console en MDN](https://developer.mozilla.org/es/docs/Web/API/Console)

Con `console` vamos a poder evaluar de forma rápida los valores de ciertas variables o mostrar mensajes cuando nuestro código pasa por distintos puntos.

	console.log('muestra informacion');
	console.warn('muestra un aviso');
	console.error('muestra un error');
	console.log('varios', 'datos', 'separados', 'por', 'coma');

## Tipos básicos de datos

Documentaciñon en MDN:

* [Boolean](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Boolean)
* [Null](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/null)
* [Undefined](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/undefined)
* [Number](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Number)
* [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)

Los booleanos o booleans, representan o valor o true o false, verdadero o falso.
	
	let estoEsUnBoolean = true;
	let elOtroValorBooleanoEs = false;

`null` es su propio tipo de datos y es el unico valor del tipo, simboliza una referencia a un objeto no definido.

	let estoEsNull = null;

`undefined` es similar a null pero simboliza una variable a la que no se le ha asignado un valor

`Number` representa tanto a enteros como numeros de punto flotante, tambien existen valores numéricos especiales como `NaN` `-Infinity` e `Infinity`. `NaN` son las siglas de `Not a Number`, un valor que ha partido de una operación numérica pero que no se ha podido operar para que siga siendo un número. Una vez que tenemos un NaN seguirá siendo NaN si seguimos operando

	let notANumber = ‘Not a number’ / 2
	console.log(notANumber) // Muestra NaN
	console.log(notANumber + 2) // Aunque el NaN se vista de seda NaN se queda

String es el tipo de datos con el que representamos texto, se pueden declarar

	let podemosDeclararlos = ‘Asi’
	let otraManeraEquivalenteEs = “esta”
	let laMasModernaEsEsta = `que añade funcionalidades a mayores`

En las últimas se pueden interpolar valores almacenados en una variable

	const miNombre = ‘Ivan’
	console.log(`Me llamo ${miNombre}`)

con typeOf podemos ver el tipo de las distintas variables
