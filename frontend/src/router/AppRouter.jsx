import * as React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

// Auth Router
import AuthRouter from "./AuthRouter";
import { PublicRouter } from "./PublicRoute";
import { PrivateRouter } from "./PrivateRoute";

// routes
import routes from "./routes.js";

// App
import { App } from "../components/core/App";
import { Layout } from "../components/core/Layout";
import { ProductsCompatibility } from "../pages/ProductsCompatibility";
import { LoadingApp } from "../components/framework/LoadingApp";

export default function AppRouter() {
  const { auth, verifyToken } = React.useContext(AuthContext);

  // TODO: Cuando la base de datos vuelva a estar operativa, se pueden descomentar estas lineas

  React.useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  if (auth.pending) {
    return <LoadingApp />;
  }

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
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRouter>
                      <Layout>
                        <route.component />
                      </Layout>
                    </PrivateRouter>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
