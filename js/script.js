// Funzione genera un numero casuale tra 1 e 100 (inclusi)
// Chiedi all'utente di inserire un numero N
// Verifica che N sia valido oppure ès tato inserito un valore non number
// Genera un array casuale di 10 numeri e stampalo a schermo

function generaArrayCasuale(dimensioneCasuale) {
    let arr = [];
    for (let i = 0; i < dimensioneCasuale; i++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    return arr;
}
