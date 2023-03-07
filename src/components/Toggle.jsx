import React from "react";
import styled from "styled-components";

const InputCheckbox = styled.input`
  opacity: 0;
  position: absolute;
`;
const LabelTheme = styled.label`
  background-color: #111;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 26px;
  width: 50px;
  transform: scale(1.5);

  & > i {
    color: #f1c40f;
  }

  ${InputCheckbox}:checked + & > div {
    transform: translateX(24px);
  }
`;
const Ball = styled.div`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: 22px;
  width: 22px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
`;

const Toggle = (props) => {
  return (
    <div onChange={props.toggleTheme}>
      <InputCheckbox type="checkbox" id="chk" />
      <LabelTheme htmlFor="chk">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
        <Ball></Ball>
      </LabelTheme>
    </div>
  );
};

export default Toggle;
