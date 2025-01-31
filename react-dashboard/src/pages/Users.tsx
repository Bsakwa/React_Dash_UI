import { Card, CardContent } from "@/components/ui/card";
import { useTheme, alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  avatar: string;
}

export const Users = () => {
  const theme = useTheme();
  const [users, setUsers] = useState<User[]>([]);

  const getStatusStyles = (status: string) => {
    if (status === "Active") {
      return {
        backgroundColor: alpha(theme.palette.success.main, 0.1),
        color: theme.palette.success.main,
        padding: "6px 12px",
        borderRadius: "16px",
        fontSize: "0.875rem",
        fontWeight: 500,
        display: "inline-block"
      };
    }
    return {
      backgroundColor: alpha(theme.palette.error.main, 0.1),
      color: theme.palette.error.main,
      padding: "6px 12px",
      borderRadius: "16px",
      fontSize: "0.875rem",
      fontWeight: 500,
      display: "inline-block"
    };
  };

  const getRoleStyles = (role: string) => {
    if (role === "Admin") {
      return {
        backgroundColor: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.main,
        padding: "6px 12px",
        borderRadius: "16px",
        fontSize: "0.875rem",
        fontWeight: 500,
        display: "inline-block"
      };
    }
    return {
      backgroundColor: alpha(theme.palette.secondary.main, 0.1),
      color: theme.palette.secondary.main,
      padding: "6px 12px",
      borderRadius: "16px",
      fontSize: "0.875rem",
      fontWeight: 500,
      display: "inline-block"
    };
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        const formattedUsers = data.results.map((user: any, index: number) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          role: index % 2 === 0 ? "Admin" : "User",
          status: index % 3 === 0 ? "Inactive" : "Active",
          avatar: user.picture.thumbnail,
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 
          className="text-3xl font-bold tracking-tight"
          style={{ color: theme.palette.text.primary }}
        >
          Users
        </h1>
        <button
          className="px-4 py-2 rounded-md transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: theme.shadows[2],
          }}
        >
          Add User
        </button>
      </div>
      <Card
        className="overflow-hidden"
        style={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          borderColor: theme.palette.divider, // Added border color
          borderWidth: 1, // Added border width
        }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr 
                  style={{ 
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    backgroundColor: alpha(theme.palette.background.default, 0.04),
                  }}
                >
                  <th className="text-left p-4 font-medium" style={{ color: theme.palette.text.secondary }}>
                    User
                  </th>
                  <th className="text-left p-4 font-medium" style={{ color: theme.palette.text.secondary }}>
                    Role
                  </th>
                  <th className="text-left p-4 font-medium" style={{ color: theme.palette.text.secondary }}>
                    Status
                  </th>
                  <th className="text-left p-4 font-medium" style={{ color: theme.palette.text.secondary }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    style={{ 
                      borderBottom: index === users.length - 1 ? 'none' : `1px solid ${theme.palette.divider}`,
                      backgroundColor: 'transparent',
                      transition: 'background-color 0.2s ease',
                    }}
                    className="hover:bg-black/5"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full"
                          style={{ 
                            border: `2px solid ${theme.palette.primary.main}`,
                          }}
                        />
                        <div>
                          <div 
                            className="font-medium"
                            style={{ color: theme.palette.text.primary }}
                          >
                            {user.name}
                          </div>
                          <div 
                            className="text-sm"
                            style={{ color: theme.palette.text.secondary }}
                          >
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span style={getRoleStyles(user.role)}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span style={getStatusStyles(user.status)}>
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        className="text-sm rounded-lg transition-colors hover:bg-primary/10"
                        style={{
                          color: theme.palette.primary.main,
                          padding: "6px 12px",
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Users;
