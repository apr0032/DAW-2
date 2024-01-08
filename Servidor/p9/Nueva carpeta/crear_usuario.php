<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario para Crear Usuarios</title>
</head>
<body>

<h1>Crear Nuevo Usuario</h1>

<form method="post">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre"><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad"><br><br>

  <input type="submit" value="Crear Usuario">
</form>

</body>
</html>

<?php
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $edad = $_POST['edad'];

    $sql = "INSERT INTO usuarios (nombre, email, edad) VALUES (:nombre, :email, :edad)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':edad', $edad);

    $stmt->execute();
    header("Location: listar_usuarios.php");
    exit();
}
?>
