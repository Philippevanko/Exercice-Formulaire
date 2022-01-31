let name = document.querySelector('#lastname');
lastname.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value);
    
   viewError ('#lastnameError', this, response);
    

});


let firstName = document.querySelector('#firstname');
firstName.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value);

    viewError ('#firstnameError', this, response);
 
});

let pseudo = document.querySelector('#pseudo');
pseudo.addEventListener('input', function() {
    //alert('changement!');


    //verifie la longeur d'une chaine
    let response = isLength(this.value, 5);
    viewError ('#pseudoError', this, response);
});

let email = document.querySelector('#email');
email.addEventListener('input', function() {
    //alert('changement!');

    let response = isEmail(this.value);
    //let response = checkEmail(this.value);

    let error = document.querySelector ('#emailError')
    this.style.border = '2px solid red';
    error.style.display= 'block';

    //console.log(response);
    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }
});

//verification du mot de passe
let password = document.querySelector('#password');
password.addEventListener('input', function() {
    //alert('changement!');

    let response = notEmpty(this.value, 6);

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
    let password = document.querySelector('#password');
    let response = isEqual(password.value, this.value);

    let error = document.querySelector ('#verifPasswordError')
    this.style.border = '2px solid red';
    error.style.display= 'block';

    //console.log(response);
    if (response) {
        this.style.border = '2px solid green';
        error.style.display ='none';
    }
});

//verification email


    


