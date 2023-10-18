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
        $envio = 0;

        switch (true) {
            case $total < 50:
                $envio = 3.95;
                break;
            case $total < 75:
                $envio = 2.95;
                break;
            case $total < 100:
                $envio = 1.95;
                break;
            default:
                $envio = 0; // Envío gratuito
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