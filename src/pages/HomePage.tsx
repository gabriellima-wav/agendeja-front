import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import FormatPageWrapper from "../components/FormatPageWrapper";
import AppointmentsList from "../components/homeCards/AppointmentsList";
import QuickActions from "../components/homeCards/QuickActions";
import WelcomeMessage from "../components/homeCards/WelcomeMessage";

interface Appointment {
  id: number;
  date: Date;
  patientName: string;
  status: string;
}

const HomePage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [nextAppointment, setNextAppointment] = useState<Appointment | null>(
    null
  );
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const isAdmin = currentUser?.email === "admin@example.com";

  console.log("Informações do usuário logado:", currentUser);

  useEffect(() => {
    // Aqui você deve buscar os agendamentos do usuário
    // Por enquanto, vamos deixar a lista vazia
    setAppointments([]);

    // Definir o próximo agendamento (o mais próximo da data atual)
    const today = new Date();
    const upcomingAppointments = appointments
      .filter((app) => new Date(app.date) > today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    if (upcomingAppointments.length > 0) {
      setNextAppointment(upcomingAppointments[0]);
    } else {
      setNextAppointment(null);
    }
  }, []);

  const handleNewAppointment = () => {
    navigate("/appointments");
  };

  const handleViewHistory = () => {
    navigate("/appointments/history");
  };

  const handleGenerateReport = () => {
    navigate("/reports");
  };

  return (
    <FormatPageWrapper title="Início" showDivider={true}>
      <WelcomeMessage nextAppointment={nextAppointment} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <AppointmentsList
            appointments={appointments}
            onNewAppointment={handleNewAppointment}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <QuickActions
            onNewAppointment={handleNewAppointment}
            onViewHistory={handleViewHistory}
            onGenerateReport={handleGenerateReport}
            isAdmin={isAdmin} appointments={[]}          />
        </Grid>
      </Grid>
    </FormatPageWrapper>
  );
};

export default HomePage;
