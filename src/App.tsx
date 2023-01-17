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
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            border: "3px solid rgba(255, 255, 255, 0.5)",
            borderRadius: "0.375rem"
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "3px solid #FF9B33 !important",
              borderRadius: "0.375rem"
            },
          },
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
