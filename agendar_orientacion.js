document.addEventListener('DOMContentLoaded', function() {
    // Variables globales
    let currentDate = new Date();
    let selectedDate = null;
    let selectedProfesional = '';
    let horariosDisponibles = [];
    
    // Elementos DOM
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthSpan = document.getElementById('currentMonth');
    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');
    const fechaSeleccionadaSpan = document.getElementById('fechaSeleccionada');
    const fechaInput = document.getElementById('fecha');
    const horaSelect = document.getElementById('hora');
    const profesionalSelect = document.getElementById('profesional');
    
    // Configuración de horarios
    const HORARIOS = [
        '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
        '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
    ];
    
    // Función para obtener días del mes
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    // Función para obtener el primer día del mes (0=Domingo, 1=Lunes, etc.)
    function getFirstDayOfMonth(year, month) {
        return new Date(year, month, 1).getDay();
    }
    
    // Función para verificar si una fecha es hoy
    function isToday(year, month, day) {
        const today = new Date();
        return today.getFullYear() === year && 
               today.getMonth() === month && 
               today.getDate() === day;
    }
    
    // Función para verificar si una fecha es en el pasado
    function isPastDate(year, month, day) {
        const date = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    }
    
    // Función para verificar si una fecha está disponible (no es fin de semana)
    function isWeekend(year, month, day) {
        const date = new Date(year, month, day);
        const dayOfWeek = date.getDay();
        return dayOfWeek === 0 || dayOfWeek === 6; // Domingo o Sábado
    }
    
    // Función para obtener horarios ocupados desde el servidor
    async function obtenerHorariosOcupados(fecha, profesional) {
        try {
            const response = await fetch(`agendar_orientacion.php?get_horarios=1&fecha=${fecha}&profesional=${encodeURIComponent(profesional)}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error al obtener horarios:', error);
            return [];
        }
    }
    
    // Función para actualizar los horarios disponibles
    async function actualizarHorariosDisponibles(fecha, profesional) {
        if (!fecha || !profesional) {
            horaSelect.innerHTML = '<option value="">Selecciona una hora</option>';
            horaSelect.disabled = true;
            return;
        }
        
        const horariosOcupados = await obtenerHorariosOcupados(fecha, profesional);
        
        // Filtrar horarios disponibles
        const horariosDisponiblesFiltrados = HORARIOS.filter(hora => 
            !horariosOcupados.includes(hora)
        );
        
        // Actualizar select de horas
        horaSelect.innerHTML = '';
        if (horariosDisponiblesFiltrados.length === 0) {
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
            
            horariosDisponiblesFiltrados.forEach(hora => {
                const option = document.createElement('option');
                option.value = hora;
                option.textContent = hora;
                horaSelect.appendChild(option);
            });
        }
        horaSelect.disabled = false;
    }
    
    // Función para renderizar el calendario
    function renderCalendar(year, month) {
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        // Ajustar para que la semana empiece en lunes (1)
        const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;
        
        // Mostrar mes y año
        const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        currentMonthSpan.textContent = `${months[month]} ${year}`;
        
        // Limpiar días anteriores
        calendarDays.innerHTML = '';
        
        // Días vacíos antes del primer día del mes
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
            
            // Verificar si es fin de semana o fecha pasada
            const isWeekendDay = isWeekend(year, month, day);
            const isPast = isPastDate(year, month, day);
            
            if (isWeekendDay || isPast) {
                dayDiv.classList.add('disabled');
            } else {
                dayDiv.classList.add('available');
                
                // Marcar como seleccionado si coincide con la fecha seleccionada
                if (selectedDate && 
                    selectedDate.getFullYear() === year && 
                    selectedDate.getMonth() === month && 
                    selectedDate.getDate() === day) {
                    dayDiv.classList.add('selected');
                }
                
                // Evento click para seleccionar fecha
                dayDiv.addEventListener('click', function() {
                    if (this.classList.contains('disabled')) return;
                    
                    // Remover selección anterior
                    document.querySelectorAll('.calendar-days div.selected').forEach(el => {
                        el.classList.remove('selected');
                    });
                    
                    this.classList.add('selected');
                    
                    // Actualizar fecha seleccionada
                    selectedDate = new Date(year, month, day);
                    const fechaStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    fechaInput.value = fechaStr;
                    
                    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    fechaSeleccionadaSpan.textContent = selectedDate.toLocaleDateString('es-ES', opcionesFecha);
                    
                    // Actualizar horarios disponibles
                    const profesional = profesionalSelect.value;
                    if (profesional) {
                        actualizarHorariosDisponibles(fechaStr, profesional);
                    } else {
                        horaSelect.innerHTML = '<option value="">Primero selecciona un profesional</option>';
                        horaSelect.disabled = true;
                    }
                });
            }
            
            calendarDays.appendChild(dayDiv);
        }
    }
    
    // Eventos de navegación del calendario
    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
    
    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });
    
    // Evento cambio de profesional
    profesionalSelect.addEventListener('change', function() {
        selectedProfesional = this.value;
        if (selectedDate && selectedProfesional) {
            const fechaStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;
            actualizarHorariosDisponibles(fechaStr, selectedProfesional);
        } else {
            horaSelect.innerHTML = '<option value="">Selecciona una fecha y profesional</option>';
            horaSelect.disabled = true;
        }
    });
    
    // Inicializar calendario
    renderCalendar(currentDate.getFullYear(), currentDate.getMonth());
    
    // Validación del formulario antes de enviar
    document.getElementById('formAgendar').addEventListener('submit', function(e) {
        const profesional = document.getElementById('profesional').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        
        if (!nombre || !email || !telefono || !profesional || !fecha || !hora) {
            e.preventDefault();
            alert('Por favor, completa todos los campos obligatorios.');
            return false;
        }
        
        // Validación básica de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Por favor, ingresa un correo electrónico válido.');
            return false;
        }
        
        return true;
    });
});