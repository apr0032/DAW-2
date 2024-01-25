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

  setNombre(nombre: string): void {
    this.nombre = nombre;
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
    console.log(`Nombre: ${this.getNombre()}`);
    console.log(`Puntos de Salud: ${this.getPuntosSalud()}`);
    console.log(`Puntos de Ataque: ${this.getPuntosAtaque()}`);
    console.log(`Dinero: ${this.getDinero()} oro`);
  }

  calcularFuerzaInicial(): void {
    this.setPuntosAtaque(Math.floor(Math.random() * 6) + 1);
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

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  getPuntosAtaque(): number {
    return this.puntos_ataque;
  }

  setPuntosAtaque(puntosAtaque: number): void {
    this.puntos_ataque = puntosAtaque;
  }

  calcularFuerzaEnemigo(): void {
    this.setPuntosAtaque(Math.floor(Math.random() * 8) + 1);
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
        process.exit();
      }
    }
  }

  comprarItems(): void {
    console.log("\nPanel de opciones de compra:");
    console.log("1. Cuchillo - Ataque +1 - Precio: 4 oro");
    console.log("2. Glock - Ataque +2 - Precio: 5 oro");
    console.log("3. Smith & Wesson - Ataque +3 - Precio: 7 oro");
    console.log("4. AK-47 - Ataque +4 - Precio: 10 oro");
    console.log("5. Lanzacohete antiaéreo - Ataque +10 - Precio: 20 oro");
    console.log("6. Botiquin - Recuperación de salud +5 - Precio: 5 oro");
    console.log("7. Tirita - Recuperación de salud +2 - Precio: 3 oro");
    console.log("8. Volver al menú principal");

    const opcionCompra: number = parseInt(readlineSync.question("Elige una opcion: ") || "0");

    switch (opcionCompra) {
      case 1:
        this.comprarArma("Cuchillo", 1, 4);
        break;
      case 2:
        this.comprarArma("Glock", 2, 5);
        break;
      case 3:
        this.comprarArma("Smith & Wesson", 3, 7);
        break;
      case 4:
        this.comprarArma("AK-47", 4, 10);
        break;
      case 5:
        this.comprarArma("Lanzacohete antiaéreo", 10, 20);
        break;
      case 6:
        this.comprarItem("Botiquin", 5, 5);
        break;
      case 7:
        this.comprarItem("Tirita", 2, 3);
        break;
      case 8:
        console.log("Volviendo al menú principal.");
        break;
      default:
        console.log("Opción inválida. Inténtalo de nuevo.");
        break;
    }
  }

  comprarArma(nombreArma: string, puntosAtaqueExtra: number, precio: number): void {
    if (this.jugador.getDinero() >= precio) {
      this.jugador.setDinero(this.jugador.getDinero() - precio);
      this.jugador.setPuntosAtaque(this.jugador.getPuntosAtaque() + puntosAtaqueExtra);
      console.log(`Has comprado ${nombreArma}. Tu ataque ha aumentado en ${puntosAtaqueExtra} puntos.`);
    } else {
      console.log("No tienes suficiente oro para comprar esta arma.");
    }
  }

  comprarItem(nombreItem: string, puntosRecuperacion: number, precio: number): void {
    if (this.jugador.getDinero() >= precio) {
      this.jugador.setDinero(this.jugador.getDinero() - precio);
      this.jugador.setPuntosSalud(this.jugador.getPuntosSalud() + puntosRecuperacion);
      console.log(`Has comprado ${nombreItem}. Tu salud se ha recuperado en ${puntosRecuperacion} puntos.`);
    } else {
      console.log("No tienes suficiente oro para comprar este ítem.");
    }
  }

  consultarEstadisticas(): void {
    this.jugador.imprimirEstadisticas();
  }
}

// Inicia el juego
const juego = new Main();
