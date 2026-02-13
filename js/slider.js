const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;
const INTERVAL = 90000; // 1:30 min

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);

    const iframe = slide.querySelector("iframe");
    iframe.src = i === index ? slide.dataset.video : "";
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentIndex = index;
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.index));
  });
});

setInterval(() => {
  showSlide((currentIndex + 1) % slides.length);
}, INTERVAL);

showSlide(0);
