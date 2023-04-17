import { ThemeProvider } from "@mui/material";
import Router from "./routes/router";
import theme from "./global/theme";
import { ApiProvider } from "./contexts/api";

function App() {
  return (
    <ApiProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ApiProvider>
  );
}

export default App;
