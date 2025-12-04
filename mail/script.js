// creo un array di e-mail.
// faccio un prompt per chiedere l'email all'utente
// faccio una verifica e-mail
// stampo il messaggio

const lista = ["davide00@gmail.com", "rick@libero.it", "ester@hotmail.it", "fabio@yahoo.com"];
console.log(lista)
let email = prompt("Inserisci la tua e-mail ");
console.log(" La tua e-mail è: ", email);
let controllo = false ;

//controllo e-mail

for(i = 0; i < lista.length ; i++){
    if(email === lista[i]){

        controllo=true;
        break;
           }
}
// controllo il boolean

if(controllo === true){
    console.log("Sei un invitato! ");

}else {
    console.log("Non sei un invitato!");
}