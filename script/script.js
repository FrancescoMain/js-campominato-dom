let listaElementi = [];
const playBtn = document.getElementById("play");
let numCaselle = 0;
let mycont = returnElement("top");
let size = "";
let punteggio = 0;
let gameend = false;
let bombe = [];


// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

// evento sul bottone

playBtn.addEventListener ("click" , function() {
  let gameend = false;
  mycont.innerHTML = "";
  let h1 = document.createElement("h1");
  h1.append("SCORE: 00" + punteggio+"0")
  mycont.append(h1)
  let container = document.getElementById("ms_cont");
  let select = document.getElementById("select").value;
  if (select == 1) {
    numCaselle = 100;
    size = "size1"
    bombe = genArrNumUniciRandomMinMax(16,1,numCaselle);
  } else if (select == 2) {
    numCaselle = 81;
    size = "size2"
    bombe = genArrNumUniciRandomMinMax(16,1,numCaselle);
  } else if (select == 3) {
    numCaselle = 49;
    size = "size3"
    bombe = genArrNumUniciRandomMinMax(16,1,numCaselle);
  }

  console.log(bombe);
  listaElementi = [];
  punteggio = 0;

  container.innerHTML = "";

  generaListaElementi(1, numCaselle,listaElementi,"div");

  aggiungiClassiAdArray(listaElementi, "box");

  aggiungiClassiAdArray(listaElementi, size);

  aggiungiElementiAdHtml(listaElementi, "ms_cont")


  for (let index = 0; index < listaElementi.length; index++) {
    let iteam = listaElementi[index];
    iteam.innerHTML = "";
    iteam.addEventListener("click", 
    function () { 
      mycont.innerHTML = "";
      let h1 = document.createElement("h1");
      h1.append("SCORE: 00" + punteggio+"0")
      mycont.append(h1)
     

    if (bombe.includes(index+1) && gameend==false) {
      gameend = true;
      iteam.classList.add("bomba");
      if (gameend == true) {
        for (let i = 0; i < listaElementi.length; i++) {
          if (bombe.includes(i+1)) {
            listaElementi[i].classList.add("bomba");

          }else {
            listaElementi[i].classList.add("clicked");
          }
          
        }
      }
;

 

    }else if (!bombe.includes(index+1) && gameend==false) {
      iteam.classList.add("clicked");
      punteggio++;
    }

    
  })

}
  
})





// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// evento sulla cella

