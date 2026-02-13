// login.js
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  // Aquí defines un usuario de prueba
  const usuarioValido = "admin";
  const passwordValido = "1234";

  if(usuario === usuarioValido && password === passwordValido) {
    alert("¡Bienvenido al dashboard!");
    // Redirige al dashboard (tu index.html)
    window.location.href = "index.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
