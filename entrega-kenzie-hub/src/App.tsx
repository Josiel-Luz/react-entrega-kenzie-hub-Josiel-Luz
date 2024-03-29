import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LogPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/homoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
