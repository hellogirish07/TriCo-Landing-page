let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot-btn");
const captions = [
  "TriCo Workspace — Explorer and editor",
  "TriCo Live Preview — HTML, CSS, and JavaScript together",
  "TriCo Settings — Themes, fonts, and word wrap",
  "TriCo Folder Workflow — Edit and save your project",
];

function updateCarouselView() {
  slides.forEach((slide, idx) => {
    if (idx === currentSlideIndex) {
      slide.classList.add("is-active");
    } else {
      slide.classList.remove("is-active");
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === currentSlideIndex) {
      dot.className = "dot-btn w-6 h-1.5 rounded-full bg-white transition-all";
    } else {
      dot.className =
        "dot-btn w-2 h-1.5 rounded-full bg-appleBorder hover:bg-appleGray transition-all";
    }
  });

  const captionEl = document.getElementById("carouselCaption");
  if (captionEl) {
    captionEl.innerText = captions[currentSlideIndex];
  }
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateCarouselView();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateCarouselView();
}

function setSlide(index) {
  currentSlideIndex = index;
  updateCarouselView();
}

// Auto transition every 6 seconds
setInterval(() => {
  nextSlide();
}, 6000);
