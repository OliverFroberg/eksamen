const dialog = document.querySelector(".signup__dialog");

function openSignupDialog() {
    dialog.style.display = "block";
}

function closeSignupDialog() {
    dialog.style.display = "none";
}

const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const passInput = document.querySelector("#password");
const passConfInput = document.querySelector("#password-confirm");
const emailInput = document.querySelector("#email");
const acceptTermsCheck = document.querySelector("#accept-terms");

const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const passError = document.querySelector("#password-error");
const passConfError = document.querySelector("#password-confirm-error");
const emailError = document.querySelector("#email-error");
const acceptTermsError = document.querySelector("#terms-error");

const validText = document.querySelector("#valid-text");

function validateSignupForm() {
    let valid = true;

    if (nameInput.value.length < 2) {
        setError(nameError, "Navn skal være mindst 2 tegn");
        valid = false;
    }

    if (phoneInput.value.length !== 8) {
        setError(phoneError, "Nummer skal være 8 cifre");
        valid = false;
    }

    if (passInput.value < 8) {
        setError(passError, "Password skal være mindst 8 tegn");
        valid = false;
    }

    if (passInput.value !== passConfInput.value) {
        setError(passConfError, "Password er ikke ens");
        valid = false;
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        setError(emailError, "Email skal matche formatet 'john@gmail.com'");
        valid = false;
    }

    if (!acceptTermsCheck.checked) {
        setError(acceptTermsError, "Du skal acceptere vilkårene")
        valid = false;
    }

    if (valid) {
        validText.style.display = "inline";
        validText.textContent = "Du er nu registreret";
        setTimeout(() => {
            closeSignupDialog()
            validText.style.display = "none";
            validText.textContent = "";
        }, 2000)
    }
}

function removeErrors() {
    setError(nameError, "");
    setError(phoneError, "");
    setError(passError, "");
    setError(passConfError, "");
    setError(emailError, "");
    setError(acceptTermsError, "");
    validText.innerHTML = "";
    validText.style.display = "none";
}

function setError(element, message) {
    if (message.length > 0) {
        element.textContent = message;
        element.style.display = "block";
    } else {
        element.textContent = "";
        element.style.display = "none";
    }
}