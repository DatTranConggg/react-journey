import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer); // create a store with 3 parameters: reducer, preloadedState, enhancer

export default store;
