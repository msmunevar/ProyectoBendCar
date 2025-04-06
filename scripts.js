document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.getElementById('swiperWrapper');
  const toggleButton = document.getElementById('toggleView');
  const iframeContainer = document.getElementById('iframeContainer');
  const swiperContainer = document.getElementById('swiperContainer');
  const visor3d = document.getElementById('visor3d');

  const urlParams = new URLSearchParams(window.location.search);
  const modelo = urlParams.get('modelo') || 'submariner';

  // Diccionario de imágenes por modelo
  const imagenesPorModelo = {
    submariner: [
      'images/submariner/rolex_submariner.png',
      'images/submariner/submariner_azul.png',
      'https://via.placeholder.com/800x400?text=Submariner+3'
    ],
    daytona: [
      'images/daytona/imagen1.jpg',
      'images/daytona/imagen2.jpg',
      'https://via.placeholder.com/800x400?text=Daytona+3'
    ],
    explorer: [
      'images/explorer/imagen1.jpg',
      'images/explorer/imagen2.jpg',
      'https://via.placeholder.com/800x400?text=Explorer+3'
    ]
  };

  // Diccionario de iframes 3D por modelo
  const visor3DPorModelo = {
    submariner: 'https://360.3dmodels.org/view/227467/',
    daytona: 'https://360.3dmodels.org/view/221234/',
    explorer: 'https://360.3dmodels.org/view/229999/'
  };

  const imagenes = imagenesPorModelo[modelo] || [];
  const visorURL = visor3DPorModelo[modelo] || visor3DPorModelo['submariner'];
  visor3d.src = visorURL;

  // Insertar imágenes en el carrusel
  imagenes.forEach(src => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `<img src="${src}" alt="Imagen ${modelo}">`;
    swiperWrapper.appendChild(slide);
  });

  // Inicializar Swiper
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

  // Alternar visor 3D <-> fotos
  toggleButton.addEventListener('click', function () {
    const isIframeVisible = iframeContainer.style.display === 'block';

    if (!isIframeVisible) {
      iframeContainer.style.display = 'block';
      swiperContainer.style.display = 'none';
      toggleButton.textContent = 'Visor Fotos';
      swiper.autoplay.stop();
    } else {
      iframeContainer.style.display = 'none';
      swiperContainer.style.display = 'block';
      toggleButton.textContent = 'Visor 3D';
      swiper.autoplay.start();
    }

    this.classList.toggle('active');
    this.classList.add('animate');
    setTimeout(() => this.classList.remove('animate'), 500);
  });
});

