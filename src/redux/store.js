import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; 

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// console to debuging redux
console.log('onCreate store : ', store.getState());
store.subscribe(() => {
  console.log('onUpdate store : ', store.getState());
})