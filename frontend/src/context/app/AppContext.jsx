import * as React from "react";
import { AppReducer } from "./appReducer";

export const AppContext = React.createContext();
AppContext.displayName = "AppContext";

const initialState = {
  uid: "",
  user: {},
};

export const AppProvider = ({ children }) => {
  const [chatState, dispatch] = React.useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ chatState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
