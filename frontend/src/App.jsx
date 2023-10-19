import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import SearchProvider from "./context/SearchProvider"


function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <AppRouter />
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;