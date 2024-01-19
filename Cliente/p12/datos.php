<?php
if (isset($_GET['cod'])) {
  $codigo = $_GET['cod'];

  // Datos para algunos videojuegos (puedes agregar más según tus necesidades)
  $response = array();

  if ($codigo == 1) {
    $response['titulo'] = "Super Mario Wonder";
    $response['descripcion'] = "Disfrutarás de aventuras coloridas y emocionantes en el Reino Champiñón.";
    $response['imagen'] = "https://m.media-amazon.com/images/I/51PRT3+iZvL._AC_UF894,1000_QL80_.jpg";
  } elseif ($codigo == 2) {
    $response['titulo'] = "Pokemon Espada";
    $response['descripcion'] = "Explora el mundo de Pokémon con nuevas criaturas y desafíos.";
    $response['imagen'] = "https://m.media-amazon.com/images/I/61UZ1U8A-0L._AC_UF894,1000_QL80_.jpg";
  } elseif ($codigo == 3) {
    $response['titulo'] = "Luigi's Mansion";
    $response['descripcion'] = "Ayuda a Luigi a enfrentarse a fantasmas en una mansión encantada.";
    $response['imagen'] = "https://m.media-amazon.com/images/I/81cHm50auZL._AC_UF894,1000_QL80_.jpg";
  } elseif ($codigo == 4) {
    $response['titulo'] = "Pokemon Purpura";
    $response['descripcion'] = "Captura Pokémon en un mundo lleno de misterios.";
    $response['imagen'] = "https://m.media-amazon.com/images/I/81wbAGjGPkL.jpg";
  } elseif ($codigo == 5) {
    $response['titulo'] = "Super Smash Bros Ultimate";
    $response['descripcion'] = "Participa en emocionantes peleas con tus personajes favoritos.";
    $response['imagen'] = "https://m.media-amazon.com/images/I/81QiNb1LIjL._AC_UF894,1000_QL80_.jpg";
  } else {
    $response['titulo'] = "Videojuego no encontrado";
    $response['descripcion'] = "";
    $response['imagen'] = "";
  }

  // Enviar la respuesta como JSON
  echo json_encode($response);
} else {
  echo "Código no proporcionado.";
}
?>
