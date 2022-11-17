



//aggiungi elementi array ad un elemento nel doom, id tra "" 
function aggiungiElementiAdHtml(array, id) {
    for (let index = 0; index < array.length; index++) {
        let cont = document.getElementById(id);
        cont.appendChild(listaElementi[index]);
        
      
    }
}


//aggiungi classe ad array di elementi, classi tra ""
function aggiungiClassiAdArray(array, class1 ) {
    for (let index = 0; index < array.length; index++) {
        array[index].classList.add(class1);
      
    }
}


//generatore array di elementi, l'array deve essere creato prima, l'elemtno tra ""
function generaListaElementi(min, max,array,elemento) {
    for (let index = min; index <= max; index++) {
        let iteam = document.createElement(elemento)
        array.push(iteam);
       
    }
}


//generatore array numerico, l'array deve essere creato prima
function generaListaNumeri(min, max,array) {
    for (let index = min; index <= max; index++) {

        array.push(index);
       
    }
}


// reverse di una stringa 
function reverseStringa(parola) {
    let parolaDivisa = parola.split("");
    parolaDivisa = parolaDivisa.reverse();
    parolaReverse = parolaDivisa.join('');

    return parolaReverse;

}


//numero random intero

function intRandom(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;

}


//somma di due numeri 
function somma(num1, num2) {
    return num1 + num2;
}

// numero pari o dispari 

function pariDispari(num) {
    if (num % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }

}

// generatore arary numeri unici random min max
function genArrNumUniciRandomMinMax(quanti,min,max) {
    const newArray = [];

    while (newArray.length < quanti) {
      let num = intRandom(min,max);
      if (!newArray.includes(num)) {
          newArray.push(num);
      }
    }

    return newArray;
}

function returnElement (elemento) {

  let element =  document.getElementById(elemento)
  return element;
}