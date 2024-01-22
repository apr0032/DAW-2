document.addEventListener("DOMContentLoaded", function () {
  var signosLista = document.getElementById("signos-lista");
  var signoTitulo = document.getElementById("signo-titulo");
  var signoDescripcion = document.getElementById("signo-descripcion");
  var descripcionVisible = false;

  // Datos del JSON directamente en el script
  var horoscopos = {
    "1": {
      "signo": "Aries",
      "descripcion": "Hoy los cambios serán físicos, personales, de carácter. Te sentirás impulsivo y tomarás iniciativas. Período en donde considerarás unirte a agrupaciones de beneficencia, o de ayuda a los demás."
    },
    "2": {
      "signo": "Tauro",
      "descripcion": "Día para consolidar proyectos y llevar a cabo tareas pendientes. Momento para afianzar relaciones laborales y personales. La perseverancia y la paciencia serán clave para superar obstáculos."
    },
    "3": {
      "signo": "Géminis",
      "descripcion": "Momento favorable para la comunicación y la expresión. Aprovecha para compartir tus ideas y pensamientos con los demás. Buen día para la toma de decisiones importantes."
    },
    "4": {
      "signo": "Cáncer",
      "descripcion": "Jornada para enfocarte en el ámbito familiar y emocional. Es posible que te sientas más sensible. Dedica tiempo a las relaciones cercanas y fortalece los lazos afectivos."
    },
    "5": {
      "signo": "Leo",
      "descripcion": "Día para destacar y brillar en tu entorno. Aprovecha las oportunidades laborales y sociales. Mantén una actitud positiva y proactiva. Posibilidad de reconocimientos y éxitos."
    }
  };

  Object.keys(horoscopos).forEach(function (key) {
    var signo = horoscopos[key];
    var listItem = document.createElement("li");
    listItem.innerHTML = `<a href="#" data-id="${key}">${signo.signo}</a>`;
    signosLista.appendChild(listItem);
  });

  var signosLinks = document.querySelectorAll("#signos-lista a");
  signosLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var id = this.getAttribute("data-id");
      mostrarMensajeCarga();
      setTimeout(function () {
        mostrarDescripcion(horoscopos[id]);
      }, 2000);
    });
  });

  signoTitulo.addEventListener("click", function () {
    if (descripcionVisible) {
      ocultarDescripcion();
    } else {
      var id = this.getAttribute("data-id");
      mostrarDescripcion(horoscopos[id]);
    }
  });

  function mostrarDescripcion(signo) {
    descripcionVisible = true;
    signoTitulo.innerHTML = signo.signo;
    signoDescripcion.innerHTML = signo.descripcion;
    document.getElementById("descripcion-container").style.display = "block";
  }

  function ocultarDescripcion() {
    descripcionVisible = false;
    document.getElementById("descripcion-container").style.display = "none";
  }

  function mostrarMensajeCarga() {
    signoTitulo.innerHTML = "Por favor, espere...";
    signoDescripcion.innerHTML = "";
    document.getElementById("descripcion-container").style.display = "block";
  }
});
