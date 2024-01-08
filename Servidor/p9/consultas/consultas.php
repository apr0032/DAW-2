<?php
class Consultas
{
    public static function crearTabla()
    {
        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $conexion = mysqli_connect($host, $usuario, $contraseña);



        $sql = "CREATE DATABASE IF NOT EXISTS jugadoresBD";

        $crearTabla = "CREATE TABLE IF NOT EXISTS usuarios( usuario VARCHAR(30) PRIMARY KEY, contraseña VARCHAR(1000));";

        $tablaJugadores = "CREATE TABLE IF NOT EXISTS Jugadores( ID INT AUTO_INCREMENT PRIMARY KEY, Jugador VARCHAR(40), Equipo VARCHAR(40), Edad INTEGER(2));";

        mysqli_query($conexion, $sql);

        mysqli_select_db($conexion, "jugadoresBD");

        mysqli_query($conexion, $crearTabla);

        mysqli_query($conexion, $tablaJugadores);

        mysqli_close($conexion);
    }



    public static function Crear($usuarios, $contraseñas)
    {

        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $baseDatos = "jugadoresBD";

        $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDatos);

        $ConsultaInsertar = "INSERT INTO usuarios VALUES(?,?)";

        $stmtInsertar = mysqli_prepare($conexion, $ConsultaInsertar);

        mysqli_stmt_bind_param($stmtInsertar, "ss", $usuarios, $contraseñas);

        mysqli_stmt_execute($stmtInsertar);

        mysqli_stmt_close($stmtInsertar);
        mysqli_close($conexion);
    }


    public static function RegistroExistente($usuarios)
    {

        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $baseDatos = "jugadoresBD";
        $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDatos);
        $Existe = false;


        $consultaUsuarios = "SELECT * FROM usuarios WHERE usuario=?";
        $stmtUsuario = mysqli_prepare($conexion, $consultaUsuarios);
        mysqli_stmt_bind_param($stmtUsuario, "s", $usuarios);
        mysqli_stmt_execute($stmtUsuario);

        mysqli_stmt_store_result($stmtUsuario);

        if (mysqli_stmt_num_rows($stmtUsuario) > 0) {
            $Existe = true;
        }
        mysqli_stmt_close($stmtUsuario);



        mysqli_close($conexion);

        return $Existe;
    }




    public static function Inicio($usuarios, $contraseñas)
    {

        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $baseDatos = "jugadoresBD";

        $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDatos);
        $Existe = false;

        $consulta = "SELECT contraseña FROM usuarios WHERE usuario=?";//Creo Consulta
        $stmt = mysqli_prepare($conexion, $consulta);//Preparo Consulta

        mysqli_stmt_bind_param($stmt, "s", $usuarios);//Vinculo los parámetros

        //Ejecuto la consulta
        mysqli_stmt_execute($stmt);

        mysqli_stmt_bind_result($stmt, $claveColumna);


        
        mysqli_stmt_fetch($stmt);// Obtener resultados
        
        if (contraseñaword_verify($contraseñas, $claveColumna)) {//Verifica que la clave introducida sea la misma que la de la columna
            $Existe = true;
        }

        // Cierro conexiones
        mysqli_stmt_close($stmt);
        mysqli_close($conexion);

        return $Existe;
    }
    

    public static function MeterJugador($Jugador, $Equipo, $Edad)
    {
        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $baseDatos = "jugadoresBD";
        $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDatos);


        $ConsultaInsertar = "INSERT INTO Jugadores (Jugador,Equipo,Edad) VALUES(?,?,?)";//Consultar los valores

        $stmtInsertar = mysqli_prepare($conexion, $ConsultaInsertar);//Preparo la consulta de insertar

        mysqli_stmt_bind_param($stmtInsertar, "ssi", $Jugador, $Equipo, $Edad);//Vincular parametros

        mysqli_stmt_execute($stmtInsertar);//Ejecuta la consulta preparada

        //Cerrar conexiones
        mysqli_stmt_close($stmtInsertar);
        mysqli_close($conexion);
    }











    public static function Eliminar($id)
    {
        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $baseDatos = "jugadoresBD";

        $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDatos);//Establezco conexion
        $consultaEliminar = "DELETE FROM Jugadores WHERE ID=$id";//Consulta para eliminar
        $stmt = mysqli_prepare($conexion, $consultaEliminar);//Preparo consulta

        //Ejecutar y sacar respuesta de la consulta
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);

        //Cerrar conexiones
        mysqli_stmt_close($stmt);
        mysqli_close($conexion);
    }








    public static function MostrarTabla()
    {
        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $baseDatos = "jugadoresBD";

        $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDatos);//Iniciar conexion
        $consultaJugadores = "SELECT * FROM Jugadores";//Creo consulta 

        $Stmt = mysqli_prepare($conexion, $consultaJugadores);//preparo consulta
        //ejecuto consulta
        mysqli_stmt_execute($Stmt);
        mysqli_stmt_store_result($Stmt);
        mysqli_stmt_bind_result($Stmt, $id, $Jugador, $Equipo, $Edad,);

        while (mysqli_stmt_fetch($Stmt)) {

            echo "<tr'>";
            echo "<td style='color:yellow;'>$id</td>";
            echo "<td>$Jugador</td>";
            echo "<td>$Equipo</td>";
            echo "<td>$Edad</td>";
            echo "<td><form method='post' action='../consultas/Eliminar.php'> <button name='id' value='$id' class='btn '>
          </button></form></td>";
            echo "</tr>";
        }

        //Cierro Conexion
        mysqli_stmt_close($Stmt);
        mysqli_close($conexion);
    }

    public static function Actualizar($id, $Jugador, $Equipo, $Edad)
    {

        $host = "localhost";
        $usuario = "root";
        $contraseña = "";
        $baseDatos = "jugadoresBD";
        $conexion = mysqli_connect($host, $usuario, $contraseña, $baseDatos);//Creo la conexion
        $update = "UPDATE Jugadores SET Jugador=?, Equipo=?, Edad=? WHERE ID=?";//Creo la consulta de actualizar la tabla
        $stmt = mysqli_prepare($conexion, $update);//Preparo consulta
        mysqli_stmt_bind_param($stmt, "sssi", $cancion, $Equipo, $Edad, $id);//Vinculo los parametros
        mysqli_stmt_execute($stmt);//Ejecuto parametros

        //Cierro conexiones
        mysqli_stmt_close($stmt);
        mysqli_close($conexion);
    }
}
