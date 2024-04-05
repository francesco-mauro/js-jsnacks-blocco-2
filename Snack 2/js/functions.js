function confrontaParola(parola1, parola2) {
    console.log(`Parola 1 inserita: ${parola1}`);
    console.log(`Parola 2 inserita: ${parola2}`);
  
    if (parola1.length === parola2.length) {
      console.log("Le parole hanno la stessa lunghezza.");
      return "uguale lunghezza";

    } else if (parola1.length > parola2.length) {
      console.log(`La parola più lunga è la prima: ${parola1}`);
      return parola1;
      
    } else {
      console.log(`La parola più lunga è la seconda: ${parola2}`);
      return parola2;
    }
  }