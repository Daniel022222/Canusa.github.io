const images_contact = [
    '././imagenes/fondo01.jpeg',
    '././imagenes/fondo02.jpeg',
    '././imagenes/fondo03.jpeg',
];

let currentIndex_contact = 0;

function changeBackground_contact() {
    // Cambiar el fondo en el elemento con la clase 'banner_contact'
    document.querySelector('.banner_contact').style.backgroundImage = `url('${images_contact[currentIndex_contact]}')`;
    currentIndex_contact = (currentIndex_contact + 1) % images_contact.length;
}

setInterval(changeBackground_contact, 5000);
window.onload = changeBackground_contact;


 // Inicialización de EmailJS
 (function() {
    emailjs.init("TU_CLAVE_DE_USUARIO");  // Reemplaza con tu clave de usuario
})();

// Evento de envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    // Limpiar mensajes de error al inicio
    document.querySelectorAll('.error-message').forEach(error => error.classList.remove('active'));

    // Validar el nombre (solo letras, al menos tres palabras)
    if (name.value.trim() === "") {
        valid = false;
        document.getElementById('name-error').classList.add('active');
        name.focus();
    }
    else if (!/^[a-zA-Z\s]+$/.test(name.value)) {
        valid = false;
        document.getElementById('name-error').classList.add('active');
        name.focus();
    }
    else if (name.value.trim().split(/\s+/).length < 3) { // Verifica si tiene al menos 3 palabras
        valid = false;
        document.getElementById('name-error').classList.add('active');
        name.focus();
    }

    // Validar el correo electrónico (formato válido)
    else if (!/\S+@\S+\.\S+/.test(email.value)) {
        valid = false;
        document.getElementById('email-error').classList.add('active');
        email.focus();
    }

    // Validar el teléfono (9 dígitos o +51 seguido de 9 dígitos)
    else if (!/^\+51\s\d{9}$/.test(phone.value) && !/^\d{9}$/.test(phone.value)) {
        valid = false;
        document.getElementById('phone-error').classList.add('active');
        phone.focus();
    }

    // Validar el mensaje (mínimo 10 caracteres)
    else if (message.value.trim().length < 10) {
        valid = false;
        document.getElementById('message-error').classList.add('active');
        message.focus();
    }

    // Si alguna validación falla, no enviar el formulario
    if (!valid) {
        event.preventDefault();
    }

    // Si la validación pasa, mostrar el mensaje flotante
    if (valid) {
        // Mostrar el mensaje flotante
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');

        // Limpiar el formulario y ocultar el mensaje después de 7 segundos
        setTimeout(function() {
            // Ocultar el mensaje flotante
            successMessage.classList.remove('show');

            // Limpiar el formulario
            document.getElementById('contactForm').reset();
        }, 7000); // El mensaje flotante desaparecerá después de 7 segundos

        // Enviar el correo usando EmailJS
        emailjs.sendForm('TU_ID_DE_SERVICIO', 'TU_ID_DE_PLANTILLA', this)
            .then(function(response) {
                console.log('Mensaje enviado exitosamente', response);
            }, function(error) {
                console.log('Error al enviar el mensaje', error);
            });
    }
});
