document.addEventListener('DOMContentLoaded', function () {
  // Variable para almacenar el enlace activo
  var enlaceActivo = null;

  // Agregar evento click a los enlaces
  var enlaces = document.querySelectorAll('#container a');
  enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function (event) {
      event.preventDefault();
      var codigo = this.getAttribute('data-cod');

      // Verificar si el mismo enlace ha sido clicado nuevamente
      if (enlaceActivo === codigo) {
        // Si es así, oculta la información
        ocultarDatos();
        enlaceActivo = null;
      } else {
        // Si no, carga la información y muestra
        cargarDatos(codigo);
        enlaceActivo = codigo;
      }
    });
  });
});

function cargarDatos(codigo) {
  // Crear objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Configurar la solicitud
  xhr.open('GET', 'datos.php?cod=' + codigo, true);

  // Definir la función de callback
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Parsear la respuesta JSON
      var data = JSON.parse(xhr.responseText);

      // Mostrar la descripción, título e imagen en el contenedor correspondiente
      document.getElementById('titulo').textContent = data.titulo;
      document.getElementById('descripcion').textContent = data.descripcion;
      document.getElementById('imagen').src = data.imagen;

      // Mostrar el contenedor
      document.getElementById('descripcion-container').style.display = 'block';
    }
  };

  // Enviar la solicitud
  xhr.send();
}

function ocultarDatos() {
  // Ocultar el contenedor
  document.getElementById('descripcion-container').style.display = 'none';
}
