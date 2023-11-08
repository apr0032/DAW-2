<?php
// verifica inicio sesion
if ($_POST['username'] == 'admin' && $_POST['password'] == '1234') {
    session_start();
    $_SESSION['username'] = 'admin';
    $_SESSION['login_time'] = date("Y-m-d H:i:s"); //fecha
    header("Location: menu.php");
} else {
    echo "Inicio de sesión incorrecto <a href='index.html'>Volver a intentar</a>";
}
?>




