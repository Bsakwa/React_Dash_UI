import { createTheme, alpha } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") => {
  // Define base colors
  const primaryBase = {
    light: "#6366F1", // Indigo
    dark: "#818CF8",  // Lighter indigo for dark mode
  };
  
  const secondaryBase = {
    light: "#EC4899", // Pink
    dark: "#F472B6",  // Lighter pink for dark mode
  };

  // Enhanced color palette with modern colors
  const palette = {
    mode,
    primary: {
      main: mode === "dark" ? primaryBase.dark : primaryBase.light,
      light: mode === "dark" ? alpha(primaryBase.dark, 0.8) : alpha(primaryBase.light, 0.8),
      dark: mode === "dark" ? alpha(primaryBase.dark, 1.2) : alpha(primaryBase.light, 1.2),
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: mode === "dark" ? secondaryBase.dark : secondaryBase.light,
      light: mode === "dark" ? alpha(secondaryBase.dark, 0.8) : alpha(secondaryBase.light, 0.8),
      dark: mode === "dark" ? alpha(secondaryBase.dark, 1.2) : alpha(secondaryBase.light, 1.2),
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#10B981",
      light: "#34D399",
      dark: "#059669",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#F59E0B",
      light: "#FBBF24",
      dark: "#D97706",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#3B82F6",
      light: "#60A5FA",
      dark: "#2563EB",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#EF4444",
      light: "#F87171",
      dark: "#DC2626",
      contrastText: "#FFFFFF",
    },
    background: {
      // Sophisticated grey palette for light mode
      default: mode === "dark" ? "#1A1A1A" : "#E5E7EB",
      paper: mode === "dark" ? "#242424" : "#F3F4F6",
      light: mode === "dark" ? "#2D2D2D" : "#F9FAFB",
    },
    text: {
      primary: mode === "dark" ? "#F9FAFB" : "#1F2937",
      secondary: mode === "dark" ? "#D1D5DB" : "#4B5563",
      disabled: mode === "dark" ? "#6B7280" : "#9CA3AF",
    },
    divider: mode === "dark" ? alpha("#FFFFFF", 0.12) : alpha("#000000", 0.12),
  };

  return createTheme({
    palette,
    typography: {
      fontFamily: '"Poppins", "system-ui", -apple-system, sans-serif',
      h1: {
        fontSize: "3.75rem",
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: "-0.02em",
      },
      h2: {
        fontSize: "3rem",
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: "-0.01em",
      },
      h3: {
        fontSize: "2.25rem",
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontSize: "1.875rem",
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.5,
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.6,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        letterSpacing: "0.00714em",
      },
      button: {
        textTransform: "none",
        fontWeight: 600,
        letterSpacing: "0.02857em",
      },
    },
    shape: {
      borderRadius: 16,
    },
    shadows: [
      "none",
      `0px 2px 4px ${alpha("#000000", 0.05)}`,
      `0px 4px 6px ${alpha("#000000", 0.07)}`,
      `0px 6px 8px ${alpha("#000000", 0.08)}`,
      `0px 8px 12px ${alpha("#000000", 0.1)}`,
      `0px 12px 16px ${alpha("#000000", 0.12)}`,
      ...Array(19).fill("none"),
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: "10px 20px",
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.2s ease-in-out",
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: `0px 8px 12px ${alpha("#000000", 0.15)}`,
              transform: "translateY(-1px)",
            },
          },
          outlined: {
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === "dark" 
              ? `0px 4px 8px ${alpha("#000000", 0.5)}`
              : `0px 4px 8px ${alpha("#000000", 0.1)}`,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: mode === "dark"
                ? `0px 8px 16px ${alpha("#000000", 0.6)}`
                : `0px 8px 16px ${alpha("#000000", 0.12)}`,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: mode === "dark"
                  ? alpha("#FFFFFF", 0.05)
                  : alpha("#000000", 0.02),
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
          },
        },
      },
    },
  });
};
