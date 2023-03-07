import React from "react";
import styled from "styled-components";
import Toggle from "./Toggle";

const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 1.5rem;
  align-items: center;
  justify-content: space-between;
  background-color: #00bbf9;
  color: white;

  & > h1 {
    word-spacing: -12px;
  }

  & > div {
    padding-right: 1rem;
  }
`;

const Header = (props) => {
  return (
    <HeaderContainer>
      <h1>The Amazing World Of Gumball: Memory Game</h1>
      <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
    </HeaderContainer>
  );
};

export default Header;
