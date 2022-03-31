import { Button, Container } from "@mui/material";
import AskLogo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1.15rem",
      }}
    >
      <img src={AskLogo} alt="logo" />
      <Button sx={{ color: "gray", fontWeight: "bold" }}>Reports</Button>
    </Container>
  );
};
