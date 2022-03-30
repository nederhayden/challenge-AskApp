import { CssBaseline } from "@mui/material";
import { Layout } from "./components/Layout/Layout.component";
import { AppRoutes } from "./routes/appRoutes";

function App() {
  return (
    <Layout>
      <CssBaseline />
      <AppRoutes />
    </Layout>
  );
}

export default App;

// Sobre o CssBaseline
// https://mui.com/pt/components/css-baseline/
// MUI fornece um componente opcional CssBaseline. Ele corrige algumas inconsistências nos navegadores e dispositivos, ao mesmo tempo em que fornece redefinições ligeiramente mais opinativas para elementos HTML comuns.
