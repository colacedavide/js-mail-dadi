//snack 2
//chiedo di scrivere 2 parole

let parolaUno = prompt("Inserisci parola");

let parolaDue = prompt("Inserisci seconda parola");
 
console.log(parolaUno);
console.log(parolaDue);
if(parolaUno > parolaDue){
    console.log("La parola più corta è:", parolaUno);
    console.log("La parola più lunga è ", parolaDue);
}else if(parolaUno === parolaDue){
    console.log("Le parole sono lunghe uguali");
}else{
    console.log("La parola più lunga è: ", parolaDue);
    console.log("La parola più corta è:", parolaUno);

}
