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
  const isIframeVisible = !iframe.classList.contains('hidden');

  if (isIframeVisible) {
    iframe.classList.add('hidden');
    swiperContainer.classList.remove('hidden');
    toggleButton.textContent = 'Ver en 3D';
  } else {
    iframe.classList.remove('hidden');
    swiperContainer.classList.add('hidden');
    toggleButton.textContent = 'Ver Fotos';
  }
});
