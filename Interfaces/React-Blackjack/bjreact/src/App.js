// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css'

const palo = ['C', 'P', 'R', 'T'];
const numero = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

const crearBarajaAleatoria = () => {
  const baraja = [];
  for (let i = 0; i < palo.length; i++) {
    for (let j = 0; j < numero.length; j++) {
      const carta = {
        numero: numero[j],
        palo: palo[i]
      }
      baraja.push(carta);
    }
  }
  return baraja.sort(() => Math.random() - 0.5);
};

function App() {
  const [baraja, setBaraja] = useState([]);
  const [manoJugador, setManoJugador] = useState([]);
  const [manoDealer, setManoDealer] = useState([]);
  const [puntuacionJugador, setPuntuacionJugador] = useState(0);
  const [puntuacionDealer, setPuntuacionDealer] = useState(0);
  const [rondaAcabada, setRondaAcabada] = useState(false);

  useEffect(() => {
    nuevaRonda();
  }, []);

  const nuevaRonda = () => {
    const nuevaBaraja = crearBarajaAleatoria();
    const manoJugadorInicial = [nuevaBaraja.pop(), nuevaBaraja.pop()];
    const manoDealerInicial = [nuevaBaraja.pop(), {numero: 'boca',palo: 'Abajo'}];

    setBaraja(nuevaBaraja);
    setManoJugador(manoJugadorInicial);
    setManoDealer(manoDealerInicial);
    setPuntuacionJugador(calcularPuntuacion(manoJugadorInicial));
    setPuntuacionDealer(calcularPuntuacion(manoDealerInicial));
    setRondaAcabada(false);
  };

  const calcularPuntuacion = (mano) => {
    let puntuacion = 0;
    let ases = 0;
    for (let carta of mano) {
      if (carta.numero === 'J' || carta.numero === 'Q' || carta.numero === 'K') {
        puntuacion += 10;
      } else if (carta.numero === 'A') {
        puntuacion += 11;
        ases++;
      }else if(carta.numero === 'boca'){
        puntuacion += 0;
      } else {
        puntuacion += parseInt(carta.numero);
      }
    }
    while (puntuacion > 21 && ases > 0) {
      puntuacion -= 10;
      ases -= 1;
    }
    if(puntuacion > 21){
      // mostrar mensaje de que ha perdido
      endRound();
    }

    return puntuacion;
  };

  const endRound = () => {
    setRondaAcabada(true);
  };

  const pedirCartaJugador = () => {

    if (puntuacionJugador > 21) {
      endRound();
    } else {
      const cartaNueva = baraja.pop();
      setManoJugador([...manoJugador, cartaNueva]);
      setPuntuacionJugador(calcularPuntuacion([...manoJugador, cartaNueva]));
    }
  };

  const pedirCartaDealer = () => {

    if (puntuacionJugador > 21) {
      endRound();
    } else {
      const cartaNueva = baraja.pop();
      setManoDealer([...manoDealer, cartaNueva]);
      setPuntuacionDealer(calcularPuntuacion([...manoDealer, cartaNueva]));
    }
  };

  // const Plantarse = (carta) => { //carta

  //   if(carta.numero === 'boca'){
       
  //   }
  //   endRound();
  // };
  const Plantarse = () => {
    if (puntuacionDealer < 17) {
      while (puntuacionDealer < 17) {
        const nuevaCartaDealer = baraja.pop();
        setManoDealer([...manoDealer, nuevaCartaDealer]);
        setPuntuacionDealer(calcularPuntuacion([...manoDealer, nuevaCartaDealer]));
      }
    }
    endRound();
  };

  const ganador = () => {
    if (puntuacionJugador > 21) {
      return 'Gana Dealer';
    } else if (puntuacionDealer > 21) {
      return 'Gana Jugador';
    } else if (puntuacionJugador > puntuacionDealer) {
      return 'Gana Jugador';
    } else if (puntuacionJugador === puntuacionDealer) {
      return 'Empate';
    } else {
      return 'Gana Dealer';
    }

  };

  return (
    <>
      <header>
        <h1 className='titulo'>Blackjack</h1>
      </header>
      <main>
        <div id='mesa'>
          <div>
            <h2>Dealer</h2>
            {manoDealer.map((carta, index) => (
              <img className='cartas' key={index} src={`/imagenes/cartas/${carta.numero}${carta.palo}.png`} alt={`${carta.numero}${carta.palo}`} />
            ))}
          </div>

          <div>
          { (
              <>
                <button onClick={pedirCartaDealer}>Pedir Carta</button>
              </>
            )}
          </div>

          <div>
            <p>Puntuacion: {puntuacionDealer}</p>
          </div>

          <div>
            <h2>Jugador</h2>
            {manoJugador.map((carta, index) => (
              <img className='cartas' key={index} src={`/imagenes/cartas/${carta.numero}${carta.palo}.png`} alt={`${carta.numero}${carta.palo}`} />
            ))}
          </div>

          <div>
            <p>Puntuacion: {puntuacionJugador}</p>
          </div>

          <div>

            {!rondaAcabada && (
              <>
                <button onClick={pedirCartaJugador}>Pedir Carta</button>
                <button onClick={Plantarse}>Plantarse</button>
              </>
            )}
            {rondaAcabada && (

              <button onClick={nuevaRonda}>Nueva Ronda</button>

            )}
            <h2 id='resultado'>{rondaAcabada && ganador()}</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
