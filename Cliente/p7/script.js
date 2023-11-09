// Parte I
// Objeto TUTOR
const tutor = {
    nombre: "Profesor Juan",
    edad: 35,
    DNI: "12345678A",
    tituloUniversitario: "Licenciado en Educación",
    mostrar: function() {
        return `Tutor: ${this.nombre}, Edad: ${this.edad}, DNI: ${this.DNI}, Título Universitario: ${this.tituloUniversitario}`;
    },
    cambiarNombre: function(nuevo) {
        this.nombre = nuevo;
    }
};

// Objeto ASIGNATURA
function Asignatura(nombre, curso, horasTotales) {
    this.nombre = nombre;
    this.curso = curso;
    this.horasTotales = horasTotales;
    this.mostrar = function() {
        return `Asignatura: ${this.nombre}, Curso: ${this.curso}, Horas Totales: ${this.horasTotales}`;
    };
    this.cambiarHoras = function(nueva) {
        this.horasTotales = nueva;
    };
}

// Lista de objetos ASIGNATURA
const asignaturas = [
    new Asignatura("Matemáticas", 1, 60),
    new Asignatura("Lengua Española", 2, 50),
    new Asignatura("Ciencias Naturales", 1, 45),
    new Asignatura("Historia", 3, 40)
];

// Objeto ALUMNO
const alumno = {
    nombre: "Juanito",
    edad: 18,
    ciclo: "Bachillerato",
    curso: 1,
    tutor: tutor,
    asignaturas: asignaturas,
    notasMedias: [8.5, 7.2, 9.0, 6.8], // Notas de ejemplo
    calcularMedia: function() {
        let total = 0;
        for (let nota of this.notasMedias) {
            total += nota;
        }
        return total / this.notasMedias.length;
    },
    mediaAsignatura: function() {
        let result = "";
        for (let i = 0; i < this.asignaturas.length; i++) {
            result += `${this.asignaturas[i].nombre}: ${this.notasMedias[i]}, `;
        }
        return result.slice(0, -2); // Elimina la última coma y espacio
    },
    mostrar: function() {
        return `
            Nombre: ${this.nombre},
            Edad: ${this.edad},
            Ciclo: ${this.ciclo},
            Curso: ${this.curso},
            ${this.tutor.mostrar()},
            ${this.mediaAsignatura()},
            Media Total: ${this.calcularMedia()}
        `;
    }
};

// Mostrar información del ALUMNO en el DIV
const alumnoInfoDiv = document.getElementById("alumnoInfo");
alumnoInfoDiv.innerHTML = `<h2>Información del Alumno</h2><p>${alumno.mostrar()}</p>`;
