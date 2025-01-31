// Sidebar.tsx
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Home, BarChart, Settings, Users, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { title: "Dashboard", icon: <Home className="w-6 h-6" />, path: "/" },
  { title: "Analytics", icon: <BarChart className="w-6 h-6" />, path: "/analytics" },
  { title: "Users", icon: <Users className="w-6 h-6" />, path: "/users" },
  { title: "Messages", icon: <Mail className="w-6 h-6" />, path: "/messages" },
  { title: "Settings", icon: <Settings className="w-6 h-6" />, path: "/settings" },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

export const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const theme = useTheme();

  return (
    <aside
      className={`h-screen fixed transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
      style={{
        backgroundColor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.divider}`,
        boxShadow: theme.shadows[1]
      }}
    >
      <div 
        className="flex items-center h-16 relative px-4" 
        style={{ 
          borderBottom: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <h1 
          className={`text-xl font-semibold transition-opacity duration-300 ${
            isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
          }`} 
          style={{ color: theme.palette.text.primary }}
        >
          Dashboard
        </h1>
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all duration-200"
          style={{
            backgroundColor: theme.palette.background.light,
            color: theme.palette.text.secondary,
            border: `1px solid ${theme.palette.divider}`,
            '&:hover': {
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.primary,
            }
          }}
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      <nav className="p-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.path}
            className={`
              flex items-center gap-4 p-3 rounded-lg transition-all duration-200
              ${isCollapsed ? 'justify-center w-12 mx-auto' : 'w-full'}
            `}
            style={{
              color: theme.palette.text.secondary,
              '&:hover': {
                backgroundColor: theme.palette.background.light,
                color: theme.palette.primary.main,
              }
            }}
          >
            <div className="flex-shrink-0 w-6 h-6">
              {item.icon}
            </div>
            <span className={`transition-all duration-300 whitespace-nowrap ${
              isCollapsed ? 'w-0 overflow-hidden opacity-0' : 'w-auto opacity-100'
            }`}>
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
