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
  const iframeContainer = document.getElementById('iframeContainer');

  // Asegúrate de que el botón y el iframe existan en el DOM
  if (!toggleButton || !iframeContainer) {
    console.error('El botón o el iframe no se encuentran en el DOM');
    return;
  }

  // Función para alternar la visibilidad del visor 3D y manejar el autoplay
  toggleButton.addEventListener('click', function() {
    // Alternar la visibilidad del visor 3D
    iframeContainer.style.display = iframeContainer.style.display === 'none' ? 'block' : 'none';

    // Alternar la clase "active" para cambiar el estilo del botón
    this.classList.toggle('active');
    
    // Si el visor 3D está visible, detener el autoplay
    if (iframeContainer.style.display === 'block') {
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
