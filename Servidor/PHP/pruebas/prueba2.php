<html>
    <head>
        <title>Prueba de PHP</title>
    </head>
    <body>
        <?php
            
            $var1="1";
            $var2 ="2";
            $var3=$var1+$var2;
            echo $var3;

            $var4=array("1","2");
            $var3=$var4[1];
            echo $var3;

            $var5=array("clave1"=>3456,"clave2"=>23456);

           echo $var5["clave2"];

           echo is_int($var1);
        ?>
    </body>
</html>
