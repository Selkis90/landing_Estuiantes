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
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
    rel="stylesheet" />
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

      <h2>Descubre tu talento, construye tu futuro</h2>
      <p class="hero-sub">
        Te acompañamos a elegir tu camino profesional de forma fácil,
        <span class="highlight">divertida e inteligente</span>.
      </p>
      <div class="hero-actions">
        <button class="btn primary" id="startTestBtn">
          <i class="fas fa-rocket"></i> Comenzar mi test
        </button>
        <button class="btn outline" id="exploreCareersBtn">
          <i class="fas fa-compass"></i> Explorar carreras
        </button>
        <span class="counter">+15,000 estudiantes ya han anunciado su concurso</span>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- QUICK EXPLORE (5 tarjetas) -->
    <!-- ========================================= -->
    <section class="quick-explore">
      <div class="quick-card">
        <span class="icon-circle blue">
          <i class="fas fa-compass"></i>
        </span>
        <h3>Test</h3>
        <p>Descubre tus fertilizantes</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle green">
          <i class="fas fa-graduation-cap"></i>
        </span>
        <h3>Explora</h3>
        <p>Más de 500 carreras</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle red">
          <i class="fas fa-video"></i>
        </span>
        <h3>Videos</h3>
        <p>En 60 segundos</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle purple">
          <i class="fas fa-comments"></i>
        </span>
        <h3>Comunidad</h3>
        <p>Pregunte y comparte</p>
      </div>
      <div class="quick-card">
        <span class="icon-circle orange">
          <i class="fas fa-calendar-alt"></i>
        </span>
        <h3>Eventos</h3>
        <p>Conferencias y talleres</p>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- CARRERAS + PROGRESO (ESTILO SEGUNDA IMAGEN) -->
    <!-- ========================================= -->
    <section class="main-grid">
      <!-- Columna izquierda: carreras -->
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
            <div class="text_explora">
              <div class="career-title">Ing. de Sistemas</div>
              <div class="career-area">Tecnología</div>
              <span class="career-match">92% Match</span>
            </div>
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
      <!-- Columna derecha: progreso -->
      <div class="profile-progress">
        <div class="card">
          <div class="header">
            <span class="trophy">🏆</span>
            <h3>Tu progreso</h3>
          </div>

          <div class="content">
            <div class="progress">
              <div class="progress-content">
                <div class="percent">60%</div>
                <div class="label">Test ocasional</div>
              </div>
            </div>

            <ul class="steps">
              <li><span class="check">✓</span> ¿Quién eres?</li>
              <li><span class="check">✓</span> Tus intereses</li>
              <li><span class="check">✓</span> Tus habilidades</li>
              <li><span class="pending"></span> Explora carreras</li>
              <li><span class="pending"></span> Tu plan de futuro</li>
            </ul>
          </div>

          <div class="button">
            Continuar test
            <span class="arrow">➜</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- PROFESIONES DEL FUTURO (7 áreas) -->
    <!-- ========================================= -->
    <section class="future-section">
      <div class="section-header">
        <h3>Profesiones del futuro</h3>
        <a href="#" class="link-all">Ver todas <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="future-grid">
        <div class="future-item">
          <img src="/img/cerebro.png" alt="Líder de Datos" class="future-icon">
          <span>IA y Dates</span>
        </div>
        <div class="future-item">
          <img src="/img/candado.png" alt="Ciberseguridad" class="future-icon">
          <span>Ciber-seguridad</span>
        </div>
        <div class="future-item">
          <img src="/img/megafono.png" alt="Marketing Digital" class="future-icon">
          <span>Marketing Digital</span>
        </div>
        <div class="future-item">
          <img src="/img/programacion.png" alt="Desarrollo Web" class="future-icon">
          <span>Desarrollo Web</span>
        </div>
        <div class="future-item">
          <img src="/img/finanzas.png" alt="Finanzas Líquidas" class="future-icon">
          <span>Energias limpias</span>
        </div>
        <div class="future-item">
          <img src="/img/robot.png" alt="Relaciones" class="future-icon">
          <span>Robótica</span>
        </div>
        <div class="future-item">
          <img src="/img/diseño.png" alt="Relaciones" class="future-icon">
          <span>Diseño UX/UI</span>
        </div>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- VIDEOS EN 60 SEGUNDOS -->
    <!-- ========================================= -->
    <section class="videos-section">
      <div class="mi-seccion-videos">
        <div class="videos-header">
          <div class="videos-title">
            🔥 <span>Videos en 60 segundos</span>
          </div>
          <a href="#" class="ver-todos">
            Ver todas →
          </a>
        </div>

        <div class="videos-slider">
          <button class="slider-btn prev">&#10094;</button>
          <div class="videos-container" id="slider">
            <?php foreach ($videos as $video): ?>
              <a href="<?= $video['url']; ?>" class="video-card">
                <img src="<?= $video['imagen']; ?>" alt="<?= $video['titulo']; ?>">
                <div class="overlay"></div>
                <div class="play">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div class="video-info">
                  <?= $video['titulo']; ?>
                </div>
              </a>
            <?php endforeach; ?>
          </div>
          <button class="slider-btn next">&#10095;</button>
        </div>
      </div>

      <!-- ========================================= -->
      <!-- CORFEDITO -->
      <!-- ========================================= -->
      <!-- <div class="contenedor">

        <div id="robot">

          <img src="/img/corfedito.png" id="imgRobot">

        </div>

        <div id="mensaje">

          Hola Humano

        </div>

      </div> -->
    </section>

    <!-- ========================================= -->
    <!-- COMUNIDAD (No estás solo) -->
    <!-- ========================================= -->
    <section class="community-section">
      <div class="community-content">
        <h3>No estás solo en este camino</h3>
        <p>Unete a nuestra comunidad y comparte tus dudas</p>
        <button class="btn primary"><i class="fas fa-users"></i> Unirme a la comunidad</button>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- ESTADÍSTICAS -->
    <!-- ========================================= -->
    <section class="stats-section">
      <div class="stat-item">
        <span class="stat-number">15.000+</span>
        <span class="stat-label">Estudiantes</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">500+</span>
        <span class="stat-label">Carreras</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">120+</span>
        <span class="stat-label">Conferencias</span>
      </div>
      <div class="stat-item">
        <span class="stat-number">25+</span>
        <span class="stat-label">Gulos</span>
      </div>
    </section>

    <!-- ========================================= -->
    <!-- AGENDA TU ORIENTACIÓN -->
    <!-- ========================================= -->
    <section class="cta-section">
      <h3>Agenda tu orientación</h3>
      <p>Con un profesional</p>
      <button class="btn primary"><i class="fas fa-calendar-check"></i> Agendar cita</button>
    </section>

    <!-- ========================================= -->
    <!-- FOOTER (4 columnas) -->
    <!-- ========================================= -->
    <footer class="footer">
      <div class="footer-brand">
        <h4>CORFEDES COV</h4>
        <p>Servicio profesional de orientación vocacional para estudiantes.</p>
      </div>
      <div class="footer-col">
        <h5>Estudiantes</h5>
        <ul>
          <li><a href="#">Test Vocacional</a></li>
          <li><a href="#">Carreras</a></li>
          <li><a href="#">Recomendaciones</a></li>
          <li><a href="#">Videos</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Alandantes</h5>
        <ul>
          <li><a href="#">Guía para padres</a></li>
          <li><a href="#">Como apoyar a los estudiantes</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Orientadores</h5>
        <ul>
          <li><a href="#">Hermenistas</a></li>
          <li><a href="#">Conferencias</a></li>
          <li><a href="#">Materiales</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h5>Contacto</h5>
        <ul>
          <li><a href="#">Escríbenos</a></li>
          <li><a href="#">Ayuda</a></li>
          <li><a href="#">Preguntas frecuentes</a></li>
          <li><a href="#">Políticas</a></li>
        </ul>
      </div>
    </footer>

    <!-- ========================================= -->
    <!-- FOOTER BOTTOM -->
    <!-- ========================================= -->
    <div class="footer-bottom">
      <p>Tu futuro emplea hoy</p>
    </div>

  </div>

  <!-- ========================================= -->
  <!-- SCRIPTS -->
  <!-- ========================================= -->
  <script src="estudiante.js"></script>
  <script src="corfedito.js"></script>
  <?php include 'estudiante-backend.php'; ?>
  <script src="/videos.js"></script>

</body>

</html>