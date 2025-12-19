// ===============================
// Error Component (Reusable)
// ===============================

function showFormError(message, elementId = "formError") {
    const errorElement = document.getElementById(elementId);

    if (!errorElement) return;

    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function clearFormError(elementId = "formError") {
    const errorElement = document.getElementById(elementId);

    if (!errorElement) return;

    errorElement.textContent = "";
    errorElement.style.display = "none";
}
