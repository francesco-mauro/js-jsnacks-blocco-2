/**
 * 
 * 
 * @param {any} array
 * @returns {number}
 */
function contaElementi(array) {
  let contatore = 0; 

  //  ciclo da iterare attraverso elementi dell'array
  for (let i = 0; i < array.length; i++) {
    contatore++;
  }

  return contatore; // number
}
