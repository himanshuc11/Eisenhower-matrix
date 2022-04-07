import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";
import gridReducer from "./ducks/grid";

const reducer = combineReducers({
  grid: gridReducer,
});

const store = createStore(reducer);

function persistMatrixInLocalStorage() {
  const state = store.getState();
  localStorage.setItem("matrix", JSON.stringify(state.grid));
}
store.subscribe(persistMatrixInLocalStorage);

export default store;
