import { Typography, Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 5,
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: "bold" }}>
        Bem-vindo ao Sistema de Agendamentos
      </Typography>
      <Typography sx={{ marginBottom: 3, color: "#555" }}>
        Gerencie seus agendamentos de forma simples e eficiente.
      </Typography>
    </Box>
  );
};

export default HomePage;
