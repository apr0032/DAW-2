<?php
session_start();

if (!isset($_SESSION['username'])) { //comprobar usuario autenticado
    header("Location: index.html");
    exit();
}
//mostrar ruta actual
$urlActual = getcwd();
echo "Ruta actual: " . $urlActual . "<br> <a href='menu.php'>Volver al menú</a>";

?>