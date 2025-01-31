import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BarChart, Users, DollarSign, ArrowUpRight, TrendingUp, 
  TrendingDown, Activity, Calendar 
} from "lucide-react";
import { useTheme, alpha } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const chartData = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 3000, users: 1398 },
  { name: 'Mar', revenue: 2000, users: 9800 },
  { name: 'Apr', revenue: 2780, users: 3908 },
  { name: 'May', revenue: 1890, users: 4800 },
  { name: 'Jun', revenue: 2390, users: 3800 },
];

export const Dashboard = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: <DollarSign className="w-6 h-6 text-white" />,
      trend: "up",
      iconBgColor: theme.palette.success.main,
      description: "Compared to last month"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.2%",
      icon: <Users className="w-6 h-6 text-white" />,
      trend: "up",
      iconBgColor: theme.palette.primary.main,
      description: "Active in last 7 days"
    },
    {
      title: "Sales",
      value: "12,234",
      change: "+12.5%",
      icon: <BarChart className="w-6 h-6 text-white" />,
      trend: "up",
      iconBgColor: theme.palette.secondary.main,
      description: "Total orders this month"
    },
    {
      title: "Active Sessions",
      value: "573",
      change: "-8.1%",
      icon: <Activity className="w-6 h-6 text-white" />,
      trend: "down",
      iconBgColor: theme.palette.warning.main,
      description: "Current active users"
    }
  ];

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const [time, setTime] = React.useState(getCurrentTime());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
        <div className="space-y-1">
          <h1 
            className="text-3xl font-bold tracking-tight"
            style={{ color: theme.palette.text.primary }}
          >
            Welcome back, Admin
          </h1>
          <p style={{ color: theme.palette.text.secondary }}>
            Here's what's happening with your business today
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: theme.palette.text.secondary }}>
          <Calendar className="w-4 h-4" />
          <span>{new Date().toLocaleDateString('en-US', { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
          <span className="mx-2">•</span>
          <span>{time}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card 
            key={stat.title} 
            className="transition-all duration-300 hover:translate-y-[-4px]"
            style={{ 
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[1],
              borderRadius: theme.shape.borderRadius,
              borderColor: theme.palette.divider,
              borderWidth: 0

            }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle 
                className="text-sm font-medium"
                style={{ color: theme.palette.text.secondary }}
              >
                {stat.title}
              </CardTitle>
              <div 
                className="rounded-lg p-2.5 transition-all duration-200 hover:shadow-lg"
                style={{ 
                  backgroundColor: stat.iconBgColor,
                  boxShadow: `0 4px 12px ${alpha(stat.iconBgColor, 0.25)}`
                }}
              >
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div 
                  className="text-2xl font-bold"
                  style={{ color: theme.palette.text.primary }}
                >
                  {stat.value}
                </div>
                <div className="flex items-center gap-2">
                  <div 
                    className={`flex items-center text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {stat.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                  <span 
                    className="text-xs"
                    style={{ color: theme.palette.text.secondary }}
                  >
                    {stat.description}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <Card 
        className="transition-all duration-300"
        style={{ 
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          borderRadius: theme.shape.borderRadius,
          borderColor: theme.palette.divider,
          borderWidth: 0

        }}
      >
        <CardHeader>
          <CardTitle 
            style={{ color: theme.palette.text.primary }}
          >
            Business Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={theme.palette.divider}
                />
                <XAxis 
                  dataKey="name" 
                  stroke={theme.palette.text.secondary}
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: theme.typography.fontFamily,
                  }}
                />
                <YAxis 
                  stroke={theme.palette.text.secondary}
                  style={{
                    fontSize: '0.875rem',
                    fontFamily: theme.typography.fontFamily,
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: theme.shape.borderRadius,
                  }}
                  labelStyle={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                  dot={{ r: 4, fill: theme.palette.background.paper, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke={theme.palette.secondary.main}
                  strokeWidth={2}
                  dot={{ r: 4, fill: theme.palette.background.paper, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
