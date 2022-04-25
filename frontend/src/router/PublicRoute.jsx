import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export const PublicRouter = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return auth.logged ? <Navigate to="/" /> : children;
};
