document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');
    const menuHamburguer = document.querySelector('.menu__hamburguer');

    // Asegurarse de que los elementos existen
    if (menu && menuHamburguer) {
        menuHamburguer.addEventListener('click', () => {
            menu.classList.toggle('menu--show');
        });
    } else {
        console.error("Elemento no encontrado: Verifica que '.menu' y '.menu__hamburguer' existan en el HTML.");
    }
});
