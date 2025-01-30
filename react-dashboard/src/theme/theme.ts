import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      h1: {
        fontSize: "3.5rem",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: "2.75rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: "1.75rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.6,
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.7,
      },
      body1: {
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.6,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.6,
      },
      button: {
        textTransform: "none", // Buttons with normal case text
        fontWeight: 600,
      },
    },
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#3f50b5", // Soft blue for dark, vibrant blue for light
        light: mode === "dark" ? "#e3f2fd" : "#757de8",
        dark: mode === "dark" ? "#42a5f5" : "#002984",
      },
      secondary: {
        main: mode === "dark" ? "#ffab91" : "#f44336", // Coral for dark, red for light
        light: mode === "dark" ? "#ffccbc" : "#ff7961",
        dark: mode === "dark" ? "#d84315" : "#ba000d",
      },
      success: {
        main: "#4caf50",
        light: "#81c784",
        dark: "#388e3c",
      },
      warning: {
        main: "#ff9800",
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
      },
      error: {
        main: "#f44336",
        light: "#e57373",
        dark: "#d32f2f",
      },
      background: {
        default: mode === "dark" ? "#0D1B2A" : "#F8F9FA", // Dark blue for dark mode, very light gray for light mode
        paper: mode === "dark" ? "#1B263B" : "#FFFFFF", // Slightly lighter dark blue for paper in dark mode, white for light mode
      },
      text: {
        primary: mode === "dark" ? "#E0E0E0" : "#212121", // Light gray for dark mode, dark gray for light mode
        secondary: mode === "dark" ? "#B0B0B0" : "#4A4A4A", // Lighter gray for secondary text in dark mode
      },
    },
    shape: {
      borderRadius: 12, // Rounded corners for a modern look
    },
    shadows: [
      "none",
      "0px 2px 4px rgba(0, 0, 0, 0.1)", // Subtle shadow for elevation 1
      "0px 4px 8px rgba(0, 0, 0, 0.1)", // Slightly stronger shadow for elevation 2
      "0px 6px 12px rgba(0, 0, 0, 0.15)", // Even stronger shadow for elevation 3
      "0px 8px 16px rgba(0, 0, 0, 0.2)", // Strong shadow for elevation 4
      ...Array(20).fill("none"), // Fill the rest with none or custom shadows
    ],
    transitions: {
      easing: {
        easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
        easeIn: "cubic-bezier(0.4, 0, 1, 1)",
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Rounded buttons
            padding: "8px 16px",
          },
          contained: {
            boxShadow: "none", // No shadow for contained buttons
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Shadow on hover
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12, // Rounded cards
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Rounded text fields
          },
        },
      },
    },
  });
