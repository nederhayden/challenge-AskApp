import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
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
      <Link to="/">
        <img src={AskLogo} alt="logo" />
      </Link>
      <Button sx={{ color: "gray", fontWeight: "bold" }}>Reports</Button>
    </Container>
  );
};
