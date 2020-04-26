import { CREATE_USER, SELECTED_USER } from "../actions/actionsType";

const initState = {
  users: [],
  selectedUser: ''
};

export const users = (state = initState, action) => {
  switch (action.type) {
    case CREATE_USER:
      console.log(action.payload);
      return {
        ...state,
      users: [action.payload, ...state.users]
      };
    case SELECTED_USER:
      
      return { selectedUser: action.payload}
    default:
      return state;
  }
}