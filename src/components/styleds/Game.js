import styled from "styled-components";
import { lightTheme, darkTheme } from '../theme';

export const GameContainer = styled.main`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme.body};
`;

export const DivSpan = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-around;
  width: 60rem;

  @media (max-width: 750px) {
    flex-direction: column;
    width: 250px;
    gap: 3rem;
  }
`;

export const SpanScores = styled.span`
  padding: 0.5rem;
  background-color: ${(props) => (props.cor === "red" ? "#f94144" : "#d9ed92")};
  width: 35%;
  font-size: 2rem;
  border-radius: 20px;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const CardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
