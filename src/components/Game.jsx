import React, { useState, useEffect } from "react";
//componente and syled
import Cards from "./Cards";
import { GameContainer, DivSpan, SpanScores, CardStyle } from "./styleds/Game";

//imgs
import Gumball from "../img/Gumball.png";
import Anais from "../img/Anais.png";
import Carrie from "../img/Carrie.png";
import Darwin from "../img/Darwin.png";
import Joe from "../img/Joe.png";
import Jojo from "../img/Jojo.png";
import Larry from "../img/Larry.png";
import Nicole from "../img/Nicole.png";
import Penny from "../img/Penny.jpg";
import Richard from "../img/Richard.png";
import Sarah from "../img/sarah.png";
import Tobias from "../img/tobias.png";

const Game = () => {
  const [clicked, setClicked] = useState([]);

  const characters = [
    { id: 1, image: Gumball, title: "Gumball" },
    { id: 2, image: Anais, title: "Anais" },
    { id: 3, image: Carrie, title: "Carrie" },
    { id: 4, image: Darwin, title: "Darwin" },
    { id: 5, image: Joe, title: "Joe" },
    { id: 6, image: Jojo, title: "Jojo" },
    { id: 7, image: Larry, title: "Larry" },
    { id: 8, image: Nicole, title: "Nicole" },
    { id: 9, image: Penny, title: "Penny" },
    { id: 10, image: Richard, title: "Richard" },
    { id: 11, image: Sarah, title: "Sarah" },
    { id: 12, image: Tobias, title: "Tobias" },
  ];

  //Renderizar os cards aleatorio
  const [positions, setPositions] = useState(
    characters.map((value, index) => index)
  );

  const shuffleArray = (array) => {
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
      const j = Math.floor(Math.random() * shuffledArray.length);
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const randomizeCards = () => {
    setPositions(shuffleArray(positions));
  };
  //Atualizar o Score
  const [scores, setScores] = useState(0);
  const [reset, setReset] = useState(false);
  const [bestScores, setBestScores] = useState(0);

  const incrementScore = () => {
    setScores(scores + 1);
  };

  const handleCardsClick = (title) => {
    setClicked([...clicked, title]);
  };

  const gameOver = () => {
    if (scores > bestScores) {
      setBestScores(scores);
    }

    setScores(0);
    setClicked([]);
    setReset(true);
  };

  //salvando bestScore no localStorege
  useEffect(() => {
    const localBest = window.localStorage.getItem("bestScores");
    localBest && setBestScores(localBest);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bestScores", bestScores);
  }, [bestScores]);

  return (
    <GameContainer>
      <DivSpan>
        <SpanScores cor="red">Current score: {scores} </SpanScores>
        <SpanScores cor="green">Best score: {bestScores} </SpanScores>
      </DivSpan>
      <CardStyle>
        {positions.map((position) => {
          return (
            <Cards
              key={characters[position].id}
              image={characters[position].image}
              title={characters[position].title}
              reset={reset}
              clicked={clicked}
              handleCardsClick={handleCardsClick}
              incrementScore={incrementScore}
              gameOver={gameOver}
              randomizeCards={randomizeCards}
            />
          );
        })}
      </CardStyle>
    </GameContainer>
  );
};

export default Game;
