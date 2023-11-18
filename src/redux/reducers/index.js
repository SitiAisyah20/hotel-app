import { combineReducers } from "redux";
import hotelReducer from "./hotelReducer";

const rootReducer = combineReducers({
  hotels: hotelReducer,
});

export default rootReducer;
