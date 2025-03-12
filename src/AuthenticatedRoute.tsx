import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const AuthenticatedApp = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
