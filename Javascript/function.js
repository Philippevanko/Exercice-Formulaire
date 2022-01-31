/**
 * fonjctions de verification d'un formulaire
 */


//verifie que la donée recue ne soit pas vide
let notEmpty = function (value) {

    //si la longeur de la chaiine est egal a zero c'est sque celle ci est vide
    if (value === '') {
        return false;
    }

    return true;

    // return value.length === 0;

}

let isLength = function (value, min) {
    // si la chaine fait 5 caracteres ou plus , on retourne "true"
    return value.length >= Number(min);


}

/**
 * Vérifie que la donnée soit une adresse email valide
 */
 let isEmail = function(value) {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,10}$/;
    return pattern.test(value);
}

//function checkEmail(email) {
   // let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //  return re.test(email);
//}
//function validate() {
  //  let email = document.getElementById("email").value;

  //  if (checkEmail(email)) {
  //      alert('Adresse e-mail valide');
 //   } else {
 ////       alert('Adresse e-mail non valide');
 //   }
 //   return false;
//}

//verifie que le mot de passe soit similaire
let isEqual = function(value, confirmValue){
    return value === confirmValue;

}
//permet d'afficher ou non les erreurs

let viewError = function(message, input, response) {

    let errorMessage = document.querySelector(message);
    input.style.border = "2px solid red";
    errorMessage.style.display = "block"

    // avec un if ternaire
    //input.style.border = response ? "2px solid green" : "2px solid red"
    //errorMessage.display = response ? "none" : "block";

    if (response) {
        input.style.border = "2px solid green";
        errorMessage.style.display = "none";

    }

}




