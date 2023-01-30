// Snack5 (Bonus #2)
// Genera un numero a caso compreso tra 1-100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. 
// Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. 
// Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.



const randomGeneratedNumber = Math.floor(Math.random() * 100 + 1);
//console.log(randomGeneratedNumber);

let userNumber = 0;
let counter = 0;
let check = false;
debugger

// CON GOOGLE CHROME SI INCASTRA, HO DOVUTO METTERE L'ALERT

do{
    userNumber = parseInt(prompt("Scegli un numero da 1 a 100"));
    if (isNaN(userNumber)) {
        alert("Hai sbagliato, scegli correttamente");
        userNumber = 0;
        //volendo si può iniziare a contare anche da qua
    } else {
        if (userNumber == randomGeneratedNumber) {
            console.log("Ci sei riuscito ", userNumber ,"è uguale a ",randomGeneratedNumber);
            console.log("il numero di tentativi è: ", counter);
            check = true;
    }   else if (userNumber > randomGeneratedNumber) {
            alert("il numero generato è minore del numero scelto");
            console.log("il numero generato è minore del numero scelto");
            counter = counter + 1;
    }   else {
            alert("il numero generato è maggiore del numero scelto");
            console.log("il numero generato è maggiore del numero scelto");
            counter = counter + 1;
    }
  }
}while(!check);