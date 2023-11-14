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
            $varHW2 = intval($varHW);
            echo "la variable muestra --> " . $varHW2 . " se debe a que no puede hacer la conversion de string a int, por lo que la funcion intval devuelve 0. El 0 no se muestra por pantalla en php";
            
            // Ej 9
            echo "<h2>Ejercicio 9</h2>";
            //a
            $num1 = 144;
            $raizC = sqrt($num1);
            echo "a) Raíz cuadrada de $num1 : $raizC <br>";
            //b
            $base = 2;
            $exponente = 8;
            $potencia = pow($base, $exponente);
            echo "b) $base elevado a $exponente : $potencia <br>";

            //c
            $dividendo = 100;
            $divisor = 6;
            $resto = $dividendo % $divisor;
            echo "c) Resto de dividir $dividendo entre $divisor : $resto <br>";

            //d
            function calcularMCD($numero1, $numero2) {
                while ($numero2 != 0) {
                    $numeroX = $numero2;
                    $numero2 = $numero1 % $numero2;
                    $numero1 = $numeroX;
                }
                return $numero1;
            }
            $res1 = 3;
            $res2 = 6;
            $resultado1 = calcularMCD($res1, $res2);
            echo "El máximo común divisor de $res1 y $res2 es: $resultado1";
        ?>
    </body>
</html>
