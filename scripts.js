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

  // Obtener los elementos del DOM
  const toggleButton = document.getElementById('toggleView');
  const iframeContainer = document.getElementById('iframeContainer');
  const swiperContainer = document.getElementById('swiperContainer');

  // Asegúrate de que el botón y los contenedores existan en el DOM
  if (!toggleButton || !iframeContainer || !swiperContainer) {
    console.error('El botón o los contenedores no se encuentran en el DOM');
    return;
  }

  // Función para alternar la visibilidad entre el carrusel y el visor 3D
  toggleButton.addEventListener('click', function() {
    // Alternar la visibilidad del carrusel y el visor 3D
    const isIframeVisible = iframeContainer.style.display === 'block';
    
    // Si el visor 3D no está visible, mostrarlo y ocultar el carrusel
    if (!isIframeVisible) {
      iframeContainer.style.display = 'block';  // Mostrar visor 3D
      swiperContainer.style.display = 'none';   // Ocultar el carrusel
      toggleButton.textContent = 'Visor Fotos';   // Cambiar texto del botón
      swiper.autoplay.stop();  // Detener la reproducción automática del carrusel
    } else {
      iframeContainer.style.display = 'none';   // Ocultar visor 3D
      swiperContainer.style.display = 'block';  // Mostrar carrusel
      toggleButton.textContent = 'Visor 3D';      // Cambiar texto del botón
      swiper.autoplay.start();  // Reanudar la reproducción automática del carrusel
    }

    // Alternar la clase "active" para cambiar el estilo del botón
    this.classList.toggle('active');
    
    // Añadir animación al botón
    this.classList.add('animate');  
    
    // Opcional: Eliminar la animación después de que haya terminado
    setTimeout(() => this.classList.remove('animate'), 500);
  });
});
