import { Box, Button, Container } from "@mui/material";
import AskLogo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Box component="header">
      <Container
        maxWidth="xl"
        sx={{
          padding: "1.15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img src={AskLogo} alt="logo" />
        <Button>Reports</Button>
      </Container>
    </Box>
  );
};
