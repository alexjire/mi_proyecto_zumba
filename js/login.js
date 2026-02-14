// login.js (actualizado)
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value.trim();

  // Por ahora validamos con localStorage
  const storedUser = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = storedUser.find(u => u.usuario === usuario && u.password === password);

  if(userExists) {
    // Guardar sesión
    localStorage.setItem("currentUser", JSON.stringify(userExists));
    alert("¡Login exitoso!");
    window.location.href = "dashboard.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
