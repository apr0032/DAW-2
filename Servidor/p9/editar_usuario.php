<?php
include_once 'conexion.php';

// Verificar si se recibe un ID por GET para cargar los datos del usuario a modificar
$id = isset($_GET['id']) ? $_GET['id'] : null;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $edad = $_POST['edad'];

    $sql = "UPDATE usuarios SET nombre = :nombre, direccion = :direccion, email = :email, edad = :edad WHERE id = :id";
    $stmt = $conn->prepare($sql);

    $stmt->bindParam(':nombre', $nombre);
    $stmt->bindParam(':direccion', $direccion);
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':edad', $edad);
    $stmt->bindParam(':id', $id);

    $stmt->execute();
    header("Location: listar_usuarios.php");
    exit();
}

// Obtener datos del usuario a partir del ID
if ($id) {
    $sql = "SELECT * FROM usuarios WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Modificar Usuario</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>

<h2>Modificar Usuario</h2>

<form method="post">
    <input type="hidden" name="id" value="<?php echo $usuario['id']; ?>">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre"><br><br>

    <label for="direccion">direccion:</label>
    <input type="text" id="direccion" name="direccion"><br><br>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email"><br><br>

    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad"><br><br>

    <input type="submit" value="Guardar Cambios">
</form>
<br>
<a href="inicio.php">Volver al inicio</a>
</body>
</html>
