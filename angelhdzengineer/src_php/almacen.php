<?php 
	$destino= "angel.hdz.ojd@gmail.com";
	$nombre= $_POST["name"];
    $apellidos = $_POST["surname"];
	$correo= $_POST["mail"];
	$telefono= $_POST["phone"];
	$mensaje= $_POST["message"];
	$contenido= "Nombre: " . $nombre . "\nMail: " . $correo ."\nTeléfono: " .$telefono . "\nMensaje: " . $mensaje;
	mail($destino, "Asunto del mensaje", $contenido);
	header("Location:angelhdzengineer/index.html");
?>