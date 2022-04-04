import * as React from "react";
import { ChatReducer } from "./chatReducer";

export const ChatContext = React.createContext();
ChatContext.displayName = "ChatContext";

const initialState = {
  uid: "",
  aciveChat: null,
  users: [],
  messages: [],
};

export const ChatProvider = ({ children }) => {
  const [chatState, dispatch] = React.useReducer(ChatReducer, initialState);

  return (
    <ChatContext.Provider value={{ chatState, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
