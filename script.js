const slides = document.querySelectorAll(".stack img");
let counter = 0;
const totalSlides = slides.length; // Total number of slides

// Set the initial position of each slide
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const previous = () => {
  if (counter > 0) {
    // Check if not at the first slide
    counter--;
    slideImage();
  }
};

const next = () => {
  if (counter < totalSlides - 1) {
    // Check if not at the last slide
    counter++;
    slideImage();
  }
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
