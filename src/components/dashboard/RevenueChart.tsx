import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", revenue: 45000, orders: 320 },
  { month: "Feb", revenue: 52000, orders: 410 },
  { month: "Mar", revenue: 48000, orders: 380 },
  { month: "Apr", revenue: 61000, orders: 490 },
  { month: "May", revenue: 55000, orders: 440 },
  { month: "Jun", revenue: 67000, orders: 530 },
  { month: "Jul", revenue: 72000, orders: 580 },
  { month: "Aug", revenue: 69000, orders: 550 },
  { month: "Sep", revenue: 78000, orders: 620 },
  { month: "Oct", revenue: 85000, orders: 680 },
  { month: "Nov", revenue: 92000, orders: 740 },
  { month: "Dec", revenue: 108000, orders: 860 },
];

export function RevenueChart() {
  return (
    <div className="glass-card p-6">
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Total Revenue</h3>
            <p className="text-sm text-muted-foreground">12-month trend analysis</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-secondary" />
              <span className="text-sm text-muted-foreground">Orders</span>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(174 100% 48%)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="hsl(174 100% 48%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(195 100% 50%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(195 100% 50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(215 20% 55%)", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(222 47% 10%)",
                  border: "1px solid hsl(222 30% 18%)",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px hsl(222 47% 4% / 0.4)",
                }}
                labelStyle={{ color: "hsl(210 40% 98%)" }}
                itemStyle={{ color: "hsl(174 100% 48%)" }}
                formatter={(value: number, name: string) => [
                  name === "revenue" ? `$${value.toLocaleString()}` : value,
                  name === "revenue" ? "Revenue" : "Orders",
                ]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(174 100% 48%)"
                strokeWidth={3}
                fill="url(#revenueGradient)"
                className="chart-glow"
              />
              <Area
                type="monotone"
                dataKey="orders"
                stroke="hsl(195 100% 50%)"
                strokeWidth={2}
                fill="url(#ordersGradient)"
                yAxisId={0}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
