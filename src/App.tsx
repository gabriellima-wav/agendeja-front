import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import LoginPage from "./pages/LoginPage";
import { CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};

export default App;
