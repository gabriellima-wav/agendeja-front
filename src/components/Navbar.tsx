import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Home, CalendarMonth, Settings } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();

  const drawerWidth = 250;

  return (
    <Drawer
      variant="permanent"
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
        <List>
          <ListItem component="div">
            <ListItemIcon sx={{ color: "#fff" }}>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem component="div">
            <ListItemIcon sx={{ color: "#fff" }}>
              <CalendarMonth />
            </ListItemIcon>
            <ListItemText primary="Agendamentos" />
          </ListItem>

          <ListItem component="div">
            <ListItemIcon sx={{ color: "#fff" }}>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Navbar;
