import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import SearchProvider from "./context/SearchProvider";
import AlertaState from "./context/alertas/alertaState";
import LoginProvider from "./context/login/LoginProvider";

function App() {
  return (
    <BrowserRouter>
      <LoginProvider>
        <SearchProvider>
          <AlertaState>
            <AppRouter />
          </AlertaState>
        </SearchProvider>
      </LoginProvider>
    </BrowserRouter>
  );
}

export default App;