import './App.css'
import c1 from "./img/ace_of_hearts.png";
import c2 from "./img/2_of_hearts.png";
import c3 from "./img/3_of_hearts.png";
import c4 from "./img/4_of_hearts.png";
import c5 from "./img/5_of_hearts.png";
import c6 from "./img/6_of_hearts.png";
import c7 from "./img/7_of_hearts.png";
import c8 from "./img/8_of_hearts.png";
import c9 from "./img/9_of_hearts.png";
import c10 from "./img/10_of_hearts.png";
import cj from "./img/jack_of_hearts2.png";
import cq from "./img/queen_of_hearts2.png";
import ck from "./img/king_of_hearts2.png";


import r1 from "./img/ace_of_diamonds.png";
import r2 from "./img/2_of_diamonds.png";
import r3 from "./img/3_of_diamonds.png";
import r4 from "./img/4_of_diamonds.png";
import r5 from "./img/5_of_diamonds.png";
import r6 from "./img/6_of_diamonds.png";
import r7 from "./img/7_of_diamonds.png";
import r8 from "./img/8_of_diamonds.png";
import r9 from "./img/9_of_diamonds.png";
import r10 from "./img/10_of_diamonds.png";
import rj from "./img/jack_of_diamonds2.png";
import rq from "./img/queen_of_diamonds2.png";
import rk from "./img/king_of_diamonds2.png";

import t1 from "./img/ace_of_clubs.png";
import t2 from "./img/2_of_clubs.png";
import t3 from "./img/3_of_clubs.png";
import t4 from "./img/4_of_clubs.png";
import t5 from "./img/5_of_clubs.png";
import t6 from "./img/6_of_clubs.png";
import t7 from "./img/7_of_clubs.png";
import t8 from "./img/8_of_clubs.png";
import t9 from "./img/9_of_clubs.png";
import t10 from "./img/10_of_clubs.png";
import tj from "./img/jack_of_clubs2.png";
import tq from "./img/queen_of_clubs2.png";
import tk from "./img/king_of_clubs2.png";

import p1 from "./img/ace_of_spades.png";
import p2 from "./img/2_of_spades.png";
import p3 from "./img/3_of_spades.png";
import p4 from "./img/4_of_spades.png";
import p5 from "./img/5_of_spades.png";
import p6 from "./img/6_of_spades.png";
import p7 from "./img/7_of_spades.png";
import p8 from "./img/8_of_spades.png";
import p9 from "./img/9_of_spades.png";
import p10 from "./img/10_of_spades.png";
import pj from "./img/jack_of_spades2.png";
import pq from "./img/queen_of_spades2.png";
import pk from "./img/king_of_spades2.png";
import { useEffect, useState } from 'react';

export default function App() {
    const [cartas, setCartas] = useState([
        { img: c1, valor: 11 },
        { img: c2, valor: 2 },
        { img: c3, valor: 3 },
        { img: c4, valor: 4 },
        { img: c5, valor: 5 },
        { img: c6, valor: 6 },
        { img: c7, valor: 7 },
        { img: c8, valor: 8 },
        { img: c9, valor: 9 },
        { img: c10, valor: 10 },
        { img: cj, valor: 10 },
        { img: cq, valor: 10 },
        { img: ck, valor: 10 },

        { img: r1, valor: 11 },
        { img: r2, valor: 2 },
        { img: r3, valor: 3 },
        { img: r4, valor: 4 },
        { img: r5, valor: 5 },
        { img: r6, valor: 6 },
        { img: r7, valor: 7 },
        { img: r8, valor: 8 },
        { img: r9, valor: 9 },
        { img: r10, valor: 10 },
        { img: rj, valor: 10 },
        { img: rq, valor: 10 },
        { img: rk, valor: 10 },

        { img: t1, valor: 11 },
        { img: t2, valor: 2 },
        { img: t3, valor: 3 },
        { img: t4, valor: 4 },
        { img: t5, valor: 5 },
        { img: t6, valor: 6 },
        { img: t7, valor: 7 },
        { img: t8, valor: 8 },
        { img: t9, valor: 9 },
        { img: t10, valor: 10 },
        { img: tj, valor: 10 },
        { img: tq, valor: 10 },
        { img: tk, valor: 10 },

        { img: p1, valor: 11 },
        { img: p2, valor: 2 },
        { img: p3, valor: 3 },
        { img: p4, valor: 4 },
        { img: p5, valor: 5 },
        { img: p6, valor: 6 },
        { img: p7, valor: 7 },
        { img: p8, valor: 8 },
        { img: p9, valor: 9 },
        { img: p10, valor: 10 },
        { img: pj, valor: 10 },
        { img: pq, valor: 10 },
        { img: pk, valor: 10 },
    ]);
    const numerorandom = () => {
        const numero = Math.floor(Math.random() * cartas.length);
        return numero;
    };

    const [cartasDiler, setcartasDiler] = useState([cartas[numerorandom()], cartas[numerorandom()]]);
    const [cartasUsuario, setcartasUsuario] = useState([cartas[numerorandom()]]);
    const [desaparecerBtn, setdesaparecerBtn] = useState(false);
    const [totalU, settotalU] = useState(0);
    const [totalD, settotalD] = useState(cartasUsuario.reduce((total, element) => total + element.valor, 0));



    const noneBtn = () => {
        setdesaparecerBtn(true);
    }

    useEffect(() => {
        const suma = cartasDiler.reduce((total, element) => total + element.valor, 0)
        settotalD(suma);
    }, [cartasDiler])

    useEffect(() => {
        const suma = cartasUsuario.reduce((total, element) => total + element.valor, 0)
        settotalU(suma);

    }, [cartasUsuario])

    useEffect(() => {
        console.log(totalU);
    }, [totalU])

    useEffect(() => {
        console.log(totalD);
    }, [totalD])

    const pedircartaU = () => {
        if (totalU < 21) {
            const proxCard = numerorandom();
            const cartasCopia = [...cartas];
            cartasCopia.splice(proxCard, 1);
            setCartas(cartasCopia);
            setcartasUsuario([...cartasUsuario, cartas[proxCard]]);
        } else {
            if (totalU > totalD && totalU <= 21) {
                alert("Ganaste");
            } else if (totalU == 21 && totalD > 21) {
                alert("BlackJack");
            } else if (totalU < 21 && totalD > 21) {
                alert("Ganaste");
            } else if (totalD == totalU) {
                alert("Empate");
            } else if (totalD == 21 && totalU == 21) {
                alert("Empate");
            } else if (totalD > totalU && totalD <= 21) {
                alert("perdiste");
            } else if (totalU > 21) {
                alert("perdiste");
            }
        }

    }



    const cartaDiler = () => {
        if (totalD < 17) {
            const proxCard = numerorandom();
            const cartasCopia = [...cartas];
            cartasCopia.splice(proxCard, 1);
            setCartas(cartasCopia);
            setcartasDiler([...cartasDiler, cartas[proxCard]]);
        } else {
            if (totalU > totalD && totalU <= 21) {
                alert("Ganaste");
            } else if (totalU == 21 && totalD > 21) {
                alert("BlackJack");
            } else if (totalU < 21 && totalD > 21) {
                alert("Ganaste");
            } else if (totalD == totalU) {
                alert("empate");
            } else if (totalD == 21 && totalU == 21) {
                alert("Empate");
            } else if (totalD > totalU && totalD <= 21) {
                alert("perdiste");
            } else if (totalU > 21) {
                alert("perdiste");
            }
        }
    }






    return (
        <div className='rec'>
            <div className='rectangulo'>
            <div id='contador'>Puntuación:{totalU} <br></br> Puntuación Banca:{totalD}</div>
                <div className='Diler'>
                    <div className='card-diler'>
                    {cartasDiler.map((carta, i) => (
                        !desaparecerBtn?
                                i==1?
                                <img className='negra' key={i} src={carta.img} alt={`Carta ${i}`} />
                                :
                                <img key={i} src={carta.img} alt={`Carta ${i}`} />
                                :
                                <img key={i} src={carta.img} alt={`Carta ${i}`} />
                            ))}
                    </div>
                    <h2>Banca</h2>
                    <div className='Usuario'>
                        <div className='card-jugador'>
                            {cartasUsuario.map((carta, i) => (
                                <img key={i} src={carta.img} alt={`Carta ${i}`} />
                            ))}
                        </div>
                        
                        <h2>Jugador</h2>
                    </div>
                    <div className='Btn'>

                        {!desaparecerBtn && (
                            <>


                                <button className='Btn-pedir' onClick={pedircartaU} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>Pedir
                                </button>
                                <button className='Btn-plantarse' onClick={noneBtn}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>Parar
                                </button>


                            </>
                        )

                        }
                        <button className='Btn-diler' onClick={cartaDiler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>Banca
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
