<?php
session_start();

if (!isset($_SESSION['username'])) { //comprobar usuario autenticado
    header("Location: index.html");
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $filename = $_POST['filename'];
    $content = $_POST['content'];
    $permissions = intval($_POST['permissions'], 8); // convertir permisos en octal a entero (no entiendo lo de permisos en octal)

    $current_directory = getcwd();
    $filepath = $current_directory . '/' . $filename;

    if (file_put_contents($filepath, $content) !== false) {
        chmod($filepath, $permissions); // establecer los permisos
        echo "El archivo '$filename' se ha creado correctamente." . "<br> <a href='menu.php'>Volver al menú</a>";
    } else {
        echo "No se pudo crear el archivo." . "<br> <a href='menu.php'>Volver al menú</a>";
    }
} else {
    //formulario
    echo "<form action='create_file.php' method='POST'>";
    echo "Nombre del archivo: <input type='text' name='filename'><br>";
    echo "Contenido: <textarea name='content'></textarea><br>";
    echo "Permisos (en octal): <input type='text' name='permissions' value='0644'><br>";
    echo "<input type='submit' value='Crear archivo'>";
    echo "</form>" . "<br> <a href='menu.php'>Volver al menú</a>";
}
?>
