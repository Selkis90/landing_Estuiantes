// =============================================
// CORFEDES CAV - INTERACCIONES COMPLETAS
// =============================================

document.addEventListener('DOMContentLoaded', function () {

  // ----- MENÚ HAMBURGUESA (responsive) -----
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
  }

  // ----- Botón "Comenzar mi test" -----
  const startBtn = document.getElementById('startTestBtn');
  if (startBtn) {
    startBtn.addEventListener('click', function () {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
      this.disabled = true;
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-check"></i> ¡Test listo!';
        this.style.background = '#1f8b4c';
        setTimeout(() => {
          this.innerHTML = '<i class="fas fa-rocket"></i> Comenzar mi test';
          this.disabled = false;
          this.style.background = '';
          alert('🚀 Test de orientación iniciado');
        }, 700);
      }, 1200);
    });
  }

  // ----- NUEVO: Botón "Explorar carreras" -----
  const exploreBtn = document.getElementById('exploreCareersBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', function () {
      alert('📚 Explorando todas las carreras disponibles');
      // Scroll a la sección de carreras
      const careerSection = document.querySelector('.career-section');
      if (careerSection) {
        careerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // ----- Pasos de progreso (clic para activar) -----
  const steps = document.querySelectorAll('.step');
  steps.forEach(step => {
    step.addEventListener('click', function () {
      steps.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // ----- Botón "Continua" -----
  const continueBtn = document.querySelector('.progress-card .btn.secondary');
  if (continueBtn) {
    continueBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const active = document.querySelector('.step.active');
      alert(`📌 Continuando desde: ${active ? active.textContent.trim() : 'el principio'}`);
    });
  }

  // ----- "Ver todas" / "Ver más" -----
  document.querySelectorAll('.link-all').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert('📚 Mostrando todos los elementos');
    });
  });

  // ----- Quick cards -----
  document.querySelectorAll('.quick-card').forEach(card => {
    card.addEventListener('click', function () {
      const titulo = this.querySelector('h3')?.textContent || 'opción';
      alert(`🔍 Explorando: ${titulo}`);
    });
  });

  // ----- Career items -----
  document.querySelectorAll('.career-item').forEach(item => {
    item.addEventListener('click', function () {
      alert(`📖 Carrera seleccionada: ${this.textContent}`);
    });
  });

  // ----- Future items -----
  document.querySelectorAll('.future-item').forEach(item => {
    item.addEventListener('click', function () {
      alert(`🚀 Profesión del futuro: ${this.textContent.trim()}`);
    });
  });

  // ----- Video cards -----
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', function () {
      const titulo = this.querySelector('p')?.textContent || 'video';
      alert(`▶️ Reproduciendo: ${titulo}`);
    });
  });

  // ----- Botón comunidad -----
  const communityBtn = document.querySelector('.community-content .btn');
  if (communityBtn) {
    communityBtn.addEventListener('click', function () {
      alert('👥 Bienvenido a la comunidad CORFEDES CAV');
    });
  }

  // ----- Botón agendar cita -----
  const ctaBtn = document.querySelector('.cta-section .btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function () {
      alert('📅 Agenda tu orientación con un profesional');
    });
  }

  // ----- Footer links (prevenir navegación) -----
  document.querySelectorAll('.footer-col a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert(`🔗 Navegando a: ${this.textContent}`);
    });
  });

  // ----- Navegación principal (prevenir navegación) -----
  document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelectorAll('.main-nav a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      alert(`📄 Navegando a: ${this.textContent}`);
      if (window.innerWidth <= 768) {
        mainNav.classList.remove('open');
      }
    });
  });

  console.log('✅ CORFEDES CAV · Todos los módulos cargados');
});