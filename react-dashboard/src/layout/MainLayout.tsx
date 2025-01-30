import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export const MainLayout = ({ children, darkMode, setDarkMode }: MainLayoutProps) => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} isCollapsed={isCollapsed} />
      <main 
        className={`transition-all duration-300 pt-16 p-6 ${
          isCollapsed ? 'ml-20' : 'ml-64'
        }`}
      >
        {children}
      </main>
    </div>
  );
};
