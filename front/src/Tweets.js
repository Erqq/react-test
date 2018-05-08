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
  componentDidMount() {
    console.log("tweets mounted");
  }
  getTweets(e) {
    e.preventDefault();
    console.log(this.props.searchTerm);

    this.props.getAPIData(this.props.searchTerm);
  }

  addToDB() {
    console.log("addtoDB");
    axios
      .get("http://localhost:3001/tweetstodb?username=" + this.props.searchTerm)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("axios error", error);
      });
  }
  render() {
    const { apiData } = this.props;

    return (
      <div>
        <form onSubmit={e => this.getTweets(e)}>
          <Input
            type="text"
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            placeholder="search"
          />
          <Button
            type="button"
            onClick={e => this.addToDB(e)}
            value="Add to db"
          />
          <Button type="submit" value="Search" />
        </form>

        <div>
          <h1>Tweets by {this.props.searchTerm}</h1>
          {apiData.map(tweet => {
            return <h2 key={tweet.id}>{tweet.text}</h2>;
          })}
        </div>
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
    getAPIData(username) {
      dispatch(getAPIDetails(username));
    }
  })
)(Tweets);
