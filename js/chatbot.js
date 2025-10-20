const messageIcon = document.querySelector('.message-icon');
const contactBtn = document.querySelector('.contact-btn');

// Al hacer clic en la imagen de mensaje, se despliega las opciones
messageIcon.addEventListener('click', () => {
    contactBtn.classList.toggle('open');
});
