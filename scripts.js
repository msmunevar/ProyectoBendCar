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
    delay: 3000, // 3 segundos de retardo entre cada cambio de imagen
    disableOnInteraction: false, // Esto permite que el autoplay siga funcionando aunque el usuario interactúe
  },
});
