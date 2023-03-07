import React from "react";
//styled
import {
  DivImg,
  Img,
  DivTitle,
  CardContainer,
} from "./styleds/Card";

const Cards = ({ card }) => {
  const { id, image, title } = card;

  return (
    
      <CardContainer>
        <DivImg>
          <Img src={image} alt="character image" />
        </DivImg>

        <DivTitle>
          <h2>{title}</h2>
        </DivTitle>
      </CardContainer>
    
  );
};

export default Cards;
