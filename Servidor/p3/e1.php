<!DOCTYPE html>
<html>
<head>
    <title>Resultado de Gastos de Envío</title>
</head>
<body>
    <h1>Resultado de Gastos de Envío</h1>

    <?php
    if (isset($_POST['total']) && is_numeric($_POST['total'])) {
        $total = floatval($_POST['total']);
        if ($total < 50) {
            $envio = 3.95;
        } elseif ($total < 75) {
            $envio = 2.95;
        } elseif ($total < 100) {
            $envio = 1.95;
        } else {
            $envio = 0;
        }

        echo "El precio sin envío es: " . $total . "€<br>";
        echo "Gastos de envío: " . $envio . "€<br>";
        echo "Total: " . ($total + $envio) . "€";
    } else {
        echo "Error, no se reconoce el precio como un número";
    }
    ?>

</body>
</html>