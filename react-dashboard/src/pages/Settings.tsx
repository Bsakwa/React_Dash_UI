// src/pages/Settings.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, User, Lock, Palette } from "lucide-react";
import { useTheme } from "@mui/material/styles";

export const Settings = () => {
  const theme = useTheme();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl mt-8 font-bold tracking-tight" style={{ color: theme.palette.text.primary }}>
          Settings
        </h1>
      </div>

      <div className="grid gap-6">
        {/* Profile Settings Card */}
        <Card className="transition-all duration-200 hover:shadow-lg" style={{ backgroundColor: theme.palette.background.paper }}>
          <CardHeader className="flex flex-row items-center gap-4">
            <User className="w-6 h-6" style={{ color: theme.palette.text.primary }} />
            <div>
              <CardTitle style={{ color: theme.palette.text.primary }}>Profile Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={{ color: theme.palette.text.primary }}>
                Display Name
              </label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your name"
                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={{ color: theme.palette.text.primary }}>
                Email
              </label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="your@email.com"
                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Notification Settings Card */}
        <Card className="transition-all duration-200 hover:shadow-lg" style={{ backgroundColor: theme.palette.background.paper }}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Bell className="w-6 h-6" style={{ color: theme.palette.text.primary }} />
            <div>
              <CardTitle style={{ color: theme.palette.text.primary }}>Notification Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={{ color: theme.palette.text.primary }}>
                Email Notifications
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
              >
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={{ color: theme.palette.text.primary }}>
                Push Notifications
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
              >
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Security Settings Card */}
        <Card className="transition-all duration-200 hover:shadow-lg" style={{ backgroundColor: theme.palette.background.paper }}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Lock className="w-6 h-6" style={{ color: theme.palette.text.primary }} />
            <div>
              <CardTitle style={{ color: theme.palette.text.primary }}>Security Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={{ color: theme.palette.text.primary }}>
                Change Password
              </label>
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="New password"
                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={{ color: theme.palette.text.primary }}>
                Confirm Password
              </label>
              <input
                type="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Confirm new password"
                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Theme Settings Card */}
        <Card className="transition-all duration-200 hover:shadow-lg" style={{ backgroundColor: theme.palette.background.paper }}>
          <CardHeader className="flex flex-row items-center gap-4">
            <Palette className="w-6 h-6" style={{ color: theme.palette.text.primary }} />
            <div>
              <CardTitle style={{ color: theme.palette.text.primary }}>Theme Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" style={{ color: theme.palette.text.primary }}>
                Theme
              </label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ backgroundColor: theme.palette.background.default, color: theme.palette.text.primary }}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
