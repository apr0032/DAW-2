import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const JuegoBlackjack = () => {
  const [cartasJugador, setCartasJugador] = useState([]);
  const [cartasCrupier, setCartasCrupier] = useState([]);
  const [mazo, setMazo] = useState([]);
  const [sumaJugador, setSumaJugador] = useState(0);
  const [sumaCrupier, setSumaCrupier] = useState(0);
  const [juegoEnProgreso, setJuegoEnProgreso] = useState(false);
  const [ganador, setGanador] = useState('');

  useEffect(() => {
    comenzarNuevaRonda();
  }, []);

  const comenzarNuevaRonda = () => {
    setCartasJugador([]);
    setCartasCrupier([]);
    setMazo([]);
    setSumaJugador(0);
    setSumaCrupier(0);
    setJuegoEnProgreso(true);
    setGanador('');
    crearMazo();
    repartirCartasIniciales();
  };

  const crearMazo = () => {
    const palos = ['Picas', 'Corazones', 'Rombos', 'Tréboles'];
    const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const nuevoMazo = [];
    for (const palo of palos) {
      for (const valor of valores) {
        nuevoMazo.push({ palo, valor });
      }
    }

    // Barajar el mazo
    for (let i = nuevoMazo.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [nuevoMazo[i], nuevoMazo[j]] = [nuevoMazo[j], nuevoMazo[i]];
    }

    setMazo(nuevoMazo);
  };

  const repartirCartasIniciales = () => {
    const cartaJugador = sacarCarta();
    const cartaCrupier1 = sacarCarta();
    const cartaCrupier2 = sacarCarta();

    setCartasJugador([cartaJugador]);
    setCartasCrupier([cartaCrupier1, cartaCrupier2]);

    actualizarSuma(cartaJugador, 'jugador');
    actualizarSuma(cartaCrupier1, 'crupier');
    actualizarSuma(cartaCrupier2, 'crupier');
  };

  const sacarCarta = () => {
    const [cartaSacada, ...mazoRestante] = mazo;
    setMazo(mazoRestante);
    return cartaSacada;
  };

  const actualizarSuma = (carta, jugador) => {
    const suma = jugador === 'jugador' ? sumaJugador : sumaCrupier;
    const valorCarta = obtenerValorCarta(carta);
    const nuevaSuma = suma + valorCarta;

    if (jugador === 'jugador') {
      setSumaJugador(nuevaSuma);
    } else {
      setSumaCrupier(nuevaSuma);
    }

    comprobarExceso(nuevaSuma, jugador);
  };

  const obtenerValorCarta = (carta) => {
    const valor = carta.valor;
    if (valor === 'K' || valor === 'Q' || valor === 'J') {
      return 10;
    } else if (valor === 'A') {
      return 11;
    } else {
      return parseInt(valor);
    }
  };

  const comprobarExceso = (suma, jugador) => {
    if (suma > 21) {
      finalizarRonda(jugador === 'jugador' ? 'crupier' : 'jugador');
    }
  };

  const pedirCarta = () => {
    const nuevaCarta = sacarCarta();
    setCartasJugador([...cartasJugador, nuevaCarta]);
    actualizarSuma(nuevaCarta, 'jugador');
  };

  const plantarse = () => {
    while (sumaCrupier < 17) {
      const nuevaCarta = sacarCarta();
      setCartasCrupier([...cartasCrupier, nuevaCarta]);
      actualizarSuma(nuevaCarta, 'crupier');
    }

    determinarGanador();
  };

  const determinarGanador = () => {
    if (sumaJugador > sumaCrupier && sumaJugador <= 21) {
      finalizarRonda('jugador');
    } else {
      finalizarRonda('crupier');
    }
  };

  const finalizarRonda = (ganadorRonda) => {
    setJuegoEnProgreso(false);
    setGanador(ganadorRonda);
    alert(`¡${ganadorRonda === 'jugador' ? 'Jugador' : 'Crupier'} gana la ronda!`);
  };

  return (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col>
          <Button variant="primary" onClick={pedirCarta} disabled={!juegoEnProgreso}>
            Pedir Carta
          </Button>
        </Col>
        <Col>
          <Button variant="warning" onClick={plantarse} disabled={!juegoEnProgreso}>
            Plantarse
          </Button>
        </Col>
        <Col>
          <Button variant="success" onClick={comenzarNuevaRonda} disabled={juegoEnProgreso}>
            Nueva Ronda
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Crupier</h2>
          <Card>
            <Card.Body>
              {juegoEnProgreso ? (
                <>
                  <Card.Text>{cartasCrupier.length > 0 && cartasCrupier[0].valor}</Card.Text>
                  <Card.Text>Suma: {sumaCrupier}</Card.Text>
                </>
              ) : (
                cartasCrupier.map((carta, index) => (
                  <Card.Text key={index}>{carta.valor}</Card.Text>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h2>Jugador</h2>
          <Card>
            <Card.Body>
              {cartasJugador.map((carta, index) => (
                <Card.Text key={index}>{carta.valor}</Card.Text>
              ))}
              <Card.Text>Suma: {sumaJugador}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {ganador && (
        <Row className="mt-3">
          <Col>
            <Alert variant={ganador === 'jugador' ? 'success' : 'danger'}>
              ¡{ganador === 'jugador' ? 'Jugador' : 'Crupier'} gana la partida!
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default JuegoBlackjack;
