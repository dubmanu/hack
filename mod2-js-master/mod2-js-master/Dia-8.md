# Más métodos de Array

## Filter

[Filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)

Filter es otro método de Array que nos permitirá obtener un nuevo array en el que los únicos miembros serán los que cuplan la condición establecida en el callback

	function isBigEnough(value) {
	  return value >= 10;
	}
	
	var filtered = [12, 5, 8, 130, 44].filter(isBigEnough); // Muestra [12, 130, 44]
	
## Reduce

[Reduce en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
Convierte un array de valores en un sólo valor

	const array1 = [1, 2, 3, 4];
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	
	// 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer));
	// 10
	
	// 5 + 1 + 2 + 3 + 4
	console.log(array1.reduce(reducer, 5)); // Establecemos un valor inicial para el acumulador
	// 15

## for...of

[for...of en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
Es un bucle que itera elementos de objetos iterables, como Array, Map, Set... aunque ahora el que usaremos es el de Array. Su sintaxis está a medio camino entre la de forEach y un bucle for, pero con este tendremos la ventaja de que no estamos ejecutando el código dentro de un callback, asi que por ejemplo un return dentro de un for..of detendría la función donde se encuentra el for...of en lugar de la del callback.


## Ejercicio de Usuarios y edades

	const userNames = ['Ivan', 'Ana', 'David'];
	const userAges = [24, 13, 56];
	
	function createUsers(names, ages) {
	  return names
	    .map((userName, index) => {
	      return { name: userName, age: ages[index] };
	    })
	    .map((user) => {
	      const adultUser = { ...user, isAdult: user.age >= 18 ? true : false };
	      return adultUser;
	    })
	    .filter((user) => {
	      return user.isAdult;
	    });
	}
	
	const users = createUsers(userNames, userAges);
	console.log(users);