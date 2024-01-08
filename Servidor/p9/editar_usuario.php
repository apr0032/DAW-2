<?php
include_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $edad = $_POST['edad'];

    $sql = "UPDATE usuarios SET nombre = :nombre, email = :email, edad = :edad WHERE id = :id";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':edad', $edad);
    $stmt->bindParam(':id', $id);

    $stmt->execute();
    header("Location: listar_usuarios.php");
    exit();
}
?>
