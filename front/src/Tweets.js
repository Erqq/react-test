import React, { Component } from "react";
import styled from "styled-components";
import { setSearchTerm } from "./actionCreators";
import { connect } from "react-redux";
import getAPIDetails from "./asyncActions";

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
  componentDidMount() {
    console.log("didmount");
    console.log(this.props.getAPIData());

    this.props.getAPIData();
  }
  getTweets(e) {
    e.preventDefault();
    console.log("asd");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.getTweets}>
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
  state => ({ searchTerm: state.searchTerm, apiData: state.apiData.name }),
  (dispatch, ownProps) => ({
    handleSearchTermChange(event) {
      dispatch(setSearchTerm(event.target.value));
    },
    getAPIData() {
      dispatch(getAPIDetails());
    }
  })
)(Tweets);
