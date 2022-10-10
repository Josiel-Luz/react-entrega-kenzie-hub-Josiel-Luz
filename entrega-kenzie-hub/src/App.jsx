import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LogPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/homoPage";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  return (
    <Routes>
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage user={user} />} />
    </Routes>
  );
}

export default App;
