var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var mainButton = document.getElementById("signingButton");
var logOutButton = document.getElementById("logOut");
var warningMsg = document.getElementById("warningMsg");
var emailIsValid;


signInEmail.addEventListener("keyup", valideSignEmail);
mainButton.setAttribute('disabled', 'disabled');


function valideSignEmail() {
    var regexUserEmail = /^([A-Z]|[a-z]|[1-9]){1,}@[a-z]{1,}\./;
    if (regexUserEmail.test(signInEmail.value) == true) {
        signInEmail.classList.add("is-valid");
        signInEmail.classList.remove("is-invalid");
        warningMsg.style.display = "none";
        emailIsValid = true;

    } else {
        signInEmail.classList.add("is-invalid");
        signInEmail.classList.remove("is-valid");
        warningMsg.innerHTML = "invalid Email";
        warningMsg.style.display = "inline";
        emailIsValid = false;

    }
    checkAbility()

}


mainButton.addEventListener("click", function() {
    if (mainButton.innerText == "login") {
        if (signInEmail.value == '' || signInPassword.value == '') {
            warningMsg.innerHTML = "All inputs are required or invalid inputs";
            warningMsg.style.display = "inline";
        } else {
            warningMsg.style.display = "none";
            signInEmail.classList.remove("is-valid");
            signInPassword.classList.remove("is-valid");
            signInEmail.classList.remove("is-invalid");
            signInPassword.classList.remove("is-invalid");
        }
    }
})

// Disable or enable the btn
function checkAbility() {
    if (emailIsValid) {
        mainButton.removeAttribute('disabled');
    } else {
        mainButton.setAttribute('disabled', 'disabled');
    }
}