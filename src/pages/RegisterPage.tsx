import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Divider,
  Stack,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import EmailOutlined from "@mui/icons-material/EmailOutlined";
import { FirebaseError } from "firebase/app";
import { auth } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleRegister = async () => {
    if (!name || !username || !email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/home");
    } catch (error) {
      if (error instanceof Error) {
        const firebaseError = error as FirebaseError;
        switch(firebaseError.code) {
          case "auth/email-already-in-use":
            setError("Este email já está em uso.");
            break;
          case "auth/weak-password":
            setError("A senha deve ter pelo menos 6 caracteres.");
            break;
          default:
            setError("Erro ao criar conta. Tente novamente.");
            console.error(firebaseError);
        }
      } else {
        setError("Ocorreu um erro desconhecido.");
        console.error("Erro inesperado:", error);
      }
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          padding: { xs: 2.5, sm: 4 },
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          width: "100%",
          maxWidth: "450px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            marginBottom: 1,
            fontWeight: "bold",
            color: "#295650",
          }}
        >
          Crie sua conta
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 4 }}
        >
          Preencha os dados abaixo para começar
        </Typography>

        <Stack spacing={2.5} sx={{ marginBottom: 3 }}>
          <TextField
            label="Nome completo"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Nome de usuário"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="E-mail"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlined color="action" />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            label="Senha"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        {error && (
          <Typography
            color="error"
            sx={{
              marginBottom: 2,
              fontSize: "0.875rem",
              backgroundColor: "rgba(211, 47, 47, 0.1)",
              padding: "8px 12px",
              borderRadius: "8px",
              textAlign: "left",
            }}
          >
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleRegister}
          fullWidth
          sx={{
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "none",
            marginBottom: 3,
          }}
        >
          Criar conta
        </Button>

        <Divider sx={{ marginBottom: 3 }}>
          <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>
            ou
          </Typography>
        </Divider>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Já tem uma conta?{" "}
            <Link
              component="button"
              onClick={() => navigate("/login")}
              sx={{
                fontWeight: "600",
                color: "#295650",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Entrar
            </Link>
          </Typography>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default RegisterPage;
