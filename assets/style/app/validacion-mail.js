// Validaciones del formulario
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previene el envío por defecto

        let isValid = validateForm();

        if (isValid) {
            // Si es válido, muestra el popup
            showPopup();
            // Reinicia el formulario si todo es correcto
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;

        // Validar nombre
        if (nameInput.value.trim() === "") {
            showError(nameInput, "Por favor, ingrese su nombre");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validar email
        if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, "Por favor, ingrese un email válido");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validar mensaje
        if (messageInput.value.trim() === "") {
            showError(messageInput, "Por favor, ingrese un mensaje");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        return isValid;
    }

    // Función para mostrar errores
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
        small.innerText = message;
    }

    // Función para limpiar errores
    function clearError(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }

    // Validar formato de email
    function isValidEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Función para mostrar el popup
    function showPopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "block";

        setTimeout(function () {
            popup.style.display = "none";
        }, 3000); // El popup desaparece después de 3 segundos
    }
});
