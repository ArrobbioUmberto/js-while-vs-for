console.log('ciao')

// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. Se il numero è dispari, 
// lo salviamo in una lista. Continuiamo a chiedere un numero all’utente finchè non avremo ottenuto 10 numeri dispari.
//  Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.
let lista = []

// for (let i = 0; lista.length < 10; i++) {
    
//     do {
//         let ask = parseInt(prompt('Dimmi un numero'))
//         console.log(ask)
//         let pari = ask % 2
//         console.log(pari)
//         if (pari!== 0 && !isNaN(pari)) {
//             lista.push(ask)
//             console.log(lista)
//         }
        
//     }
//     while (lista.length < 10);

// }


while (lista.length < 10){
    let ask = parseInt(prompt('Dimmi un numero'))
    console.log(ask)
    if (isNaN(ask)){
        continue
    }
    let pari = ask % 2
    if (pari != 0){
        lista.push(ask)
    }
    console.log(lista)
}





