import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import SearchProvider from "./context/SearchProvider";
import AlertaState from "./context/alertas/alertaState";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <AlertaState>
          <AppRouter />
        </AlertaState>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
