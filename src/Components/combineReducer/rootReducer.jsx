import Increment from "../reducer/Increment";
import Decrement from "../reducer/Decrement";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  increse: Increment,
  decrese: Decrement,
});
export default rootReducer;
