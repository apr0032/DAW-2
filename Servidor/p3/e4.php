<!DOCTYPE html>
<html>
<head>
    <title>Matriz</title>
</head>
<body>
    <h1>Matriz</h1>

    <?php
    $matriz = array(
        array(3, 1),
        array(2, 0)
    );

    foreach ($matriz as $fila) {
        foreach ($fila as $valor) {
            echo "$valor";
        }
    }
    ?>
</body>
</html>