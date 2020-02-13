# Continuación de objetos, Arrays

## Continuación de objetos

[Object keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)

Con el método `keys` de los objetos podremos obtener el nombre de todos los atributos asociados a un objeto determinado

Comparación de objetos y asignación de objetos a distintas variables

	let elPrimero = { a:1 };
	let elSegundo = { a:1 };
	elPrimero === elSegundo // FALSE! apuntan a distintas zonas de memoria
	
	elSegundo = elPrimero;
	elPrimero === elSegundo // TRUE! estamos comparando que apuntan al mismo sitio en la memoria
	
Si queremos generar un objeto idéntico a uno que tenemos podemos usar el operador spread `...`

	const loQuieroClonar = { a:1,b:2,c:3 };
	const elClon = { ...loQuieroClonar };
	loQuieroClonar === elClon // FALSE! El clon es un nuevo objeto almacenado en otro sitio de la memoria


## Arrays

[Arrays en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)

Podemos pensar en un array como una lista de datos almacenados en orden. Para definir un array vacío lo podemos hacer como sigue

	const miPrimerArray = [];
	
Este array está vacío, pero lo podemos declarar de inicio con datos

	const otroArray = [ 1, 2, 3, 4]; //pueden ser del mismo tipo
	const unoMas = [ 'a', 14, true, true, {a: 1}] //Pueden ser todos distintos y tener repetidos
	
Para saber cuantos elementos tiene un array lo haremos con length

	const longitud = otroArray.length;
	
Para acceder a uno de los datos almacenados en un array pondremos la posición entre corchetes, teniendo en cuenta que la primera posición de los array es la cero

	otroArray[2] //Accede al tercer puesto del array que contiene 3
	
Algunos métodos de los arrays

* `push` añade algo al array al final. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push) 
* `pop`  elimina el último elemento del array y lo devuelve, esto modifica el array en cuestión. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/pop)
* `forEach` Itera sobre todos los elementos del array. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* `shift` elimina el primer elemento del array y lo retorna. Este método modifica la longitud del array. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/shift)
* `unshift` añade un elemento al principio del array, es como el opuesto de push. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/unshift)
* `indexOf` busca el índice de un elemento en un array, si encuentra algo devuelve su posición, sinó `-1. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/indexOf)
* `splice` elimina elementos del array en una posición puede eliminar múltiples elementos. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice)
* `slice` devuelve una sección del array y **NO** modifica el array original. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/slice)
* `reverse` modifica el array que le pasemos y lo pone en orden inverso. [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reverse)

También podemos hacer una copia de un array con spread al igual que los objetos

	const loQuieroCopiar = [ 1, 2, 3, 4]
	const copiado = [...loQuieroCopiar]