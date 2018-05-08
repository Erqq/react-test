import { SET_NUMBER, SET_SEARCH_TERM, ADD_API_DATA } from "./actions";
import { combineReducers } from "redux";

const initialState = 0;

const numberInc = (state = initialState, action) => {
  if (action.type === SET_NUMBER) {
    return action.payload;
  }
  return state;
};
const searchTerm = (state = "", action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiDataInitialState = {
  data: []
};
const apiData = (state = apiDataInitialState, action) => {
  if (action.type === ADD_API_DATA) {
    return {
      ...state,
      data: action.payload.data
    };

    // Object.assign({}, state, {
    //  [action.payload.apiData]: action.payload
    //});
  }
  return state;
};
const rootReducer = combineReducers({ numberInc, searchTerm, apiData });
export default rootReducer;
