import React from "react";

import * as actions from "./actionCreators";
import { connect } from "react-redux";

const IncNum = props => {
  return (
    <div>
      <h1>Your random number is</h1>
      <p>{props.numberInc}</p>
    </div>
  );
};

export default connect(
  state => ({ numberInc: state.numberInc }),
  dispatch => ({})
)(IncNum);
