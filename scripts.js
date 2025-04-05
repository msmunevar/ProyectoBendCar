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

const visorButton = document.getElementById("visorButton");
const swiperContainer = document.getElementById("swiperContainer");
const iframeContainer = document.getElementById("iframeContainer");

visorButton.addEventListener("click", () => {
  // Cambia el texto y aplica un efecto de transición al hacer clic
  if (visorButton.textContent === "Visor Fotos") {
    // Ocultar el carrusel y mostrar el iframe
    swiperContainer.style.display = "none";
    iframeContainer.style.display = "block";
    visorButton.textContent = "Visor 3D";
    visorButton.style.backgroundColor = "#28a745"; // Cambiar color
  } else {
    // Mostrar el carrusel y ocultar el iframe
    swiperContainer.style.display = "block";
    iframeContainer.style.display = "none";
    visorButton.textContent = "Visor Fotos";
    visorButton.style.backgroundColor = "#007bff"; // Volver al color original
  }
});
