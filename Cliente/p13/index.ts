import readlineSync = require('readline-sync');

class Jugador {
  private nombre: string;
  private puntos_salud: number;
  private puntos_ataque: number;
  private dinero: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntos_salud = 20;
    this.puntos_ataque = 0;
    this.dinero = 2;
  }

  getNombre(): string {
    return this.nombre;
  }

  getPuntosSalud(): number {
    return this.puntos_salud;
  }

  setPuntosSalud(puntosSalud: number): void {
    this.puntos_salud = puntosSalud;
  }

  getPuntosAtaque(): number {
    return this.puntos_ataque;
  }

  setPuntosAtaque(puntosAtaque: number): void {
    this.puntos_ataque = puntosAtaque;
  }

  getDinero(): number {
    return this.dinero;
  }

  setDinero(dinero: number): void {
    this.dinero = dinero;
  }

  imprimirEstadisticas(): void {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Puntos de Salud: ${this.puntos_salud}`);
    console.log(`Puntos de Ataque: ${this.puntos_ataque}`);
    console.log(`Dinero: ${this.dinero} oro`);
  }

  calcularFuerzaInicial(): void {
    this.puntos_ataque = Math.floor(Math.random() * 10) + 1;
  }
}

class Enemigo {
  private nombre: string;
  private puntos_ataque: number;
  private oro_soltado: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntos_ataque = 0;
    this.oro_soltado = 0;
  }

  getNombre(): string {
    return this.nombre;
  }

  getPuntosAtaque(): number {
    return this.puntos_ataque;
  }

  setPuntosAtaque(puntosAtaque: number): void {
    this.puntos_ataque = puntosAtaque;
  }

  calcularFuerzaEnemigo(): void {
    this.puntos_ataque = Math.floor(Math.random() * 10) + 1;
  }

  soltarDinero(): number {
    this.oro_soltado = Math.floor(Math.random() * 5) + 1;
    return this.oro_soltado;
  }
}

class Main {
  private enemigos: string[] = ["Profesor1", "Compañero1", "Profesor2", "Compañero2"];
  private jugador: Jugador;

  constructor() {
    console.log("Bienvenido al juego 'El reinado de Medac'");
    
    const nombreJugador: string = readlineSync.question("Introduce tu nombre: ") || "Jugador";
    this.jugador = new Jugador(nombreJugador);
    this.jugador.calcularFuerzaInicial();

    this.menuPrincipal();
  }

  menuPrincipal(): void {
    let opcion: number;
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
  }

  lucharContraEnemigo(): void {
    const nombreEnemigo: string = this.enemigos[Math.floor(Math.random() * this.enemigos.length)];
    const enemigo: Enemigo = new Enemigo(nombreEnemigo);
    enemigo.calcularFuerzaEnemigo();

    console.log(`Te enfrentas a ${nombreEnemigo}`);
    console.log(`Fuerza del enemigo: ${enemigo.getPuntosAtaque()}`);

    if (this.jugador.getPuntosAtaque() >= enemigo.getPuntosAtaque()) {
      const oroGanado: number = enemigo.soltarDinero();
      this.jugador.setDinero(this.jugador.getDinero() + oroGanado);
      console.log(`Has ganado el combate y has recibido ${oroGanado} oro.`);
    } else {
      const diferenciaAtaque: number = enemigo.getPuntosAtaque() - this.jugador.getPuntosAtaque();
      this.jugador.setPuntosSalud(this.jugador.getPuntosSalud() - diferenciaAtaque);
      console.log(`Has perdido el combate. Pierdes ${diferenciaAtaque} puntos de salud.`);

      if (this.jugador.getPuntosSalud() <= 0) {
        console.log("Tu vida ha llegado a 0. Has perdido el juego.");
        return;
      }
    }
  }

  comprarItems(): void {
    // Implementa la lógica para comprar ítems aquí
  }

  consultarEstadisticas(): void {
    this.jugador.imprimirEstadisticas();
  }
}

// Inicia el juego
const juego = new Main();
