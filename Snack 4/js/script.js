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


// Test 
let arrayDiTest = [10, 20, 30, 40, 50]; // Array
let elementoDaCercare = "30"; //string 
console.log(`L'elemento ${elementoDaCercare} si trova all'indice: ${trovaI(arrayDiTest, elementoDaCercare)}`);


elementoDaCercare = "60"; // string
console.log(`L'elemento ${elementoDaCercare} si trova all'indice: ${trovaI(arrayDiTest, elementoDaCercare)}`);
