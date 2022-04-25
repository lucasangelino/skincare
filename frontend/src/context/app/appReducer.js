import { types } from "../../types/types";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return {
        uid: "",
        user: {},
      };

    default:
      return state;
  }
};
