<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.html");
    exit();
}

echo "Bienvenido, " . $_SESSION['username'] . "!<br>";
echo "Fecha y Hora de acceso: " . $_SESSION['login_time'] . "<br>";

// Mostrar opciones del menú
echo "<a href='files.php'>1. Obtener Ruta Actual</a><br>";
echo "<a href='files.php?option=search'>2. Buscar un Fichero</a><br>";
echo "<a href='create_file.php'>3. Crear un Nuevo Fichero</a>";
?>
