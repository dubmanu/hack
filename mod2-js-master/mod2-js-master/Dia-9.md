# Funciones recursivas

Una función recursiva es una que se llama a si misma, por ejemplo el siguiente cacho de código para calcular un factorial

	function factorialRecursivo (n) { 
		if (n === 0){ 
			return 1; 
		}
		return n * factorialRecursivo (n-1); 
	}

# Classes

[Classes en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

Podemos crear nuevas clases de maneras distintas al igual que las funciones.

Class declaration

	class Rectangle {
	  constructor(height, width) {
	    this.height = height;
	    this.width = width;
	  }
	}

Class expression

	// Sin nombre
	let Rectangle = class {
	  constructor(height, width) {
	    this.height = height;
	    this.width = width;
	  }
	};
	console.log(Rectangle.name);
	// salida: "Rectangle"
	
	// con nombre
	let Rectangle = class Rectangle2 {
	  constructor(height, width) {
	    this.height = height;
	    this.width = width;
	  }
	};
	console.log(Rectangle.name);
	// salida: "Rectangle2"
	
El método constructor se ejecuta cuando instanciamos la clase, si no declaramos constructor, el constructor por defecto será

	constructor() {}

La palabra `static` declara métodos estáticos de una clase. Los métodos estáticos son llamados sin instanciar la clase y no pueden llamarse desde una instancia de la clase.

Variables públicas de la clase
	
	class Rectangle {
	  height = 0;
	  width;
	  constructor(height, width) {    
	    this.height = height;
	    this.width = width;
	  }
	}

Variables privadas

	class Rectangle {
	  #height = 0;
	  #width;
	  constructor(height, width) {    
	    this.#height = height;
	    this.#width = width;
	  }
	}

En el ejercicio de classes de más abajo podemos ver como se extiende una clase. Al hacer esto podemos crear una nueva clase que aumenta o modifica la funcionalidad de su padre. Para ello nos podemos valer de la función `super` que hace referencia a la función con el mismo nombre del padre.

	class Animal {
	
	  constructor(name) {
	    this.name = name;
	  }
	}
	
	class Dog extends Animal {
	  constructor(name) {
	    super(name);
	    this.name += ' the dog';
	  }

# Ejercicios

## Ejercicio de usuarios

Guardando valores intermedios:

	const names = ['Ivan', 'Lucia', 'Antonio'];
	const ages = [23, 14, 78];
	
	const users = names.map((nameValue, index) => {
	  return { name: nameValue, age: ages[index] };
	});
	
	const adultUsers = users.map((user) => {
	  user.isAdult = user.age >= 18 ? true : false;
	  return user;
	});
	
	const filteredAdults = adultUsers.filter((user) => {
	  return user.isAdult;
	});
	
	const totalAge = filteredAdults.reduce((previousUser, currentUser) => {
	  return previousUser + currentUser.age;
	},0);
	
	console.log(totalAge);


Encadenando operadores:

	const users = names
	  .map((nameValue, index) => {
	    return { name: nameValue, age: ages[index] };
	  })
	  .map((user) => {
	    const temp = { ...user };
	    temp.isAdult = temp.age >= 18 ? true : false;
	    return temp;
	  })
	  .filter((user) => {
	    return user.isAdult;
	  })
	  .reduce((previousUser, currentUser) => {
	    return previousUser + currentUser.age;
	  }, 0);
	
	console.log(users);

Declarando algunos callbacks:

	const names = ['Ivan', 'Lucia', 'Antonio', 'Pablo'];
	const ages = [23, 14, 78, 33];
	
	function createUsers(nameValue, index) {
	  return { name: nameValue, age: ages[index] };
	}
	
	const createAdultUsers = (user) => {
	  const temp = { ...user };
	  temp.isAdult = temp.age >= 18 ? true : false;
	  return temp;
	};
	console.log(createAdultUsers({ name: 'Ivan', age: '88' }));
	
	const users = names
	  .map(createUsers)
	  .map(createAdultUsers)
	  .filter((user) => {
	    return user.isAdult;
	  })
	  .reduce((previousUser, currentUser) => {
	    return previousUser + currentUser.age;
	  }, 0);
	
	console.log(users);
	
## Ejercicios classes
	
Classes
	
	class Animal {
	
	  constructor(name) {
	    this.name = name;
	  }
	}
	
	class Dog extends Animal {
	  constructor(name) {
	    super(name);
	    this.name += ' the dog';
	  }
	
	  speak() {
	    console.log('GUAU');
	  }
	}
	
	class Cat extends Animal {
	  constructor(name) {
	    super(name);
	    this.name += ' the cat';
	  }
	
	  speak() {
	    console.log('Miau');
	  }
	}
	
	const myAnimal = new Animal('Un Animal');
	const myDog = new Dog('Firulais');
	const myCat = new Cat('Waffles');
	
	console.log(myAnimal, myDog, myCat);
	
	myDog.speak();
	myCat.speak();
