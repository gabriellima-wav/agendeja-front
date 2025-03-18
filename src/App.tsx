import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import UnauthenticatedApp from "./UnauthenticatedRoute";
import AuthenticatedApp from "./AuthenticatedRoute";
import { AuthProvider, useAuth } from "./AuthContext";

const AppContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
