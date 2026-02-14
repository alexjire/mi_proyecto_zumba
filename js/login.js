// Capturamos el formulario
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita recargar la página

    // Obtenemos los valores
    const username = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    // Validación simulada
    if (username === "master" && password === "master123") {
      localStorage.setItem("user", JSON.stringify({ username, isMaster: true }));
      alert("Has iniciado sesión como MASTER");
    } else {
      localStorage.setItem("user", JSON.stringify({ username, isMaster: false }));
      alert("Has iniciado sesión como usuario normal");
    }

    // Redirige al dashboard
    window.location.href = "index.html";
  });
}

// Mostrar/ocultar contraseña
const togglePassword = document.getElementById("togglePassword");
if (togglePassword) {
  const passwordInput = document.getElementById("password");
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
  });
}
