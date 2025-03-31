import React, { useState } from "react";
import {
  Typography,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Box,
  alpha,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ptBR } from "date-fns/locale";
import { addMonths, setHours, setMinutes, isWeekend } from "date-fns";
import theme from "../theme";
import FormatPageWrapper from "../components/FormatPageWrapper";

interface Professional {
  id: string;
  name: string;
}

const AppointmentPage: React.FC = () => {
  const [selectedProfessional, setSelectedProfessional] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  const [professionals] = useState<Professional[]>([
    { id: "1", name: "Dr. Silva" },
    { id: "2", name: "Dra. Santos" },
    { id: "3", name: "Dr. Oliveira" },
  ]);

  const handleProfessionalChange = (event: SelectChangeEvent<string>) => {
    setSelectedProfessional(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time: Date | null) => {
    setSelectedTime(time);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica para salvar o agendamento
    console.log("Agendamento:", {
      professional: selectedProfessional,
      date: selectedDate,
      time: selectedTime,
    });
  };

  const isDateDisabled = (date: Date) => {
    const now = new Date();
    const maxDate = addMonths(now, 1);
    return date < now || date > maxDate || isWeekend(date);
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 8; i < 18; i++) {
      slots.push(setMinutes(setHours(new Date(), i), 0));
      slots.push(setMinutes(setHours(new Date(), i), 30));
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <FormatPageWrapper title="Agendar Consulta" maxContentWidth="600px">
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 2,
            textAlign: "left",
          }}
        >
          Escolha o profissional, data e horário para seu agendamento
        </Typography>

        <Card
          elevation={3}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
          }}
        >
          <CardHeader
            title="Detalhes do Agendamento"
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.04),
              py: 2,
              px: 3,
              borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              "& .MuiCardHeader-title": {
                fontSize: "1.125rem",
                fontWeight: 500,
              },
            }}
          />
          <CardContent sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="professional-select-label">
                      Profissional
                    </InputLabel>
                    <Select
                      labelId="professional-select-label"
                      value={selectedProfessional}
                      onChange={handleProfessionalChange}
                      label="Profissional"
                    >
                      {professionals.map((prof) => (
                        <MenuItem key={prof.id} value={prof.id}>
                          {prof.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <DatePicker
                    label="Data da Consulta"
                    value={selectedDate}
                    onChange={handleDateChange}
                    shouldDisableDate={isDateDisabled}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: "outlined",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TimePicker
                    label="Horário da Consulta"
                    value={selectedTime}
                    onChange={handleTimeChange}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        variant: "outlined",
                      },
                    }}
                    minutesStep={30}
                    minTime={timeSlots[0]}
                    maxTime={timeSlots[timeSlots.length - 1]}
                    views={["hours", "minutes"]}
                  />
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    disabled={
                      !selectedProfessional || !selectedDate || !selectedTime
                    }
                    sx={{
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 600,
                    }}
                  >
                    Confirmar Agendamento
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>

        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Os agendamentos estão disponíveis de segunda a sexta, das 8h às 18h.
          </Typography>
        </Box>
      </LocalizationProvider>
    </FormatPageWrapper>
  );
};

export default AppointmentPage;
