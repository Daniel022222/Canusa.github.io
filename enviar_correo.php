<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    // Dirección de correo a la que se enviará el mensaje
    $to = 'danielitopx.12@gmail.com'; // Aquí pon tu correo electrónico
    $subject = 'Nuevo mensaje de contacto';

    // Crear el cuerpo del correo
    $body = "
    <h2>Nuevo mensaje de contacto</h2>
    <p><strong>Nombre:</strong> $name</p>
    <p><strong>Correo electrónico:</strong> $email</p>
    <p><strong>Teléfono:</strong> $phone</p>
    <p><strong>Mensaje:</strong></p>
    <p>$message</p>
    ";

    // Cabeceras del correo
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        // Si el correo se envió correctamente, redirigir al usuario a una página de confirmación
        header('Location: success.html');
        exit();
    } else {
        echo "<p>Hubo un error al enviar el mensaje. Intenta nuevamente.</p>";
    }
}
?>

