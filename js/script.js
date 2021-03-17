// GOAL:
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

function getRandomNum(min, max){ //funzione che genera un numero casuale dati i due estremi
    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var rnd1 = Math.floor(Math.random() * maxRnd) + minRnd; 
    return rnd1; 
}

function getRandomArray100 (length) { //funzione che genera un array di n elementi casuali
    var arr = [];
    for (var i=0; i<length;i++) {
        var value = getRandomNum(1, 100);
        arr.push(value);
    }
    return arr;
}

function guess(values){
    var userValues = []
    var points = 0;
    for (var i=0; i<values.length; i++) {
        var value = parseInt(prompt("Inserisci un numero e prova ad indovinare!"))
        if (userValues.includes(value)) {
            console.log("Questo numero lo avevi già inserit*! Smemorat*, hai sprecato un tentativo!")
        }
        else if (values.includes(value)) {
            console.log("Complimenti hai indovinato " , value , " !")
            points++;
        } else {
            var tries = values.length - i;
            if (tries!= 0) {
                console.log("Riprova, ti sono rimasti ", tries ," tentativi!")
            }
        }
        userValues.push(value);
    }
    
    console.log("Complimenti hai indovinato ", points , " volte!");

}

function init() {
    // values = getRandomArray100(5);
    console.log(values);
    alert(values);
    setTimeout(guess, 3000, values);
}
values = getRandomArray100(5);
init();