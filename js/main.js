/*
1-generare 16 numeri casuali tra 1 e 100
2-16 prompt utente, uno alla volta, con numeri tra 1 e 100
3- se il numero è incluso nella lista dei numeri generati, si conclude la partita, altrimenti si continua con i prompt successivi
4-la partita termina se viene inserito un numero di quelli casuali generati dal computer o se si raggiunge il massimo possibile di numeri consentiti.
5-al termine, il software deve comunicare il numero di volte che l'utente ha inserito un numero consentito
6-Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50
*/

var difficolta = parseInt((prompt("Scegli un livello da 0 a 2")))
switch (difficolta) {
    case 0:
    var maxNumber = 100;
    var minNumber = 1;
    break;
    case 1:
    var maxNumber = 80;
    var minNumber = 1;
    break;
    case 2:
    var maxNumber = 50;
    var minNumber = 1;
}

var generateNumbers = [];
for (var i = 0; i < 16; i++) {
    var generator = generaRandom(minNumber,maxNumber);
    console.log(generator);
    generateNumbers.push(generator);
}

for (var i = 0; i < 16; i++) {
    var userPrompt = parseInt(prompt("Inserisci un numero da " + minNumber + " a " + maxNumber));
    if (generateNumbers.includes(userPrompt)) {
        console.log("hai perso");
        console.log("hai accumulato " + i + " punti");
        i = 16;
    } else if (i == 15) {
        console.log("hai vinto");
        console.log("hai accumulato " + (i + 1) + " punti");
    }

}




function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
