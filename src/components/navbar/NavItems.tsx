import { List, ListItem, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  RiHome5Line,
  RiCalendarCheckLine,
  RiSettings4Line,
} from "react-icons/ri";

interface NavItemsProps {
  iconStyle: React.CSSProperties;
}

const NavItems: React.FC<NavItemsProps> = ({ iconStyle }) => {
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <RiHome5Line style={iconStyle} />, path: "/" },
    {
      text: "Agendamentos",
      icon: <RiCalendarCheckLine style={iconStyle} />,
      path: "/appointments",
    },
    {
      text: "Configurações",
      icon: <RiSettings4Line style={iconStyle} />,
      path: "/settings",
    },
  ];

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component={Link}
          to={item.path}
          sx={{
            textDecoration: "none",
            color: "#fff",
            backgroundColor:
              location.pathname === item.path
                ? "rgba(255, 255, 255, 0.1)"
                : "transparent",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
            borderRadius: "4px",
            margin: "4px 8px",
            padding: "8px 16px",
          }}
        >
          {item.icon}
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavItems;
