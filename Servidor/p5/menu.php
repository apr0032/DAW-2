<?php
session_start();

$usuarios = array(
    'admin' => array('contrasena' => '1234', 'rol' => 'admin'),
    'cliente1' => array('contrasena' => '5678', 'rol' => 'cliente')
);

if (!isset($_SESSION['username'])) { //comprobar usuario autenticado
    header("Location: index.html");
    exit();
}

echo "Bienvenido, " . $_SESSION['username'] . "!<br>";
echo "Fecha y Hora de acceso: " . $_SESSION['login_time'] . "<br>";

//menú
if ($_SESSION['rol'] === 'admin') {
    // Mostrar opciones para el administrador
    echo "<a href='ruta.php'>1. Obtener Ruta Actual</a><br>";
    echo "<a href='files.php?option=search'>2. Buscar un Fichero</a><br>";
    echo "<a href='create_file.php'>3. Crear un Nuevo Fichero</a>";
} elseif ($_SESSION['rol'] === 'cliente') {
    // Mostrar opciones para el cliente
    echo "<a href='ruta.php'>1. Obtener Ruta Actual</a><br>";
    echo "<a href='files.php?option=search'>2. Buscar un Fichero</a><br>";
}
?>