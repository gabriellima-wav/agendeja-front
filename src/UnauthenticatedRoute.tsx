import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const bgImage = new URL("./assets/bg.png", import.meta.url).href;
console.log("Background Image URL:", bgImage);

const UnauthenticatedApp = () => {
  return (

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>

  );
};

export default UnauthenticatedApp;
