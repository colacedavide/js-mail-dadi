// chiedo il nome utente

let nome = prompt(" Inserisci il nome utente ");

//genero numeri random da 1 a 6

let numeroUno = Math.floor(Math.random() * 6) + 1;

let numeroDue = Math.floor(Math.random() * 6) + 1;

console.log(" Il numero dell'utente ", nome, " è :", numeroUno);
console.log("Il numero del computer è: ", numeroDue);

//controllo numero più grande, e controllo chi ha vinto
 if( numeroUno > numeroDue){
    console.log(" complimenti, l'utente ", nome, "ha vinto!!!")

 } else if (numeroUno === numeroDue){
    console.log("E' un pareggio. Mi dispiace se vuoi vincere riprova!");

 } else{
    console.log("L'utente", nome, "ha perso, vince il computer!!!");
 }