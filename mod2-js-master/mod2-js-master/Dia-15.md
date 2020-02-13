# for...in

[for...in en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

Con for...in podemos iterar las propiedades de un objeto.

	var obj = {a: 1, b: 2, c: 3};
	    
	for (const prop in obj) {
	  console.log(prop, obj[prop]);
	}


# hasownproperty

[hasOwnProperty en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

El método hasOwnProperty() nos devuelve un `Boolean` que indica si el objeto tiene el atributo indicado y no lo ha heredado.

	const myObject = {};
	myObject.myProperty = 42;
	
	console.log(myObject.hasOwnProperty('myProperty'));
	// salida: true
	
	console.log(myObject.hasOwnProperty('toString'));
	// salida: false
	
	console.log(myObject.hasOwnProperty('hasOwnProperty'));
	// salida: false

Devuelve true aunque lo que tenga el atributo sea null o undefined

	myObject = {};
	myObject.propertyOne = null;
	myObject.hasOwnProperty('propertyOne');   // devuelve true
	myObject.propertyTwo = undefined;  
	myObject.hasOwnProperty('propertyTwo');   // devuelve true
	
Otro ejemplo

	myObject = {};
	myObject.hasOwnProperty('prop');   // returns false
	myObject.prop = 'exists';  
	myObject.hasOwnProperty('prop');   // returns true
	
Solo devuelve true para atributos propios, no heredados

	myObject = new Object();
	myObject.prop = 'exists';
	myObject.hasOwnProperty('prop');             // returns true
	myObject.hasOwnProperty('toString');         // returns false
	myObject.hasOwnProperty('hasOwnProperty');

para iterar sobre un objeto

	var buz = {
	  fog: 'stack'
	};
	
	for (var name in buz) {
	  if (buz.hasOwnProperty(name)) {
	    console.log('Atributo -> ' + name);
	  }
	  else {
	    console.log('Heredado -> ' + name); // algo heredado
	  }
	}

## in

[in en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)

Es parecido a hasownproperty pero tambien comprueba si ha heredado la propiedad

	var car = {make: 'Honda', model: 'Accord', year: 1998};
	
	console.log('make' in car);
	// salida: true
	
Comprobando atributos heredados

	// Arrays
	var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
	0 in trees        // returns true
	3 in trees        // returns true
	6 in trees        // returns false
	'bay' in trees    // returns false (you must specify the index number, not the value at that index)
	'length' in trees // returns true (length is an Array property)
	
	// Predefined objects
	'PI' in Math          // returns true
	
	// Custom objects
	var mycar = {make: 'Honda', model: 'Accord', year: 1998};
	'make' in mycar  // returns true
	'model' in mycar // returns true

# JSON

[JSON en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

[JSON stringify en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

[JSON parse en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

JSON (JavaScript Object Notation) es un formato de texto usado para transmitir información. Con `JSON.parse()` podremos convertir un string que tenga formato `JSON` a un objeto y con `JSON.stringify()` haremos que un objeto pase a ser un string con formato JSON.

Para poder convertir un objeto a JSON tenemos que tener en cuenta que este no puede tener referencias cíclicas o la función fallará.

#fetch

Podemos usar fetch para recuperar una peticion de un servidor, nos devolverá una promesa

	fetch('https://dog.ceo/api/breeds/list/all')
	  .then(function(response) {
		console.log(response);
	    return response.json();
	  })
	  .then(function(myJson) {
	    console.log(myJson);
	  });



# Destructuring

[Destructuring en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

[Destructuring en javascript.info](https://javascript.info/destructuring-assignment)

La asignación por destructuring nos permite asignación de valores de una forma más compacta
	
	let userData = ['Perico', 'Palotes']
	
	let [firstName, surname] = userData;
	
	console.log(firstName);
	console.log(surname);
	
Podemos ignorar elementos dejando huecos

	let userData = ['Perico', 'de los', 'Palotes',]

	let [firstName, , surname] = userData
	// No asignamos el valor de 'de los'
	
Con la sintaxis de `rest` podemos guardar el resto de valores que no hayamos asignado con destructuring. Estos quedarán en un array.

	let [name1, name2, ...rest] = ['Ivan', 'Roberto', 'David', 'Rosa', 'Gonzalo'];
	
	console.log(name1);
	console.log(name2);
	
	console.log(rest); // ['David', 'Rosa', 'Gonzalo']

También podemos asignar valores por defecto en caso de que no se asigne ningún valor a la variable con destructuring

	// default values
	let [name = 'Sin nombre', surname = 'sin apellido'] = ['Ivan'];
	
	console.log(name); // Ivan
	console.log(surname); // sin apellido
	
Tambien podemos hacer asignaciones por destructuring de objetos, en este caso el destructuring asignará a la variable el atributo del objeto con el mismo nombre.

	let user = {
		name: 'Ivan',
		pet: 'dog',
		city: 'A Coruña'
	};
	
	let {name, pet, city} = options;
	
	console.log(name); // Ivan
	console.log(pet); // dog
	console.log(city); // A Coruña
	
Al igual que con los arrays podemos usar el rest para almacenar los valores que no hemos asignado. Los guardará como un objeto.

	let user = {
		name: 'Ivan',
		pet: 'dog',
		city: 'A Coruña'
	};
	
	let {name, ...rest} = options;

	
# Ejemplo Gambler
	
Queremos tener una clase que nos devuelve promesas de números para hacer apuestas. Puede devolver o la promesa de un número, o un array de promesas para múltiples números, a mayores haremos que los devuelva después de esperar un tiempo aleatorio. 
	
	class Gambler {
	  static givePrediction() {
	    const prediction = Math.ceil(Math.random() * 50);
	    return new Promise((resolve) => {
	      setTimeout(() => {
	        resolve(prediction);
	      }, prediction * 100);
	    });
	  }
	
	  static givePredictions(numPredictions) {
	    const predictions = [];
	
	    for (let i = 0; i < numPredictions; i++) {
	      predictions.push(this.givePrediction());
	    }
	
	    return predictions;
	  }
	}
	
	Gambler.givePrediction().then((myNumber) => {
	  console.log(myNumber);
	});
	
	Promise.all(Gambler.givePredictions(10)).then((values) => {
	  console.log(values);
	});
