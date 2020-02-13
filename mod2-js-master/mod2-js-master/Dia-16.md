# Map

[Map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Map)

El objeto `Map` almacena parejas de claves-valores, pero a diferencia de los objetos normales, la clave podrá ser cualquier cosa, un array, un objeto...

Para añadir nuevos valores a un `Map` podemos usar el método `set()` y para recuperar valores `get()`.

	var myMap = new Map();
	
	var keyString = 'a string',
	    keyObj = {},
	    keyFunc = function() {};
	
	// metemos valores
	myMap.set(keyString, 'valor asociado a "a string"');
	myMap.set(keyObj, 'valor asociado a keyObj');
	myMap.set(keyFunc, 'valor asociado a keyFunc');
	
	myMap.size; // Número de elementos que hemos metido en el Map
	
	// getting the values
	myMap.get(keyString);    // 'valor asociado a "a string"'
	myMap.get(keyObj);       // 'valor asociado a keyObj'
	myMap.get(keyFunc);      // 'valor asociado a keyFunc'
	
	myMap.get('a string');   // 'valor asociado a "a string"'
	                         // porque keyString === 'a string'
	myMap.get({});           // undefined, porque keyObj !== {}
	myMap.get(function() {}); // undefined, porque keyFunc !== function () {}
	
Podemos usar `for...of` para iterar Maps

	var myMap = new Map();
	myMap.set(0, 'zero');
	myMap.set(1, 'one');
	for (var [key, value] of myMap) {
	  console.log(key + ' = ' + value);
	}
	// salida:
	// 0 = zero
	// 1 = one
	
	// Sacamos todas las claves de un Map
	for (var key of myMap.keys()) {
	  console.log(key);
	}
	// 0
	// 1
	
	// Sacamos todos los valores de un map
	for (var value of myMap.values()) {
	  console.log(value);
	}
	// zero
	// one
	
	// Sacamos todos los pares de clave y valor de un Map
	for (var [key, value] of myMap.entries()) {
	  console.log(key + ' = ' + value);
	}
	// 0 = zero
	// 1 = one
	
Tambien podemos iterar el `Map` con forEach, los parámetro seguirán el mismo orden que en el foreach de un array, siendo el primer parámetro del callback el item actual que estamos recorriendo y el segundo la clave para accederlo (en un array sería el indice).

	myMap.forEach(function(value, key) {
	  console.log(key + ' = ' + value);
	});

Podemos clonar un `Map` de la siguiente manera, ademas cuando declaramos este `Map` ya lo generamos con contenido pasándole datos al constructor.

	var original = new Map([
	  [1, 'one']
	]);
	
	var clone = new Map(original);
	
	console.log(clone.get(1)); // one
	console.log(original === clone); // false
	
También podemos combinar los valores usando spread:

	var first = new Map([
	  [1, 'one'],
	  [2, 'two'],
	  [3, 'three'],
	]);
	
	var second = new Map([
	  [1, 'uno'],
	  [2, 'dos']
	]);
	
	// Si los valores que se solapan prevalecen los que aparecen más a la derecha
	var merged = new Map([...first, ...second]);
	
	console.log(merged.get(1)); // uno
	console.log(merged.get(2)); // dos
	console.log(merged.get(3)); // three

# Set

[set en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Set)

Es una estructura de datos que mantiene valores únicos, no almacena copias.

	const set1 = new Set([1, 2, 3, 4, 5]);
	
	console.log(set1.has(1));
	// salida: true
	
	console.log(set1.has(5));
	// salida: true
	
	console.log(set1.has(6));
	// salida: false


Más ejemplos

	var mySet = new Set();

	mySet.add(1); // Set [ 1 ]
	mySet.add(5); // Set [ 1, 5 ]
	mySet.add(5); // Set [ 1, 5 ]
	mySet.add('some text'); // Set [ 1, 5, 'some text' ]
	const myObject = {a: 1, b: 2};
	mySet.add(myObject);
	
	mySet.add({a: 1, b: 2}); // myObject hace referencia a otro objeto tendríamos datos aparentemente repetidos pero la referencia es distinta
	
	mySet.has(1); // true
	mySet.has(3); // false
	mySet.has(5); // true
	mySet.has('Some Text'.toLowerCase()); // true
	mySet.has(myObject); // true
	
	mySet.size; // 5
	
	mySet.delete(5); // quita el 5
	mySet.has(5);    // false
	
	mySet.size; // 4, hemos quitado un valor
	console.log(mySet);// Set [ 1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2} ]

Podemos usar `for...of` para iterar un `Set`
	
	for (let item of mySet) {
		console.log(item);
	}
	
	// Podemos convertir el Set a array de estas dos maneras
	const toArray = Array.from(mySet); 
	const toArray2 = [...mySet]

	// Tambien podemos iterar con forEach
	mySet.forEach(function(value) {
	  console.log(value);
	});

Eliminar duplicados de un array con un set y volver a obtener array

	const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]
	
	console.log([...new Set(numbers)]) 
	
	// [2, 3, 4, 5, 6, 7, 32]

# herencia prototipica

[Herencia prototipica en javascript.info](https://javascript.info/prototype-inheritance)

# Ejemplo MAP

	const myMap = new Map();
	const myObject = {};
	const myFunction = () => {};
	
	myMap.set('un string', 'El valor con un string');
	myMap.set(myObject, {});
	myMap.set(myFunction, 'El valor con una function');
	console.log(myMap);
	
	console.log(myMap.get('un string'));
	console.log(myMap.get(myObject));
	console.log(myMap.get({}));
	console.log(myMap.get(myFunction));
	console.log(myMap.get(() => {}));
	
	for (const item of myMap.values()) {
	  console.log('map -> ', item);
	}
	
	myMap.forEach((value, key) => {
	  console.log('Foreach -> ', key, value);
	});
	
	const otherMap = new Map();
	otherMap.set(1, 14);
	
	const mergedMap = new Map([...myMap, ...otherMap]);
	console.log(mergedMap);

# Ejemplo Set
	
	const mySet = new Set([1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5]);
	const myOtherSet = new Set([9, 8, 7]);
	
	mySet.add('algo');
	mySet.add('algo');
	console.log(mySet);
	
	mySet.delete(3);
	
	console.log(mySet);
	
	for (const setItem of mySet.values()) {
	  console.log(setItem);
	}
	
	console.log(Array.from(mySet));
	console.log();
	
	const combined = new Set([...mySet, ...myOtherSet]);
	console.log(combined);
