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


//1 ere solution
document.getElementById("eye").addEventListener("click", function(e){
    var pwd = document.getElementById("password");
    if(pwd.getAttribute("type")=="password"){
        pwd.setAttribute("type","text");
    } else {
        pwd.setAttribute("type","password");
    }
});

document.getElementById("eye1").addEventListener("click", function(e){
    var vpwd = document.getElementById("verifPassword");
    if(vpwd.getAttribute("type")=="password"){
        vpwd.setAttribute("type","text");
    } else {
        vpwd.setAttribute("type","password");
    }
});

/**
 * afficher le mot de passe
 */

// 2 eme solution
let eyes = document.querySelectorAll('.view-pwd');

for(let element of eyes) {
    Element.addEventListener('click', function(){
        showHidePassword(this);
    })
}




/**
 * Permet de generer un moty de passe aleatoire
 */

let link = document.querySelector('#generatePwd');
link.addEventListener ('click', function () {
    let passwordGenerate = generatePassword();
    //console.log(passwordGenerate);
    let inputPwd = document.querySelector('#password');
    inputPwd.value = passwordGenerate;
});

