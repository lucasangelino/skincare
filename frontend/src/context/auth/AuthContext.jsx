import * as React from "react";
import { AppContext } from "../app/AppContext";
import { AuthRequest, Request } from "../../helpers/fetch";
import { types } from "../../types/types";
export const AuthContext = React.createContext();

const initialState = {
  uid: null,
  pending: true,
  logged: false,
  name: null,
  email: null,
  oneline: false,
};

export function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(initialState);
  const { dispatch } = React.useContext(AppContext);

  const login = async (email, password) => {
    const resp = await Request("login", { email, password }, "POST");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { id, email, online, name } = resp.user;
      setAuth({
        uid: id,
        pending: false,
        logged: true,
        name,
        email,
        online,
      });
    }
    return resp.ok;
  };

  const register = async (name, email, password) => {
    const resp = await Request("login/new", { name, email, password }, "POST");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { id, email, online, name } = resp.user;
      setAuth({
        uid: id,
        pending: false,
        logged: true,
        name,
        email,
        online,
      });
    }
    return resp.ok;
  };

  const verifyToken = React.useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth({
        uid: null,
        pending: false,
        logged: false,
        name: null,
        email: null,
        oneline: false,
      });
      return false;
    }
    const resp = await AuthRequest("login/renew");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const { id, email, online, name } = resp.user;

      setAuth({
        uid: id,
        pending: false,
        logged: true,
        name,
        email,
        online,
      });
      return true;
    } else {
      setAuth({
        uid: null,
        pending: false,
        logged: false,
        name: null,
        email: null,
        oneline: false,
      });
      return false;
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({
      uid: null,
      pending: false,
      logged: false,
    });
    dispatch({ type: types.LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
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
