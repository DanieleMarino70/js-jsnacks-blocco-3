// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

const n = parseInt(prompt("Inserisci un numero: "));

if (isNaN(n)){
    alert("Sbagliato, inserisci un numero");
}
else{
    for (let i = 0; i < n; i++){
        const arrayN = [];
        let x = 0;
        while (x < 10){
            const randomNumber = Math.floor(Math.random() * 100 + 1);
            arrayN[x]= randomNumber;
            x++;
        }
        console.log(arrayN);
    }
}
