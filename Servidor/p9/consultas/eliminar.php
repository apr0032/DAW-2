<?php
include_once("consultas.php");
Consultas::eliminar($_POST["id"]);
header("location:../crud/crud.php");
?>