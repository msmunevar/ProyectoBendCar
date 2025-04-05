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
visorButton.addEventListener("click", () => {
  // Cambia el texto y aplica un efecto de transición al hacer clic
  if (visorButton.textContent === "Visor Fotos") {
    visorButton.textContent = "Visor 3D";
    visorButton.style.backgroundColor = "#28a745"; // Cambia el color al presionar
  } else {
    visorButton.textContent = "Visor Fotos";
    visorButton.style.backgroundColor = "#007bff"; // Vuelve al color original
  }
});
