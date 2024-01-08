<?php
include_once 'conexion.php';

$sql = "SELECT * FROM usuarios";
$stmt = $conn->query($sql);
$usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!-- Mostrar la lista de usuarios en una tabla HTML -->
<!DOCTYPE html>
<html>
<head>
    <title>Lista de Usuarios</title>
</head>
<body>
    <h2>Lista de Usuarios</h2>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
        </tr>
        <?php foreach ($usuarios as $usuario) : ?>
            <tr>
                <td><?php echo $usuario['id']; ?></td>
                <td><?php echo $usuario['nombre']; ?></td>
                <td><?php echo $usuario['email']; ?></td>
                <td><?php echo $usuario['edad']; ?></td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>
