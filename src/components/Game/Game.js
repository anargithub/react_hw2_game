import React, { useState } from "react";
import "./Game.css";
import Button from "../Button/Button";
import Form from "../Form/Form";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs";

export default function Game ({ nameOne, nameTwo, setWinner }) {
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [currentPointsOne, setCurrentPointsOne] = useState(99);
  const [currentPointsTwo, setCurrentPointsTwo] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(true);
  const [randomNumber, setRandomNumber] = useState(null);


  const icons = [
    <BsFillDice1Fill />,
    <BsFillDice2Fill />,
    <BsFillDice3Fill />,
    <BsFillDice4Fill />,
    <BsFillDice5Fill />,
    <BsFillDice6Fill />,
  ];

  const roll = () => {
    const random = Math.floor(Math.random() * 6 + 1);
    setRandomNumber(random);
    if (random === 1) {
      if (currentPlayer) {
        setCurrentPointsOne(0);
      } else {
        setCurrentPointsTwo(0);
      }
      setCurrentPlayer(!currentPlayer);
    } else {
      if (currentPlayer) {
        setCurrentPointsOne(currentPointsOne + random);
      } else {
        setCurrentPointsTwo(currentPointsTwo + random);
      }
    }
  };

  const leave = () => {
    if (currentPlayer) {
      setPlayerOneScore(playerOneScore + currentPointsOne);
      if (playerOneScore + currentPointsOne >= 100) {
        setWinner({ win: true, name: nameOne });
   
      }
    } else {
      setPlayerTwoScore(playerTwoScore + currentPointsTwo);
      if (playerTwoScore + currentPointsTwo >= 100) {
        setWinner({ win: true, name: nameTwo });
      
      }
    }
    setCurrentPointsOne(0);
    setCurrentPointsTwo(0);
    setCurrentPlayer(!currentPlayer);
  };

  const newGame = () => {
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setCurrentPointsOne(0);
    setCurrentPointsTwo(0);
    setCurrentPlayer(true);
    setRandomNumber(null);
    setWinner({ win: false, name: "" });
  };

  return (
    <div className="game">
      <Form
        name={nameOne}
        isCurrent={currentPlayer}
        score={playerOneScore}
        currentPoints={currentPointsOne}
      />

      <div className="game_buttons">
        <Button buttonValue="NEW GAME" onClick={newGame} />
        {randomNumber && icons[randomNumber - 1]}

        <div className="game_buttons_two">
          <Button buttonValue="ROLL THE DICE" onClick={roll} />
          <Button buttonValue="LEAVE" onClick={leave} />
        </div>
      </div>

      <Form
        name={nameTwo}
        isCurrent={!currentPlayer}
        score={playerTwoScore}
        currentPoints={currentPointsTwo}
      />
    </div>
  );
};

