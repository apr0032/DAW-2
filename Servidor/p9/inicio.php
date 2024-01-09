<?php
session_start();

// Verificar si el usuario ha iniciado sesión
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    header('Location: login.php');
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Página de Inicio</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
<h2>Bienvenido, <?php echo $_SESSION['username']; ?></h2>
<form method="post">
  <button type="submit" name="boton1">crear</button>
  <button type="submit" name="boton2">listar</button>
</form>
<br>
<a href="logout.php">Cerrar Sesión</a>
</body>
</html>

<?php
include_once 'conexion.php';
// Verificar qué botón se presionó y redirigir a la página correspondiente
if (isset($_POST['boton1'])) {
    header("Location: crear_usuario.php");
    exit();
} elseif (isset($_POST['boton2'])) {
    header("Location: listar_usuarios.php");
    exit();
}
?>

