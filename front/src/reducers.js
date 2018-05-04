import { SET_NUMBER } from "./actions";
import { combineReducers } from "redux";

const initialState = 0;

const numberInc = (state = initialState, action) => {
  if (action.type === SET_NUMBER) {
    return action.payload;
  }
  return state;
};
const asd = (state = initialState, action) => {
  if (action.type === SET_NUMBER) {
    return action.payload;
  }
  return state;
};
const rootReducer = combineReducers({ numberInc, asd });
export default rootReducer;
