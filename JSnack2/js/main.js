// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

// CREO UN ARRAY VUOTO
const numbers= [];

// CREO LA VARIABILE SOMMA
let somma = 0;
// CREO UN CHECK DA FARE NEL CICLO
let check = false;
// CREO LA VARIABILE INPUT VALORE DELL'UTENTE
let userNumber = 0;



while (userNumber < 50 && !check){
    //debugger;
    userNumber = parseInt(prompt("Inserisci un numero non superiore a 50"));
    if (userNumber >= 50) {
      alert("inserisci un valore corretto");
      userNumber = 0;
    }
    else if (userNumber < 50){
        if (somma < 50 && somma + userNumber < 50){
            somma = somma + userNumber;
            numbers.push(userNumber);
            
        }
        else check = true;
    }
}


console.log(numbers);
console.log(somma);

