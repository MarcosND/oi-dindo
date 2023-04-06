import { ThemeProvider } from "@mui/material";
import Router from "./routes/router";
import theme from "./global/theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
