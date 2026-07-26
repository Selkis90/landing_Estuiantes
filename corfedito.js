// =============================================
// CORFEDITO - INTERACCIONES
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ CORFEDITO · Módulo cargado');
    
    // =============================================
    // BOTONES DE CORFEDITO
    // =============================================
    
    // Buscar el botón "Solicita información" en la sección corfedito
    const btnSolicitar = document.querySelector('.corfedito-cta .btn');
    if (btnSolicitar) {
        btnSolicitar.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('📅 Abriendo modal desde CORFEDITO');
            
            // Llamar a la función global para abrir el modal
            if (typeof openAgendarModal === 'function') {
                openAgendarModal();
            } else {
                console.warn('⚠️ openAgendarModal no está definida');
                alert('📅 Por favor, selecciona "Agendar orientación" desde el menú.');
            }
        });
    } else {
        console.log('ℹ️ Botón "Solicita información" no encontrado en CORFEDITO');
    }
    
    // =============================================
    // TARJETAS DE CORFEDITO (efectos visuales)
    // =============================================
    
    const cards = document.querySelectorAll('.corfedito-card');
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // Click en tarjetas para más información
        card.addEventListener('click', function() {
            const titulo = this.querySelector('h4')?.textContent || 'opción';
            console.log(`ℹ️ Información de: ${titulo}`);
            // Aquí puedes agregar un modal o redirección
        });
    });
    
    console.log(`✅ ${cards.length} tarjetas de CORFEDITO inicializadas`);
});

// =============================================
// FUNCIONES GLOBALES DE CORFEDITO
// =============================================

// Función para abrir el modal de agendamiento desde CORFEDITO
function abrirAgendamientoCorfedito() {
    console.log('📅 Abriendo agendamiento desde CORFEDITO');
    if (typeof openAgendarModal === 'function') {
        openAgendarModal();
    } else {
        alert('📅 Por favor, agenda tu orientación desde el botón "Agendar orientación"');
    }
}

// Función para mostrar información de un beneficio
function mostrarBeneficio(tipo) {
    const beneficios = {
        'credito': {
            titulo: 'Crédito Educativo',
            descripcion: 'Financia hasta el 100% de tu matrícula con tasas preferenciales para estudiantes Corfedes.'
        },
        'beca': {
            titulo: 'Becas y Descuentos',
            descripcion: 'Accede a becas por excelencia académica y descuentos especiales para estudiantes destacados.'
        },
        'alianza': {
            titulo: 'Alianzas Estratégicas',
            descripcion: 'Convenios con las mejores instituciones financieras del país para tu beneficio.'
        }
    };
    
    const info = beneficios[tipo];
    if (info) {
        alert(`📌 ${info.titulo}\n\n${info.descripcion}`);
    }
}

console.log('✅ CORFEDITO · Funciones globales cargadas');