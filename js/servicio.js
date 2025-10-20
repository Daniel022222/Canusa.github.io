const images_svc1 = [
    '././imagenes/fondo01.jpeg',
    '././imagenes/fondo02.jpeg',
    '././imagenes/fondo03.jpeg',
];

let currentIndex_svc1 = 0; 

function changeBackground_svc1() {
    document.querySelector('.banner_svc1').style.backgroundImage = `url('${images_svc1[currentIndex_svc1]}')`;
    currentIndex_svc1 = (currentIndex_svc1 + 1) % images_svc1.length;
}

setInterval(changeBackground_svc1, 5000);
window.onload = changeBackground_svc1;