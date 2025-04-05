// Inicializar Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Lógica del botón
const toggleButton = document.getElementById('toggleView');
const iframe = document.getElementById('viewer-3d');
const swiperContainer = document.querySelector('.swiper');

toggleButton.addEventListener('click', () => {
  if (iframe.style.display === 'none' || iframe.style.display === '') {
    iframe.style.display = 'block';
    swiperContainer.style.display = 'none';
    toggleButton.textContent = 'Ver Fotos';
  } else {
    iframe.style.display = 'none';
    swiperContainer.style.display = 'block';
    toggleButton.textContent = 'Ver en 3D';
  }
});
