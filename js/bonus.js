console.log('ciao bonus')


// BONUS
// SHUFFLE ARRAY
// a partire da una array con dei dati creare un algoritmo che vada a mescolare gli elementi al suo interno
// Consigli:
// il problema non è banale e vi consiglio di analizzarlo bene prima di mettervi a scrivere codice.
// Provate voi stessi: Mettetevi 10 matite sul tavolo e provate (seguendo gli stessi passaggi) e disporle in ordine casuale e dopo traducete quello che avete fatto in codice.
// serve un ciclo o più di uno? Quale ciclo devo usare? non c’è una soluzione unica, dipende dall’algoritmo che state provando a realizzare

// creo il mio array 
let primoArray = ['giallo','rosso','rosa','blu','verde','nero','bianco']
// questo array contiene dei colori che io devo mischiare e mettere in un secondo array

let secondoArray = []

// for (let i=0)



    //Ci prendiamo la lunghezza dell'array e partiamo dal fondo!
    let currentIndex = primoArray.length
    console.log(currentIndex)
    // Finché ci sono elementi da mescolare, iteriamo l'array
    while (0 !== currentIndex) {
      //Prendiamo un indice a caso dell'array, purché sia compreso tra 0 e la lunghezza dell'array
      randomIndex = Math.floor(Math.random() * currentIndex);
      //Riduciamo di un'unità l'indice corrente
      currentIndex -= 1;
      // Una volta che abbiamo preso l'indice casuale, invertiamo l'elemento che stiamo analizzando alla posizione corrente (currentIndex) con quello alla posizione presa casualmente (randomIndex)
      //Variabile temporanea
      secondoArray.push(primoArray[randomIndex]);
      console.log(secondoArray)
      //Eseguiamo lo scambio
    
    }