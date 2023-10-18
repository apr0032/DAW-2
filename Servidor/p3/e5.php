<!DOCTYPE html>
<html>
<head>
    <title>Matriz</title>
</head>
<body>
    <h1>Sumar 2 Matrices</h1>

    <?php
    $matriz1 = array(
        array(1, 0),
        array(0, 1)
    );

    $matriz2 = array(
        array(0, 1),
        array(1, 0)
    );

    $resultado = array();

    for ($i = 0; $i < count($matriz1); $i++) {
        for ($j = 0; $j < count($matriz1[$i]); $j++) {
            $resultado[$i][$j] = $matriz1[$i][$j] + $matriz2[$i][$j];
        }
    }

    foreach ($resultado as $fila) {
        foreach ($fila as $valor) {
            echo "$valor";
        }
    }
    ?>
</body>
</html>