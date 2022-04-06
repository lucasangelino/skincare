import { types } from "../../types/types";

export const ChatReducer = (state, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case types.ACTIVATE_CHAT:
      if (state.activeChat === action.payload) return state;
      return {
        ...state,
        activeChat: action.payload,
        messages: [],
      };
    case types.NEW_MESSAGE:
      if (
        state.activeChat === action.payload.from ||
        state.activeChat === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    case types.SET_MESSAGES:
      return {
        ...state,
        messages: [...action.payload],
      };
    case types.LOGOUT:
      console.log("terminate session");
      return {
        uid: "",
        activeChat: null,
        users: [],
        messages: [],
      };

    default:
      return state;
  }
};
