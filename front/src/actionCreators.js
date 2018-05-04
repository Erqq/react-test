import { SET_NUMBER } from "./actions";

export function setNumberInc(numberInc) {
  return { type: SET_NUMBER, payload: numberInc };
}
