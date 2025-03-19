import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.primary.main }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
          }}
        />
        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            color: "#fff",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: "4px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              textDecoration: "none",
            },
          }}
        >
          AgendeJa
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
