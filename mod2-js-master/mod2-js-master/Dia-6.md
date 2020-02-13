# Contagiar el array

Empezamos con un array, las posiciones con false están sanas, las que tienen true son contagiosas. Necesitamos una función que contagie a los sanos, cada enfermo contagiará a los que se encuentran justo a su lado.

	const enfermos = [true, false, true, false, false, false, true, true];
	
	function estaDentroDelArray(posicion, longitud) {
	  return posicion >= 0 && posicion < longitud;
	}
	
	function contagiar(pacientesCero) {
	  const nuevaRemesa = [...pacientesCero];
	  for (let i = 0; i < nuevaRemesa.length; i++) {
	    if (pacientesCero[i]) {
	      if (estaDentroDelArray(i - 1, pacientesCero.length)) {
	        nuevaRemesa[i - 1] = true;
	      }
	      if (estaDentroDelArray(i + 1, pacientesCero.length)) {
	        nuevaRemesa[i + 1] = true;
	      }
	    }
	  }
	  return nuevaRemesa;
	}
	
	console.log(enfermos, contagiar(enfermos));