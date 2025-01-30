import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Settings, Sun, Moon } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  isCollapsed: boolean;
}

export const Header = ({ darkMode, setDarkMode, isCollapsed }: HeaderProps) => {
  const theme = useTheme();
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    // Fetch a random user avatar from the randomuser.me API
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        setAvatarUrl(user.picture.thumbnail);
      })
      .catch((error) => {
        console.error("Error fetching random user avatar:", error);
      });
  }, []);

  return (
    <header
      className={`h-16 border-b fixed top-0 right-0 transition-all duration-300 ${
        isCollapsed ? "left-20" : "left-64"
      } flex justify-between items-center px-6`}
      style={{
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
      }}
    >
      {/* Search Bar */}
      <input
        type="search"
        placeholder="Search..."
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 w-64"
        style={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          borderColor: theme.palette.divider,
        }}
      />

      <div className="flex items-center gap-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full transition-all duration-200  cursor-pointer"
          style={{ color: theme.palette.text.primary }}
        >
          {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {/* Settings Button */}
        <button
          className="p-2 rounded-full transition-all duration-200 focus:outline-none cursor-pointer"
          style={{ color: theme.palette.text.primary }}
        >
          <Settings className="w-5 h-5" />
        </button>

        {/* Profile Avatar */}
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
          />
        ) : (
          <div
            className="w-8 h-8 rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
            style={{ backgroundColor: theme.palette.grey[500] }}
          />
        )}
      </div>
    </header>
  );
};
