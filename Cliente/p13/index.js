"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Jugador = /** @class */ (function () {
    function Jugador(nombre) {
        this.nombre = nombre;
        this.puntos_salud = 20;
        this.puntos_ataque = 0;
        this.dinero = 2;
    }
    Jugador.prototype.getNombre = function () {
        return this.nombre;
    };
    Jugador.prototype.getPuntosSalud = function () {
        return this.puntos_salud;
    };
    Jugador.prototype.setPuntosSalud = function (puntosSalud) {
        this.puntos_salud = puntosSalud;
    };
    Jugador.prototype.getPuntosAtaque = function () {
        return this.puntos_ataque;
    };
    Jugador.prototype.setPuntosAtaque = function (puntosAtaque) {
        this.puntos_ataque = puntosAtaque;
    };
    Jugador.prototype.getDinero = function () {
        return this.dinero;
    };
    Jugador.prototype.setDinero = function (dinero) {
        this.dinero = dinero;
    };
    Jugador.prototype.imprimirEstadisticas = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Puntos de Salud: ".concat(this.puntos_salud));
        console.log("Puntos de Ataque: ".concat(this.puntos_ataque));
        console.log("Dinero: ".concat(this.dinero, " oro"));
    };
    Jugador.prototype.calcularFuerzaInicial = function () {
        this.puntos_ataque = Math.floor(Math.random() * 10) + 1;
    };
    return Jugador;
}());
var Enemigo = /** @class */ (function () {
    function Enemigo(nombre) {
        this.nombre = nombre;
        this.puntos_ataque = 0;
        this.oro_soltado = 0;
    }
    Enemigo.prototype.getNombre = function () {
        return this.nombre;
    };
    Enemigo.prototype.getPuntosAtaque = function () {
        return this.puntos_ataque;
    };
    Enemigo.prototype.setPuntosAtaque = function (puntosAtaque) {
        this.puntos_ataque = puntosAtaque;
    };
    Enemigo.prototype.calcularFuerzaEnemigo = function () {
        this.puntos_ataque = Math.floor(Math.random() * 10) + 1;
    };
    Enemigo.prototype.soltarDinero = function () {
        this.oro_soltado = Math.floor(Math.random() * 5) + 1;
        return this.oro_soltado;
    };
    return Enemigo;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.enemigos = ["Profesor1", "Compañero1", "Profesor2", "Compañero2"];
        console.log("Bienvenido al juego 'El reinado de Medac'");
        var nombreJugador = readlineSync.question("Introduce tu nombre: ") || "Jugador";
        this.jugador = new Jugador(nombreJugador);
        this.jugador.calcularFuerzaInicial();
        this.menuPrincipal();
    }
    Main.prototype.menuPrincipal = function () {
        var opcion;
        do {
            console.log("\nMenú Principal:");
            console.log("1. Luchar contra el enemigo");
            console.log("2. Comprar ítems");
            console.log("3. Consultar tus estadísticas");
            console.log("4. Salir del juego");
            opcion = parseInt(readlineSync.question("Elige una opción: ") || "0");
            switch (opcion) {
                case 1:
                    this.lucharContraEnemigo();
                    break;
                case 2:
                    this.comprarItems();
                    break;
                case 3:
                    this.consultarEstadisticas();
                    break;
                case 4:
                    console.log("Gracias por jugar. ¡Hasta luego!");
                    break;
                default:
                    console.log("Opción inválida. Inténtalo de nuevo.");
            }
        } while (opcion !== 4);
    };
    Main.prototype.lucharContraEnemigo = function () {
        var nombreEnemigo = this.enemigos[Math.floor(Math.random() * this.enemigos.length)];
        var enemigo = new Enemigo(nombreEnemigo);
        enemigo.calcularFuerzaEnemigo();
        console.log("Te enfrentas a ".concat(nombreEnemigo));
        console.log("Fuerza del enemigo: ".concat(enemigo.getPuntosAtaque()));
        if (this.jugador.getPuntosAtaque() >= enemigo.getPuntosAtaque()) {
            var oroGanado = enemigo.soltarDinero();
            this.jugador.setDinero(this.jugador.getDinero() + oroGanado);
            console.log("Has ganado el combate y has recibido ".concat(oroGanado, " oro."));
        }
        else {
            var diferenciaAtaque = enemigo.getPuntosAtaque() - this.jugador.getPuntosAtaque();
            this.jugador.setPuntosSalud(this.jugador.getPuntosSalud() - diferenciaAtaque);
            console.log("Has perdido el combate. Pierdes ".concat(diferenciaAtaque, " puntos de salud."));
            if (this.jugador.getPuntosSalud() <= 0) {
                console.log("Tu vida ha llegado a 0. Has perdido el juego.");
                return;
            }
        }
    };
    Main.prototype.comprarItems = function () {
        // Implementa la lógica para comprar ítems aquí
    };
    Main.prototype.consultarEstadisticas = function () {
        this.jugador.imprimirEstadisticas();
    };
    return Main;
}());
// Inicia el juego
var juego = new Main();
