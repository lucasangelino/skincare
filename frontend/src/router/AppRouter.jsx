import * as React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

// Auth Router
import AuthRouter from "./AuthRouter";
import { PublicRouter } from "./PublicRoute";
import { PrivateRouter } from "./PrivateRoute";
import Chat from "../pages/Chat";

export default function AppRouter() {
  const { auth, verifyToken } = React.useContext(AuthContext);

  // if (auth.pending) {
  //   return <h1>Waiting</h1>;
  // }

  React.useEffect(() => {
    console.log("verifyToken");
    verifyToken();
  }, [verifyToken]);

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/auth/*"
              element={
                <PublicRouter>
                  <AuthRouter />
                </PublicRouter>
              }
            />
            <Route
              path="/*"
              element={
                <PrivateRouter>
                  <Chat />
                </PrivateRouter>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
