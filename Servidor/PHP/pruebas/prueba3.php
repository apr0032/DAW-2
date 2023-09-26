<html>
    <head>
        <title>Prueba de PHP</title>
    </head>
    <body>
        <?php
            
            define("PI", 3.14);
            $radio=6;

            $volumen=(4/3)*PI*(pow($radio, 3));

            echo "<br>";

            echo $volumen;
        ?>
    </body>
</html>
