<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario para Crear Usuarios</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>

<h1>Crear Nuevo Usuario</h1>

<form method="post">
<label for="id">ID:</label>
  <input type="number" id="id" name="id"><br><br>

  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre"><br><br>

  <label for="direccion">direccion:</label>
  <input type="text" id="direccion" name="direccion"><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <label for="edad">Edad:</label>
  <input type="number" id="edad" name="edad"><br><br>

  <input type="submit" value="Crear Usuario">
</form>
<br>
<a href="inicio.php">Volver al inicio</a>
</body>
</html>

<?php
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];  
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $edad = $_POST['edad'];

    $sql = "INSERT INTO usuarios (id, nombre, direccion, email, edad) VALUES (:id, :nombre, :direccion, :email, :edad)";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':direccion', $direccion);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':edad', $edad);

    $stmt->execute();
    header("Location: listar_usuarios.php");
    exit();
}
?>
