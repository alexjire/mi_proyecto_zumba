let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let index = 0;

// Pausar todos los videos
function pauseAllVideos() {
    slides.forEach(slide => {
        let iframe = slide.querySelector('iframe');
        let src = iframe.src;
        iframe.src = src.replace('?autoplay=1',''); // pausa
    });
}

// Reproducir video activo
function playVideo(slide) {
    let iframe = slide.querySelector('iframe');
    let src = slide.dataset.video;
    iframe.src = src;
}

// Mostrar slide y actualizar dots
function showSlide(i){
    pauseAllVideos();
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
    playVideo(slides[i]);
    index = i;
}

// Dots clicables
dots.forEach(dot => {
    dot.addEventListener('click', ()=> showSlide(parseInt(dot.dataset.index)));
});

// Autoplay cada 5s
setInterval(()=>{
    showSlide((index + 1) % slides.length);
},5000);

// Inicial
showSlide(0);
