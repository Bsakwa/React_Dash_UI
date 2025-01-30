import { Users, BarChart2, DollarSign, ShoppingCart } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';
import { Card } from '../components/Card';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="1,234"
          icon={<Users className="w-6 h-6" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Total Revenue"
          value="$12,345"
          icon={<DollarSign className="w-6 h-6" />}
          trend={{ value: 8, isPositive: true }}
        />
        <StatsCard
          title="Sales"
          value="456"
          icon={<ShoppingCart className="w-6 h-6" />}
          trend={{ value: 3, isPositive: false }}
        />
        <StatsCard
          title="Conversion Rate"
          value="2.4%"
          icon={<BarChart2 className="w-6 h-6" />}
          trend={{ value: 4, isPositive: true }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Recent Activity">
          {/* Activity content */}
        </Card>
        <Card title="Performance">
          {/* Performance content */}
        </Card>
      </div>
    </div>
  );
};
