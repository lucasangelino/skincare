import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export const PrivateRouter = ({ children }) => {
  const { auth } = useContext(AuthContext);
  // TODO: Cuando la base de datos vuelva a estar operativa, se puede descomentar esta linea 
  return !auth.logged ? children : <Navigate to="/auth/login" />;
};
