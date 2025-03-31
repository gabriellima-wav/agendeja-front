import React from "react";
import { Typography, Paper } from "@mui/material";

interface WelcomeMessageProps {
  nextAppointment: {
    date: Date;
  } | null;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ nextAppointment }) => {
  const getMessage = () => {
    if (nextAppointment) {
      return `Olá, seu próximo agendamento é dia ${nextAppointment.date.toLocaleDateString()} às ${nextAppointment.date.toLocaleTimeString(
        [],
        { hour: "2-digit", minute: "2-digit" }
      )}.`;
    }
    return `Olá, nenhum agendamento por enquanto. Que tal marcar um?`;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {getMessage()}
      </Typography>
    </Paper>
  );
};

export default WelcomeMessage;
