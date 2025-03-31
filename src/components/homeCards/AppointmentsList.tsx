import React from "react";
import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Box,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Cancel as CancelIcon,
} from "@mui/icons-material";

interface Appointment {
  id: number;
  date: Date;
  patientName: string;
  status: string;
}

interface AppointmentsListProps {
  appointments: Appointment[];
  onNewAppointment: () => void;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({
  appointments,
  onNewAppointment,
}) => {
  return (
    <Card elevation={2}>
      <CardContent>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Próximos Agendamentos
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {appointments.length > 0 ? (
          <List>
            {appointments.slice(0, 5).map((appointment) => (
              <ListItem key={appointment.id} divider>
                <ListItemText
                  primary={`${appointment.date.toLocaleDateString()} - ${appointment.date.toLocaleTimeString(
                    [],
                    { hour: "2-digit", minute: "2-digit" }
                  )}`}
                  secondary={`${appointment.patientName} - ${appointment.status}`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="edit" color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" aria-label="cancel" color="error">
                    <CancelIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box textAlign="center">
            <Typography variant="body1" color="textSecondary" sx={{ py: 2 }}>
              Nenhum agendamento encontrado
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={onNewAppointment}
              sx={{ mt: 2 }}
            >
              Agendar Consulta
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default AppointmentsList;
