import { combineReducers } from "redux";
import { users } from "./users";
import { contacts } from "./contacts";

const rootReducer = combineReducers({
  users: users,
  data: contacts
});

export default rootReducer;