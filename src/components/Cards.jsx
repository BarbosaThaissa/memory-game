import React from "react";
//styled
import { DivImg, Img, DivTitle, CardContainer } from "./styleds/Card";

const Cards = (props) => {
  const handleClick = () => {
    if (props.clicked.includes(props.title)) {
      props.gameOver();
      props.randomizeCards();
    } else {
      props.incrementScore();
      props.handleCardsClick(props.title);
      props.randomizeCards();
    }
  };

  return (
    <CardContainer onClick={handleClick}>
      <DivImg>
        <Img src={props.image} alt="character image" />
      </DivImg>

      <DivTitle>
        <h2>{props.title}</h2>
      </DivTitle>
    </CardContainer>
  );
};

export default Cards;
