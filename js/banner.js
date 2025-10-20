const images = [
    '././imagenes/navi01.jpg',
    '././imagenes/navi02.jpg',
    '././imagenes/navi04.jpg',
];

let currentIndex = 0; 

function changeBackground() {
    document.querySelector('.banner').style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeBackground, 5000);
window.onload = changeBackground;


document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snowflakes');
    document.body.appendChild(snowContainer);

    const snowflakeFrequency = 1000; // 1 copo por segundo
    const minFallDuration = 10; // Duración mínima de caída en 10 segundos
    const maxFallDuration = 15; // Duración máxima de caída en 15 segundos

    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw'; // Posición aleatoria
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px'; // Tamaño aleatorio
        snowflake.style.animationDuration = Math.random() * (maxFallDuration - minFallDuration) + minFallDuration + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowContainer.appendChild(snowflake);

        // Eliminar el copo después de que termine su animación
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    };

    // Generar copos según la frecuencia configurada
    setInterval(createSnowflake, snowflakeFrequency);
});




