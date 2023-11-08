<?php
//
$usuarios = array(
    'admin' => array('contrasena' => 'contrasena_admin', 'rol' => 'admin'),
    'cliente1' => array('contrasena' => 'contrasena_cliente1', 'rol' => 'cliente')
);
//
// verifica inicio sesion
$username = $_POST['username'];
$password = $_POST['password'];

if (isset($usuarios[$username]) && $usuarios[$username]['contrasena'] == $password) {
    session_start();
    $_SESSION['username'] = $username;
    $_SESSION['rol'] = $usuarios[$username]['rol'];
    $_SESSION['login_time'] = date("Y-m-d H:i:s");
    header("Location: menu.php");
} else {
    echo "Inicio de sesión incorrecto <a href='index.html'>Volver a intentar</a>";
}
?>

