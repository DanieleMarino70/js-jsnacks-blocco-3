// Snack1
// Chiedi all'utente un valore minimo ed un valore massimo. Genera un numero casuale all'interno del range fornito dall'utente.

const minValue = parseInt(prompt("Inserisci un valore minimo"));
const maxValue = parseInt(prompt("Inserisci un valore massimo"));
const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
console.log("il valore fornito nel range tra ", minValue, " e ", maxValue," è di: ", randomNumber);

//debug
// for(let i=0; i < 100; i++) {
//   const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
//   console.log(randomNumber);

// }