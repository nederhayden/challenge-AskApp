import { Box, CssBaseline } from "@mui/material";
import { Header } from "./components/Header/Header.component";
import { AppRoutes } from "./routes/appRoutes";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function App({ children }: LayoutProps) {
  return (
    <Box sx={{ height: "100vh" }}>
      <CssBaseline />
      <Header />
      <AppRoutes />
    </Box>
  );
}

export default App;

// Sobre o CssBaseline
// https://mui.com/pt/components/css-baseline/
// MUI fornece um componente opcional CssBaseline. Ele corrige algumas inconsistências nos navegadores e dispositivos, ao mesmo tempo em que fornece redefinições ligeiramente mais opinativas para elementos HTML comuns.
