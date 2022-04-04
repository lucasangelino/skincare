import { types } from "../../types/types";

export const ChatReducer = (state, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
