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
  Box,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine, RiCloseLine } from "react-icons/ri";
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

      <Dialog 
        open={confirmLogoutOpen} 
        onClose={handleCancelLogout}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            overflow: 'hidden'
          }
        }}
        maxWidth="xs"
        fullWidth
      >
        <Paper elevation={0}>
          <DialogTitle sx={{ 
            p: 3, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            fontWeight: 600
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <RiLogoutBoxRLine size={22} color="#d32f2f" />
              <Typography variant="h6">Confirmar saída</Typography>
            </Box>
            <IconButton 
              onClick={handleCancelLogout} 
              size="small" 
              sx={{ color: 'text.secondary' }}
            >
              <RiCloseLine />
            </IconButton>
          </DialogTitle>
          
          <Divider />
          
          <DialogContent sx={{ p: 3 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Você está prestes a sair da aplicação. Todos os dados não salvos serão perdidos.
              Tem certeza que deseja continuar?
            </Typography>
          </DialogContent>
          
          <DialogActions sx={{ p: 2.5, pt: 0, justifyContent: 'flex-end', gap: 1 }}>
            <Button 
              onClick={handleCancelLogout} 
              color="primary"
              variant="outlined"
              sx={{ 
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
                px: 2
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleConfirmLogout}
              color="error"
              variant="contained"
              sx={{ 
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
                px: 2,
                boxShadow: '0 4px 12px rgba(211, 47, 47, 0.2)'
              }}
            >
              Sair
            </Button>
          </DialogActions>
        </Paper>
      </Dialog>
    </>
  );
};

export default LogoutButton;
