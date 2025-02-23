import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Toolbar>
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
          }}
        />
        <Typography variant="h6" sx={{ ml: 2 }}>
          AgendeJa
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
