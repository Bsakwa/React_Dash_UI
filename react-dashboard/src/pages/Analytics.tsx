import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, ArrowDownRight, Users, DollarSign, TrendingUp, Calendar, Filter } from 'lucide-react';
import { useTheme } from "@mui/material/styles";

export const Analytics = () => {
  const theme = useTheme();
  const [timeRange, setTimeRange] = useState('6months');

  const monthlyData = [
    { month: 'Jan', users: 400, revenue: 2400, profit: 1800, costs: 600, engagement: 85 },
    { month: 'Feb', users: 300, revenue: 1800, profit: 1200, costs: 600, engagement: 75 },
    { month: 'Mar', users: 600, revenue: 3600, profit: 2400, costs: 1200, engagement: 90 },
    { month: 'Apr', users: 800, revenue: 4800, profit: 3200, costs: 1600, engagement: 88 },
    { month: 'May', users: 500, revenue: 3000, profit: 2000, costs: 1000, engagement: 82 },
    { month: 'Jun', users: 700, revenue: 4200, profit: 2800, costs: 1400, engagement: 86 },
  ];

  const userSourceData = [
    { name: 'Organic', value: 45 },
    { name: 'Direct', value: 30 },
    { name: 'Referral', value: 15 },
    { name: 'Social', value: 10 },
  ];

  const COLORS = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.success.main,
    theme.palette.warning.main
  ];

  const calculateChange = (current, previous) => {
    const change = ((current - previous) / previous) * 100;
    return change.toFixed(1);
  };

  const lastMonth = monthlyData[monthlyData.length - 1];
  const previousMonth = monthlyData[monthlyData.length - 2];

  const stats = [
    {
      title: "Total Users",
      value: lastMonth.users,
      change: calculateChange(lastMonth.users, previousMonth.users),
      icon: Users,
    },
    {
      title: "Revenue",
      value: `$${lastMonth.revenue.toLocaleString()}`,
      change: calculateChange(lastMonth.revenue, previousMonth.revenue),
      icon: DollarSign,
    },
    {
      title: "Profit Margin",
      value: `${((lastMonth.profit / lastMonth.revenue) * 100).toFixed(1)}%`,
      change: calculateChange(
        lastMonth.profit / lastMonth.revenue,
        previousMonth.profit / previousMonth.revenue
      ),
      icon: TrendingUp,
    },
  ];

  return (
    <div className="space-y-6" style={{ color: theme.palette.text.primary }}>
      <div className="flex justify-between items-center mt-8">
        <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" style={{ color: theme.palette.text.secondary }} />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="text-sm rounded-md border px-2 py-1"
              style={{ 
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderColor: theme.palette.divider
              }}
            >
              <option value="7days">Last 7 days</option>
              <option value="30days">Last 30 days</option>
              <option value="6months">Last 6 months</option>
              <option value="1year">Last year</option>
            </select>
          </div>
          <button
            className="flex items-center gap-2 px-3 py-1 rounded-md"
            style={{ 
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText
            }}
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card 
            key={stat.title} 
            className="hover:shadow-lg transition-shadow"
            style={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider,
          borderWidth: 0
         }}
          >
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium" style={{ color: theme.palette.text.secondary }}>{stat.title}</p>
                  <p className="text-2xl font-bold" style={{ color: theme.palette.text.primary }}>{stat.value}</p>
                </div>
                <stat.icon className="h-6 w-6" style={{ color: theme.palette.text.secondary }} />
              </div>
              <div className="mt-4 flex items-center">
                {parseFloat(stat.change) > 0 ? (
                  <ArrowUpRight className="h-4 w-4" style={{ color: theme.palette.success.main }} />
                ) : (
                  <ArrowDownRight className="h-4 w-4" style={{ color: theme.palette.error.main }} />
                )}
                <span className="text-sm font-medium" style={{ 
                  color: parseFloat(stat.change) > 0 ? theme.palette.success.main : theme.palette.error.main 
                }}>
                  {Math.abs(parseFloat(stat.change))}%
                </span>
                <span className="text-sm ml-2" style={{ color: theme.palette.text.secondary }}>vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card 
          className="hover:shadow-lg transition-shadow"
          style={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider,
          borderWidth: 0
         }}
        >
          <CardHeader>
            <CardTitle style={{ color: theme.palette.text.primary }}>Revenue & Profit Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                  <XAxis 
                    dataKey="month" 
                    stroke={theme.palette.text.secondary}
                  />
                  <YAxis
                    stroke={theme.palette.text.secondary}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke={theme.palette.primary.main}
                    strokeWidth={2}
                    dot={{ fill: theme.palette.primary.main }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="profit" 
                    stroke={theme.palette.success.main}
                    strokeWidth={2}
                    dot={{ fill: theme.palette.success.main }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-shadow"
          style={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider,
          borderWidth: 0,
        }}
        >
          <CardHeader>
            <CardTitle style={{ color: theme.palette.text.primary }}>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.divider} />
                  <XAxis 
                    dataKey="month" 
                    stroke={theme.palette.text.secondary}
                  />
                  <YAxis
                    stroke={theme.palette.text.secondary}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                    }}
                  />
                  <Bar dataKey="users" fill={theme.palette.primary.main} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-shadow md:col-span-2"
          style={{ backgroundColor: theme.palette.background.paper, borderColor: theme.palette.divider,
          borderWidth: 0,
         }}
        >
          <CardHeader>
            <CardTitle style={{ color: theme.palette.text.primary }}>User Acquisition Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={userSourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {userSourceData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme.palette.background.paper,
                      borderColor: theme.palette.divider,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
