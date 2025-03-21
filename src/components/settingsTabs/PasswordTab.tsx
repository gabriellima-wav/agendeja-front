import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "../../config/firebaseConfig";

interface PasswordTabProps {
  currentPassword: string;
  setCurrentPassword: (password: string) => void;
  newPassword: string;
  setNewPassword: (password: string) => void;
  confirmPassword: string;
  setConfirmPassword: (password: string) => void;
  showPassword: boolean;
  handleTogglePasswordVisibility: () => void;
  handleUpdatePassword?: () => void; // Tornando opcional já que implementaremos nossa própria função
}

const PasswordTab: React.FC<PasswordTabProps> = ({
  currentPassword,
  setCurrentPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  showPassword,
  handleTogglePasswordVisibility,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleUpdatePasswordWithFirebase = async () => {
    // Validações básicas
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Todos os campos são obrigatórios");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    if (newPassword.length < 6) {
      setError("A nova senha deve ter pelo menos 6 caracteres");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const user = auth.currentUser;

      if (!user || !user.email) {
        throw new Error("Usuário não autenticado");
      }

      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      await reauthenticateWithCredential(user, credential);

      await updatePassword(user, newPassword);

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setSuccess("Senha atualizada com sucesso!");
    } catch (error: unknown) {
      const firebaseError = error as { code: string; message: string };
      if (firebaseError.code === "auth/wrong-password") {
        setError("Senha atual incorreta");
      } else if (firebaseError.code === "auth/weak-password") {
        setError("A nova senha é muito fraca");
      } else if (firebaseError.code === "auth/requires-recent-login") {
        setError(
          "Esta operação é sensível e requer autenticação recente. Faça login novamente antes de tentar novamente."
        );
      } else {
        setError(`Erro ao atualizar senha: ${firebaseError.message}`);
      }
      console.error("Erro ao atualizar senha:", firebaseError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
        Alterar Senha
      </Typography>

      <Typography variant="body2" color="text.secondary" paragraph>
        Atualize sua senha regularmente para manter sua conta segura. Use uma
        combinação de letras, números e símbolos.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      <Box component="form" sx={{ mt: 3 }}>
        <TextField
          label="Senha atual"
          type={showPassword ? "text" : "password"}
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Nova senha"
          type={showPassword ? "text" : "password"}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirmar nova senha"
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          error={newPassword !== confirmPassword && confirmPassword !== ""}
          helperText={
            newPassword !== confirmPassword && confirmPassword !== ""
              ? "As senhas não coincidem"
              : ""
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpdatePasswordWithFirebase}
            disabled={
              isLoading || !currentPassword || !newPassword || !confirmPassword
            }
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 3,
              py: 1,
            }}
          >
            {isLoading ? "Atualizando..." : "Atualizar senha"}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default PasswordTab;
