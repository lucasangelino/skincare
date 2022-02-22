import * as React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Chat from "../pages/Chat";

// Auth Router
import AuthRouter from "./AuthRouter";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/*" element={<AuthRouter />} />
      </Routes>
    </BrowserRouter>
  );
}
