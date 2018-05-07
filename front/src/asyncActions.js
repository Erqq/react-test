import axios from "axios";
import { addAPIData } from "./actionCreators";

export default function getAPIDetails(username) {
  return dispatch => {
    axios
      .get(`http://localhost:3001/tweets`)
      .then(response => {
        dispatch(addAPIData(response.data));
      })
      .catch(error => {
        console.error("axios error", error);
      });
  };
}
