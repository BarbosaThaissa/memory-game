import React, { useState } from "react";
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
  const characters = [
    {
      id: 1,
      image: Gumball,
      title: "Gumball",
    },
    {
      id: 2,
      image: Anais,
      title: "Anais",
    },
    {
      id: 3,
      image: Carrie,
      title: "Carrie",
    },
    {
      id: 4,
      image: Darwin,
      title: "Darwin",
    },
    {
      id: 5,
      image: Joe,
      title: "Joe",
    },
    {
      id: 6,
      image: Jojo,
      title: "Jojo",
    },
    {
      id: 7,
      image: Larry,
      title: "Larry",
    },
    {
      id: 8,
      image: Nicole,
      title: "Nicole",
    },
    {
      id: 9,
      image: Penny,
      title: "Penny",
    },
    {
      id: 10,
      image: Richard,
      title: "Richard",
    },
    {
      id: 11,
      image: Sarah,
      title: "Sarah",
    },
    {
      id: 12,
      image: Tobias,
      title: "Tobias",
    },
  ];

  //funcao para atualizar o Score, Para atualizar o BestScore e outra Para renderizar aleatorio


  return (
    <GameContainer>
      <DivSpan>
        <SpanScores cor="red">Current score: 1 </SpanScores>
        <SpanScores cor="green">Best score: 10 </SpanScores>
      </DivSpan>
      <CardStyle>
        {characters.map((card) => {
          return <Cards card={card} key={card.id} />;
        })}
      </CardStyle>
    </GameContainer>
  );
};

export default Game;
