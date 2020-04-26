import { CREATE_USER } from "../actions/actionsType";

const initState = {
  users: [],
};

export const users = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    default:
      return state;
  }
};
