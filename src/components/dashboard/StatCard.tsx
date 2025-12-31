import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  const changeColor = {
    positive: "text-primary",
    negative: "text-destructive",
    neutral: "text-muted-foreground",
  };

  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-hover hover:border-primary/30 group">
      <div className="relative z-10 flex items-start justify-between">
        <div className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="stat-value">{value}</p>
          <p className={`text-sm font-medium ${changeColor[changeType]}`}>
            {change}
          </p>
        </div>
        <div className="rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-glow">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
