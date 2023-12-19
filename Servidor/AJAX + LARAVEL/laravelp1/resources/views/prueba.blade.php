<!DOCTYPE html>
<html>
<head>
    <title>Llamada AJAX a un endpoint</title>
    <!-- Incluye jQuery, puedes usar la CDN o instalarlo localmente -->
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>
    <h1>Llamada Ajax a Endpoint</h1>
    <button id="miBoton">Realizar llamada AJAX</button>

    <script>
        $(document).ready(function(){
            $('#miBoton').click(function(){
                // Realizar la llamada AJAX al endpoint definido en Laravel
                $.ajax({
                    type: 'GET', // Método de la petición
                    url: 'http://127.0.0.1:8000/dameAnimales', // Ruta al endpoint en Laravel
                    dataType: 'json',
                    
                    success: function(response){
                        alert (response.mensaje);
                        alert (response.datos);
                    },
                    error: function(error){
                        // Manejar errores
                        console.log(error);
                    }
                });
            });
        });
    </script>
</body>
</html>
