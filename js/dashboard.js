// ===== MENÚ LATERAL =====
const menuButtons = document.querySelectorAll(".menu-btn");
const contentSections = document.querySelectorAll(".content-section");
menuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    contentSections.forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(btn.dataset.section);
    if(target) target.classList.add("active");
  });
});

// ===== HAMBURGUESA =====
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));

// ===== CARRUSELES =====
class Carousel {
  constructor(id, interval = 60000) { // 1 min
    this.carousel = document.getElementById(id);
    this.container = this.carousel.querySelector(".carousel-container");
    this.items = this.container.children;
    this.dotsContainer = this.carousel.querySelector(".carousel-dots");
    this.currentIndex = 0;
    this.interval = interval;
    this.initDots();
    this.start();
  }

  initDots() {
    this.dotsContainer.innerHTML = "";
    Array.from(this.items).forEach((item, i) => {
      const dot = document.createElement("div");
      dot.classList.add("carousel-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => this.showSlide(i));
      this.dotsContainer.appendChild(dot);
    });
    this.dots = this.dotsContainer.querySelectorAll(".carousel-dot");
  }

  showSlide(index) {
    this.currentIndex = index;
    const offset = -index * 100;
    this.container.style.transform = `translateX(${offset}%)`;
    this.dots.forEach(dot => dot.classList.remove("active"));
    this.dots[index].classList.add("active");
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.showSlide(this.currentIndex);
  }

  start() {
    this.timer = setInterval(() => this.nextSlide(), this.interval);
  }
}

// Inicializar carruseles
new Carousel("carousel-images", 60000);
new Carousel("carousel-videos", 60000);
new Carousel("carousel-anuncios", 60000);
