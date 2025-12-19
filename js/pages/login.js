
// ELEMENTS
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("remember");



function saveAuthData(remember) {
    const fakeToken = "ui-demo-token";

    if (remember) {
        localStorage.setItem("token", fakeToken);
        localStorage.setItem("user", JSON.stringify({
        email: emailInput.value.trim()
    }));
    } else {
        sessionStorage.setItem("token", fakeToken);
        sessionStorage.setItem("user", JSON.stringify({
        email: emailInput.value.trim()
    }));
    }
}


function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    clearFormError();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = rememberCheckbox.checked;

    // Empty fields
    if (!email || !password) {
        showFormError("Please fill in all required fields");
        return;
    }

    // Email format
    if (!isValidEmail(email)) {
        showFormError("Please enter a valid email address");
        return;
    }

    // Password length (UI rule)
    if (password.length < 6) {
        showFormError("Password must be at least 6 characters");
        return;
    }

    // Fake login success
    saveAuthData(rememberMe);

    // Redirect
    window.location.href = "/pages/cars/listing.html";
});
