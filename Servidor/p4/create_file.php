<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.html");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $filename = $_POST['filename'];
    $content = $_POST['content'];
    $permissions = intval($_POST['permissions'], 8); // Convierte los permisos octales en un entero

    $current_directory = getcwd();
    $filepath = $current_directory . '/' . $filename;

    if (file_put_contents($filepath, $content) !== false) {
        chmod($filepath, $permissions); // Establece los permisos
        echo "El archivo '$filename' se creó exitosamente en el directorio actual.";
    } else {
        echo "No se pudo crear el archivo.";
    }
} else {
    // Mostrar el formulario para crear un archivo
    echo "<form action='create_file.php' method='POST'>";
    echo "Nombre del archivo: <input type='text' name='filename'><br>";
    echo "Contenido: <textarea name='content'></textarea><br>";
    echo "Permisos (octal): <input type='text' name='permissions' value='0644'><br>";
    echo "<input type='submit' value='Crear archivo'>";
    echo "</form>";
}
?>
