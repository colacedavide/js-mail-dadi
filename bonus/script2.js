//creo un array vuoto
const dispari = [];

//chiedo 6 numeri
for(i=0; i < 6; i++ ){
 let numero = prompt("Inserisci numero ");
// controllo se dispari
 if(numero % 2 === 1){
    dispari.push(numero)
 }
}
 console.log(dispari);