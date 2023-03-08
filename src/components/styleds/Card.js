import styled from "styled-components";
import { lightTheme, darkTheme } from "../theme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 230px;
  width: 170px;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  transition: transform 0.3s ease 0s;
  cursor: pointer;
  border: ${({ theme }) => theme.border};

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 550px) {
    height: 220px;
    width: 160px;
  }
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Img = styled.img`
  max-height: 150px;

  @media (max-width: 550px) {
    max-height: 140px;
  }
`;

export const DivTitle = styled.div`
  & > h2 {
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }
`;
