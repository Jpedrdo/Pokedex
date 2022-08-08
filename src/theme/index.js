import { createTheme } from "@mui/material/styles";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
  palette: {
    type: "dark",
    background: {
      dark: "#181616",
      default: "#fff",
      paper: "#333",
    },
    primary: {
      main: '#333',
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: '#fff',
      secondary: '#424242',
    },
    success: {
      main: "#31c302",
    },
    error: {
      main: "#F52C62",
    },
    warning: {
      main: "#ff9D00",
    },
    info: {
      main: "#2196f3",
    },
  },
  shadows,
  typography,
});

export default theme;
