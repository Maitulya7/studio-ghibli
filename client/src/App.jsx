import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import { ApiProvider } from "./ApiContext";
import SingleMoviePage from "./pages/SingleMoviePage";
function App() {
  return (
    <>
      <ApiProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* home page  */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/movie/:id" element={<SingleMoviePage />} />
        </Routes>
      </ApiProvider>
    </>
  );
}

export default App;
