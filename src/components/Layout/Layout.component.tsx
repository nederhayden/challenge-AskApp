// react
import { ReactNode } from "react";

// mui/material
import { Box, Container } from "@mui/material";

// components
import { Header } from "components/index";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ flex: 1 }}>
        <Container
          maxWidth="xl"
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  );
};
