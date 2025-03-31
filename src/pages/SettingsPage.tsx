import React, { useState } from "react";
import {
  Paper,
  Snackbar,
  Alert,
  useTheme,
  alpha,
  Divider,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import ProfileTab from "../components/settingsTabs/ProfileTab";
import PasswordTab from "../components/settingsTabs/PasswordTab";
import NotificationsTab from "../components/settingsTabs/NotificationsTab";
import { SettingTab } from "../components/settingsTabs/SettingTab";
import FormatPageWrapper from "../components/FormatPageWrapper";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

const SettingsPage: React.FC = () => {
  const theme = useTheme();
  const { currentUser } = useAuth();
  const [tabValue, setTabValue] = useState(0);
  const [displayName, setDisplayName] = useState(
    currentUser?.displayName || ""
  );
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "info" | "warning",
  });

  // Notificações
  const [notifications, setNotifications] = useState({
    email: true,
    app: true,
    appointments: true,
    reminders: true,
    updates: false,
    marketing: false,
  });

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdateProfile = () => {
    setSnackbar({
      open: true,
      message: "Perfil atualizado com sucesso!",
      severity: "success",
    });
  };

  const handleUpdatePassword = () => {
    if (newPassword !== confirmPassword) {
      setSnackbar({
        open: true,
        message: "As senhas não coincidem",
        severity: "error",
      });
      return;
    }

    setSnackbar({
      open: true,
      message: "Senha atualizada com sucesso!",
      severity: "success",
    });
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleNotificationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });

    setSnackbar({
      open: true,
      message: "Preferências de notificação atualizadas!",
      severity: "success",
    });
  };

  const handleResetNotifications = () => {
    setNotifications({
      email: true,
      app: true,
      appointments: true,
      reminders: true,
      updates: false,
      marketing: false,
    });

    setSnackbar({
      open: true,
      message: "Preferências de notificação restauradas para o padrão",
      severity: "info",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <FormatPageWrapper title="Configurações">
      <Paper
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
        }}
      >
        <SettingTab handleTabChange={handleTabChange} />

        <Divider />

        <TabPanel value={tabValue} index={0}>
          <ProfileTab
            displayName={displayName}
            setDisplayName={setDisplayName}
            email={currentUser?.email}
            handleUpdateProfile={handleUpdateProfile}
          />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <PasswordTab
            currentPassword={currentPassword}
            setCurrentPassword={setCurrentPassword}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            showPassword={showPassword}
            handleTogglePasswordVisibility={handleTogglePasswordVisibility}
            handleUpdatePassword={handleUpdatePassword}
          />
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <NotificationsTab
            notifications={notifications}
            handleNotificationChange={handleNotificationChange}
            handleResetNotifications={handleResetNotifications}
          />
        </TabPanel>
      </Paper>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%", borderRadius: 2 }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </FormatPageWrapper>
  );
};

export default SettingsPage;
