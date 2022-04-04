import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export const PrivateRouter = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return auth.logged ? children : <Navigate to="/auth/login" />;
};
