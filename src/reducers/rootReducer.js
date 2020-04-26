import { combineReducers } from "redux";
import { users } from "./users";
import { contacts } from "./contacts";
import { filteredContact } from "./filteredContact";
import { contactDetail } from "./contactDetail";
import { selectedUser } from "./selectedUser";

const rootReducer = combineReducers({
  rootUsers: users,
  selectedUser: selectedUser,
  data: contacts,
  filteredContact: filteredContact,
  contactDetail: contactDetail,
});

export default rootReducer;
