let name = document.querySelector('#lastname');
lastname.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value);
    
    // recupàeration de l'erreur a afficher si besoin
    let error = document.querySelector ('#lastnameError')
    
    //applique une bordure rouge par defaut
    this.style.border = '2px solid red';
    error.style.display= 'block';

    //console.log(response);
    
    // equivalent a if (reponse === true){....}
    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }

});


let firstName = document.querySelector('#firstname');
firstName.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value);
    this.style.border = '2px solid red';
    let error = document.querySelector ('#firstnameError')
    error.style.display= 'block';

    //console.log(response);

    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }
});

let pseudo = document.querySelector('#pseudo');
pseudo.addEventListener('input', function() {
    //alert('changement!');


    //verifie la longeur d'une chaine
    let response = isLength(this.value, 5);
    let error = document.querySelector ('#pseudoError');

    this.style.border = '2px solid red';
    error.style.display= 'block';

    //console.log(response);
    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }
});

let mail = document.querySelector('#mail');
mail.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value);

    let error = document.querySelector ('#emailError')
    this.style.border = '2px solid red';
    error.style.display= 'block';

    //console.log(response);
    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }
});

let password = document.querySelector('#password');
password.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value);

    let error = document.querySelector ('#passwordError')
    this.style.border = '2px solid red';
    error.style.display= 'block';

    //console.log(response);
    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }
});

let verifPassword = document.querySelector('#verifPassword');
verifPassword.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value);

    let error = document.querySelector ('#verifPasswordError')
    this.style.border = '2px solid red';
    error.style.display= 'block';

    //console.log(response);
    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }
});


