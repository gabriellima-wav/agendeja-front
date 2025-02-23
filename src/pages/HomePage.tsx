import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const HomePage = () => {
  const navigate = useNavigate();

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
          Bem-vindo ao Sistema de Agendamentos
        </Typography>

        <Typography sx={{ marginBottom: 3, color: "#555" }}>
          Gerencie seus agendamentos de forma simples e eficiente.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate("/login")}
          sx={{
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "none",
            marginBottom: 2,
          }}
        >
          Entrar
        </Button>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={() => navigate("/register")}
          sx={{
            padding: "12px",
            fontWeight: "bold",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Criar Conta
        </Button>
      </Box>
    </PageWrapper>
  );
};

export default HomePage;
