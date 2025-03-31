import React, { ReactNode } from "react";
import { Box, Typography, Divider, useTheme } from "@mui/material";

interface FormatPageWrapperProps {
  title: string;
  children: ReactNode;
  maxContentWidth?: number | string;
  showDivider?: boolean;
}

const FormatPageWrapper: React.FC<FormatPageWrapperProps> = ({
  title,
  children,
  maxContentWidth = 800,
  showDivider = true,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", py: 3, px: { xs: 2, sm: 3 } }}>
      {/* Título no canto superior esquerdo */}
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: theme.palette.primary.main,
          mb: 2,
          textAlign: "left",
        }}
      >
        {title}
      </Typography>

      {showDivider && <Divider sx={{ mb: 4 }} />}

      {/* Conteúdo centralizado */}
      <Box
        sx={{
          mx: "auto",
          maxWidth: maxContentWidth,
          width: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default FormatPageWrapper;
