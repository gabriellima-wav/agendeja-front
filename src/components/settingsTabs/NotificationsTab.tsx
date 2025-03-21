import React from "react";
import {
  Box,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
  Grid,
  Stack,
  IconButton,
  Tooltip,
  useTheme,
  alpha,
} from "@mui/material";
import { RiRestartLine } from "react-icons/ri";

interface NotificationsTabProps {
  notifications: {
    email: boolean;
    app: boolean;
    appointments: boolean;
    reminders: boolean;
    updates: boolean;
    marketing: boolean;
  };
  handleNotificationChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleResetNotifications: () => void;
}

const NotificationsTab: React.FC<NotificationsTabProps> = ({
  notifications,
  handleNotificationChange,
  handleResetNotifications,
}) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500, mb: 0 }}>
          Preferências de Notificação
        </Typography>

        <Tooltip title="Restaurar configurações padrão">
          <IconButton onClick={handleResetNotifications} color="primary">
            <RiRestartLine />
          </IconButton>
        </Tooltip>
      </Box>

      <Typography variant="body2" color="text.secondary" paragraph>
        Escolha quais notificações você deseja receber e como deseja recebê-las.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
          Canais de notificação
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            borderColor: alpha(theme.palette.divider, 0.1),
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications.email}
                    onChange={handleNotificationChange}
                    name="email"
                    color="primary"
                  />
                }
                label="Notificações por e-mail"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications.app}
                    onChange={handleNotificationChange}
                    name="app"
                    color="primary"
                  />
                }
                label="Notificações no aplicativo"
              />
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
          Tipos de notificação
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 2,
            borderColor: alpha(theme.palette.divider, 0.1),
          }}
        >
          <Stack spacing={1}>
            <FormControlLabel
              control={
                <Switch
                  checked={notifications.appointments}
                  onChange={handleNotificationChange}
                  name="appointments"
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">Agendamentos</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Notificações sobre novos agendamentos, alterações e
                    cancelamentos
                  </Typography>
                </Box>
              }
              sx={{ alignItems: "flex-start", mb: 1 }}
            />

            <Divider />

            <FormControlLabel
              control={
                <Switch
                  checked={notifications.reminders}
                  onChange={handleNotificationChange}
                  name="reminders"
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">Lembretes</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lembretes de agendamentos próximos
                  </Typography>
                </Box>
              }
              sx={{ alignItems: "flex-start", mb: 1, mt: 1 }}
            />

            <Divider />

            <FormControlLabel
              control={
                <Switch
                  checked={notifications.updates}
                  onChange={handleNotificationChange}
                  name="updates"
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">
                    Atualizações do sistema
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Informações sobre novas funcionalidades e melhorias
                  </Typography>
                </Box>
              }
              sx={{ alignItems: "flex-start", mb: 1, mt: 1 }}
            />

            <Divider />

            <FormControlLabel
              control={
                <Switch
                  checked={notifications.marketing}
                  onChange={handleNotificationChange}
                  name="marketing"
                  color="primary"
                />
              }
              label={
                <Box>
                  <Typography variant="body1">Marketing</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Promoções, ofertas especiais e novidades
                  </Typography>
                </Box>
              }
              sx={{ alignItems: "flex-start", mt: 1 }}
            />
          </Stack>
        </Paper>
      </Box>
    </>
  );
};

export default NotificationsTab;
