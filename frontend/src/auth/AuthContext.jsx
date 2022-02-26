import * as React from "react";
import { Request } from "../helpers/fetch";
export const AuthContext = React.createContext();

const initialState = {
  uid: null,
  pending: true,
  logged: false,
  name: null,
  email: null,
};

export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(initialState);

  const login = async (email, password) => {
    console.log(email, password);
    const resp = await Request("login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    console.log(resp);
  };

  const register = (name, email) => {};

  const verifyToken = React.useCallback(async () => {}, []);

  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        register,
        verifyToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
