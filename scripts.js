
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
 // Mostrar/Ocultar iframe
 const toggleButton = document.getElementById('toggleView');
 const iframe = document.getElementById('viewer-3d');
 const swiperContainer = document.querySelector('.swiper');
 const viewer3D = document.getElementById('viewer-3d');
 
 toggleButton.addEventListener('click', () => {
   const isIframeVisible = !iframe.classList.contains('hidden');
   viewer3D.classList.toggle('hidden');
   toggleButton.classList.toggle('active');
 
   if (isIframeVisible) {
     iframe.classList.add('hidden');
     swiperContainer.classList.remove('hidden');
     toggleButton.textContent = 'Ver en 3D';
     toggleButton.classList.remove('active');
   } else {
     iframe.classList.remove('hidden');
     swiperContainer.classList.add('hidden');
     toggleButton.textContent = 'Ver Fotos';
     toggleButton.classList.add('active');
   }
 
   // Reiniciar animación correctamente
   toggleButton.classList.remove('animate');
 
   // Espera al siguiente frame para volver a agregar la clase
   requestAnimationFrame(() => {
     toggleButton.classList.add('animate');
   });
   // Animación cuando se hace clic
   toggleButton.classList.add('animate');
   setTimeout(() => {
     toggleButton.classList.remove('animate');
   }, 500);
 });
