document.querySelectorAll('.carousel').forEach(carousel => {
  const container = carousel.querySelector('.carousel-container');
  const dots = carousel.querySelectorAll('.carousel-dot');
  const total = container.children.length;
  let index = 0;

  function showSlide(i) {
    container.style.transform = `translateX(-${i * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');

    // reproducir video automáticamente si es iframe
    const child = container.children[i];
    if (child.tagName === 'IFRAME') {
      child.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }

    index = i;
  }

  // click en cuadritos
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.dataset.index));
    });
  });

  // cambiar automáticamente cada 60 segundos
  setInterval(() => {
    let next = (index + 1) % total;
    showSlide(next);
  }, 60000);

  // inicial
  showSlide(0);
});
