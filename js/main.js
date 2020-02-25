/*
1-generare 16 numeri casuali tra 1 e 100
2-16 prompt utente, uno alla volta, con numeri tra 1 e 100
3- se il numero è incluso nella lista dei numeri generati, si conclude la partita, altrimenti si continua con i prompt successivi
4-la partita termina se viene inserito un numero di quelli casuali generati dal computer o se si raggiunge il massimo possibile di numeri consentiti.
5-al termine, il software deve comunicare il numero di volte che l'utente ha inserito un numero consentito
*/
var generateNumbers = [];
for (var i = 0; i < 16; i++) {
    var generator = generaRandom(1,100);
    console.log(generator);
    generateNumbers.push(generator);
}

for (var i = 0; i < 16; i++) {
    var userPrompt = parseInt(prompt("Inserisci un numero da 1 a 100"))
    if (generateNumbers.includes(userPrompt)) {
        console.log("hai perso")
        i = 16;
    }
}




function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
