var registName = document.getElementById("registerName");
var registEmail = document.getElementById("registerEmail");
var registPassword = document.getElementById("registerPassword");
var confirmPass = document.getElementById("confirmRegistPassword");
var warningMsg = document.getElementById("warningMsg");
var mainButton = document.getElementById("signingButton");
var confirmIsValid = false;
var nameIsValid = false;
var emailIsValid;
var passIsValid;
mainButton.setAttribute('disabled', 'disabled');
registName.addEventListener("blur", validUserNameRegister);
registEmail.addEventListener("blur", validUserEmailRegister);
registPassword.addEventListener("keyup", validUserPasswordRegister);
confirmPass.addEventListener("keyup", confirmPassword);


function validUserNameRegister() {
    var regexUserName = /^[A-Z][a-z]{2,}$/;
    if (regexUserName.test(registName.value) == true) {
        registName.classList.add("is-valid");
        registName.classList.remove("is-invalid");
        warningMsg.style.display = "none";
        nameIsValid = true;

    } else {
        registName.classList.add("is-invalid");
        registName.classList.remove("is-valid");
        warningMsg.innerHTML = "Name must begin by A-Z and at least 3 letters";
        warningMsg.style.display = "inline";
        nameIsValid = false;

    }
    checkAbility()

}

function validUserPasswordRegister() {
    var regexUserPassword = /^([A-Z]|[a-z]|[1-9]){1,}/;

    if ((regexUserPassword.test(registPassword.value) == true) && (registPassword.value.length >= 8)) {
        registPassword.classList.add("is-valid");
        registPassword.classList.remove("is-invalid");
        warningMsg.style.display = "none";
        passIsValid = true;
    } else {
        registPassword.classList.add("is-invalid");
        registPassword.classList.remove("is-valid");
        warningMsg.innerHTML = "Password must contain upper case , lower case and 8 characters minimum";
        warningMsg.style.display = "inline";
        passIsValid = false;
    }
    checkAbility()

}

function validUserEmailRegister() {
    var regexUserEmail = /^([A-Z]|[a-z]|[1-9]){1,}@[a-z]{1,}\./;
    if (regexUserEmail.test(registEmail.value) == true) {
        registEmail.classList.add("is-valid");
        registEmail.classList.remove("is-invalid");
        warningMsg.style.display = "none";
        emailIsValid = true;

    } else {
        registEmail.classList.add("is-invalid");
        registEmail.classList.remove("is-valid");
        warningMsg.innerHTML = "invalid Email";
        warningMsg.style.display = "inline";
        emailIsValid = false;

    }
    checkAbility()

}


function confirmPassword() {

    if (confirmPass.value == registPassword.value) {
        confirmPass.classList.add("is-valid");
        confirmPass.classList.remove("is-invalid");
        confirmIsValid = true;
        warningMsg.style.display = "none";

    } else {
        confirmPass.classList.add("is-invalid");
        confirmPass.classList.remove("is-valid");
        warningMsg.innerHTML = "Different Passwords";
        warningMsg.style.display = "inline";
        confirmIsValid = false;
    }
    checkAbility()
}

// Disable or enable the btn
function checkAbility() {
    if (nameIsValid && passIsValid && emailIsValid && confirmIsValid) {
        mainButton.removeAttribute('disabled');
    } else {
        mainButton.setAttribute('disabled', 'disabled');
    }
}

mainButton.addEventListener("click", function() {

    if (registEmail.value == '' || registPassword.value == '' || registName.value == '' || confirmPass.value == '') {
        warningMsg.innerHTML = "All inputs are required or invalid inputs";
        warningMsg.style.display = "inline";
    } else {
        warningMsg.style.display = "none";
        registEmail.classList.remove("is-valid");
        registPassword.classList.remove("is-valid");
        registEmail.classList.remove("is-invalid");
        registPassword.classList.remove("is-invalid");

        registName.classList.remove("is-valid");
        confirmPass.classList.remove("is-valid");
        registName.classList.remove("is-invalid");
        confirmPass.classList.remove("is-invalid");
    }

})