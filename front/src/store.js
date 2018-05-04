import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducer, undefined, applyMiddleware(thunk));
export default store;
