<?php
// Verificar credenciales
if ($_POST['username'] == 'admin' && $_POST['password'] == '1234') {
    session_start();
    $_SESSION['username'] = 'admin';
    $_SESSION['login_time'] = date("Y-m-d H:i:s");
    header("Location: menu.php");
} else {
    echo "Credenciales incorrectas. <a href='index.html'>Volver a intentar</a>";
}
?>




