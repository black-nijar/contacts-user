import {
  CREATE_USER,
  SELECTED_USER,
  ADD_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
  CONTACT_DETAIL,
  SEARCH_CONTACT,
} from "./actionsType";

// CREATE
export const createUser = (userData) => {
  return {
    type: CREATE_USER,
    payload: userData,
  };
};

// SELECTD USER
export const selectedUser = (userId) => {
  console.log("Select", userId);
  return {
    type: SELECTED_USER,
    payload: userId,
  };
};

// ADD CONTACT
export const addContact = (data) => {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};

// EDIT CONTACT
export const editContact = (id) => {
  return {
    type: EDIT_CONTACT,
    payload: id,
  };
};

// UPDATE CONTACT
export const updateContact = (data) => {
  return {
    type: UPDATE_CONTACT,
    payload: data,
  };
};

// SELECT CONTACT
export const contactDetail = (contactId, contacts) => {
   console.log("ID", contactId, contacts);
  return {
    type: CONTACT_DETAIL,
    payload: {contactId, contacts},
  };
};

export const searchContact = (searchText, contacts) => {
  return {
    type: SEARCH_CONTACT,
    payload: {searchText, contacts}
  }
}