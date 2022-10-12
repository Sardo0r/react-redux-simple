import { combineReducers } from "redux";
import countReducer from "./count.reducer";

const rootReducer = combineReducers({
  countReducer
});

export default rootReducer;
