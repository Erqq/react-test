import { SET_NUMBER, SET_SEARCH_TERM, ADD_API_DATA } from "./actions";

export function setNumberInc(numberInc) {
  return { type: SET_NUMBER, payload: numberInc };
}
export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}
