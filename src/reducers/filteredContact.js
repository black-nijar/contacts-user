import { SEARCH_CONTACT } from "../actions/actionsType";

const initState = [];

export const filteredContact = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_CONTACT:
      const { searchText, contacts } = action.payload;
      const filteredResult = contacts.filter((contact) => {
        const name = contact.contactName.toLowerCase();
        const filter = searchText.toLowerCase();
        return name.includes(filter);
      });
      return filteredResult;
    default:
      return state;
  }
};