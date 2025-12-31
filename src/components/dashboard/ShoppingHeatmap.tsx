const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = ["6AM", "9AM", "12PM", "3PM", "6PM", "9PM", "12AM"];

const heatmapData = [
  [20, 35, 45, 40, 55, 30, 15],
  [25, 40, 50, 45, 60, 35, 20],
  [30, 55, 70, 65, 80, 50, 30],
  [35, 60, 85, 75, 90, 60, 35],
  [40, 70, 95, 85, 100, 70, 45],
  [30, 50, 65, 55, 75, 85, 70],
  [15, 25, 35, 30, 45, 60, 55],
];

function getIntensityColor(value: number) {
  if (value >= 90) return "bg-primary shadow-[0_0_12px_hsl(174_100%_48%_/_0.6)]";
  if (value >= 70) return "bg-primary/80";
  if (value >= 50) return "bg-primary/60";
  if (value >= 30) return "bg-primary/40";
  return "bg-primary/20";
}

export function ShoppingHeatmap() {
  return (
    <div className="glass-card p-6">
      <div className="relative z-10">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground">Peak Shopping Hours</h3>
          <p className="text-sm text-muted-foreground">Customer activity by day and time</p>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[400px]">
            {/* Header row */}
            <div className="mb-2 flex">
              <div className="w-12" />
              {days.map((day) => (
                <div key={day} className="flex-1 text-center text-xs font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>
            {/* Heatmap grid */}
            <div className="space-y-1">
              {hours.map((hour, hourIndex) => (
                <div key={hour} className="flex items-center gap-1">
                  <div className="w-12 text-xs text-muted-foreground">{hour}</div>
                  {days.map((day, dayIndex) => (
                    <div
                      key={`${day}-${hour}`}
                      className={`flex-1 h-8 rounded-md transition-all duration-300 hover:scale-105 cursor-pointer ${getIntensityColor(
                        heatmapData[hourIndex][dayIndex]
                      )}`}
                      title={`${day} ${hour}: ${heatmapData[hourIndex][dayIndex]}% activity`}
                    />
                  ))}
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="text-xs text-muted-foreground">Low</span>
              <div className="flex gap-1">
                <div className="h-3 w-6 rounded bg-primary/20" />
                <div className="h-3 w-6 rounded bg-primary/40" />
                <div className="h-3 w-6 rounded bg-primary/60" />
                <div className="h-3 w-6 rounded bg-primary/80" />
                <div className="h-3 w-6 rounded bg-primary" />
              </div>
              <span className="text-xs text-muted-foreground">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
