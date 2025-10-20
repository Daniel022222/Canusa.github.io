// Carrusel de tarjetas
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 50,
  grabCursor: true,

  autoplay: {
    delay: 3000, // Cambiar cada 3 segundos
    disableOnInteraction: false, 
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// Carrusel de proyectos
let swiperProjects = new Swiper(".proyecto__content", {
  loop: true,
  spaceBetween: 20,
  grabCursor: true,

  autoplay: {
    delay: 5000, // Cambiar cada 5 segundos
    disableOnInteraction: false, 
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

// Carrusel de nostros
let swiperNosotros = new Swiper(".nosotros__content", {
  loop: true,
  spaceBetween: 50,
  grabCursor: true,

  autoplay: {
    delay: 3000, // Cambiar cada 5 segundos
    disableOnInteraction: false, 
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

