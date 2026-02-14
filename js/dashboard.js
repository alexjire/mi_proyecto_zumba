document.addEventListener("DOMContentLoaded", () => {

  // ===== LEER USUARIO LOGUEADO =====
  let currentUser = null;
  const storedUser = localStorage.getItem("user");
  if (storedUser) currentUser = JSON.parse(storedUser);

  // ===== ELEMENTOS =====
  const menuButtons = document.querySelectorAll(".menu-btn");
  const contentSections = document.querySelectorAll(".content-section");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const adminBtn = document.getElementById("admin-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const comunicadoUrgente = document.querySelector(".comunicado-urgente");
  const inicioSection = document.getElementById("inicio");

  // ===== MENÚ LATERAL =====
  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      contentSections.forEach(sec => sec.classList.remove("active"));
      const target = document.getElementById(btn.dataset.section);
      if (target) target.classList.add("active");
    });
  });

  // ===== HAMBURGUESA =====
  if (hamburger) {
    hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));
  }

  // ===== PANEL ADMIN =====
  if (adminBtn) {
    if (currentUser?.isMaster) {
      adminBtn.style.display = "flex"; // mostrar solo para master
      adminBtn.addEventListener("click", () => {
        window.location.href = "master_dashboard.html"; // abrir dashboard master
      });
    } else {
      adminBtn.style.display = "none"; // ocultar para usuarios normales
    }
  }

  // ===== CERRAR SESIÓN =====
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "login.html";
    });
  }

  // ===== NOTICIAS =====
// ===== NOTICIAS =====
const noticias = JSON.parse(localStorage.getItem("noticias")) || [];

// Función para renderizar noticias en la sección Noticias
function renderNoticias() {
  const noticiasSection = document.getElementById("noticias");
  noticiasSection.innerHTML = "<h2>Noticias / Comunicados</h2>"; // limpiar sección
  if (noticias.length > 0) {
    noticias.forEach(n => {
      const p = document.createElement("p");
      p.textContent = n;
      noticiasSection.appendChild(p);
    });
  } else {
    const p = document.createElement("p");
    p.textContent = "Aquí irán los comunicados del instructor.";
    noticiasSection.appendChild(p);
  }
}
renderNoticias();

  // ===== COMUNICADO URGENTE =====
  const comunicado = localStorage.getItem("comunicado") || "";
  if (comunicadoUrgente) {
    const p = comunicadoUrgente.querySelector("p");
    if (comunicado && comunicado.trim() !== "") {
      comunicadoUrgente.style.display = "block";
      p.textContent = comunicado;
    } else {
      comunicadoUrgente.style.display = "none";
    }
  }

});
// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) return;

    // Guardar en localStorage (simula envío)
    let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
    contactos.push({ nombre, email, mensaje, fecha: new Date().toLocaleString() });
    localStorage.setItem("contactos", JSON.stringify(contactos));

    // Mensaje de confirmación
    contactFeedback.textContent = "✅ Mensaje enviado correctamente. Gracias por comunicarte.";
    contactForm.reset();

    // Opcional: eliminar mensaje después de 5 segundos
    setTimeout(() => {
      contactFeedback.textContent = "";
    }, 5000);
  });
}

