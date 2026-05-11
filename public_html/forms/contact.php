<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$estado = "success";
$titulo = "¡Mensaje enviado!";
$mensajeModal = "Gracias por su mensaje. Te contactaremos lo antes posible.";
$icono = "✅";
$color = "#179cdc";

if (isset($_POST['nombre'], $_POST['correo'],$_POST['mensaje'])) {

    $nombre   = htmlspecialchars(trim($_POST['nombre']));
    $correo   = filter_var(trim($_POST['correo']), FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars(trim($_POST['telefono'] ?? ''));
    $mensaje  = htmlspecialchars(trim($_POST['mensaje']));

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        $estado = "error";
        $titulo = "Correo no válido";
        $mensajeModal = "Por favor ingresa un correo válido.";
        $icono = "❌";
        $color = "#ff4d4d";
    } else {

        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.hostinger.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'contact@spokenstores.com';
            $mail->Password   = 'Lmti2026@';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            $mail->setFrom('contact@spokenstores.com', 'Equipo Arktis');

            $mail->addAddress('edwin.ocampov@gmail.com');
            $mail->addReplyTo($correo, $nombre);

            $mail->Subject = 'Nuevo mensaje desde el formulario';

            $mail->isHTML(true);
            $mail->Body = "
                <h2>Nuevo mensaje</h2>
                <p><b>Nombre:</b> $nombre</p>
                <p><b>Correo:</b> $correo</p>
                <p><b>Teléfono:</b> $telefono</p>
                <p><b>Mensaje:</b><br>$mensaje</p>
            ";

            $mail->send();

        } catch (Exception $e) {
            $estado = "error";
            $titulo = "Error al enviar";
            $mensajeModal = "No se pudo enviar el mensaje. Intenta nuevamente.";
            $icono = "❌";
            $color = "#ff4d4d";
        }
    }

} else {
    $estado = "error";
    $titulo = "Faltan datos";
    $mensajeModal = "Debes completar todos los campos.";
    $icono = "❌";
    $color = "#ff4d4d";
}

echo '
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Respuesta</title>

<style>
body{
    margin:0;
    font-family:"Segoe UI", sans-serif;
    background:#0f0f0f;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.wrapper{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.7);
    backdrop-filter:blur(6px);
    display:flex;
    justify-content:center;
    align-items:center;
}

.modal{
    background:#1a1a1a;
    padding:35px;
    border-radius:18px;
    text-align:center;
    max-width:420px;
    width:90%;
    color:#fff;
    box-shadow:0 20px 60px rgba(0,0,0,0.6);
    animation:entrada 0.4s ease;
    border-top:5px solid '.$color.';
}

.icon{
    font-size:50px;
    margin-bottom:10px;
}

h2{
    margin:10px 0;
}

p{
    font-size:14px;
    opacity:0.8;
}

.btn{
    display:inline-block;
    margin-top:20px;
    padding:12px 25px;
    background:'.$color.';
    color:#000;
    text-decoration:none;
    border-radius:10px;
    font-weight:bold;
}

@keyframes entrada{
    from{ transform:scale(0.7); opacity:0; }
    to{ transform:scale(1); opacity:1; }
}
</style>
</head>

<body>

<div class="wrapper">
    <div class="modal">
        <div class="icon">'.$icono.'</div>
        <h2>'.$titulo.'</h2>
        <p>'.$mensajeModal.'</p>
        <a href = "/index.html" class="btn">Volver al inicio</a>
    </div>
</div>

<script>
setTimeout(() => {
    window.location.href = "/index.html";
}, 3000);
</script>

</body>
</html>
';
exit;
?>