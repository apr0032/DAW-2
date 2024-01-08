<?php
include_once("consultas.php");
Consultas::Update($_POST["id"],$_POST["cancion"], $_POST["autor"], $_POST["genero"]);
header("location:../crud/crud.php");
?>