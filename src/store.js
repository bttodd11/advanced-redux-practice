import { createStore } from "redux";
import state from "./state.js";
import reducers from "./reducers";



const store = createStore(reducers, state);

export default store;
