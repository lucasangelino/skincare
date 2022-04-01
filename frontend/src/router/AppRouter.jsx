import * as React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Chat from "../pages/Chat";

// Auth Router
import AuthRouter from "./AuthRouter";

export default function AppRouter() {
  const { auth, verifyToken } = React.useContext(AuthContext);

  if (auth.pending) {
    return <h1>Waiting</h1>;
  }

  console.log("AUTH: ", auth);

  React.useEffect(() => {
    console.log("verifyToken");
    verifyToken();
  }, [verifyToken]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/*" element={<AuthRouter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
