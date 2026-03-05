import { TrendingUp, TrendingDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color: "primary" | "secondary" | "accent" | "info";
}

const colorMap = {
  primary: {
    bg: "bg-solea-primary-50",
    icon: "text-solea-primary-500",
  },
  secondary: {
    bg: "bg-solea-secondary-50",
    icon: "text-solea-secondary-500",
  },
  accent: {
    bg: "bg-solea-accent-50",
    icon: "text-solea-accent-500",
  },
  info: {
    bg: "bg-blue-50",
    icon: "text-solea-info",
  },
};

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
}: StatCardProps) {
  const isPositive = change >= 0;
  const colors = colorMap[color];

  return (
    <div className="bg-white rounded-[var(--solea-radius-md)] p-5 border border-solea-slate-200 shadow-[var(--solea-shadow-sm)] hover:shadow-[var(--solea-shadow-md)] transition-shadow">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-solea-slate-500">{title}</p>
          <p className="text-2xl font-bold text-solea-slate-800">{value}</p>
        </div>
        <div
          className={`w-10 h-10 rounded-[var(--solea-radius-sm)] ${colors.bg} flex items-center justify-center`}
        >
          <Icon className={`w-5 h-5 ${colors.icon}`} />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-solea-success" />
        ) : (
          <TrendingDown className="w-4 h-4 text-solea-error" />
        )}
        <span
          className={`text-sm font-medium ${
            isPositive ? "text-solea-success" : "text-solea-error"
          }`}
        >
          {isPositive ? "+" : ""}
          {change}%
        </span>
        <span className="text-xs text-solea-slate-400">vs last month</span>
      </div>
    </div>
  );
}
