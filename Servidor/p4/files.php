<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.html");
    exit();
}

if (isset($_POST['filename'])) {
    $filename = $_POST['filename'];
    $current_directory = getcwd();
    $files = scandir($current_directory);

    if (in_array($filename, $files)) {
        echo "El archivo '$filename' se encontró en el directorio actual.";
    } else {
        echo "El archivo '$filename' no se encontró en el directorio actual.";
    }
} else {
    // Mostrar el formulario de búsqueda
    echo "<form action='files.php' method='POST'>";
    echo "Nombre del archivo a buscar: <input type='text' name='filename'><br>";
    echo "<input type='submit' value='Buscar archivo'>";
    echo "</form>";
}
?>

