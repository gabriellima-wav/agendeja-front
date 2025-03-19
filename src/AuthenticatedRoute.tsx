import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import Header from "./components/Header";
import AppointmentsPage from "./pages/AppointmentsPage";
import Navbar from "./components/navbar/Navbar";

const AuthenticatedApp = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
};

export default AuthenticatedApp;
