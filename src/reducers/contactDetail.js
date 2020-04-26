import { CONTACT_DETAIL } from "../actions/actionsType";

const initState = [];

export const contactDetail = (state = initState, action) => {
  switch (action.type) {
    case CONTACT_DETAIL:
      const { contactId, contacts } = action.payload;
      return {
        ...state,
        selectedContact: contacts.filter(
          (contact) => contact.contactId === contactId
        ),
      };
    default:
      return state;
  }
};
