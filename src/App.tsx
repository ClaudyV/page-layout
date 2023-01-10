import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ResponsiveDrawer from "./layouts/Sidebar";
import { HelmetProvider } from "react-helmet-async";

const defaultTheme = createTheme({
  palette: {
    background: {
      default: "#181818",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1B1B1B",
          color: "#ffffff",
        },
      },
    },
  },
});
const helmetContext = {};

const App = () => (
  <HelmetProvider context={helmetContext}>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <ResponsiveDrawer />
    </ThemeProvider>
  </HelmetProvider>
);

export default App;
