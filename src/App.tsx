// context
import { ReportContextProvider } from "./context/Report.context";

// components
import { AppRoutes } from "./routes/appRoutes";

// bootstrap
import { CssBaseline } from "@mui/material";
import { Layout } from "components/index";

function App() {
  return (
    <ReportContextProvider>
      <CssBaseline />
      <Layout>
        <AppRoutes />
      </Layout>
    </ReportContextProvider>
  );
}

export default App;

// Sobre o CssBaseline
// https://mui.com/pt/components/css-baseline/
// MUI fornece um componente opcional CssBaseline. Ele corrige algumas inconsistências nos navegadores e dispositivos, ao mesmo tempo em que fornece redefinições ligeiramente mais opinativas para elementos HTML comuns.
