# Continuación de Arrays

[Map en MDN
](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)

[Filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)

[Reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)

## Ejercicio para ordenar un array

	const desordenado = [7, 5, 10, 3, 4];
	console.log('desordenado', desordenado);
	
	const ordenado = desordenado.sort(comparar);
	function comparar(a, b) {
	  return a - b;
	}
	
	
	console.log('ordenado', ordenado);
	
	function ordenar(desordered) {
	  const ordered = [...desordered];
	  for (let i = 0; i < ordered.length; i++) {
	    for (let j = 0; j < ordered.length; j++) {
	      if (ordered[i] < ordered[j]) {
	        const temp = ordered[j];
	        ordered[j] = ordered[i];
	        ordered[i] = temp;
	      }
	    }
	  }
	  return ordered;
	}
	
	const ordered = ordenar(desordenado);
	console.log(ordered);

Un callback es una función que pasaremos a otra fución como parámetro para que sea ejecutada posteriormente.

	const nuestroCallback = function(texto) {
	  console.log(texto);
	};
	
	const otroCallback = function(texto) {
	  console.log(texto.toUpperCase());
	};
	
	function eco(unCallback) {
	  const contenido = 'hola';
	  console.log(contenido);
	  unCallback(contenido);
	}
	
	eco(nuestroCallback);
	eco(otroCallback);
	
Las métodos de array que veremos a continuación necesitan callbacks, en estos describiremos lo que queremos que hagan

`forEach`: Ejecutará el callback para cada uno de los miembros del array. Tiene desventajas, como que si queremos interrumpir el bucle no podremos.

`map`: Transforma el array como describamos en la función de callback y nos devuelve un array nuevo. Deberemos hacer return del dato transformado para cada una de las posiciones en el callback

	let datos = [1, 2, 3, 4, 5];
	
	let datosMas5 = datos.map((dato) => dato + 5);
	
	console.log(datosMas5);
	
