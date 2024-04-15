import {Routes , Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import Movies from "./pages/components/Movies";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
        {/* home page  */}
      <Route path="/home" element={<HomePage/>}/>
    </Routes>
    </>
  );
}

export default App;
