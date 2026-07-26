// =============================================
// AGENDAR ORIENTACIÓN - CALENDARIO INTERACTIVO
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ agendar_orientacion.js cargado');
    
    // Variables globales
    let currentDate = new Date();
    let selectedDate = null;
    let selectedProfesional = '';
    
    // Configuración de horarios
    const HORARIOS = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
    ];
    
    // =============================================
    // OBTENER ELEMENTOS DOM (CON VERIFICACIÓN)
    // =============================================
    
    function getElement(id) {
        const el = document.getElementById(id);
        if (!el) {
            console.warn(`⚠️ Elemento #${id} no encontrado`);
        }
        return el;
    }
    
    const calendarDays = getElement('calendarDays');
    const currentMonthSpan = getElement('currentMonth');
    const prevMonthBtn = getElement('prevMonth');
    const nextMonthBtn = getElement('nextMonth');
    const fechaSeleccionadaSpan = getElement('fechaSeleccionada');
    const fechaInput = getElement('fecha');
    const horaSelect = getElement('hora');
    const profesionalSelect = getElement('profesional');
    
    // Verificar que todos los elementos existan
    if (!calendarDays || !currentMonthSpan || !prevMonthBtn || !nextMonthBtn) {
        console.error('❌ Elementos del calendario no encontrados');
        return;
    }
    
    // =============================================
    // FUNCIONES DEL CALENDARIO
    // =============================================
    
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }
    
    function isToday(year, month, day) {
        const today = new Date();
        return today.getFullYear() === year && 
               today.getMonth() === month && 
               today.getDate() === day;
    }
    
    function isPastDate(year, month, day) {
        const date = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    }
    
    function isWeekend(year, month, day) {
        const date = new Date(year, month, day);
        const dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6;
    }
    
    // =============================================
    // OBTENER HORARIOS OCUPADOS (SIMULADO)
    // =============================================
    
    async function obtenerHorariosOcupados(fecha, profesional) {
        try {
            // Simular respuesta del servidor
            // En producción, descomentar la línea de fetch
            /*
            const response = await fetch(`agendar_orientacion.php?get_horarios=1&fecha=${fecha}&profesional=${encodeURIComponent(profesional)}`);
            const data = await response.json();
            return data;
            */
            
            // SIMULACIÓN - Devuelve algunos horarios ocupados aleatorios
            console.log(`🔍 Buscando horarios para ${fecha} con ${profesional}`);
            const ocupados = [];
            // Ocupar algunos horarios aleatorios para simular
            if (Math.random() > 0.5) {
                ocupados.push('09:00', '10:30', '14:00');
            }
            return ocupados;
        } catch (error) {
            console.error('Error al obtener horarios:', error);
            return [];
        }
    }
    
    // =============================================
    // ACTUALIZAR HORARIOS DISPONIBLES
    // =============================================
    
    async function actualizarHorariosDisponibles(fecha, profesional) {
        if (!fecha || !profesional) {
            if (horaSelect) {
                horaSelect.innerHTML = '<option value="">Selecciona una hora</option>';
                horaSelect.disabled = true;
            }
            return;
        }
        
        const horariosOcupados = await obtenerHorariosOcupados(fecha, profesional);
        
        // Filtrar horarios disponibles
        const horariosDisponibles = HORARIOS.filter(hora => 
            !horariosOcupados.includes(hora)
        );
        
        // Actualizar select de horas
        if (horaSelect) {
            horaSelect.innerHTML = '';
            if (horariosDisponibles.length === 0) {
                const option = document.createElement('option');
                option.value = '';
                option.textContent = 'No hay horarios disponibles para esta fecha';
                option.disabled = true;
                horaSelect.appendChild(option);
            } else {
                const optionDefault = document.createElement('option');
                optionDefault.value = '';
                optionDefault.textContent = 'Selecciona una hora';
                optionDefault.disabled = true;
                optionDefault.selected = true;
                horaSelect.appendChild(optionDefault);
                
                horariosDisponibles.forEach(hora => {
                    const option = document.createElement('option');
                    option.value = hora;
                    option.textContent = hora;
                    horaSelect.appendChild(option);
                });
            }
            horaSelect.disabled = false;
        }
    }
    
    // =============================================
    // RENDERIZAR CALENDARIO
    // =============================================
    
    function renderCalendar(year, month) {
        console.log(`📅 Renderizando calendario: ${year}-${month + 1}`);
        
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;
        
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        
        if (currentMonthSpan) {
            currentMonthSpan.textContent = `${months[month]} ${year}`;
        }
        
        if (calendarDays) {
            calendarDays.innerHTML = '';
            
            // Días vacíos
            for (let i = 0; i < firstDayAdjusted; i++) {
                const emptyDiv = document.createElement('div');
                emptyDiv.className = 'disabled';
                calendarDays.appendChild(emptyDiv);
            }
            
            // Días del mes
            for (let day = 1; day <= daysInMonth; day++) {
                const dayDiv = document.createElement('div');
                dayDiv.textContent = day;
                
                // Verificar si es hoy
                if (isToday(year, month, day)) {
                    dayDiv.classList.add('today');
                }
                
                const isWeekendDay = isWeekend(year, month, day);
                const isPast = isPastDate(year, month, day);
                
                if (isWeekendDay || isPast) {
                    dayDiv.classList.add('disabled');
                } else {
                    dayDiv.classList.add('available');
                    
                    // Marcar como seleccionado
                    if (selectedDate && 
                        selectedDate.getFullYear() === year && 
                        selectedDate.getMonth() === month && 
                        selectedDate.getDate() === day) {
                        dayDiv.classList.add('selected');
                    }
                    
                    // Evento click - CORREGIDO
                    dayDiv.addEventListener('click', function(e) {
                        e.stopPropagation();
                        console.log(`📌 Día seleccionado: ${day}/${month + 1}/${year}`);
                        
                        if (this.classList.contains('disabled')) return;
                        
                        // Remover selección anterior
                        document.querySelectorAll('.calendar-days div.selected').forEach(el => {
                            el.classList.remove('selected');
                        });
                        
                        this.classList.add('selected');
                        
                        // Actualizar fecha seleccionada
                        selectedDate = new Date(year, month, day);
                        const fechaStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                        
                        if (fechaInput) {
                            fechaInput.value = fechaStr;
                        }
                        
                        if (fechaSeleccionadaSpan) {
                            const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                            fechaSeleccionadaSpan.textContent = selectedDate.toLocaleDateString('es-ES', opcionesFecha);
                        }
                        
                        // Actualizar horarios disponibles
                        const profesional = profesionalSelect ? profesionalSelect.value : '';
                        if (profesional) {
                            actualizarHorariosDisponibles(fechaStr, profesional);
                        } else if (horaSelect) {
                            horaSelect.innerHTML = '<option value="">Primero selecciona un profesional</option>';
                            horaSelect.disabled = true;
                        }
                    });
                }
                
                calendarDays.appendChild(dayDiv);
            }
        }
    }
    
    // =============================================
    // EVENTOS DE NAVEGACIÓN
    // =============================================
    
    if (prevMonthBtn) {
        prevMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
        });
    }
    
    if (nextMonthBtn) {
        nextMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
        });
    }
    
    // =============================================
    // EVENTO CAMBIO DE PROFESIONAL
    // =============================================
    
    if (profesionalSelect) {
        profesionalSelect.addEventListener('change', function() {
            console.log(`👨‍🏫 Profesional seleccionado: ${this.value}`);
            const profesional = this.value;
            if (selectedDate && profesional) {
                const fechaStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
                actualizarHorariosDisponibles(fechaStr, profesional);
            } else if (horaSelect) {
                horaSelect.innerHTML = '<option value="">Selecciona una fecha y profesional</option>';
                horaSelect.disabled = true;
            }
        });
    }
    
    // =============================================
    // VALIDACIÓN DEL FORMULARIO
    // =============================================
    
    const form = document.getElementById('formAgendar');
    if (form) {
        form.addEventListener('submit', function(e) {
            const profesional = document.getElementById('profesional')?.value || '';
            const fecha = document.getElementById('fecha')?.value || '';
            const hora = document.getElementById('hora')?.value || '';
            const nombre = document.getElementById('nombre')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const telefono = document.getElementById('telefono')?.value.trim() || '';
            
            if (!nombre || !email || !telefono || !profesional || !fecha || !hora) {
                e.preventDefault();
                alert('⚠️ Por favor, completa todos los campos obligatorios.');
                return false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('⚠️ Por favor, ingresa un correo electrónico válido.');
                return false;
            }
            
            console.log('✅ Formulario validado correctamente');
            return true;
        });
    }
    
    // =============================================
    // INICIALIZAR CALENDARIO
    // =============================================
    
    console.log('📅 Inicializando calendario...');
    renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    
    // Función global para reinicializar el calendario (para usar desde otros scripts)
    window.reiniciarCalendario = function() {
        currentDate = new Date();
        selectedDate = null;
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
        if (fechaSeleccionadaSpan) fechaSeleccionadaSpan.textContent = 'Ninguna';
        if (fechaInput) fechaInput.value = '';
        if (horaSelect) {
            horaSelect.innerHTML = '<option value="">Primero selecciona una fecha y profesional</option>';
            horaSelect.disabled = true;
        }
    };
    
    console.log('✅ Calendario inicializado correctamente');
});