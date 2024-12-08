// Select input elements and error containers
const emailInput = document.querySelector(".email-input");
const emailError = document.querySelector(".error_1");

const passwordInput = document.querySelector(".password-input");
const passwordError = document.querySelector(".error_2");

// Validate Email
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
    if (!emailInput.value.match(emailRegex)) {
        emailError.style.color = "red";
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

// Validate Password
function validatePassword() {
    // Minimum 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordInput.value.match(passwordRegex)) {
        passwordError.style.color = "red";
        passwordError.innerHTML =
            "Password must be at least 8 characters, include an uppercase letter, a lowercase letter, a number, and a special character.";
        return false;
    }
    passwordError.innerHTML = "";
    return true;
}

// Attach validation to input fields
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

// Form submission validation
const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", (event) => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Prevent form submission if validation fails
    if (!isEmailValid || !isPasswordValid) {
        event.preventDefault();
    }
});
