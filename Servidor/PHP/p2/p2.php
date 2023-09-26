<html>
    <head>
        <title>Prueba de PHP</title>
    </head>
    <body>
        <?php
            // Ej 1
            // a
            echo "<h2>Ejercicio 1</h2>";
            $var1 = "Hola";
            $var2 = "Mundo";
            $concatenar = $var1 . " " . $var2;
            echo "1a): " . $concatenar . "<br>";
            // b
            $varBool = true;
            echo "1b): " . $varBool . "<br>";
            // c
            $varFlo = 3.14;
            echo "1c): " . $varFlo . "<br>";
            // d
            $varArray = array(
                "valor1" => 1,
                "valor2" => 2,
                "valor3" => 3);
            echo "1d): ";
            print_r($varArray);
            echo "<br>";

            // Ej 2
            echo "<h2>Ejercicio 2</h2>";
            $varBool = false;
            echo "2): " . $varBool . "<br>";
            echo "No muestra nada porque cuando es 'true' muestra un 1, mientras cuando es 'false' no muestra nada, por eso no apreciamos absolutamente nada en la respuesta <br>";

            // Ej 3
            echo "<h2>Ejercicio 3</h2>";
            $concatenar = str_replace(" ", "", $concatenar); //funcion para eliminar caracter especificado
            echo $concatenar;
            
            // Ej 4
            echo "<h2>Ejercicio 4</h2>";
            $varMs = "El operador '+' sirve para sumar el valor de variables. Con la '/'podemos dividir valores entre variables. El símbolo del dólar '$' indica que estamos utilizando variables pero no lo usaremos en las constantes o globales";
            echo $varMs;

            // Ej 5
            echo "<h2>Ejercicio 5</h2>";
            $long = strlen($varMs);
            echo "Longitud de la cadena: " . $long;

            // Ej 6
            echo "<h2>Ejercicio 6</h2>";
            $varHW = "Hello World";
            $vocalesArray = array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
            $noVocales = str_replace($vocalesArray, "", $varHW); // funcion eliminar vocales gracias a array
            echo "Resultado: " . $noVocales . "<br>";

            // Ej 7
            echo "<h2>Ejercicio 7</h2>";
            $var12=null;
            echo "Resultado: " . is_null($var12) . "<br> Muestra 1 porque la variable esta vacía, si no lo estuviera mostraría 0 <br>";

            // Ej 8
            echo "<h2>Ejercicio 8</h2>";
            
        ?>
    </body>
</html>
