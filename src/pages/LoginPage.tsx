import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import PageWrapper from "../components/pageWrapper";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (username === "user" && password === "123456") {
      setError("");
      alert("Login bem-sucedido!");
    } else {
      setError("Credenciais incorretas.");
    }
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
          Login
        </Typography>

        <TextField
          label="Usuário"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          sx={{
            marginBottom: 2,
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "10px",
              },
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
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "10px",
              },
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
          }}
        >
          Entrar
        </Button>
      </Box>
    </PageWrapper>
  );
};

export default LoginPage;
