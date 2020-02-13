	'use strict';
	
	class Animal {}
	
	class Fox {
	  breed() {
	    return new Fox();
	  }
	  eat(animals) {
	    return animals.filter((animal) => {
	      return animal instanceof Fox;
	    });
	  }
	}
	
	class Chicken {
	  breed() {
	    return new Chicken();
	  }
	}
	
	class Room {
	  putAnimals(animals) {
	    this.animalsInside = animals;
	  }
	
	  closeDoor() {
	    if (this.animalsInside[0].constructor.name === this.animalsInside[1].constructor.name) {
	      this.animalsInside.push(this.animalsInside[0].breed());
	    } else {
	      for (let i = 0; i < this.animalsInside.length; i++) {
	        if (this.animalsInside[i] instanceof Fox) {
	          this.animalsInside = this.animalsInside[i].eat(this.animalsInside);
	          break;
	        }
	      }
	    }
	  }
	
	  takeAnimalsOut() {
	    return this.animalsInside;
	  }
	}
	
	function createAnimals() {
	  const randomAnimal = Math.random() * 2 > 1 ? new Fox() : new Chicken();
	  return randomAnimal;
	}
	
	const ourAnimals = [];
	
	for (let i = 0; i < 2; i++) {
	  ourAnimals.push(createAnimals());
	}
	console.log(ourAnimals);
	
	const ourRoom = new Room();
	
	ourRoom.putAnimals(ourAnimals);
	ourRoom.closeDoor();
	
	const survivors = ourRoom.takeAnimalsOut();
	
	console.log(survivors);
