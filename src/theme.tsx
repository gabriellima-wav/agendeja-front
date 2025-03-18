import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#295650",
    },
    secondary: {
      main: "#8effa9",
    },
    background: {
      default: "#FCFCFC",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  spacing: 8,
});

export default theme;
