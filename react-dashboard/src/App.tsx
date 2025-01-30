// src/App.tsx
import { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme/theme";
import { MainLayout } from "./layout/MainLayout";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <ThemeProvider theme={getTheme(darkMode ? "dark" : "light")}>
      <CssBaseline />
      <MainLayout darkMode={darkMode} setDarkMode={setDarkMode}>
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </MainLayout>
    </ThemeProvider>
  );
}
export default App;
