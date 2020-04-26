import { combineReducers } from "redux";
import { users } from "./users";
import { contacts } from "./contacts";
import { filteredContact } from "./filteredContact";

const rootReducer = combineReducers({
  // users: users,
  data: contacts,
  filteredContact: filteredContact
});

export default rootReducer;