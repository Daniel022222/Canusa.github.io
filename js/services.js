/* BANNER SERVICIOS */

const images_svc = [
    '../././imagenes/fondo01.jpeg',
    '../././imagenes/fondo02.jpeg',
    '../././imagenes/fondo03.jpeg',
];

let currentIndex_svc = 0; 

function changeBackground_svc() {
    document.querySelector('.banner_svc').style.backgroundImage = `url('${images_svc[currentIndex_svc]}')`;
    currentIndex_svc = (currentIndex_svc + 1) % images_svc.length;
}

setInterval(changeBackground_svc, 5000);
window.onload = changeBackground_svc;

document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "../imagenes/servicios/servicio04.jpg", // Asegúrate de que estas rutas sean correctas
        "../imagenes/servicios/servicio04.jpg",
        "../imagenes/servicios/servicio03.jpg"
    ];

    let currentIndex = 0; // Índice para saber qué imagen se está mostrando
    const imageElement = document.getElementById("serviceImage");

    if (imageElement) {
        // Función para cambiar la imagen
        function changeImage() {
            currentIndex = (currentIndex + 1) % images.length; // Vuelve al inicio cuando llega al final

            // Iniciar la transición de opacidad para el cambio suave de imagen
            imageElement.style.opacity = 0; // Empieza el desvanecimiento de la imagen actual

            // Esperamos a que termine la transición antes de cambiar la imagen
            setTimeout(() => {
                imageElement.src = images[currentIndex]; // Cambia la fuente de la imagen
                imageElement.style.opacity = 1; // Vuelve a mostrar la nueva imagen con una transición suave
            }, 500); // La duración de la transición de opacidad
        }

        // Cambiar la imagen cada 10 segundos (10000 ms)
        setInterval(changeImage, 10000);
    } else {
        console.error("No se pudo encontrar el elemento de la imagen con id 'serviceImage'.");
    }
});


