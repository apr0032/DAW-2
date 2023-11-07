<?php
session_start();

if (!isset($_SESSION['username'])) { //comprobar usuario autenticado
    header("Location: index.html");
    exit();
}

if (isset($_POST['nombreArchivo'])) { //comprobar archivo
    $nombreArchivo = $_POST['nombreArchivo'];
    $urlActual = getcwd();
    $varX = scandir($urlActual);

    if (in_array($nombreArchivo, $varX)) {
        echo "El archivo '$nombreArchivo' se encontró en el directorio actual." . "<br> <a href='menu.php'>Volver al menú</a>";
    } else {
        echo "El archivo '$nombreArchivo' no se encontró en el directorio actual." . "<br> <a href='menu.php'>Volver al menú</a>";
    }
} else {
    //formulario
    echo "<form action='files.php' method='POST'>";
    echo "Nombre del archivo a buscar: <input type='text' name='filename'><br>";
    echo "<input type='submit' value='Buscar archivo'>";
    echo "</form>" . "<br> <a href='menu.php'>Volver al menú</a>";
}
?>
