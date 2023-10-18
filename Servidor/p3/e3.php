<!DOCTYPE html>
<html>
<head>
    <title>Mayor de 5</title>
</head>
<body>
    <h1>Calcular numero mayor</h1>

    <?php
    $total = array();

    if (
        isset($_POST['num1']) && is_numeric($_POST['num1']) &&
        isset($_POST['num2']) && is_numeric($_POST['num2']) &&
        isset($_POST['num3']) && is_numeric($_POST['num3']) &&
        isset($_POST['num4']) && is_numeric($_POST['num4']) &&
        isset($_POST['num5']) && is_numeric($_POST['num5'])
    ) {
        $total[] = floatval($_POST['num1']);
        $total[] = floatval($_POST['num2']);
        $total[] = floatval($_POST['num3']);
        $total[] = floatval($_POST['num4']);
        $total[] = floatval($_POST['num5']);

        $mayor = $total[0];

        for ($i = 1; $i < 5; $i++) {
            if ($total[$i] > $mayor) {
                $mayor = $total[$i];
            }
        }

        echo "Los números son: " . implode(', ', $total) . "<br>";
        echo "El mayor es: " . $mayor;
    } else {
        echo "Error, no se reconocen todos los valores como numeros";
    }
    ?>

</body>
</html>
