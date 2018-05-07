import React, { Component } from "react";
import styled from "styled-components";
import { setSearchTerm } from "./actionCreators";
import { connect } from "react-redux";
import getAPIDetails from "./asyncActions";
import axios from "axios";

const Button = styled.input`
  font-size: 1em;
  margin: 1em;
  background-color: #dbb911;
  padding: 0.25em 1em;
  border: 5px solid;
  border-radius: 3px;
`;
const Input = styled.input`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 3px;
`;
class Tweets extends Component {
  componentDidMount() {}
  getTweets(e) {
    e.preventDefault();
    this.props.getAPIData();
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.getTweets(e)}>
          <Input
            type="text"
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            placeholder="search"
          />
          <Button type="submit" value="Search" />
        </form>
        <div>{this.props.apiData}</div>
      </div>
    );
  }
}

export default connect(
  state => ({ searchTerm: state.searchTerm, apiData: state.apiData.data }),
  dispatch => ({
    handleSearchTermChange(event) {
      dispatch(setSearchTerm(event.target.value));
    },
    getAPIData() {
      dispatch(getAPIDetails());
    }
  })
)(Tweets);
