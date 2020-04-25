import { combineReducers } from "redux";
import { contacts } from "./contact";

const rootReducer = combineReducers({
  data: contacts
});

export default rootReducer;