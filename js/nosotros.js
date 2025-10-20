/* BANNER SERVICIOS */

const images_us = [
    '../././imagenes/fondo01.jpeg',
    '../././imagenes/fondo02.jpeg',
    '../././imagenes/fondo03.jpeg',
];

let currentIndex_us = 0;

function changeBackground_us() {
    document.querySelector('.banner_us').style.backgroundImage = `url('${images_us[currentIndex_us]}')`;
    currentIndex_us = (currentIndex_us + 1) % images_us.length;
}

setInterval(changeBackground_us, 5000);
window.onload = changeBackground_us;
