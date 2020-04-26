import {
  ADD_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
} from "../actions/actionsType";

const initState = {
  contacts: [],
  selectedContact: [],
};
export const contacts = (state = initState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.contactId === action.payload
            ? {
                ...contact,
                isEdit: true,
              }
            : contact
        ),
      };
    case UPDATE_CONTACT:
      const {
        contactId,
        newContactName,
        newEmailId,
        newPhoneNumber,
        newAddress,
        newCompany,
      } = action.payload;
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.contactId === contactId
            ? {
                ...contact,
                contactName: newContactName,
                emailId: newEmailId,
                phoneNumber: newPhoneNumber,
                company: newCompany,
                address: newAddress,
                isEdit: false,
              }
            : contact
        ),
      };
    default:
      return state;
  }
};