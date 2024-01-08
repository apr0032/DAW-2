<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Formulario con Redirección</title>
</head>
<body>

<h1>Formulario con Redirección</h1>

<form method="post">
  <!-- Botón 1 -->
  <button type="submit" name="boton1">crear</button>

  <!-- Botón 2 -->
  <button type="submit" name="boton2">editar</button>

  <!-- Botón 3 -->
  <button type="submit" name="boton3">eliminar</button>

  <!-- Botón 4 -->
  <button type="submit" name="boton4">listar</button>
</form>

<?php
include_once 'conexion.php';
// Verificar qué botón se presionó y redirigir a la página correspondiente
if (isset($_POST['boton1'])) {
    header("Location: crear_usuario.php"); // Reemplaza 'ruta_pagina_1.php' con la ruta de tu página para el Botón 1
    exit();
} elseif (isset($_POST['boton2'])) {
    header("Location: editar_usuario.php"); // Reemplaza 'ruta_pagina_2.php' con la ruta de tu página para el Botón 2
    exit();
} elseif (isset($_POST['boton3'])) {
    header("Location: eliminar_usuario.php"); // Reemplaza 'ruta_pagina_3.php' con la ruta de tu página para el Botón 3
    exit();
} elseif (isset($_POST['boton4'])) {
    header("Location: listar_usuarios.php"); // Reemplaza 'ruta_pagina_4.php' con la ruta de tu página para el Botón 4
    exit();
}
?>

</body>
</html>
