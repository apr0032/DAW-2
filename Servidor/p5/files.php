<?php
session_start();

if (!isset($_SESSION['username'])) { //comprobar usuario autenticado
    header("Location: index.html");
    exit();
}

if (isset($_POST['filename'])) { //comprobar archivo
    $filename = $_POST['filename'];
    $current_directory = getcwd();
    $files = scandir($current_directory);

    if (in_array($filename, $files)) {
        echo "El archivo '$filename' se encontró en el directorio actual." . "<br> <a href='menu.php'>Volver al menú</a>";
    } else {
        echo "El archivo '$filename' no se encontró en el directorio actual." . "<br> <a href='menu.php'>Volver al menú</a>";
    }
} else {
    //formulario
    echo "<form action='files.php' method='POST'>";
    echo "Nombre del archivo a buscar: <input type='text' name='filename'><br>";
    echo "<input type='submit' value='Buscar archivo'>";
    echo "</form>" . "<br> <a href='menu.php'>Volver al menú</a>";
}
?>
