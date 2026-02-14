function crearCarrusel(contenedorSelector, intervalTime = 60000) {
  const contenedor = document.querySelector(contenedorSelector);
  if (!contenedor) return;

  const items = Array.from(contenedor.children);

  let dotsContainer = contenedor.parentElement.querySelector('.carousel-dots');
  if (!dotsContainer) {
    dotsContainer = document.createElement('div');
    dotsContainer.classList.add('carousel-dots');
    contenedor.parentElement.appendChild(dotsContainer);
  }

  items.forEach((item, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
      currentIndex = index;
      contenedor.scrollLeft = currentIndex * (items[0].offsetWidth + 10);
      actualizarDots();
    });
  });

  let currentIndex = 0;

  function actualizarDots() {
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    contenedor.scrollLeft = currentIndex * (items[0].offsetWidth + 10);
    actualizarDots();
  }, intervalTime);

  window.addEventListener('resize', () => {
    contenedor.scrollLeft = currentIndex * (items[0].offsetWidth + 10);
  });
}

// Inicializar carruseles
crearCarrusel('#inicio .inicio-columns .col:nth-child(1) .contenido'); // Imágenes
crearCarrusel('#inicio .inicio-columns .col:nth-child(2) .contenido'); // Videos
crearCarrusel('#inicio .inicio-columns .col:nth-child(3) .contenido'); // Otros anuncios
