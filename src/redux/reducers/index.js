import { combineReducers } from "redux";
import hotelReducer from "./hotelReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  hotels: hotelReducer,
  user: userReducer
});

export default rootReducer;

