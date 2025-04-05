const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

// Lógica del botón
// Mostrar/Ocultar iframe
const toggleButton = document.getElementById('toggleView');
const iframe = document.getElementById('viewer-3d');
const swiperContainer = document.querySelector('.swiper');
const viewer3D = document.getElementById('viewer-3d');
