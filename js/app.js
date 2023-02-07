console.log ('ciao')

// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. Se il numero è dispari, 
// lo salviamo in una lista. Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari.
//  Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.
let lista = []
for (let i = 0; lista.length < 10; i++){
    const askNumber = parseInt(prompt('Dimmi un numero'))
    lista.push(askNumber)
    console.log(lista)
    console.log(askNumber)
    // do {
    //     let pari = askNumber % 2
    //     console.log(pari)
    //     if(pari != 0){
    //         lista.push(askNumber)
    //         console.log(lista)
    //     }
    // }
    // while (isNaN(askNumber) || (askNumber<0)) {
}


    

