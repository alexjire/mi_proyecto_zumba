// register.js
const registerForm = document.getElementById("registerForm");

// Inputs y ojitos
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Mostrar / ocultar contraseña principal
togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});

// Mostrar / ocultar confirmación
toggleConfirmPassword.addEventListener("click", () => {
  const type = confirmPasswordInput.getAttribute("type") === "password" ? "text" : "password";
  confirmPasswordInput.setAttribute("type", type);
});

// Validar formulario
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if(password !== confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Por ahora solo alert
  alert("¡Registro exitoso! Ahora puedes entrar");
  window.location.href = "login.html";
});
