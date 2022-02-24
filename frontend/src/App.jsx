import * as React from "react";
import AppRouter from "./router/AppRouter";

import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
