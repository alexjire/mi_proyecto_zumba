// ===== MENÚ LATERAL =====
const menuButtons = document.querySelectorAll(".menu-btn");
const contentSections = document.querySelectorAll(".content-section");
menuButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    contentSections.forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(btn.dataset.section);
    if (target) target.classList.add("active");
  });
});

// ===== HAMBURGUESA =====
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => mobileMenu.classList.toggle("open"));

// ===== LOGOUT =====
const logoutBtns = document.querySelectorAll("#logout-btn, #logout-btn-2");
logoutBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    location.href = "index.html"; // vuelve al index principal
  });
});

// ===== NOTICIAS =====
const noticiaForm = document.getElementById("noticiaForm");
const listaNoticias = document.getElementById("listaNoticias");
let noticias = JSON.parse(localStorage.getItem("noticias")) || [];

function renderNoticias() {
  listaNoticias.innerHTML = "";
  noticias.forEach((noticia, index) => {
    const li = document.createElement("li");
    li.textContent = noticia;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Eliminar";
    delBtn.addEventListener("click", () => {
      noticias.splice(index, 1);
      localStorage.setItem("noticias", JSON.stringify(noticias));
      renderNoticias();
      updateIndexNoticias(); // actualiza index principal
    });

    li.appendChild(delBtn);
    listaNoticias.appendChild(li);
  });
}
renderNoticias();

noticiaForm.addEventListener("submit", e => {
  e.preventDefault();
  const texto = document.getElementById("noticiaTexto").value.trim();
  if (texto) {
    noticias.push(texto);
    localStorage.setItem("noticias", JSON.stringify(noticias));
    renderNoticias();
    updateIndexNoticias(); // actualiza index principal
    noticiaForm.reset();
  }
});

// ===== FUNCIONES PARA INDEX =====
function updateIndexNoticias() {
  const indexNoticias = document.getElementById("indexNoticias");
  if (!indexNoticias) return;
  indexNoticias.innerHTML = "";
  noticias.forEach(n => {
    const p = document.createElement("p");
    p.textContent = n;
    indexNoticias.appendChild(p);
  });
}

// ===== CARRUSEL =====
const carruselForm = document.getElementById("carruselForm");
let carrusel = JSON.parse(localStorage.getItem("carrusel")) || { imagen: [], video: [] };

function renderCarruselIndex() {
  const containerImg = document.querySelector("#carousel-images .carousel-container");
  const containerVid = document.querySelector("#carousel-videos .carousel-container");

  if (containerImg) {
    containerImg.innerHTML = "";
    carrusel.imagen.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      containerImg.appendChild(img);
    });
  }

  if (containerVid) {
    containerVid.innerHTML = "";
    carrusel.video.forEach(url => {
      const iframe = document.createElement("iframe");
      iframe.src = url;
      iframe.allow = "autoplay; encrypted-media";
      iframe.allowFullscreen = true;
      containerVid.appendChild(iframe);
    });
  }
}

carruselForm.addEventListener("submit", e => {
  e.preventDefault();
  const fileInput = document.getElementById("carruselImagen");
  const videoUrl = document.getElementById("carruselVideo").value.trim();

  // Imagen
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function() {
      carrusel.imagen.push(reader.result);
      localStorage.setItem("carrusel", JSON.stringify(carrusel));
      renderCarruselIndex();
      alert("Imagen agregada al carrusel");
      fileInput.value = "";
    };
    reader.readAsDataURL(fileInput.files[0]);
  }

  // Video
  if (videoUrl !== "") {
    carrusel.video.push(videoUrl);
    localStorage.setItem("carrusel", JSON.stringify(carrusel));
    renderCarruselIndex();
    alert("Video agregado al carrusel");
    document.getElementById("carruselVideo").value = "";
  }
});

// ===== COMUNICADO URGENTE =====
const comunicadoForm = document.getElementById("comunicadoForm");
const comunicadoContainer = document.getElementById("comunicadoContainer");
let comunicado = localStorage.getItem("comunicado") || "";

function renderComunicado() {
  comunicadoContainer.innerHTML = "";
  if (comunicado && comunicado.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = comunicado;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Eliminar";
    delBtn.addEventListener("click", () => {
      localStorage.removeItem("comunicado");
      comunicado = "";
      renderComunicado();
      updateIndexComunicado();
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Editar";
    editBtn.addEventListener("click", () => {
      const nuevo = prompt("Actualizar comunicado urgente:", comunicado);
      if (nuevo !== null && nuevo.trim() !== "") {
        comunicado = nuevo.trim();
        localStorage.setItem("comunicado", comunicado);
        renderComunicado();
        updateIndexComunicado();
      }
    });

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    comunicadoContainer.appendChild(li);
  }
  updateIndexComunicado();
}
renderComunicado();

comunicadoForm.addEventListener("submit", e => {
  e.preventDefault();
  const texto = document.getElementById("comunicadoTexto").value.trim();
  if (texto !== "") {
    comunicado = texto;
    localStorage.setItem("comunicado", comunicado);
  } else {
    comunicado = "";
    localStorage.removeItem("comunicado");
  }
  renderComunicado();
  comunicadoForm.reset();
});

// ===== FUNCION PARA INDEX COMUNICADO =====
function updateIndexComunicado() {
  const indexCom = document.getElementById("comunicadoUrgente");
  if (!indexCom) return;
  indexCom.innerHTML = comunicado || "";
}

// ===== INICIALIZAR CARRUSELES EN INDEX =====
renderCarruselIndex();
updateIndexNoticias();
updateIndexComunicado();
