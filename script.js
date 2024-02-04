function showSlides(carouselId) {
  let slideIndex = 0;
  const slides = document.querySelectorAll(`#${carouselId} .mySlides`);
  const dots = document.querySelectorAll(`#${carouselId} .dots`);

  function displaySlide() {
    if (slideIndex > slides.length - 1) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[slideIndex].style.display = "block";

    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    dots[slideIndex].classList.add("active");
  }

  function nextSlide() {
    slideIndex++;
    displaySlide();
    resetTimer();
  }

  function prevSlide() {
    slideIndex--;
    displaySlide();
    resetTimer();
  }

  function currentSlide(n) {
    slideIndex = n - 1;
    displaySlide();
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timer = _timer;
    timerInterval = setInterval(nextSlide, 5000); // 1 sec
  }

  let timer = 7; // sec
  const _timer = timer;
  let timerInterval = setInterval(nextSlide, 5000); // 1 sec

  displaySlide(); // Initial display
}

// Initialize carousels
showSlides('carousel-1');
showSlides('carousel-2');
// Add more showSlides calls for each carousel you have


function submitForm() {
  // You can add your form validation here if needed

  // Simulate form submission
  alert('Form submitted successfully!');
}


