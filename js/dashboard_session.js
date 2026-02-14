// dashboard_session.js

// Revisar sesión
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// Botones desktop
const btnEntrar = document.getElementById("btnEntrar");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const btnSalir = document.getElementById("btnSalir");

// Botones móvil
const mobileEntrar = document.getElementById("mobileEntrar");
const mobileRegistrarse = document.getElementById("mobileRegistrarse");
const mobileSalir = document.getElementById("mobileSalir");

function updateDashboardButtons() {
  if(currentUser) {
    // Usuario logueado
    btnEntrar.style.display = "none";
    btnRegistrarse.style.display = "none";
    btnSalir.style.display = "block";

    mobileEntrar.style.display = "none";
    mobileRegistrarse.style.display = "none";
    mobileSalir.style.display = "block";
  } else {
    // No hay sesión
    btnEntrar.style.display = "block";
    btnRegistrarse.style.display = "block";
    btnSalir.style.display = "none";

    mobileEntrar.style.display = "block";
    mobileRegistrarse.style.display = "block";
    mobileSalir.style.display = "none";
  }
}

// Inicializar al cargar
updateDashboardButtons();

// Cerrar sesión
btnSalir.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  location.reload();
});

mobileSalir.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  location.reload();
});
