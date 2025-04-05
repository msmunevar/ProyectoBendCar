document.addEventListener('DOMContentLoaded', function () {
  // Inicialización del Swiper
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

  // Obtener el botón y el iframe
  const toggleButton = document.getElementById('toggleView');
  const iframe = document.getElementById('viewer-3d');

  // Función para alternar la visibilidad del visor 3D y manejar el autoplay
  toggleButton.addEventListener('click', function() {
    // Alternar la visibilidad del visor 3D
    iframe.classList.toggle('hidden');

    // Alternar la clase "active" para cambiar el estilo del botón
    this.classList.toggle('active');
    
    // Si el visor 3D está visible, detener el autoplay
    if (!iframe.classList.contains('hidden')) {
      swiper.autoplay.stop();  // Detener la reproducción automática
    } else {
      swiper.autoplay.start(); // Reanudar la reproducción automática
    }
    
    // Añadir animación al botón
    this.classList.add('animate');  
    
    // Opcional: Eliminar la animación después de que haya terminado
    setTimeout(() => this.classList.remove('animate'), 500);
  });
});
