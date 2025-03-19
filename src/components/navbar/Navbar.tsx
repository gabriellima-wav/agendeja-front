import { Drawer, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavItems from "./NavItems";
import LogoutButton from "./LogoutButton";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const drawerWidth = 250;

  const iconStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    marginRight: "16px",
    color: "#fff",
    overflowX: "hidden",
    boxSizing: "border-box",
  };

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        style: {
          overflowX: "hidden",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
        },
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: 2,
        }}
      >
        <NavItems iconStyle={iconStyle} />

        <Box sx={{ flexGrow: 1 }} />

        <Divider
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", margin: "8px 0" }}
        />

        <LogoutButton iconStyle={iconStyle} />
      </Box>
    </Drawer>
  );
};

export default Navbar;
