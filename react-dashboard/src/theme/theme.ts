import { createTheme, alpha } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") => {
  // Modern color palette with carefully selected hues
  const primaryBase = {
    light: "#4F46E5", // Deep indigo
    dark: "#818CF8",  // Soft indigo for dark mode
  };
  
  const secondaryBase = {
    light: "#E11D48", // Rich rose
    dark: "#FB7185",  // Soft rose for dark mode
  };

  const greyBase = {
    50: mode === "dark" ? "#242424" : "#F9FAFB",
    100: mode === "dark" ? "#2D2D2D" : "#F3F4F6",
    200: mode === "dark" ? "#393939" : "#E5E7EB",
    300: mode === "dark" ? "#444444" : "#D1D5DB",
    400: mode === "dark" ? "#555555" : "#9CA3AF",
    500: mode === "dark" ? "#666666" : "#6B7280",
    600: mode === "dark" ? "#777777" : "#4B5563",
    700: mode === "dark" ? "#888888" : "#374151",
    800: mode === "dark" ? "#999999" : "#1F2937",
    900: mode === "dark" ? "#AAAAAA" : "#111827",
  };

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
      main: mode === "dark" ? "#22C55E" : "#16A34A",
      light: mode === "dark" ? "#4ADE80" : "#22C55E",
      dark: mode === "dark" ? "#16A34A" : "#15803D",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: mode === "dark" ? "#F59E0B" : "#D97706",
      light: mode === "dark" ? "#FBBF24" : "#F59E0B",
      dark: mode === "dark" ? "#D97706" : "#B45309",
      contrastText: "#FFFFFF",
    },
    info: {
      main: mode === "dark" ? "#0EA5E9" : "#0284C7",
      light: mode === "dark" ? "#38BDF8" : "#0EA5E9",
      dark: mode === "dark" ? "#0284C7" : "#0369A1",
      contrastText: "#FFFFFF",
    },
    error: {
      main: mode === "dark" ? "#EF4444" : "#DC2626",
      light: mode === "dark" ? "#F87171" : "#EF4444",
      dark: mode === "dark" ? "#DC2626" : "#B91C1C",
      contrastText: "#FFFFFF",
    },
    grey: greyBase,
    background: {
      default: mode === "dark" ? "#1A1A1A" : "#F9FAFB",
      paper: mode === "dark" ? "#242424" : "#FFFFFF",
      light: mode === "dark" ? "#2D2D2D" : "#F3F4F6",
    },
    text: {
      primary: mode === "dark" ? "#F9FAFB" : "#111827",
      secondary: mode === "dark" ? "#D1D5DB" : "#4B5563",
      disabled: mode === "dark" ? "#6B7280" : "#9CA3AF",
    },
    divider: mode === "dark" ? alpha("#FFFFFF", 0.12) : alpha("#000000", 0.08),
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
      subtitle1: {
        fontSize: "1.125rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em",
      },
      subtitle2: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        letterSpacing: "0.00714em",
        fontWeight: 500,
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
      caption: {
        fontSize: "0.75rem",
        lineHeight: 1.66,
        letterSpacing: "0.03333em",
      },
      overline: {
        fontSize: "0.75rem",
        lineHeight: 2.66,
        letterSpacing: "0.08333em",
        textTransform: "uppercase",
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 16,
    },
    shadows: [
      "none",
      mode === "dark"
        ? `0 2px 4px ${alpha("#000000", 0.2)}`
        : `0 2px 4px ${alpha("#000000", 0.05)}`,
      mode === "dark"
        ? `0 4px 6px ${alpha("#000000", 0.25)}`
        : `0 4px 6px ${alpha("#000000", 0.07)}`,
      mode === "dark"
        ? `0 6px 8px ${alpha("#000000", 0.3)}`
        : `0 6px 8px ${alpha("#000000", 0.08)}`,
      mode === "dark"
        ? `0 8px 12px ${alpha("#000000", 0.35)}`
        : `0 8px 12px ${alpha("#000000", 0.1)}`,
      mode === "dark"
        ? `0 12px 16px ${alpha("#000000", 0.4)}`
        : `0 12px 16px ${alpha("#000000", 0.12)}`,
      mode === "dark"
        ? `0 16px 24px ${alpha("#000000", 0.45)}`
        : `0 16px 24px ${alpha("#000000", 0.15)}`,
      ...Array(18).fill("none"),
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: "10px 20px",
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          },
          contained: {
            boxShadow: "none",
            "&:hover": {
              boxShadow: mode === "dark"
                ? `0 8px 12px ${alpha("#000000", 0.3)}`
                : `0 8px 12px ${alpha("#000000", 0.15)}`,
              transform: "translateY(-1px)",
            },
          },
          outlined: {
            borderWidth: 2,
            "&:hover": {
              borderWidth: 2,
              backgroundColor: mode === "dark"
                ? alpha("#FFFFFF", 0.05)
                : alpha("#000000", 0.03),
            },
          },
          text: {
            "&:hover": {
              backgroundColor: mode === "dark"
                ? alpha("#FFFFFF", 0.05)
                : alpha("#000000", 0.03),
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === "dark"
              ? `0 4px 8px ${alpha("#000000", 0.5)}`
              : `0 4px 8px ${alpha("#000000", 0.1)}`,
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: mode === "dark"
                ? `0 8px 16px ${alpha("#000000", 0.6)}`
                : `0 8px 16px ${alpha("#000000", 0.12)}`,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                backgroundColor: mode === "dark"
                  ? alpha("#FFFFFF", 0.05)
                  : alpha("#000000", 0.02),
              },
              "&.Mui-focused": {
                boxShadow: `0 0 0 2px ${alpha(palette.primary.main, 0.2)}`,
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            "&[href]": {
              textDecorationLine: "none",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: `1px solid ${palette.divider}`,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 16,
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            borderRadius: 12,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            borderRadius: 12,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 8,
            backgroundColor: mode === "dark"
              ? alpha("#000000", 0.9)
              : alpha("#000000", 0.8),
          },
        },
      },
    },
  });
};
