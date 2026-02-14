// login.js
document.addEventListener("DOMContentLoaded", () => {

  // Mostrar / ocultar contraseña
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });

  // Login
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = passwordInput.value.trim();

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = storedUsers.find(u => u.usuario === usuario && u.password === password);

    if(userExists) {
      localStorage.setItem("currentUser", JSON.stringify(userExists));
      alert("¡Login exitoso!");
      window.location.href = "index.html";  // 🔑 Cambiado a index.html
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });

});
