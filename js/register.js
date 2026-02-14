// register.js
document.addEventListener("DOMContentLoaded", () => {

  // Mostrar / ocultar contraseña
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");

  const confirmInput = document.getElementById("confirmPassword");
  const toggleConfirm = document.getElementById("toggleConfirmPassword");

  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });

  toggleConfirm.addEventListener("click", () => {
    const type = confirmInput.getAttribute("type") === "password" ? "text" : "password";
    confirmInput.setAttribute("type", type);
  });

  // Registro
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();

    if(password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // Guardar usuario en localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Evitar usuario duplicado
    if(storedUsers.find(u => u.usuario === usuario)) {
      alert("El usuario ya existe");
      return;
    }

    storedUsers.push({ usuario, password });
    localStorage.setItem("users", JSON.stringify(storedUsers));

    alert("¡Registro exitoso! Ahora puedes entrar");
    window.location.href = "login.html";
  });

});
