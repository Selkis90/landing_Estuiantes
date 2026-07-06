<?php
require_once 'video.php';
?>
<!DOCTYPE html>
<html lang="es">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Videos</title>

  <link rel="stylesheet" href="videos.css">

</head>

<body>

  <section class="videos60">

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

  </section>

  <script src="/videos.js"></script>

</body>

</html>