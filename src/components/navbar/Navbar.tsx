// src/components/navbar/Navbar.tsx
import { useState } from "react";
import {
  Drawer,
  Box,
  Divider,
  IconButton,
  useMediaQuery,
  AppBar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavItems from "./NavItems";
import LogoutButton from "./LogoutButton";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import Header from "../Header";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 250;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const iconStyle: React.CSSProperties = {
    fontSize: "1.5rem",
    marginRight: "16px",
    color: "#fff",
    overflowX: "hidden",
    boxSizing: "border-box",
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: 2,
      }}
    >
      {isMobile && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 1 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            <RiCloseLine />
          </IconButton>
        </Box>
      )}

      <NavItems iconStyle={iconStyle} />

      <Box sx={{ flexGrow: 1 }} />

      <Divider
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)", margin: "8px 0" }}
      />

      <LogoutButton iconStyle={iconStyle} />
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Header />
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="abrir menu"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, position: "absolute", top: 8, left: 8 }}
          >
            <RiMenuLine />
          </IconButton>
        )}
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          marginTop: "64px", // Altura do AppBar
        }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              style: {
                overflowX: "hidden",
              },
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                marginTop: "64px", // Altura do AppBar
                height: "calc(100% - 64px)",
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            PaperProps={{
              style: {
                overflowX: "hidden",
              },
            }}
            sx={{
              display: { xs: "none", md: "block" },
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                marginTop: "64px", // Altura do AppBar
                height: "calc(100% - 64px)",
              },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </>
  );
};

export default Navbar;
