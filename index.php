<?php
require 'video.php';
?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>CORFEDES CAV · Descubre tu talento</title>
  <link rel="stylesheet" href="estudiante.css?v=10" />
  <link rel="stylesheet" href="videos.css">
  <link rel="stylesheet" href="corfedito.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
</head>

<body>

  <div class="app-wrapper">

    <!-- ========================================= -->
    <!-- HEADER DE NAVEGACIÓN -->
    <!-- ========================================= -->
    <header class="main-header">
      <div class="logo">
        <img src="/img/logo.png" alt="logo_corfedes" class="logo_corfedes">
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#" class="active">Inicio</a></li>
          <li><a href="#">Test Vocacional</a></li>
          <li><a href="#">Carreras</a></li>
          <li><a href="#">Recursos</a></li>
          <li><a href="#">Comunidad</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <div class="menu-toggle" id="menuToggle">
        <i class="fas fa-bars"></i>
      </div>
    </header>

    <!-- ========================================= -->
    <!-- HERO / BIENVENIDA -->
    <!-- ========================================= -->
    <section class="hero">
      <div class="hero-badge">BIENVENIDO ESTUDIANTE</div>
      <h2>Descubre tu talento,</h2>
      <h2>construye tu futuro</h2>
      <p class="hero-sub">Te acompañamos a elegir tu camino profesional</p>
      <p class="hero-sub">de forma fácil, divertida e inteligente.</p>
      <div class="hero-actions">
        <button class="btn primary" id="startTestBtn">
          <i class="fas fa-rocket"></i> Comenzar mi test
        </button>
        <button class="btn outline" id="exploreCareersBtn">
          <i class="fas fa-compass"></i> Explorar carreras
        </button>
      </div>
      <div class="students-wrapper">
        <div class="students-container">
          <div class="students">
            <div class="avatars">
              <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Estudiante">
              <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="Estudiante">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Estudiante">
              <img src="https://randomuser.me/api/portraits/men/77.jpg" alt="Estudiante">
            </div>
            <div class="info">
              <h3>+15.000 estudiantes</h3>
              <p>ya han avanzado su copingo 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- QUICK EXPLORE (5 tarjetas) -->
    <!-- ========================================= -->
    <section class="quick-explore">
      <div class="quick-card">
        <span class="icon-circle blue"><i class="fas fa-compass"></i></span>
        <h3>Test</h3>
        <p>Descubre tus fertilizantes</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle green"><i class="fas fa-graduation-cap"></i></span>
        <h3>Explora</h3>
        <p>Más de 500 carreras</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle red"><i class="fas fa-video"></i></span>
        <h3>Videos</h3>
        <p>En 60 segundos</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle purple"><i class="fas fa-comments"></i></span>
        <h3>Comunidad</h3>
        <p>Pregunte y comparte</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle orange"><i class="fas fa-calendar-alt"></i></span>
        <h3>Eventos</h3>
        <p>Conferencias y talleres</p>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- CARRERAS + PROGRESO -->
    <!-- ========================================= -->
    <section class="main-grid">
      <div class="career-section">
        <div class="section-header">
          <h3>Explorar carreras que te pueden gustar</h3>
          <a href="#" class="link-all">Ver todas <i class="fas fa-arrow-right"></i></a>
        </div>
        <div class="careers-match-grid">
          <div class="career-match-card">
            <img src="/img/medicina.png" alt="Medicina" class="img_explora">
            <div class="career-title">Medicina</div>
            <div class="career-area">Ciencias de la Salud</div>
            <span class="career-match">56% Match</span>
          </div>
          <div class="career-match-card">
            <img src="/img/sistemas.png" alt="sistemas" class="img_explora">
            <div class="career-title">Ing. de Sistemas</div>
            <div class="career-area">Tecnología</div>
            <span class="career-match">92% Match</span>
          </div>
          <div class="career-match-card">
            <img src="/img/comunicacion.png" alt="comunicacion" class="img_explora">
            <div class="career-title">Comunicación</div>
            <div class="career-area">Social y Humanas</div>
            <span class="career-match">50% Match</span>
          </div>
          <div class="career-match-card">
            <img src="/img/arquitecto.png" alt="arquitecto" class="img_explora">
            <div class="career-title">Arquitectura</div>
            <div class="career-area">Diseño y Construcción</div>
            <span class="career-match">88% Match</span>
          </div>
        </div>
      </div>

      <div class="profile-progress">
        <div class="card">
          <div class="header">
            <span class="trophy">🏆</span>
            <h3>Test de Fortalezas</h3>
          </div>
          <div id="testIntro">
            <div class="content">
              <div class="progress">
                <div class="progress-content">
                  <div class="percent">0%</div>
                  <div class="label">Sin empezar</div>
                </div>
              </div>
              <ul class="steps">
                <li><span class="pending"></span> ¿Quién eres?</li>
                <li><span class="pending"></span> Tus intereses</li>
                <li><span class="pending"></span> Tus habilidades</li>
                <li><span class="pending"></span> Tus metas</li>
                <li><span class="pending"></span> Tu estilo</li>
              </ul>
            </div>
            <div class="steps-counter"><span>0</span> de 5 pasos completados</div>
            <div class="button" onclick="startTest()">Comenzar test <span class="arrow">➜</span></div>
          </div>
          <div id="testContainer" style="display: none;">
            <div id="questionCounter" style="color: #8899bb; font-size: 13px; margin-bottom: 12px;">
              Pregunta <span id="currentQ">1</span> de <span id="totalQ">5</span>
            </div>
            <div id="progressBar" style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 20px; overflow: hidden;">
              <div id="progressFill" style="width: 20%; height: 100%; background: linear-gradient(90deg, #d01818, #ff6b6b); border-radius: 4px; transition: width 0.5s ease;"></div>
            </div>
            <div id="questionText" style="font-size: 18px; font-weight: 600; color: #fff; margin-bottom: 20px; min-height: 60px;">¿Cómo te describirías a ti mismo?</div>
            <div id="optionsContainer" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;"></div>
            <div style="display: flex; justify-content: space-between; gap: 10px;">
              <button class="button" onclick="prevQuestion()" id="prevBtn" style="flex: 1; background: rgba(255,255,255,0.1); box-shadow: none; height: 40px; font-size: 13px;">← Anterior</button>
              <button class="button" onclick="nextQuestion()" id="nextBtn" style="flex: 2; height: 40px; font-size: 13px;">Siguiente →</button>
            </div>
          </div>
          <div id="resultContainer" style="display: none; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 10px;">🎉</div>
            <h3 style="color: #fff; font-size: 22px; margin-bottom: 8px;">¡Test completado!</h3>
            <p style="color: #8899bb; font-size: 14px; margin-bottom: 16px;">Estas son tus principales fortalezas:</p>
            <div id="resultCards" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;"></div>
            <div class="button" onclick="resetTest()" style="background: linear-gradient(135deg, #18d46a, #0fa84f); box-shadow: 0 8px 25px rgba(24, 212, 106, 0.35);">Rehacer test <span class="arrow">⟳</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- PROFESIONES DEL FUTURO -->
    <!-- ========================================= -->
    <section class="future-section">
      <div class="section-header">
        <h3>Profesiones del futuro</h3>
        <a href="#" class="link-all">Ver todas <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="future-grid">
        <div class="future-item"><img src="/img/cerebro.png" alt="IA" class="future-icon"><span>IA y Dates</span></div>
        <div class="future-item"><img src="/img/candado.png" alt="Ciberseguridad" class="future-icon"><span>Ciber-seguridad</span></div>
        <div class="future-item"><img src="/img/megafono.png" alt="Marketing" class="future-icon"><span>Marketing Digital</span></div>
        <div class="future-item"><img src="/img/programacion.png" alt="Desarrollo" class="future-icon"><span>Desarrollo Web</span></div>
        <div class="future-item"><img src="/img/finanzas.png" alt="Energías" class="future-icon"><span>Energias limpias</span></div>
        <div class="future-item"><img src="/img/robot.png" alt="Robótica" class="future-icon"><span>Robótica</span></div>
        <div class="future-item"><img src="/img/diseño.png" alt="Diseño" class="future-icon"><span>Diseño UX/UI</span></div>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- VIDEOS EN 60 SEGUNDOS -->
    <!-- ========================================= -->
    <section class="videos-section">
      <div class="mi-seccion-videos">
        <div class="videos-header">
          <div class="videos-title">🔥 <span>Videos en 60 segundos</span></div>
          <a href="#" class="ver-todos">Ver todas →</a>
        </div>
        <div class="videos-slider">
          <button class="slider-btn prev">❮</button>
          <div class="videos-container" id="slider">
            <div class="video-card" data-video="qeqn1d9rplk">
              <img src="img_video/Psychology.png" alt="¿Qué hace un Psicólogo?">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">¿Qué hace un Psicólogo?</div>
            </div>
            <div class="video-card" data-video="LmqScjXfTH8">
              <img src="img_video/ingenieria.png" alt="Día de un Ingeniero">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">Día de un Ingeniero</div>
            </div>
            <div class="video-card" data-video="TyMq_7hqN14">
              <img src="img_video/medicina.png" alt="Así te enamorarás de Medicina">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">Así te enamorarás de Medicina</div>
            </div>
            <div class="video-card" data-video="TyMq_7hqN14">
              <img src="img_video/diseñador.png" alt="¿Quieres ser Diseñador?">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">¿Quieres ser Diseñador?</div>
            </div>
            <div class="video-card" data-video="TyMq_7hqN14">
              <img src="img_video/abogado.png" alt="Quieres ser abogado">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">Quieres ser abogado</div>
            </div>
            <div class="video-card" data-video="TyMq_7hqN14">
              <img src="img_video/abogado.png" alt="Quieres ser abogado">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">Quieres ser abogado</div>
            </div>
            <div class="video-card" data-video="qeqn1d9rplk">
              <img src="img_video/Psychology.png" alt="¿Qué hace un Psicólogo?">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">¿Qué hace un Psicólogo?</div>
            </div>
            <div class="video-card" data-video="TyMq_7hqN14">
              <img src="img_video/abogado.png" alt="Quieres ser abogado">
              <div class="overlay"></div>
              <div class="play"><svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"></path></svg></div>
              <div class="video-info">Quieres ser abogado</div>
            </div>
          </div>
          <button class="slider-btn next">❯</button>
        </div>
      </div>

      <!-- REPRODUCTOR FLOTANTE DE VIDEOS -->
      <div id="videoModal" class="video-modal">
        <div class="video-modal-content">
          <div class="video-modal-header">
            <span id="videoTitle" class="video-modal-title">Título del video</span>
            <button class="video-modal-close" onclick="closeVideo()">✕</button>
          </div>
          <div class="video-modal-body">
            <iframe id="videoIframe" src="" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>

    <section>corfedito</section>

    <!-- ========================================= -->
    <!-- COMUNIDAD -->
    <!-- ========================================= -->
    <section class="community-section">
      <div class="community-content">
        <h3>No estás solo en este camino</h3>
        <p>Únete a nuestra comunidad y comparte tus dudas</p>
      </div>
      <div class="stats-section">
        <div class="stat-item"><i class="fas fa-user-graduate"></i><span class="stat-number">15.000+</span><span class="stat-label">Estudiantes</span></div>
        <div class="stat-item"><i class="fas fa-graduation-cap"></i><span class="stat-number">500+</span><span class="stat-label">Carreras</span></div>
        <div class="stat-item"><i class="fas fa-chalkboard-teacher"></i><span class="stat-number">120+</span><span class="stat-label">Conferencias</span></div>
        <div class="stat-item"><i class="fas fa-map-marker-alt"></i><span class="stat-number">25</span><span class="stat-label">Ciudades</span></div>
      </div>
      <div class="cta-section">
        <i class="fas fa-calendar-alt"></i>
        <div><h3>Agenda tu orientación</h3><p>Con un profesional</p></div>
        <i class="fas fa-arrow-right"></i>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- FOOTER -->
    <!-- ========================================= -->
    <footer class="footer">
      <div class="footer-col">
        <h5>Bogotá - Modelia</h5>
        <ul>
          <li>📍 Calle 23 # 81C - 33</li>
          <li>📞 (1) 300 1545 - (1) 300 1546</li>
          <li>📱 321 377 0334 - 311 598 0435</li>
          <li>✉️ info@corfedes.co</li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Bogotá - Fontibón</h5>
        <ul>
          <li>📍 Cra.100 No 20 - 59</li>
          <li>📱 314 5280963</li>
          <li>✉️ csu-fontibon@areandina.edu.co</li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Manizales</h5>
        <ul>
          <li>📍 Cra. 23 No. 70-69</li>
          <li>📞 (6) 891 1224</li>
          <li>📱 310 287 3606</li>
          <li>✉️ csu-manizales@corfedes.co</li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Zipaquirá</h5>
        <ul>
          <li>📍 Calle 7a # 10-34</li>
          <li>📱 322 7376795</li>
          <li>✉️ csu-zipaquira@areandina.edu.co</li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Armenia</h5>
        <ul>
          <li>📍 Kra 14 # 4-15 Av. Bolívar</li>
          <li>📱 321 9213858</li>
          <li>✉️ csu-armenia@areandina.edu.co</li>
        </ul>
      </div>
    </footer>

    <!-- ========================================= -->
    <!-- MODAL DE INFORMACIÓN DE CARRERAS          -->
    <!-- ========================================= -->
    <div id="careerModal" class="career-modal">
      <div class="career-modal-content">
        <div class="career-modal-header">
          <div>
            <span id="careerModalIcon" class="career-modal-icon">🎓</span>
            <h2 id="careerModalTitle">Medicina</h2>
          </div>
          <button class="career-modal-close" onclick="closeCareerModal()">✕</button>
        </div>
        <div class="career-modal-body">
          <div class="career-modal-grid">
            <div class="career-modal-info">
              <h4>📋 Descripción</h4>
              <p id="careerModalDesc">Descripción de la carrera...</p>
            </div>
            <div class="career-modal-info">
              <h4>🎯 Área de conocimiento</h4>
              <p id="careerModalArea">Ciencias de la Salud</p>
            </div>
            <div class="career-modal-info">
              <h4>📚 Duración</h4>
              <p id="careerModalDuration">5 años</p>
            </div>
            <div class="career-modal-info">
              <h4>💼 Salidas laborales</h4>
              <ul id="careerModalJobs">
                <li>Hospitales</li>
                <li>Clínicas privadas</li>
                <li>Investigación</li>
              </ul>
            </div>
            <div class="career-modal-info full-width">
              <h4>📌 ¿Por qué estudiar esta carrera?</h4>
              <p id="careerModalWhy">Razones para estudiar esta carrera...</p>
            </div>
            <div class="career-modal-info full-width">
              <h4>🏛️ Universidades donde estudiarla</h4>
              <ul id="careerModalUniversities">
                <li>Universidad Nacional</li>
                <li>Universidad de Los Andes</li>
                <li>Universidad Javeriana</li>
              </ul>
            </div>
          </div>
          <div class="career-modal-actions">
            <button class="btn primary" onclick="closeCareerModal()">
              <i class="fas fa-graduation-cap"></i> Explorar más carreras
            </button>
            <button class="btn secondary" onclick="closeCareerModal()">
              <i class="fas fa-times"></i> Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

  </div> <!-- Cierre de app-wrapper -->

  <!-- ========================================= -->
  <!-- SCRIPTS -->
  <!-- ========================================= -->
  <script src="estudiante.js"></script>
  <script src="corfedito.js"></script>
  <?php include 'estudiante-backend.php'; ?>
  <script src="/videos.js"></script>
  <script src="/test.js"></script>

</body>
</html>