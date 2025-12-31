import { Bell, Search, Settings } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <div className="h-5 w-5 rounded-md bg-primary shadow-glow" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Growth Analytics</h1>
            <p className="text-xs text-muted-foreground">E-commerce Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-64 rounded-xl border border-border bg-muted/50 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Icons */}
          <button className="relative rounded-xl p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          </button>
          <button className="rounded-xl p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground">
            <Settings className="h-5 w-5" />
          </button>

          {/* Avatar */}
          <div className="h-10 w-10 overflow-hidden rounded-xl border-2 border-primary/30 transition-all hover:border-primary hover:shadow-glow">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
