const sliderContainer = document.getElementById("slider-container");
const images = sliderContainer.querySelectorAll(".slider-image");
const indicators = document.querySelectorAll(
  'button[onclick^="changeSlide"]'
);
let currentIndex = 0;
const totalSlides = images.length;

function showSlide(index) {
  images.forEach((img, i) => {
    img.style.opacity = i === index ? "1" : "0";
  });

  indicators.forEach((btn, i) => {
    btn.style.opacity = i === index ? "1" : "0.5";
  });

  currentIndex = index;
}

function nextSlide() {
  let nextIndex = (currentIndex + 1) % totalSlides;
  showSlide(nextIndex);
}

function changeSlide(index) {
  showSlide(index);
  // Reset interval when manually clicked (optional enhancement)
}

// Video Modal Functions
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  modal.classList.add('hidden');
  modal.style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('videoModal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeVideoModal();
  });
});

// Auto play every 5 seconds
setInterval(nextSlide, 5000);
