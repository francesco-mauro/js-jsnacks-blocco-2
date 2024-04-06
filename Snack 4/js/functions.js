
/**
 * 
 * @param {any} elemento - 
 * @returns {number} //number
 */
function trovaI(array, elemento) {
    let elementoDaCercare; 
    if (typeof elemento === 'string' && !isNaN(parseInt(elemento))) {
      elementoDaCercare = parseInt(elemento, 10);
    } else {
      elementoDaCercare = elemento;
    }
  
    for (let indice = 0; indice < array.length; indice++) { 
      if (array[indice] === elementoDaCercare) {
        return indice; 
      }
    }
    return -1; 
  }
  