import { Toolbar, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();

  return (
    <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Box
        component={Link}
        to="/home"
        sx={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          padding: "6px 12px",
          borderRadius: "4px",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
          marginRight: "24px", // Adiciona um espaço à direita
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            height: 50,
            width: 50,
            borderRadius: "50%",
            marginRight: "12px",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            color: "#fff",
            textDecoration: "none",
          }}
        >
          AgendeJa
        </Typography>
      </Box>
    </Toolbar>
  );
};

export default Header;
