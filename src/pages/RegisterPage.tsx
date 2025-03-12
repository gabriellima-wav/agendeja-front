import { useState } from "react";
import { TextField, Button, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !username || !email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    setError("");
    alert("Cadastro realizado com sucesso!");
    navigate("/home");
  };

  return (
    <PageWrapper>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: 3,
          borderRadius: 3,
          boxShadow: 5,
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: "bold" }}>
          Cadastro
        </Typography>

        <TextField
          label="Nome"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          label="Usuário"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          label="E-mail"
          type="email"
          variant="outlined"
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
          onClick={handleRegister}
          fullWidth
          sx={{
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Cadastrar
        </Button>
        <Typography sx={{ marginTop: 2 }}>
          Já tem uma conta?{" "}
          <Link
            component="button"
            onClick={() => navigate("/login")}
            sx={{ fontWeight: "bold", cursor: "pointer" }}
          >
            Faça login aqui
          </Link>
        </Typography>
      </Box>
    </PageWrapper>
  );
};

export default RegisterPage;
