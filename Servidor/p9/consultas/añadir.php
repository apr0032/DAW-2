<?php
include_once("consultas.php");
Consultas::añadirmusica($_POST["cancion"], $_POST["autor"], $_POST["genero"]);
header("location:../crud/crud.php");
?>