// context
import { ReportContextProvider } from "./context/Report.context";

// components
import { AppRoutes } from "./routes/appRoutes";
import { Header } from "./components/Header/Header.component";

// bootstrap
import { Box, CssBaseline } from "@mui/material";

function App() {
  return (
    <Box sx={{ height: "100vh" }}>
      <ReportContextProvider>
        <CssBaseline />
        <Header />
        <AppRoutes />
      </ReportContextProvider>
    </Box>
  );
}

export default App;

// Sobre o CssBaseline
// https://mui.com/pt/components/css-baseline/
// MUI fornece um componente opcional CssBaseline. Ele corrige algumas inconsistências nos navegadores e dispositivos, ao mesmo tempo em que fornece redefinições ligeiramente mais opinativas para elementos HTML comuns.
