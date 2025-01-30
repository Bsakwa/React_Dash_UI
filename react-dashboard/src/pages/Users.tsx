// src/pages/Users.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@mui/material/styles";
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

  // Fetch users from RandomUser API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=6");
        const data = await response.json();
        const formattedUsers = data.results.map((user: any, index: number) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          role: index % 2 === 0 ? "Admin" : "User", // Alternate roles for example
          status: index % 3 === 0 ? "Inactive" : "Active", // Alternate statuses for example
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
    <div className="space-y-6">
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: theme.palette.text.primary }}>
          Users
        </h1>
        <button
          className="px-4 py-2 rounded-md"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          Add User
        </button>
      </div>

      <Card style={{ backgroundColor: theme.palette.background.paper }}>
        <CardContent className="p-0">
          <table className="w-full">
            <thead>
              <tr className="border-b" style={{ borderColor: theme.palette.divider }}>
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
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-muted/50 transition-colors"
                  style={{ borderColor: theme.palette.divider }}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-medium" style={{ color: theme.palette.text.primary }}>
                          {user.name}
                        </div>
                        <div className="text-sm" style={{ color: theme.palette.text.secondary }}>
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant={user.role === "Admin" ? "default" : "secondary"}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Badge variant={user.status === "Active" ? "success" : "secondary"}>
                      {user.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <button
                      className="text-sm hover:text-primary"
                      style={{ color: theme.palette.text.secondary }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};
