import * as React from "react";
import { createContext } from "react";
import { useSocket } from "../context/useSocket";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "./chat/ChatContext";
import { types } from "../types/types";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const { socket, online, connect, disconnect } = useSocket(
    "http://localhost:8080"
  );
  const { auth } = React.useContext(AuthContext);
  const { dispatch } = React.useContext(ChatContext);

  React.useEffect(() => {
    if (auth.logged) {
      connect();
    }
  }, [auth, connect]);

  React.useEffect(() => {
    if (!auth.logged) {
      disconnect();
    }
  }, [auth, disconnect]);

  React.useEffect(() => {
    socket?.on("user-list", (users) => {
      dispatch({ type: types.SET_USERS, payload: users });
    });
  }, [socket, dispatch]);

  React.useEffect(() => {
    socket?.on("new-message", (message) => {
      console.log(message);
      dispatch({
        type: types.NEW_MESSAGE,
        payload: message,
      });
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
