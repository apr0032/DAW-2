import React, { useState, useEffect } from 'react';
import './Blackjack.css'; // Archivo de estilos CSS

const Blackjack = () => {
    const [deck, setDeck] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [playerScore, setPlayerScore] = useState(0);
    const [dealerScore, setDealerScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // Función para crear y barajar la baraja
    const createDeck = () => {
        const suits = ['♠', '♣', '♥', '♦'];
        const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const newDeck = [];
        for (let suit of suits) {
            for (let value of values) {
                newDeck.push({ value, suit });
            }
        }
        return shuffle(newDeck);
    };

    // Función para barajar la baraja
    const shuffle = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        return deck;
    };

    // Función para iniciar un nuevo juego
    const startGame = () => {
        setDeck(createDeck());
        setPlayerCards([]);
        setDealerCards([]);
        setPlayerScore(0);
        setDealerScore(0);
        setGameOver(false);

        // Repartir cartas al jugador y al crupier
        dealCard('player');
        dealCard('dealer');
        dealCard('player');
        dealCard('dealer');
    };

    // Función para repartir cartas
    const dealCard = (recipient) => {
        const newDeck = [...deck]; // Copiar el mazo actual para evitar mutaciones directas
        const card = newDeck.pop(); // Sacar la última carta del mazo
        setDeck(newDeck); // Actualizar el mazo

        if (recipient === 'player') {
            setPlayerCards([...playerCards, card]); // Añadir la carta al jugador
            updateScore(playerScore + getCardValue(card)); // Actualizar el puntaje del jugador
        } else {
            setDealerCards([...dealerCards, card]); // Añadir la carta al crupier
            updateScore(dealerScore + getCardValue(card), 'dealer'); // Actualizar el puntaje del crupier
        }
    };

    // Función para calcular el valor de una carta
    const getCardValue = (card) => {
        if (card && card.value) {
            const { value } = card;
            if (value === 'A') {
                return 11;
            } else if (['J', 'Q', 'K'].includes(value)) {
                return 10;
            } else {
                return parseInt(value);
            }
        }
        return 0;
    };

    // Función para actualizar el puntaje del jugador o la banca
    const updateScore = (score, recipient = 'player') => {
        if (recipient === 'player') {
            setPlayerScore(score);
        } else {
            setDealerScore(score);
        }
    };

    // Función para determinar si hay un ganador
    const determineWinner = () => {
        if (playerScore > 21) {
            return 'Dealer';
        } else if (dealerScore > 21) {
            return 'Player';
        } else if (playerScore === 21 && playerCards.length === 2) {
            return 'Player';
        } else if (dealerScore === 21 && dealerCards.length === 2) {
            return 'Dealer';
        } else if (playerScore > dealerScore) {
            return 'Player';
        } else if (dealerScore > playerScore) {
            return 'Dealer';
        } else {
            return 'Draw';
        }
    };

    // Efecto para determinar el ganador cuando el juego termina
    useEffect(() => {
        if (gameOver) {
            const winner = determineWinner();
            alert(`Game Over! ${winner === 'Draw' ? 'It\'s a draw!' : `${winner} wins!`}`);
        }
    }, [gameOver]);

    // Manejador para cuando el jugador pide una nueva carta
    const hit = () => {
        dealCard('player');
        if (playerScore > 21) {
            setGameOver(true);
        }
    };

    // Manejador para cuando el jugador se planta
    const stand = () => {
        // El crupier revela su segunda carta
        updateScore(dealerScore + getCardValue(dealerCards[1]), 'dealer');
        while (dealerScore < 17) {
            dealCard('dealer');
        }
        setGameOver(true);
    };

    return (
        <div className="table">
            <h1>Blackjack</h1>
            <div className="player-row">
                <div className="hand">
                    <h2>Your Hand</h2>
                    <ul>
                        {playerCards.map((card, index) => (
                            <li key={index} className="card">{`${card && card.value ? card.value : ''}${card && card.suit ? card.suit : ''}`}</li>
                        ))}
                    </ul>
                    <p>Score: {playerScore}</p>
                </div>
                <div className="controls">
                    <button onClick={hit} disabled={gameOver}>
                        Hit
                    </button>
                    <button onClick={stand} disabled={gameOver}>
                        Stand
                    </button>
                </div>
            </div>
            <div className="dealer-row">
                <div className="hand">
                    <h2>Dealer's Hand</h2>
                    <ul>
                        {dealerCards.map((card, index) => (
                            <li key={index} className="card">{`${card && card.value ? card.value : ''}${card && card.suit ? card.suit : ''}`}</li>
                        ))}
                    </ul>
                    <p>Score: {dealerScore}</p>
                </div>
                <div className="controls">
                    <button onClick={startGame} disabled={!gameOver}>
                        New Round
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blackjack;
