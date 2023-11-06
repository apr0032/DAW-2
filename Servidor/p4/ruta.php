<?php
session_start();

if (!isset($_SESSION['username'])) { //comprobar usuario autenticado
    header("Location: index.html");
    exit();
}
//mostrar ruta actual
$current_directory = getcwd();
echo "Ruta actual: " . $current_directory . "<br> <a href='menu.php'>Volver al menú</a>";
?>