/* 
Consegna :
Dato un array di oggetti letterali con:
url dell’immagine.
titolo.
descrizione.
Creare un carosello come nella foto allegata.

Milestone 0: 
creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:

Aggiungere le nails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro e buon divertimento. Confermate lettura come al solito.
/***********************************************************************************************************
************************************************************************************************************/
const giochi = [
  {
    /* spiderman */
    imgUrl: "./assets/img/01.webp",
    titolo: "Marvel's Spiderman Miles Morale",
    descrizione:
      "Vivi l'ascesa di Miles Morales mentre il nuovo eroe padroneggia nuovi poteri incredibili ed esplosivi per diventare il suo stesso Spider-Man",
  },
  {
    /* ratchet & Clank */
    imgUrl: "./assets/img/02.webp",
    titolo: "Ratchet & Clank: Rift Apart",
    descrizione:
      "Fai un salto dimensionale con Ratchet e Clank mentre affrontano un malvagio imperatore di un'altra realtà.",
  },
  {
    /* Fortnite */
    imgUrl: "./assets/img/03.webp",
    titolo: "Fortnite",
    descrizione:
      "Raduna tutti i tuoi amici e lanciati in Epic Games Fortnite, un enorme faccia a faccia con 100 giocatori che combina saccheggio, creazione, sparatorie e caos",
  },
  {
    /* Stray */
    imgUrl: "./assets/img/04.webp",
    titolo: "Stray",
    descrizione:
      "Perso, ferito e solo, un gatto randagio deve districare un antico mistero per sfuggire a una città dimenticata da tempo.",
  },
  {
    /* Marvel's Avengers */
    imgUrl: "./assets/img/05.webp",
    titolo: "Marvel's Avengers",
    descrizione:
      "Marvel's Avengers è un epico gioco di azione e avventura in terza persona che combina una storia cinematografica originale con un gameplay per giocatore singolo e cooperativo.",
  },
];
/* creo un console.log di tutti i Film inseriti all'interno dell'array */
console.log(giochi);

// Seleziono col dalla DOM
const colEL = document.querySelector(".col");

/* credo un ciclo per ogni gioco inserito nell'array per il titolo-img-testo */
giochi.forEach((gioco) => {
  colEL.innerHTML += `<div class="singleMovie"><h2 class="nome">${gioco.titolo}</h2><img class="img-fluid copertina" src="${gioco.imgUrl}" alt="">
   <h3 class="desc">${gioco.descrizione}</h3> </div>`;
});

const totalFilm = document.querySelectorAll(".singleMovie");
console.log(totalFilm);

// assegno il valore di 0 ariabile a per modificare l'elemento visualizzato
let indexArray = 0;

// Seleziono il pulsante next e previous
const next = document.querySelector(".next_arrow");
const prev = document.querySelector(".prev_arrow");

// Aggiungo la classe active
totalFilm[indexArray].classList.add("active");

// Event Listener per il pulsante NEXT
next.addEventListener("click", function () {
  console.log("Clicked on the Next Button");

  // rimuovo la classe "active"
  totalFilm[indexArray].classList.remove("active");
  indexArray++;
  if (indexArray >= totalFilm.length) {
    indexArray = 0;
  }
  totalFilm[indexArray].classList.add("active");
});

// Event Listener per il pulsante PREV
prev.addEventListener("click", function () {
  console.log("Clicked on the Previous Button");
  totalFilm[indexArray].classList.remove("active");
  indexArray--;
  if (indexArray < 0) {
    indexArray = totalFilm.length - 1;
  }
  totalFilm[indexArray].classList.add("active");
});
