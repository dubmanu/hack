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
	
	class Detective extends Person {
	  constructor(name) {
	    super(name);
	  }
	
	  investigate(suspects) {
	    let summary = {};
	
	    for (const suspect of suspects) {
	      const theTip = suspect.confess();
	      summary = { ...summary, ...theTip };
	    }
	
	    const attributes = Object.keys(summary);
	
	    console.log(attributes);
	
	    const convicts = suspects.filter((suspect) => {
	      let guilty = true;
	      for (const attribute of attributes) {
	        if (suspect[attribute] !== summary[attribute]) {
	          guilty = false;
	          return guilty;
	        }
	      }
	      return guilty;
	    });
	
	    return this.writeReport(convicts);
	  }
	
	  writeReport(convicts) {
	    let report = 'The convicts are: ';
	    for (const convict of convicts) {
	      report += ' ' + convict.name;
	    }
	    return report;
	  }
	}
	
	const names = ['Willy', 'Ivan', 'Ramiro'];
	const eyeColor = ['azul', 'marron', 'marron'];
	const height = ['bajo', 'alto', 'alto'];
	const tattooed = [true, false, false];
	const tip = [{ eyeColor: 'marron' }, { tattooed: false }];
	
	const suspects = Suspect.createSuspects(names, eyeColor, height, tattooed, tip);
	
	const myDetective = new Detective('Colombo');
	
	console.log(myDetective.investigate(suspects));
