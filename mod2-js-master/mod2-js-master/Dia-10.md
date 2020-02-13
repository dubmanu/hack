# Ejercicio sospechosos

Aquí resolvemos hasta la creación del array de sospechosos

	class Person {
	  constructor(name) {
	    this.name = name;
	  }
	}
	
	class Suspect extends Person {
	  #tip;
	
	  constructor(name, eyeColor, height, tattooed, tip) {
	    super(name);
	    this.eyeColor = eyeColor;
	    this.height = height;
	    this.tattooed = tattooed;
	    this.#tip = tip;
	  }
	
	  static createSuspects(names, eyeColor, height, tattooed, tip) {
	    return names.map((name, index) => {
	      return new Suspect(name, eyeColor[index], height[index], tattooed[index], tip[index]);
	    });
	  }
	
	  confess() {
	    return this.#tip;
	  }
	}
	const names = ['Willy', 'Ivan', 'Ramiro'];
	const eyeColor = ['azul', 'marron', 'azul'];
	const height = ['bajo', 'alto', 'alto'];
	const tattooed = [true, false, false];
	const tip = [{ height: 'alto' }, { eyeColor: 'marron' }, { tattooed: false }];
	
	const suspects = Suspect.createSuspects(names, eyeColor, height, tattooed, tip);
	
	console.log(suspects);
	
#Garbage collection

[Garbage collection en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management#Garbage_collection)

[Garbage collection en javascript.info](http://javascript.info/garbage-collection)
