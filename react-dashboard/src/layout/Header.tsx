// Header.tsx
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
      className={`h-16 fixed top-0 right-0 transition-all duration-300 ${
        isCollapsed ? "left-20" : "left-64"
      } flex justify-between items-center px-6`}
      style={{
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[1]
      }}
    >
      <input
        type="search"
        placeholder="Search..."
        className="px-4 py-2 rounded-lg focus:outline-none transition-colors duration-200 w-64"
        style={{
          backgroundColor: theme.palette.background.light,
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.divider}`,
          '&:focus': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 2px ${theme.palette.primary.main}25`,
          }
        }}
      />

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full transition-all duration-200"
          style={{
            backgroundColor: theme.palette.background.light,
            color: theme.palette.text.secondary,
            '&:hover': {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.primary.main,
            }
          }}
        >
          {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <button
          className="p-2 rounded-full transition-all duration-200"
          style={{
            backgroundColor: theme.palette.background.light,
            color: theme.palette.text.secondary,
            '&:hover': {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.primary.main,
            }
          }}
        >
          <Settings className="w-5 h-5" />
        </button>

        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt="Profile Avatar"
            className="w-8 h-8 rounded-full cursor-pointer transition-transform duration-200 hover:scale-105"
            style={{
              border: `2px solid ${theme.palette.primary.main}`,
            }}
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
