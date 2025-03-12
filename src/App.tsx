import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { CssBaseline } from "@mui/material";
import UnauthenticatedApp from "./UnauthenticatedRoute";
import AuthenticatedApp from "./AuthenticatedRoute";

const isAuthenticated = true;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
            {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </ThemeProvider>
  );
};

export default App;
