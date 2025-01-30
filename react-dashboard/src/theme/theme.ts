import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      },
    palette: {
      mode,
      primary: {
        main: "#3f50b5",
      },
      secondary: {
        main: "#f44336",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#ffffff",
        paper: mode === "dark" ? "#1e1e1e" : "#f5f5f5",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
      },
    },
  });
