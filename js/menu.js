const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Mostrar secciones según botón
const menuBtns = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".content-section");

menuBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sections.forEach(sec => sec.style.display = "none");
    const sec = document.getElementById(btn.dataset.section);
    if (sec) sec.style.display = "block";
  });
});

// Logout botón
document.getElementById("logout-btn").addEventListener("click", () => {
  alert("Sesión cerrada");
  location.href = "login.html";
});
