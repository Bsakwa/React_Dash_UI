import React from "react";
import { useTheme } from "@mui/material/styles";
import { Home, BarChart, Settings, Users, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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
      className={`h-screen border-r fixed transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
      style={{
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.divider,
      }}
    >
      <div 
        className="flex items-center h-16 border-b relative px-4" 
        style={{ borderColor: theme.palette.divider }}
      >
        <h1 
          className={`text-xl font-bold transition-opacity duration-300 ${
            isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
          }`} 
          style={{ color: theme.palette.text.primary }}
        >
          Dashboard
        </h1>
        
        <div className="absolute right-0 top-0 bottom-0 flex items-center mr-8">  {/* Added mr-4 here */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`relative -ml-2
              border shadow-sm rounded-full p-1.5
              focus:outline-none focus:ring-0
              ${theme.palette.mode === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
                : 'bg-white hover:bg-gray-100 text-gray-600'
              }
              hover:scale-105 transition-transform duration-200
            `}
            style={{ borderColor: theme.palette.divider }}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      <nav className="p-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            to={item.path} // Use "to" instead of "href"
            className={`
              flex items-center gap-4 p-3 rounded-lg transition-all duration-200
              ${isCollapsed ? 'justify-center w-12 mx-auto' : 'w-full'}
              ${theme.palette.mode === 'dark'
                ? 'hover:bg-gray-800 text-gray-300 hover:text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }
            `}
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
