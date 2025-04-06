document.addEventListener('DOMContentLoaded', function () {
  const swiperWrapper = document.getElementById('swiperWrapper');
  const toggleButton = document.getElementById('toggleView');
  const iframeContainer = document.getElementById('iframeContainer');
  const swiperContainer = document.getElementById('swiperContainer');
  const visor3d = document.getElementById('visor3d');

  const urlParams = new URLSearchParams(window.location.search);
  const modelo = urlParams.get('modelo') || 'submariner';

  const imagenesPorModelo = {
    submariner: [
      { src: 'images/submariner/rolex_submariner.png', precio: '$12,000', color: 'Negro' },
      { src: 'images/submariner/submariner_azul.png', precio: '$12,500', color: 'Azul' },
      { src: 'https://via.placeholder.com/800x400?text=Submariner+3', precio: '$13,000', color: 'Verde' }
    ],
    daytona: [
      { src: 'images/daytona/imagen1.jpg', precio: '$18,000', color: 'Blanco' },
      { src: 'images/daytona/imagen2.jpg', precio: '$19,000', color: 'Negro' },
      { src: 'https://via.placeholder.com/800x400?text=Daytona+3', precio: '$19,500', color: 'Oro' }
    ],
    explorer: [
      { src: 'images/explorer/imagen1.jpg', precio: '$10,000', color: 'Negro' },
      { src: 'images/explorer/imagen2.jpg', precio: '$10,200', color: 'Plateado' },
      { src: 'https://via.placeholder.com/800x400?text=Explorer+3', precio: '$10,500', color: 'Gris' }
    ]
  };

  const visor3DPorModelo = {
    submariner: 'https://360.3dmodels.org/view/227467/',
    daytona: 'https://360.3dmodels.org/view/221234/',
    explorer: 'https://360.3dmodels.org/view/229999/'
  };

  const imagenes = imagenesPorModelo[modelo] || [];
  const visorURL = visor3DPorModelo[modelo] || visor3DPorModelo['submariner'];
  visor3d.src = visorURL;

  const whatsappNumber = '521234567890'; // <--- CAMBIA este número por tu número de WhatsApp

  imagenes.forEach(({ src, precio, color }) => {
    const mensaje = `Quiero el reloj ${modelo} de color ${color} que cuesta ${precio}`;
    const urlWhatsApp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`;

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.innerHTML = `
      <div class="watch-card">
        <img src="${src}" alt="Imagen ${modelo}">
        <div class="watch-info">
          <p class="watch-price">${precio}</p>
          <p class="watch-color">${color}</p>
          <a href="${urlWhatsApp}" target="_blank">
            <button class="buy-button">🛒 Comprar ahora</button>
          </a>
        </div>
      </div>
    `;

    swiperWrapper.appendChild(slide);
  });

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
