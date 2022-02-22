import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RecoverAccount from "../pages/Recover";

export default function AuthRouter() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route path="/auth/recover" element={<RecoverAccount />} />
    </Routes>
  );
}
