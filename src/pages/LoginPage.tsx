import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { FirebaseError } from "firebase/app";
import PageWrapper from "../components/PageWrapper";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError("");
      navigate("/home");
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            setError("Email ou senha incorretos.");
            break;
          case "auth/too-many-requests":
            setError("Muitas tentativas. Tente novamente mais tarde.");
            break;
          default:
            setError("Erro ao fazer login. Tente novamente.");
        }
        console.error("Erro Firebase:", error.code, error.message);
      } else {
        setError("Erro desconhecido. Tente novamente.");
        console.error("Erro inesperado:", error);
      }
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
          AgendeJa
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{
            marginBottom: 2,
            backgroundColor: "#f9f9f9",
            "& .MuiOutlinedInput-root fieldset": {
              borderRadius: "10px",
            },
          }}
        />

        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLogin}
          fullWidth
          sx={{
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "none",
            marginBottom: 3,
          }}
        >
          Entrar
        </Button>
        <Divider sx={{ marginBottom: 2 }}>
          <Typography variant="body2" color="text.secondary">
            ou
          </Typography>
        </Divider>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            alignItems: "center",
          }}
        >
          <Link
            component="button"
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: "#295650",
              textDecoration: "underline",
              padding: "6px 12px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "rgba(41, 86, 80, 0.08)",
              },
            }}
            onClick={() => navigate("/register")}
          >
            Criar nova conta
          </Link>

          <Link
            component="button"
            variant="body2"
            sx={{
              fontWeight: "bold",
              color: "#295650",
              textDecoration: "underline",
              padding: "6px 12px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "rgba(41, 86, 80, 0.08)",
              },
            }}
            onClick={() => navigate("/forgot-password")}
          >
            Esqueceu a senha?
          </Link>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default LoginPage;
