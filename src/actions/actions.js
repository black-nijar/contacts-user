import { CREATE_USER } from "./actionsType";

export const createUser = (userData) => {
  return {
    type: CREATE_USER,
    payload: userData,
  };
};
