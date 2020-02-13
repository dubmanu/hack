# Dia 2

## Operadores

### Operando, operadores unarios y binarios
El operando es a lo que se le aplica un operador.

Cuando un operador sólo necesita un operando el operador se denomina **unario**, por ejemplo el operador de negación “!”

Cuando un operador necesita dos operandos, entonces lo denominamos **binario**, como la suma que necesita dos números “2 + 3”.

Los operadores siguen un orden de prioridad y se pueden usar paréntesis para cambiar el orden en el que se ejecutan. [Precedencia de operadores en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence)

### Numéricos

[Operadores aritméticos en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Aritm%C3%A9ticos)

Operador unario de conversión numérica  `+`  convierte otros tipos de datos a numero 
	+'42' // Convierte a 42
	+true // Convierte a 1

Suma  `+` , resta  `-` , multiplicación  `*`, división  `/`, módulo  `%`, exponente  ** 
Incrementar y decrementar, unarios,  `++`  y  `--` , es diferente prefijar y postfijar estos operadores, postfijando devolverán el valor antiguo.
 
	let miValor = 14;
	miValor++ // Ahora en miValor tenemos guardado el numero 15
	miValor-- // Hemos vuelto al valor inicial

### De strings

Operador de concatenación `+`: convierte dos strings en uno solo que concatena las dos anteriores  
	
	let hackABOS = 'Hack-' + 'a-' + 'BOS'; 

### Asignacion

La asignación `=` nos permite meter valores en las variables.

	let numeroPar = 2; 

La asignación puede ser múltiple

	estaVariable = otraVariable = unaVariableMas =  'Todas van a tener este string' 

podemos hacer un incrementado/decrementado con asignacion a una variable con `+=` , `-=` , *= 
	
	let miNumero = 5
	minumero += 3 // Ahora miNumero almacena un 8 

### De bit

Tratan a los argumentos como enteros de 32 bits y hacen operaciones binarias con ellos
AND  `&`  OR  `|`  XOR  `^`. [Documentación en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

### Comparación de datos

La comparación se puede realizar con doble o con triple =. `==`  o `===`  el segundo comprueba la igualdad de forma estricta, el primero emplearía coerción de tipos y diría que:

	2 ==  '2'  // true
	2 ===  2  // false

Si queremos saber si un dato es distinto de otro usaremos `!=` o `!==`, en este caso el segundo indica la desigualdad estricta

	2 !== 3 // true

### Coerción de tipos

[Coerción de tipos en MDN](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

Cuando usamos el operador `+` con un string involucrado, Javascript usará la concatenación de strings, por lo que convertirá los datos a cadenas de texto.

	'2' + 2 ===  22 
	2 + '2' + 2 ===  222 
	2 + 2 + '2'  ===  42 

pero otros operadores harán coerción y convertirán normalmente a números

	'5' - 2 === 3 // Donde 3 es un número
	6  / 3 === 2

### Comparando valores

Podemos saber a mayores de igualdad cuando un valor es mayor o menor a otro con 

* `<` Menor estricto 
* `<=` Menor o igual
* `>` Mayor estricto
* `>=` Mayor o igual

### Operadores logicos

[Operadores lógicos en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operadores_l%C3%B3gicos)

Los operadores lógicos son AND `&&` OR `||` y NOT `!`.

Para que una comparación con AND devuelva true, todos los valores que comparemos deberán ser true, sino devolverá false

	true && true === true
	true && false === false
	false && true === false
	false && false === false

Para que una comparación con OR devuelva true cualquiera de los valores que comparamos puede ser true, sino devolverá false

	true && true === true
	true && false === true
	false && true === true
	false && false === false

Not siempre devuelve lo contrario de lo que tengamos inicialmente

	!true === false
	!false === true

### if ... else

[If en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else)

If es una sentencia de control de flujo que nos permite ejecutar código condicionalmente.

Se puede declarar de dos maneras, con o sin llaves, aunque con llaves siempre quedará más claro donde empieza y acaba el codigo condicional.

	if (condicion) quieroEjecutarEsto();
	// Es equivalente a...
	if (condicion){
		quieroEjecutarEsto()
	}

Ventajas del if con llaves, permite multiples líneas

Si queremos hacer algo cuando no se cumpla la condición del if podemos usar `else`

	if( estaCondicion === true){
		quieroEjecutarEsto()
	} else {
		quieroEjecutarEstoOtro()
	}

Si aun quisieramos hacer más comprobaciones podríamos usar else if

	if( estaCondicion === true){
		quieroEjecutarEsto()
	} else if (otraCondicion === true){
		quieroEjecutarEstoOtro()
	} else {
		ejecutoOtraCosaDistinta()
	}

### Operador ternario (?)

Nos permite hacer prácticamente lo mismo que el if pero con otra sintaxis, muy útil con asignaciones

	esPar = prompt() % 2 === 0 ? true : false;

### switch

Lo usaremos cuando tengamos que hacer múltiples comparaciones como si fuese un if. Siempre hace comparaciones estrictas `===`.


	switch (variable) {
	  case condicion:
	  	hagoEsto()
	  	break;
	  case otraCondicion:
		hagoOtraCosa()
	  	break;
	  default:
	  	porDefectoHagoEsto()
	}

### truthy y falsy

[Truthy en MDN](https://developer.mozilla.org/es/docs/Glossary/Truthy)
[Falsy en MDN](https://developer.mozilla.org/es/docs/Glossary/Falsy)

`Truthy` es un valor que al ser evaluado en un contexto booleano será equivalente a un true. Por lo contrario `falsy` es un valor que será equivalente a false en un contexto booleano
