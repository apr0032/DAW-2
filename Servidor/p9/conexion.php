<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "practica9";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password); //$conexion = mysqli_connect("localhost","root","","ejercicioservidor_cookies");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
    exit();
}
?>

