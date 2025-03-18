import { useState } from "react";
import { TextField, Button, Typography, Box, Link, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!email) {
      setError("Por favor, insira seu email.");
      return;
    }

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
      setError("");
    } catch (error: unknown) {
      if ((error as { code: string }).code === "auth/user-not-found") {
        setError("Email não encontrado.");
      } else {
        setError(
          "Ocorreu um erro ao enviar o email de recuperação. Tente novamente mais tarde."
        );
      }
      console.error("Erro ao enviar email de recuperação:", error);
    }
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          padding: 3,
          borderRadius: 3,
          boxShadow: 5,
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: 3, fontWeight: "bold", color: "#295650" }}
        >
          Recuperação de Senha
        </Typography>

        {success ? (
          <>
            <Alert severity="success" sx={{ marginBottom: 2 }}>
              Email de recuperação enviado com sucesso! Verifique sua caixa de
              entrada.
            </Alert>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Siga as instruções no email para redefinir sua senha.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/login")}
              fullWidth
              sx={{
                padding: "12px",
                fontWeight: "bold",
                borderRadius: "20px",
                textTransform: "none",
              }}
            >
              Voltar para o Login
            </Button>
          </>
        ) : (
          <>
            <Typography variant="body2" sx={{ marginBottom: 3 }}>
              Insira seu email para receber um link de recuperação de senha.
            </Typography>

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{
                marginBottom: 3,
                backgroundColor: "#f9f9f9",
                "& .MuiOutlinedInput-root fieldset": {
                  borderRadius: "10px",
                },
              }}
            />

            {error && (
              <Typography color="error" sx={{ marginBottom: 2 }}>
                {error}
              </Typography>
            )}

            <Button
              variant="contained"
              color="primary"
              onClick={handleResetPassword}
              fullWidth
              sx={{
                padding: "12px",
                fontWeight: "bold",
                borderRadius: "20px",
                textTransform: "none",
                marginBottom: 2,
              }}
            >
              Enviar Link de Recuperação
            </Button>

            <Link
              component="button"
              variant="body2"
              sx={{ fontWeight: "bold" }}
              onClick={() => navigate("/login")}
            >
              Voltar para o Login
            </Link>
          </>
        )}
      </Box>
    </PageWrapper>
  );
};

export default ForgotPasswordPage;
