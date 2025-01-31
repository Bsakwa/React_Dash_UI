// src/pages/Dashboard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Users, DollarSign, ArrowUpRight } from "lucide-react";
import { useTheme, alpha } from "@mui/material/styles";

export const Dashboard = () => {
  const theme = useTheme();

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: <DollarSign className="w-6 h-6" />,
      trend: "up",
      iconBgColor: "#FF7F7F" // Darker red
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.2%",
      icon: <Users className="w-6 h-6" />,
      trend: "up",
      iconBgColor: "#7F9FFF" // Darker blue
    },
    {
      title: "Sales",
      value: "12,234",
      change: "+12.5%",
      icon: <BarChart className="w-6 h-6" />,
      trend: "up",
      iconBgColor: "#7FBF7F" // Darker green
    },
    {
      title: "Active Sessions",
      value: "573",
      change: "+8.1%",
      icon: <ArrowUpRight className="w-6 h-6" />,
      trend: "up",
      iconBgColor: "#FFD87F" // Darker yellow
    }
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 
          className="text-3xl font-bold tracking-tight"
          style={{ color: theme.palette.text.primary }}
        >
          Dashboard
        </h1>
        <div className="text-sm" style={{ color: theme.palette.text.secondary }}>
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card 
            key={stat.title} 
            className="transition-all duration-200 hover:shadow-lg"
            style={{ 
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[1],
              borderRadius: theme.shape.borderRadius,
            }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle 
                className="text-sm font-medium"
                style={{ color: theme.palette.text.primary }}
              >
                {stat.title}
              </CardTitle>
              <div 
                className="rounded-full p-2 transition-colors duration-200 hover:bg-opacity-80"
                style={{ backgroundColor: stat.iconBgColor }}
              >
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div 
                className="text-2xl font-bold"
                style={{ color: theme.palette.text.primary }}
              >
                {stat.value}
              </div>
              <div 
                className={`text-sm mt-2 flex items-center ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
