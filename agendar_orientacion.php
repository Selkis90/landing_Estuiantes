<?php
session_start();
// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "corfedito_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar el formulario de agendamiento
$mensaje = "";
$tipo_mensaje = "";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['agendar'])) {
    $nombre = mysqli_real_escape_string($conn, $_POST['nombre']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $telefono = mysqli_real_escape_string($conn, $_POST['telefono']);
    $fecha = mysqli_real_escape_string($conn, $_POST['fecha']);
    $hora = mysqli_real_escape_string($conn, $_POST['hora']);
    $profesional = mysqli_real_escape_string($conn, $_POST['profesional']);
    $mensaje_adicional = mysqli_real_escape_string($conn, $_POST['mensaje_adicional']);
    
    // Validar que la fecha y hora estén disponibles
    $sql_check = "SELECT * FROM citas WHERE fecha = '$fecha' AND hora = '$hora' AND profesional = '$profesional' AND estado != 'cancelada'";
    $result_check = $conn->query($sql_check);
    
    if ($result_check->num_rows > 0) {
        $mensaje = "Lo sentimos, ese horario ya está ocupado. Por favor, selecciona otra fecha u hora.";
        $tipo_mensaje = "error";
    } else {
        $sql = "INSERT INTO citas (nombre, email, telefono, fecha, hora, profesional, mensaje_adicional, estado, fecha_creacion) 
                VALUES ('$nombre', '$email', '$telefono', '$fecha', '$hora', '$profesional', '$mensaje_adicional', 'pendiente', NOW())";
        
        if ($conn->query($sql) === TRUE) {
            $mensaje = "¡Cita agendada exitosamente! Te enviaremos un correo de confirmación.";
            $tipo_mensaje = "exito";
        } else {
            $mensaje = "Error al agendar la cita: " . $conn->error;
            $tipo_mensaje = "error";
        }
    }
}

// Obtener horarios disponibles para una fecha específica (para AJAX)
if (isset($_GET['get_horarios']) && isset($_GET['fecha']) && isset($_GET['profesional'])) {
    $fecha = mysqli_real_escape_string($conn, $_GET['fecha']);
    $profesional = mysqli_real_escape_string($conn, $_GET['profesional']);
    
    $sql = "SELECT hora FROM citas WHERE fecha = '$fecha' AND profesional = '$profesional' AND estado != 'cancelada'";
    $result = $conn->query($sql);
    
    $horas_ocupadas = [];
    while ($row = $result->fetch_assoc()) {
        $horas_ocupadas[] = $row['hora'];
    }
    
    echo json_encode($horas_ocupadas);
    exit;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agenda tu Orientación - Corfedito</title>
    <link rel="stylesheet" href="agendar_orientacion.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <div class="logo-container">
                <img src="img/corfedito.png" alt="Corfedito" class="logo">
                <h1>Agenda tu Orientación</h1>
            </div>
            <p class="subtitle">Con un profesional especializado</p>
        </header>

        <?php if ($mensaje): ?>
            <div class="mensaje <?php echo $tipo_mensaje; ?>">
                <i class="fas <?php echo ($tipo_mensaje == 'exito') ? 'fa-check-circle' : 'fa-exclamation-circle'; ?>"></i>
                <?php echo $mensaje; ?>
            </div>
        <?php endif; ?>

        <div class="main-content">
            <div class="form-container">
                <form method="POST" action="" id="formAgendar">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="nombre"><i class="fas fa-user"></i> Nombre completo</label>
                            <input type="text" id="nombre" name="nombre" required placeholder="Ingresa tu nombre completo">
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="fas fa-envelope"></i> Correo electrónico</label>
                            <input type="email" id="email" name="email" required placeholder="tucorreo@ejemplo.com">
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="telefono"><i class="fas fa-phone"></i> Teléfono</label>
                            <input type="tel" id="telefono" name="telefono" required placeholder="Número de contacto">
                        </div>
                        <div class="form-group">
                            <label for="profesional"><i class="fas fa-user-md"></i> Profesional</label>
                            <select id="profesional" name="profesional" required>
                                <option value="">Selecciona un profesional</option>
                                <option value="Psicólogo">Psicólogo</option>
                                <option value="Orientador Vocacional">Orientador Vocacional</option>
                                <option value="Coach Educativo">Coach Educativo</option>
                                <option value="Asesor Académico">Asesor Académico</option>
                                <option value="Terapeuta Ocupacional">Terapeuta Ocupacional</option>
                            </select>
                        </div>
                    </div>

                    <div class="calendar-section">
                        <h3><i class="fas fa-calendar-alt"></i> Selecciona fecha y hora</h3>
                        <div class="calendar-wrapper">
                            <div class="calendar-container">
                                <div class="calendar-header">
                                    <button type="button" id="prevMonth"><i class="fas fa-chevron-left"></i></button>
                                    <span id="currentMonth"></span>
                                    <button type="button" id="nextMonth"><i class="fas fa-chevron-right"></i></button>
                                </div>
                                <div class="weekdays">
                                    <span>Lun</span>
                                    <span>Mar</span>
                                    <span>Mié</span>
                                    <span>Jue</span>
                                    <span>Vie</span>
                                    <span>Sáb</span>
                                    <span>Dom</span>
                                </div>
                                <div id="calendarDays" class="calendar-days"></div>
                            </div>

                            <div class="time-selection">
                                <div class="form-group">
                                    <label for="hora"><i class="fas fa-clock"></i> Hora de la cita</label>
                                    <select id="hora" name="hora" required disabled>
                                        <option value="">Selecciona una hora</option>
                                    </select>
                                    <input type="hidden" id="fecha" name="fecha" required>
                                </div>
                                <div class="selected-date-info">
                                    <p><strong>Fecha seleccionada:</strong> <span id="fechaSeleccionada">Ninguna</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="mensaje_adicional"><i class="fas fa-comment"></i> Mensaje adicional</label>
                        <textarea id="mensaje_adicional" name="mensaje_adicional" rows="3" placeholder="¿Algo más que quieras contarnos?"></textarea>
                    </div>

                    <button type="submit" name="agendar" class="btn-agendar">
                        <i class="fas fa-calendar-check"></i> Agendar Cita
                    </button>
                </form>
            </div>
        </div>

        <footer class="footer">
            <p>&copy; <?php echo date('Y'); ?> Corfedito - Todos los derechos reservados</p>
        </footer>
    </div>

    <script src="agendar_orientacion.js"></script>
</body>
</html>