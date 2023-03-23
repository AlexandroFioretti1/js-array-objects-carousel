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

Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:

Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
Buon lavoro e buon divertimento. Confermate lettura come al solito.

/*****************************************************************************************************************/
/*****************************************************************************************************************/
const films = [
  {
    /* spiderman */
    imgUrl: "./assets/img/01.webp",
    titolo: "Marvel's Spiderman Miles Morale",
    descrizione:
      "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    /* ratchet & Clank */
    imgUrl: "./assets/img/02.webp",
    titolo: "Ratchet & Clank: Rift Apart",
    descrizione:
      "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    /* Fortnite */
    imgUrl: "./assets/img/03.webp",
    titolo: "Fortnite",
    descrizione:
      "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    /* Stray */
    imgUrl: "./assets/img/04.webp",
    titolo: "Stray",
    descrizione:
      "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.",
  },
  {
    /* Marvel's Avengers */
    imgUrl: "./assets/img/05.webp",
    titolo: "Marvel's Avengers",
    descrizione:
      "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];
/* creo un console.log di tutti i Film inseriti all'interno dell'array */
console.log(films);
