import { combineReducers } from "redux";
import { users } from "./users";
import { contacts } from "./contacts";
import { filteredContact } from "./filteredContact";
import { contactDetail } from "./contactDetail";

const rootReducer = combineReducers({
  // users: users,
  data: contacts,
  filteredContact: filteredContact,
  contactDetail: contactDetail
});

export default rootReducer;