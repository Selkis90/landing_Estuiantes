// ============================================
// TEST DE FORTALEZAS
// ============================================

// --- Preguntas del test ---
const questions = [
  {
    id: 1,
    text: '¿Cómo te describirías a ti mismo?',
    options: [
      { text: 'Creativo e imaginativo', value: 'creativo' },
      { text: 'Analítico y lógico', value: 'analitico' },
      { text: 'Empático y social', value: 'empatico' },
      { text: 'Práctico y organizado', value: 'practico' }
    ]
  },
  {
    id: 2,
    text: '¿Qué tipo de actividades disfrutas más?',
    options: [
      { text: 'Resolver problemas complejos', value: 'analitico' },
      { text: 'Ayudar y enseñar a otros', value: 'empatico' },
      { text: 'Crear cosas nuevas', value: 'creativo' },
      { text: 'Planificar y organizar', value: 'practico' }
    ]
  },
  {
    id: 3,
    text: '¿En qué eres mejor?',
    options: [
      { text: 'Pensar fuera de la caja', value: 'creativo' },
      { text: 'Tomar decisiones basadas en datos', value: 'analitico' },
      { text: 'Conectar con las personas', value: 'empatico' },
      { text: 'Ejecutar y cumplir objetivos', value: 'practico' }
    ]
  },
  {
    id: 4,
    text: '¿Qué valoras más en un equipo de trabajo?',
    options: [
      { text: 'La innovación y las nuevas ideas', value: 'creativo' },
      { text: 'La eficiencia y la estructura', value: 'practico' },
      { text: 'La colaboración y el apoyo mutuo', value: 'empatico' },
      { text: 'El análisis y la estrategia', value: 'analitico' }
    ]
  },
  {
    id: 5,
    text: '¿Cómo manejas los desafíos?',
    options: [
      { text: 'Busco soluciones creativas', value: 'creativo' },
      { text: 'Analizo el problema a fondo', value: 'analitico' },
      { text: 'Pido ayuda y trabajo en equipo', value: 'empatico' },
      { text: 'Creo un plan paso a paso', value: 'practico' }
    ]
  }
];

// --- Definición de fortalezas ---
const strengths = {
  creativo: {
    icon: '🎨',
    name: 'Creativo',
    desc: 'Tienes una mente innovadora. Piensas fuera de la caja y generas ideas únicas.',
    careers: ['Diseñador', 'Arquitecto', 'Desarrollador creativo', 'Músico']
  },
  analitico: {
    icon: '📊',
    name: 'Analítico',
    desc: 'Eres metódico y lógico. Te encanta descomponer problemas y encontrar soluciones basadas en datos.',
    careers: ['Ingeniero', 'Científico de datos', 'Analista financiero', 'Programador']
  },
  empatico: {
    icon: '🤝',
    name: 'Empático',
    desc: 'Tienes una gran inteligencia emocional. Conectas con las personas y entiendes sus necesidades.',
    careers: ['Psicólogo', 'Docente', 'Trabajador social', 'Médico']
  },
  practico: {
    icon: '📋',
    name: 'Práctico',
    desc: 'Eres organizado y eficiente. Te gusta ejecutar planes y ver resultados concretos.',
    careers: ['Administrador', 'Gerente de proyectos', 'Emprendedor', 'Arquitecto']
  }
};

// --- Estado del test ---
let currentQuestion = 0;
let answers = [];
let userStrengths = { creativo: 0, analitico: 0, empatico: 0, practico: 0 };

// ============================================
// FUNCIONES DEL TEST
// ============================================

function startTest() {
  document.getElementById('testIntro').style.display = 'none';
  document.getElementById('testContainer').style.display = 'block';
  document.getElementById('resultContainer').style.display = 'none';
  
  currentQuestion = 0;
  answers = [];
  userStrengths = { creativo: 0, analitico: 0, empatico: 0, practico: 0 };
  
  document.getElementById('totalQ').textContent = questions.length;
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('currentQ').textContent = currentQuestion + 1;
  document.getElementById('questionText').textContent = q.text;
  
  // Actualizar barra de progreso
  const progress = ((currentQuestion) / questions.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  
  // Generar opciones
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.textContent = opt.text;
    btn.style.cssText = `
      padding: 14px 18px;
      border: 2px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      background: rgba(255,255,255,0.04);
      color: #c8d3e0;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-align: left;
      font-weight: 500;
    `;
    
    btn.onmouseover = () => {
      btn.style.borderColor = '#d01818';
      btn.style.background = 'rgba(208,24,24,0.1)';
      btn.style.color = '#ffffff';
    };
    btn.onmouseout = () => {
      if (!btn.classList.contains('selected')) {
        btn.style.borderColor = 'rgba(255,255,255,0.1)';
        btn.style.background = 'rgba(255,255,255,0.04)';
        btn.style.color = '#c8d3e0';
      }
    };
    
    btn.onclick = () => {
      // Deseleccionar todos
      document.querySelectorAll('#optionsContainer button').forEach(b => {
        b.classList.remove('selected');
        b.style.borderColor = 'rgba(255,255,255,0.1)';
        b.style.background = 'rgba(255,255,255,0.04)';
        b.style.color = '#c8d3e0';
      });
      
      // Seleccionar este
      btn.classList.add('selected');
      btn.style.borderColor = '#d01818';
      btn.style.background = 'rgba(208,24,24,0.15)';
      btn.style.color = '#ffffff';
      
      // Guardar respuesta
      answers[currentQuestion] = opt.value;
      
      // Habilitar siguiente
      document.getElementById('nextBtn').style.opacity = '1';
      document.getElementById('nextBtn').style.cursor = 'pointer';
    };
    
    container.appendChild(btn);
  });
  
  // Actualizar botones
  document.getElementById('prevBtn').style.display = currentQuestion === 0 ? 'none' : 'block';
  
  const nextBtn = document.getElementById('nextBtn');
  if (currentQuestion === questions.length - 1) {
    nextBtn.textContent = 'Ver resultados 🎯';
  } else {
    nextBtn.textContent = 'Siguiente →';
  }
  
  // Deshabilitar siguiente si no hay respuesta
  if (answers[currentQuestion]) {
    nextBtn.style.opacity = '1';
    nextBtn.style.cursor = 'pointer';
    // Marcar la opción seleccionada
    const btns = container.querySelectorAll('button');
    btns.forEach((btn, idx) => {
      if (questions[currentQuestion].options[idx].value === answers[currentQuestion]) {
        btn.click();
      }
    });
  } else {
    nextBtn.style.opacity = '0.5';
    nextBtn.style.cursor = 'not-allowed';
  }
}

function nextQuestion() {
  if (!answers[currentQuestion]) {
    // Pequeña animación de alerta
    const container = document.getElementById('optionsContainer');
    container.style.animation = 'shake 0.4s ease';
    setTimeout(() => container.style.animation = '', 500);
    return;
  }
  
  // Guardar fortaleza
  const value = answers[currentQuestion];
  userStrengths[value] = (userStrengths[value] || 0) + 1;
  
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function showResults() {
  document.getElementById('testContainer').style.display = 'none';
  document.getElementById('resultContainer').style.display = 'block';
  
  // Calcular fortalezas principales
  const sorted = Object.entries(userStrengths).sort((a, b) => b[1] - a[1]);
  const topStrengths = sorted.slice(0, 2);
  
  const container = document.getElementById('resultCards');
  container.innerHTML = '';
  
  topStrengths.forEach(([key, count]) => {
    if (count > 0) {
      const s = strengths[key];
      const card = document.createElement('div');
      card.style.cssText = `
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.08);
        border-radius: 12px;
        padding: 16px;
        text-align: center;
        transition: all 0.3s ease;
      `;
      card.onmouseover = () => {
        card.style.background = 'rgba(255,255,255,0.08)';
        card.style.transform = 'translateY(-2px)';
      };
      card.onmouseout = () => {
        card.style.background = 'rgba(255,255,255,0.05)';
        card.style.transform = 'translateY(0)';
      };
      card.innerHTML = `
        <div style="font-size: 32px; margin-bottom: 6px;">${s.icon}</div>
        <div style="font-weight: 700; color: #ffffff; font-size: 16px;">${s.name}</div>
        <div style="font-size: 11px; color: #8899bb; margin-top: 4px;">${s.desc}</div>
        <div style="margin-top: 8px; font-size: 11px; color: #ff6b6b;">
          🎯 ${s.careers.slice(0, 2).join(' • ')}
        </div>
      `;
      container.appendChild(card);
    }
  });
}

function resetTest() {
  document.getElementById('resultContainer').style.display = 'none';
  document.getElementById('testIntro').style.display = 'block';
  currentQuestion = 0;
  answers = [];
  userStrengths = { creativo: 0, analitico: 0, empatico: 0, practico: 0 };
}

// ============================================
// ANIMACIÓN SHAKE
// ============================================
const styleShake = document.createElement('style');
styleShake.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    75% { transform: translateX(8px); }
  }
`;
document.head.appendChild(styleShake);