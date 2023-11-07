<?php
session_start();

if (!isset($_SESSION['username'])) { //comprobar usuario autenticado
    header("Location: index.html");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombreArchivo = $_POST['nombreArchivo'];
    $contenido = $_POST['contenido'];
    $permisos = intval($_POST['permisos'], 8); // convertir permisos en octal a entero (no entiendo lo de permisos en octal)

    $current_directory = getcwd();
    $filepath = $current_directory . '/' . $nombreArchivo;

    if (file_put_contents($filepath, $contenido) !== false) {
        chmod($filepath, $permisos); // establecer los permisos
        echo "El archivo '$nombreArchivo' se ha creado correctamente." . "<br> <a href='menu.php'>Volver al menú</a>";
    } else {
        echo "No se pudo crear el archivo." . "<br> <a href='menu.php'>Volver al menú</a>";
    }
} else {
    //formulario
    echo "<form action='create_file.php' method='POST'>";
    echo "Nombre del archivo: <input type='text' name='nombreArchivo'><br>";
    echo "Contenido: <textarea name='contenido'></textarea><br>";
    echo "Permisos (en octal): <input type='text' name='permisos' value='0644'><br>";
    echo "<input type='submit' value='Crear archivo'>";
    echo "</form>" . "<br> <a href='menu.php'>Volver al menú</a>";
}
?>
