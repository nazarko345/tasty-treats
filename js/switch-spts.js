let currentIndex = 0;

function moveSlide(index) {
  const slides = document.querySelector(".hero-shefs-container");
  const dots = document.querySelectorAll(".spot-nav");

  currentIndex = index;
  slides.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Додаємо підтримку свайпів для мобільних пристроїв
let touchStartX = 0;
let touchEndX = 0;

document
  .querySelector(".hero-shefs-parent-container")
  .addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

document
  .querySelector(".hero-shefs-parent-container")
  .addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;

    if (touchStartX - touchEndX > 50) {
      // Свайп вліво (перемикаємо на наступний слайд)
      if (currentIndex < 2) {
        moveSlide(currentIndex + 1);
      }
    } else if (touchEndX - touchStartX > 50) {
      // Свайп вправо (перемикаємо на попередній слайд)
      if (currentIndex > 0) {
        moveSlide(currentIndex - 1);
      }
    }
  });

// // Автоматичне перемикання кожні 5 секунд
// setInterval(() => {
//   let nextIndex = (currentIndex + 1) % 3;
//   moveSlide(nextIndex);
// }, 5000);
