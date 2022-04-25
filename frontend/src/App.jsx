import * as React from "react";
import AppRouter from "./router/AppRouter";

import { AuthProvider } from "./context/auth/AuthContext";
import { AppProvider } from "./context/app/AppContext";

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
