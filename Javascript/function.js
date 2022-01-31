/**
 * fonjctions de verification d'un formulaire
 */


//verifie que la donée recue ne soit pas vide
let notEmpty = function(value) {
    
    //si la longeur de la chaiine est egal a zero c'est sque celle ci est vide
    if (value === ''){
        return false;
    }

    return true;

    // return value.length === 0;

}

let isLength = function(value, min) {
    // si la chaine fait 5 caracteres ou plus , on retourne "true"
    return value.length >= Number(min);
    

}




