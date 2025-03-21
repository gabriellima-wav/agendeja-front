import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

interface ProfileTabProps {
  displayName: string;
  setDisplayName: (name: string) => void;
  email: string | null | undefined;
  handleUpdateProfile: () => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({
  displayName,
  setDisplayName,
  email,
  handleUpdateProfile,
}) => {
  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
        Informações da Conta
      </Typography>

      <Typography variant="body2" color="text.secondary" paragraph>
        Atualize suas informações pessoais. Seu nome será exibido em seu perfil
        e nos agendamentos.
      </Typography>


      <Box component="form" sx={{ mt: 3 }}>
        <TextField
          label="Nome de usuário"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="E-mail"
          value={email || ""}
          fullWidth
          margin="normal"
          variant="outlined"
          disabled
          helperText="O e-mail não pode ser alterado"
        />

        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdateProfile}
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 3,
              py: 1,
            }}
          >
            Salvar alterações
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProfileTab;
