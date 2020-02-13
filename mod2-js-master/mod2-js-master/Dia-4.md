# Repaso de funciones y bucles, introducción a objetos

## Ejercicio "Desactiva la bomba" 	
	function desactiveLaBomba() {
	    let codigoDeBomba = Math.round(Math.random() * 10);
	    console.log(codigoDeBomba);
	    for (let i = 0; i < 5; i++) {
	        let intento = +prompt('Dime un numero');
	        if (intento === codigoDeBomba) {
	            return true;
	        }
	    }
	    return false;
	}
	
	if (desactiveLaBomba()) {
	    console.log('Vives otro dia');
	} else {
	    console.log('BOOM');
	}
	
## Objetos

[Conceptos básicos de objetos en MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics)

Un objeto es una colección de datos relacionados y/o funcionalidad entre si. En cada uno de los atributos de un objeto podemos almacenar cualquier tipo de dato Boolean, Array... incluso más objetos o funciones.

Para declarar un objeto vacío usaremos

	let usuario = {}

Si queremos añadir datos podemos definirlo de esta manera mediante un literal, los distintos atributos se separan con coma `,`

	let persona = {
	  nombre: 'Pepito',
	  edad: 32,
	  genero: 'masculino',
	  intereses: ['música', 'esquí'],
	  bio: function () {
	    console.log(this.nombre + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
	  },
	  saludo: function() {
	    console.log('Hola, Soy '+ this.nombre[0] + '. ');
	  }
	};
	
Para acceder a los datos almacenados en alguno de los parametros usaremos la siguiente notación `nombreDeLaVariable.nombreDelAtributo`

	let nombreDeLaPersona = persona.nombre
	
Para asignar un nuevo valor a alguno de los atributos haríamos de la siguiente manera

	persona.edad = 35;
	
De la misma manera podríamos declarar una nueva propiedad que aún no existiese

	persona.mascota = 'perro';
	
## Chrome devtools

[Introducción a las devtools por Google](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=es)