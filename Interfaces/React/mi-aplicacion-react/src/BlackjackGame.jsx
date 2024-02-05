// BlackjackGame.jsx
import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Row, Col, Alert } from 'react-bootstrap';

const BlackjackGame = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [playerSum, setPlayerSum] = useState(0);
  const [dealerSum, setDealerSum] = useState(0);
  const [gameInProgress, setGameInProgress] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    setPlayerCards([]);
    setDealerCards([]);
    setDeck([]);
    setPlayerSum(0);
    setDealerSum(0);
    setGameInProgress(true);
    setWinner('');
    createDeck();
    dealInitialCards();
  };

  const createDeck = () => {
    const suits = ['Picas', 'Corazones', 'Rombos', 'Tréboles'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const newDeck = [];
    for (const suit of suits) {
      for (const value of values) {
        newDeck.push({ suit, value });
      }
    }

    // Barajar la baraja
    for (let i = newDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }

    setDeck(newDeck);
  };

  const dealInitialCards = () => {
    const playerCard = drawCard();
    const dealerCard1 = drawCard();
    const dealerCard2 = drawCard();

    setPlayerCards([playerCard]);
    setDealerCards([dealerCard1, dealerCard2]);

    updateSum(playerCard, 'player');
    updateSum(dealerCard1, 'dealer');
    updateSum(dealerCard2, 'dealer');
  };

  const drawCard = () => {
    const [drawnCard, ...remainingDeck] = deck;
    setDeck(remainingDeck);
    return drawnCard;
  };

  const updateSum = (card, player) => {
    const sum = player === 'player' ? playerSum : dealerSum;
    const cardValue = getCardValue(card);
    const newSum = sum + cardValue;

    if (player === 'player') {
      setPlayerSum(newSum);
    } else {
      setDealerSum(newSum);
    }

    checkForBust(newSum, player);
  };

  const getCardValue = (card) => {
    const value = card.value;
    if (value === 'K' || value === 'Q' || value === 'J') {
      return 10;
    } else if (value === 'A') {
      return 11;
    } else {
      return parseInt(value);
    }
  };

  const checkForBust = (sum, player) => {
    if (sum > 21) {
      endRound(player === 'player' ? 'dealer' : 'player');
    }
  };

  const hit = () => {
    const newCard = drawCard();
    setPlayerCards([...playerCards, newCard]);
    updateSum(newCard, 'player');
  };

  const stand = () => {
    while (dealerSum < 17) {
      const newCard = drawCard();
      setDealerCards([...dealerCards, newCard]);
      updateSum(newCard, 'dealer');
    }

    determineWinner();
  };

  const determineWinner = () => {
    if (playerSum > dealerSum && playerSum <= 21) {
      endRound('player');
    } else {
      endRound('dealer');
    }
  };

  const endRound = (roundWinner) => {
    setGameInProgress(false);
    setWinner(roundWinner);
    alert(`¡${roundWinner === 'player' ? 'Jugador' : 'Crupier'} gana la ronda!`);
  };

  return (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col>
          <Button variant="primary" onClick={hit} disabled={!gameInProgress}>
            Solicitar Carta
          </Button>
        </Col>
        <Col>
          <Button variant="warning" onClick={stand} disabled={!gameInProgress}>
            Plantarse
          </Button>
        </Col>
        <Col>
          <Button variant="success" onClick={startNewRound} disabled={gameInProgress}>
            Nueva Ronda
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Crupier</h2>
          <Card>
            <Card.Body>
              {gameInProgress ? (
                <>
                  <Card.Text>{dealerCards.length > 0 && dealerCards[0].value}</Card.Text>
                  <Card.Text>Suma: {dealerSum}</Card.Text>
                </>
              ) : (
                dealerCards.map((card, index) => (
                  <Card.Text key={index}>{card.value}</Card.Text>
                ))
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <h2>Jugador</h2>
          <Card>
            <Card.Body>
              {playerCards.map((card, index) => (
                <Card.Text key={index}>{card.value}</Card.Text>
              ))}
              <Card.Text>Suma: {playerSum}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {winner && (
        <Row className="mt-3">
          <Col>
            <Alert variant={winner === 'player' ? 'success' : 'danger'}>
              ¡{winner === 'player' ? 'Jugador' : 'Crupier'} gana la partida!
            </Alert>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BlackjackGame;
