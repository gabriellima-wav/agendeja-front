import {
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useAuth } from "../../hooks/useAuth";

interface LogoutButtonProps {
  iconStyle: React.CSSProperties;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ iconStyle }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [confirmLogoutOpen, setConfirmLogoutOpen] = useState(false);

  const handleLogoutClick = () => {
    setConfirmLogoutOpen(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setConfirmLogoutOpen(false);
    navigate("/login");
  };

  const handleCancelLogout = () => {
    setConfirmLogoutOpen(false);
  };

  return (
    <>
      <List>
        <ListItem
          onClick={handleLogoutClick}
          sx={{
            textDecoration: "none",
            color: "#fff",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
            borderRadius: "4px",
            margin: "4px 8px",
            padding: "8px 16px",
            marginBottom: 2,
          }}
        >
          <RiLogoutBoxRLine style={iconStyle} />
          <ListItemText primary="Sair" />
        </ListItem>
      </List>

      <Dialog open={confirmLogoutOpen} onClose={handleCancelLogout}>
        <DialogTitle>Confirmar saída</DialogTitle>
        <DialogContent>
          <Typography>Tem certeza que deseja sair?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelLogout} color="primary">
            Cancelar
          </Button>
          <Button
            onClick={handleConfirmLogout}
            color="primary"
            variant="contained"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default LogoutButton;
