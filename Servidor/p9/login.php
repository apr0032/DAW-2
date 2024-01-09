<?php
session_start();

include_once 'conexion.php';

// Verificar si el formulario de inicio de sesión fue enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Realizar la consulta a la base de datos para verificar las credenciales
    $sql = "SELECT * FROM administradores WHERE nombre = :username AND password = :password";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        // Iniciar sesión y redirigir a la página de inicio
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $username;
        header('Location: inicio.php');
        exit();
    } else {
        $error = "Usuario o contraseña incorrectos";
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>

<h2>Iniciar Sesión</h2>

<?php if (isset($error)) : ?>
    <p><?php echo $error; ?></p>
<?php endif; ?>

<form method="post">
    <label for="username">Usuario:</label>
    <input type="text" id="username" name="username"><br><br>

    <label for="password">Contraseña:</label>
    <input type="password" id="password" name="password"><br><br>

    <input type="submit" value="Iniciar Sesión">
</form>

</body>
</html>
