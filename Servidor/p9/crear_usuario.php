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
