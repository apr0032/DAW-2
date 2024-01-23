document.addEventListener("DOMContentLoaded", function () {
  // Selecciona la lista de signos y el contenedor de descripción
  var signosLista = document.getElementById("signos-lista");
  var signoTitulo = document.getElementById("signo-titulo");
  var signoDescripcion = document.getElementById("signo-descripcion");

  // Estado para verificar si la descripción está visible
  var descripcionVisible = false;

  // Cargar el JSON usando AJAX
  var conexion1 = new XMLHttpRequest();
  conexion1.onreadystatechange = function () {
    if (conexion1.readyState == 4 && conexion1.status == 200) {
      // Parsear el JSON
      var horoscopos = JSON.parse(conexion1.responseText);

      // Llenar la lista de signos
      Object.keys(horoscopos).forEach(function (key) {
        var signo = horoscopos[key];
        var listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#" data-id="${key}">${signo.signo}</a>`;
        signosLista.appendChild(listItem);
      });

      // Agregar eventos de clic a los elementos de la lista
      var signosLinks = document.querySelectorAll("#signos-lista a");
      signosLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          var id = this.getAttribute("data-id");

          // Mostrar mensaje de carga
          mostrarMensajeCarga();

          // Agregar timeout de 2-3 segundos antes de mostrar la descripción
          setTimeout(function () {
            mostrarDescripcion(horoscopos[id]);
          }, 2000); // 2000 milisegundos (2 segundos)
        });
      });

      // Agregar evento de clic al título para alternar la visibilidad de la descripción
      signoTitulo.addEventListener("click", function () {
        if (descripcionVisible) {
          ocultarDescripcion();
        } else {
          // Mostrar la descripción solo si está oculta
          var id = this.getAttribute("data-id");
          mostrarDescripcion(horoscopos[id]);
        }
      });
    }
  };

  // Especifica la ruta del archivo JSON (datos.json)
  var rutaJSON = "datos.json";
  conexion1.open("GET", rutaJSON, true);
  conexion1.send();

  // Función para mostrar la descripción del signo
  function mostrarDescripcion(signo) {
    descripcionVisible = true;
    signoTitulo.innerHTML = signo.signo;
    signoDescripcion.innerHTML = signo.descripcion;
    // Mostrar el contenedor de descripción
    document.getElementById("descripcion-container").style.display = "block";
  }

  // Función para ocultar la descripción
  function ocultarDescripcion() {
    descripcionVisible = false;
    // Ocultar el contenedor de descripción
    document.getElementById("descripcion-container").style.display = "none";
  }

  // Función para mostrar un mensaje de carga
  function mostrarMensajeCarga() {
    signoTitulo.innerHTML = "Por favor, espere...";
    signoDescripcion.innerHTML = "";
    document.getElementById("descripcion-container").style.display = "block";
  }
});
