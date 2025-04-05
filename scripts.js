// Inicializar Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// Mostrar/Ocultar iframe
const toggleButton = document.getElementById('toggleView');
const viewer3D = document.getElementById('viewer-3d');

toggleButton.addEventListener('click', () => {
  viewer3D.classList.toggle('hidden');
  toggleButton.classList.toggle('active');

  // Animación cuando se hace clic
  toggleButton.classList.add('animate');
  setTimeout(() => {
    toggleButton.classList.remove('animate');
  }, 500);
});
