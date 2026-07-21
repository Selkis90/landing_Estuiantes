// ============================================
// SLIDER DE VIDEOS (TUS FUNCIONES EXISTENTES)
// ============================================

const slider = document.getElementById("slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const cardWidth = 240;

/*=========================================
=      BOTONES DERECHA E IZQUIERDA        =
=========================================*/

next.addEventListener("click", ()=>{
    slider.scrollBy({
        left: cardWidth,
        behavior: "smooth"
    });
});

prev.addEventListener("click", ()=>{
    slider.scrollBy({
        left: -cardWidth,
        behavior: "smooth"
    });
});

/*=========================================
=           DRAG CON EL MOUSE             =
=========================================*/

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e)=>{
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", ()=>{
    isDown = false;
});

slider.addEventListener("mouseup", ()=>{
    isDown = false;
});

slider.addEventListener("mousemove", (e)=>{
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

// ============================================
// REPRODUCTOR DE VIDEOS FLOTANTE (NUEVO)
// ============================================

// Obtener elementos del modal
const videoCards = document.querySelectorAll('.video-card');
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoIframe');
const videoTitle = document.getElementById('videoTitle');

// Función para extraer ID de YouTube de cualquier formato
function getYouTubeId(url) {
    // Formatos soportados:
    // https://www.youtube.com/watch?v=VIDEO_ID
    // https://youtu.be/VIDEO_ID
    // https://www.youtube.com/embed/VIDEO_ID
    // https://youtube.com/shorts/VIDEO_ID
    // Solo el ID directamente
    
    // Si ya es solo el ID (ej: "qeqn1d9rplk")
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
        return url;
    }
    
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
        /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/
    ];
    
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) {
            return match[1];
        }
    }
    return null;
}

// Agregar evento de clic a cada tarjeta de video
videoCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Obtener URL del video y título
        const videoUrl = this.dataset.video;
        const title = this.querySelector('.video-info')?.textContent || 'Video';
        
        if (videoUrl) {
            let embedUrl = videoUrl;
            
            // Si es un enlace de YouTube o un ID, extraer el ID
            if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || /^[a-zA-Z0-9_-]{11}$/.test(videoUrl)) {
                const videoId = getYouTubeId(videoUrl);
                
                if (videoId) {
                    embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
                } else {
                    // Si no se pudo extraer el ID, intentar usar la URL tal cual
                    if (!videoUrl.includes('embed')) {
                        alert('No se pudo reproducir el video. URL: ' + videoUrl);
                        return;
                    }
                }
            }
            
            // Abrir el modal
            iframe.src = embedUrl;
            videoTitle.textContent = title;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Evitar scroll
        }
    });
});

// ============================================
// FUNCIONES PARA CERRAR EL MODAL
// ============================================

function closeVideo() {
    modal.style.display = 'none';
    iframe.src = ''; // Detener video
    document.body.style.overflow = 'auto';
}

// Cerrar al hacer clic en el botón ✕ (ya está en el HTML)
// Cerrar al hacer clic fuera del modal
modal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideo();
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideo();
    }
});