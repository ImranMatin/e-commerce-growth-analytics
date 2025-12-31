import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { CircularGauge } from "@/components/dashboard/CircularGauge";
import { ShoppingHeatmap } from "@/components/dashboard/ShoppingHeatmap";
import { TopProductsTable } from "@/components/dashboard/TopProductsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background gradient effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10">
        <DashboardHeader />

        <main className="container mx-auto px-6 py-8">
          {/* Stats Grid */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Revenue"
              value="$892,450"
              change="+12.5% from last month"
              changeType="positive"
              icon={DollarSign}
            />
            <StatCard
              title="Total Customers"
              value="24,583"
              change="+8.2% from last month"
              changeType="positive"
              icon={Users}
            />
            <StatCard
              title="Total Orders"
              value="12,847"
              change="+15.3% from last month"
              changeType="positive"
              icon={ShoppingCart}
            />
            <StatCard
              title="Conversion Rate"
              value="3.24%"
              change="-0.8% from last month"
              changeType="negative"
              icon={TrendingUp}
            />
          </div>

          {/* Main Chart */}
          <div className="mb-8">
            <RevenueChart />
          </div>

          {/* CAC & LTV Gauges + Heatmap */}
          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <CircularGauge
              value={42}
              maxValue={100}
              label="Customer Acquisition Cost"
              displayValue="$42"
              color="primary"
            />
            <CircularGauge
              value={285}
              maxValue={400}
              label="Lifetime Value (LTV)"
              displayValue="$285"
              color="secondary"
            />
            <div className="lg:col-span-1">
              <ShoppingHeatmap />
            </div>
          </div>

          {/* Products Table */}
          <TopProductsTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
