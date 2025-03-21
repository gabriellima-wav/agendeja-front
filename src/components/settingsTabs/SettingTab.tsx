import { Tabs, Tab, alpha } from "@mui/material";
import {
  RiUser3Line,
  RiLockPasswordLine,
  RiNotification3Line,
} from "react-icons/ri";
import theme from "../../theme";

export const SettingTab: React.FC<{
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}> = ({ handleTabChange }) => (
  <Tabs
    onChange={handleTabChange}
    centered
    variant="fullWidth"
    sx={{
      "& .MuiTabs-flexContainer": {
        justifyContent: "center",
      },
      borderBottom: 1,
      borderColor: "divider",
      backgroundColor: alpha(theme.palette.primary.main, 0.04),
    }}
  >
    <Tab
      icon={<RiUser3Line size={28} color={theme.palette.primary.main} />}
      label="Perfil"
      iconPosition="start"
      sx={{
        textTransform: "none",
        py: 2,
        minWidth: "120px",
        maxWidth: "200px",
        fontSize: "16px",
        color: theme.palette.primary.main,
        "&.Mui-selected": {
          color: theme.palette.primary.main,
          fontWeight: 600,
        },
        "&:hover": {
          color: theme.palette.primary.dark,
          opacity: 0.9,
        },
      }}
    />
    <Tab
      icon={<RiLockPasswordLine size={28} color={theme.palette.primary.main}/>}
      label="Senha"
      iconPosition="start"
      sx={{
        textTransform: "none",
        py: 2,
        minWidth: "120px",
        maxWidth: "200px",
        fontSize: "16px",
        color: theme.palette.primary.main,
        "&.Mui-selected": {
          color: theme.palette.primary.main,
          fontWeight: 600,
        },
        "&:hover": {
          color: theme.palette.primary.dark,
          opacity: 0.9,
        },
      }}
    />
    <Tab
      icon={<RiNotification3Line size={28} color={theme.palette.primary.main}/>}
      label="Notificações"
      iconPosition="start"
      sx={{
        textTransform: "none",
        py: 2,
        minWidth: "120px",
        maxWidth: "200px",
        fontSize: "16px",
        color: theme.palette.primary.main,
        "&.Mui-selected": {
          color: theme.palette.primary.main,
          fontWeight: 600,
        },
        "&:hover": {
          color: theme.palette.primary.dark,
          opacity: 0.9,
        },
      }}
    />
  </Tabs>
);
