const sliderItems = document.querySelectorAll('.slider-item');
let slideIndex = 0;

function showSlide() {
   sliderItems.forEach(item => {
      item.classList.remove('active');
   });
   sliderItems[slideIndex].classList.add('active');
}

function nextSlide() {
   slideIndex++;
   if (slideIndex >= sliderItems.length) {
      slideIndex = 0;
   }
   showSlide();
}

setInterval(nextSlide, 5000);