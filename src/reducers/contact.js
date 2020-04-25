import { CREATE_USER } from "../actions/actionsType";

const initState = {
  users: [],
  contacts: [],
};

export const contacts = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log(action.payload);
      return {
        ...state,
      users: [action.payload, ...state.users]
      }
    default:
      return state;
  }
}