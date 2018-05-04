import React, { Component } from "react";
import styled from "styled-components";
import * as actions from "./actionCreators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import IncNum from "./IncNum";
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  background-color: #dbb911;
  padding: 0.25em 1em;
  border: 5px solid;
  border-radius: 3px;
`;

class Calc extends Component {
  click = () => {
    let rand = Math.floor(0 + Math.random() * (10000 - 0));

    this.props.actions.setNumberInc(rand);
  };
  render() {
    return (
      <div>
        <Button onClick={this.click}>Random</Button>
        <IncNum />
      </div>
    );
  }
}

export default connect(
  state => ({ numberInc: state.numberInc }),
  dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(Calc);
