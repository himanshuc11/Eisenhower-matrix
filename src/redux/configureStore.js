import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";
import gridReducer from "./ducks/grid";

const reducer = combineReducers({
  counter: counterReducer,
  grid: gridReducer,
});
const store = createStore(reducer);

export default store;
