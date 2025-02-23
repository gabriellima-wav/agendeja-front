import { Box } from "@mui/material";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f8f8f8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
        boxShadow: 3,
        borderRadius: 2,
        width: "99%",
        margin: "0 auto",
      }}
    >
      {children}
    </Box>
  );
};

export default PageWrapper;
