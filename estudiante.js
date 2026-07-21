// =============================================
// CORFEDES CAV - INTERACCIONES COMPLETAS
// =============================================

document.addEventListener("DOMContentLoaded", function () {
  // ----- MENÚ HAMBURGUESA (responsive) -----
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });
  }

  // ----- Botón "Comenzar mi test" -----
  const startBtn = document.getElementById("startTestBtn");
  if (startBtn) {
    startBtn.addEventListener("click", function () {
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando...';
      this.disabled = true;
      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-check"></i> ¡Test listo!';
        this.style.background = "#1f8b4c";
        setTimeout(() => {
          this.innerHTML = '<i class="fas fa-rocket"></i> Comenzar mi test';
          this.disabled = false;
          this.style.background = "";
          alert("🚀 Test de orientación iniciado");
        }, 700);
      }, 1200);
    });
  }

  // ----- NUEVO: Botón "Explorar carreras" -----
  const exploreBtn = document.getElementById("exploreCareersBtn");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      alert("📚 Explorando todas las carreras disponibles");
      // Scroll a la sección de carreras
      const careerSection = document.querySelector(".career-section");
      if (careerSection) {
        careerSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // ----- Pasos de progreso (clic para activar) -----
  const steps = document.querySelectorAll(".step");
  steps.forEach((step) => {
    step.addEventListener("click", function () {
      steps.forEach((s) => s.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // ----- Botón "Continua" -----
  const continueBtn = document.querySelector(".progress-card .btn.secondary");
  if (continueBtn) {
    continueBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const active = document.querySelector(".step.active");
      alert(
        `📌 Continuando desde: ${active ? active.textContent.trim() : "el principio"}`,
      );
    });
  }

  // ----- "Ver todas" / "Ver más" -----
  document.querySelectorAll(".link-all").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      alert("📚 Mostrando todos los elementos");
    });
  });

  // ----- Quick cards -----
  document.querySelectorAll(".quick-card").forEach((card) => {
    card.addEventListener("click", function () {
      const titulo = this.querySelector("h3")?.textContent || "opción";
      alert(`🔍 Explorando: ${titulo}`);
    });
  });

  // ----- Career items -----
  document.querySelectorAll(".career-item").forEach((item) => {
    item.addEventListener("click", function () {
      alert(`📖 Carrera seleccionada: ${this.textContent}`);
    });
  });

  // ----- Future items -----
  document.querySelectorAll(".future-item").forEach((item) => {
    item.addEventListener("click", function () {
      alert(`🚀 Profesión del futuro: ${this.textContent.trim()}`);
    });
  });

  // ----- Video cards -----
  document.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", function () {
      const titulo = this.querySelector("p")?.textContent || "video";
      alert(`▶️ Reproduciendo: ${titulo}`);
    });
  });

  // ----- Botón comunidad -----
  const communityBtn = document.querySelector(".community-content .btn");
  if (communityBtn) {
    communityBtn.addEventListener("click", function () {
      alert("👥 Bienvenido a la comunidad CORFEDES CAV");
    });
  }

  // ----- Botón agendar cita -----
  const ctaBtn = document.querySelector(".cta-section .btn");
  if (ctaBtn) {
    ctaBtn.addEventListener("click", function () {
      alert("📅 Agenda tu orientación con un profesional");
    });
  }

  // ----- Footer links (prevenir navegación) -----
  document.querySelectorAll(".footer-col a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      alert(`🔗 Navegando a: ${this.textContent}`);
    });
  });

  // ----- Navegación principal (prevenir navegación) -----
  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll(".main-nav a")
        .forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      alert(`📄 Navegando a: ${this.textContent}`);
      if (window.innerWidth <= 768) {
        mainNav.classList.remove("open");
      }
    });
  });

  console.log("✅ CORFEDES CAV · Todos los módulos cargados");
});

// ============================================
// MODAL DE INFORMACIÓN DE CARRERAS
// ============================================

// Datos de las carreras
const carrerasData = {
  Medicina: {
    icon: "🩺",
    desc: "La Medicina es la ciencia dedicada al estudio de la vida, la salud, las enfermedades y la muerte del ser humano, con el objetivo de prevenir, diagnosticar y tratar las enfermedades.",
    area: "Ciencias de la Salud",
    duration: "6 años (pregrado) + especialización",
    jobs: [
      "Médico General",
      "Especialista (Cardiología, Neurología, etc.)",
      "Investigador médico",
      "Docente universitario",
    ],
    why: "Si te apasiona ayudar a los demás, resolver problemas complejos y tienes vocación de servicio, la Medicina te permite salvar vidas y mejorar la calidad de vida de las personas.",
    universities: [
      "Universidad Nacional de Colombia",
      "Universidad de Los Andes",
      "Universidad Javeriana",
      "Universidad del Rosario",
    ],
  },
  "Ing. de Sistemas": {
    icon: "💻",
    desc: "La Ingeniería de Sistemas es una disciplina que combina la informática, la matemática y la lógica para diseñar, desarrollar y mantener sistemas informáticos y software.",
    area: "Tecnología e Informática",
    duration: "5 años",
    jobs: [
      "Desarrollador de Software",
      "Ingeniero de Datos",
      "Arquitecto de Soluciones",
      "Gerente de TI",
    ],
    why: "Vivimos en la era digital. La tecnología está en todo y cada día se necesitan más profesionales que sepan crear soluciones innovadoras y eficientes.",
    universities: [
      "Universidad de Los Andes",
      "Universidad Nacional",
      "Universidad del Valle",
      "Universidad ICESI",
    ],
  },
  Comunicación: {
    icon: "📺",
    desc: "La Comunicación Social estudia los procesos de comunicación humana, los medios masivos, el periodismo, la publicidad y las relaciones públicas.",
    area: "Ciencias Sociales y Humanas",
    duration: "4 a 5 años",
    jobs: [
      "Periodista",
      "Community Manager",
      "Director de Comunicaciones",
      "Publicista",
      "Productor Audiovisual",
    ],
    why: "Si te gusta contar historias, expresar ideas y conectar con las personas, la comunicación te permite ser la voz de las marcas, las causas y las comunidades.",
    universities: [
      "Universidad Javeriana",
      "Universidad del Norte",
      "Universidad de Antioquia",
      "Universidad Externado",
    ],
  },
  Arquitectura: {
    icon: "🏛️",
    desc: "La Arquitectura es el arte y técnica de proyectar, diseñar y construir espacios habitables que sean funcionales, estéticos y sostenibles.",
    area: "Diseño y Construcción",
    duration: "5 años",
    jobs: [
      "Arquitecto",
      "Diseñador Urbano",
      "Paisajista",
      "Restaurador de patrimonio",
      "Constructor",
    ],
    why: "Si tienes visión espacial, creatividad y te preocupa el medio ambiente, la Arquitectura te permite crear espacios que mejoran la vida de las personas.",
    universities: [
      "Universidad Nacional",
      "Universidad de Los Andes",
      "Universidad Javeriana",
      "Universidad de Medellín",
    ],
  },
};

// Función para abrir el modal con la información de la carrera
function openCareerModal(careerTitle) {
  const data = carrerasData[careerTitle];

  if (!data) {
    alert("Información de la carrera no disponible aún.");
    return;
  }

  document.getElementById("careerModalIcon").textContent = data.icon || "🎓";
  document.getElementById("careerModalTitle").textContent = careerTitle;
  document.getElementById("careerModalDesc").textContent = data.desc;
  document.getElementById("careerModalArea").textContent = data.area;
  document.getElementById("careerModalDuration").textContent = data.duration;

  // Salidas laborales
  const jobsList = document.getElementById("careerModalJobs");
  jobsList.innerHTML = "";
  data.jobs.forEach((job) => {
    const li = document.createElement("li");
    li.textContent = job;
    jobsList.appendChild(li);
  });

  document.getElementById("careerModalWhy").textContent = data.why;

  // Universidades
  const uniList = document.getElementById("careerModalUniversities");
  uniList.innerHTML = "";
  data.universities.forEach((uni) => {
    const li = document.createElement("li");
    li.textContent = uni;
    uniList.appendChild(li);
  });

  // Mostrar modal
  document.getElementById("careerModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

// Función para cerrar el modal
function closeCareerModal() {
  document.getElementById("careerModal").style.display = "none";
  document.body.style.overflow = "auto";
}

// Evento para todas las tarjetas de carreras
document.addEventListener("DOMContentLoaded", function () {
  const careerCards = document.querySelectorAll(".career-match-card");

  careerCards.forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", function (e) {
      // Buscar el título dentro de la tarjeta
      const titleElement = this.querySelector(".career-title");
      if (titleElement) {
        const careerTitle = titleElement.textContent.trim();
        openCareerModal(careerTitle);
      }
    });
  });
});

// Cerrar modal con clic fuera
document.addEventListener("click", function (e) {
  const modal = document.getElementById("careerModal");
  if (e.target === modal) {
    closeCareerModal();
  }
});

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeCareerModal();
  }
});
