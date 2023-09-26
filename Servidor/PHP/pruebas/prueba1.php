<html>
    <head>
        <title>Prueba de PHP</title>
    </head>
    <body>
        <?php
            $var1=1;
            $var2 = 2;
            $var1=&$var2;
            echo $var1;
            echo " ";
            $var2=3;
            echo$var1;
            $var2=100;
            echo$var1;
        ?>
    </body>
</html>
