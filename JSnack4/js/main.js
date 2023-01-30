// Snack4 (Bonus)
// Fai inserire un numero all'utente. Poi continua a chiedere numeri finché la serie è crescente (l'ultimo numero inserito deve essere maggiore del precedente). Alla fine stampali tutti.

let userNumber = parseInt(prompt("Inserisci numero: "));
let counter = 0;
const growingArray = [];


if(isNaN(userNumber)){
    alert("sbagliato, inserisci correttamente i numeri");
    window.location.reload();
}
else{
    let i = 0;
    growingArray.push(userNumber);
    userNumber = parseInt(prompt("Inserisci numero: "));
    if(isNaN(userNumber)){
        alert("sbagliato, inserisci correttamente i numeri");
        window.location.reload();
    }
    else{
        if (userNumber < growingArray[0]){
            console.log("L'Array non è stato crescente e si è fermato al primo numero!");
            console.log(growingArray);
        }
        else { 
            growingArray[1]= userNumber;
            counter = counter + 1;

        }

    }
    while (growingArray[counter] > growingArray[i]){
        userNumber = parseInt(prompt("Inserisci numero: "));
        if (isNaN(userNumber)) {
            alert("sbagliato, inserisci correttamente i numeri");
            window.location.reload();
        } else{
            if (userNumber > growingArray[counter]){
                growingArray[counter + 1] = userNumber;
                counter = counter + 1;
                
            }
            else break;
        }
        i++;
    }
}

if (growingArray.length != 1){
    console.log("L'array è cresciuto ",counter, "volte", "--------->", growingArray);
}