import axios from "axios";
import { addAPIData } from "./actionCreators";

export default function getAPIDetails() {
  return dispatch => {
    axios
      .get(`http://localhost:3001/tweets`)
      .then(response => {
        console.log(response);

        dispatch(addAPIData(response));
      })
      .catch(error => {
        console.error("axios error", error);
      });
  };
}
