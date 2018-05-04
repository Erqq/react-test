import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;
const click = e => {};
const Calc = props => {
  return (
    <div>
      <Button onClick={click}>Random</Button>
    </div>
  );
};

export default Calc;
