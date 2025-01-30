// src/pages/Analytics.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from "@mui/material/styles";

export const Analytics = () => {
  const theme = useTheme();

  const data = [
    { month: 'Jan', users: 400, revenue: 2400, profit: 1800 },
    { month: 'Feb', users: 300, revenue: 1800, profit: 1200 },
    { month: 'Mar', users: 600, revenue: 3600, profit: 2400 },
    { month: 'Apr', users: 800, revenue: 4800, profit: 3200 },
    { month: 'May', users: 500, revenue: 3000, profit: 2000 },
    { month: 'Jun', users: 700, revenue: 4200, profit: 2800 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mt-8"> {/* Added margin-top here */}
        <h1 className="text-3xl font-bold tracking-tight" style={{ color: theme.palette.text.primary }}>
          Analytics
        </h1>
        <div className="text-sm" style={{ color: theme.palette.text.secondary }}>
          Last 6 months
        </div>
      </div>

      <div className="grid gap-6">
        <Card 
          className="transition-all duration-200 hover:shadow-lg"
          style={{ backgroundColor: theme.palette.background.paper }}
        >
          <CardHeader>
            <CardTitle style={{ color: theme.palette.text.primary }}>
              Revenue Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={theme.palette.divider} 
                  />
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
                      color: theme.palette.text.primary,
                    }}
                    labelStyle={{
                      color: theme.palette.text.primary,
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke={theme.palette.primary.main} 
                    strokeWidth={2}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="profit" 
                    stroke={theme.palette.success.main} 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
