interface CircularGaugeProps {
  value: number;
  maxValue: number;
  label: string;
  displayValue: string;
  color: "primary" | "secondary";
}

export function CircularGauge({ value, maxValue, label, displayValue, color }: CircularGaugeProps) {
  const percentage = (value / maxValue) * 100;
  const strokeDasharray = 2 * Math.PI * 45;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

  const colorClasses = {
    primary: {
      stroke: "stroke-primary",
      glow: "drop-shadow-[0_0_12px_hsl(174_100%_48%_/_0.5)]",
      text: "text-primary",
    },
    secondary: {
      stroke: "stroke-secondary",
      glow: "drop-shadow-[0_0_12px_hsl(195_100%_50%_/_0.5)]",
      text: "text-secondary",
    },
  };

  return (
    <div className="glass-card p-6 transition-all duration-300 hover:shadow-hover hover:border-primary/30">
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          <svg className="h-32 w-32 -rotate-90 transform" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(222 30% 18%)"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              className={`${colorClasses[color].stroke} ${colorClasses[color].glow} transition-all duration-1000 ease-out`}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-2xl font-bold ${colorClasses[color].text}`}>
              {displayValue}
            </span>
          </div>
        </div>
        <p className="mt-4 text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-xs text-muted-foreground/60">{percentage.toFixed(0)}% of target</p>
      </div>
    </div>
  );
}
