import { SELECTED_USER } from "../actions/actionsType";

const initState = [];

export const selectedUser = (state = initState, action) => {
  switch (action.type) {
    case SELECTED_USER:
      return action.payload;
    default:
      return state;
  }
}