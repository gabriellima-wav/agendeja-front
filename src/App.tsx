import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import LoginPage from "./pages/LoginPage";
import { CssBaseline, Box } from "@mui/material";

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
        <LoginPage />
      </Box>
    </ThemeProvider>
  );
};

export default App;
