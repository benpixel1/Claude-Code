"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 32000, orders: 24000 },
  { month: "Feb", revenue: 38000, orders: 28000 },
  { month: "Mar", revenue: 35000, orders: 26000 },
  { month: "Apr", revenue: 42000, orders: 31000 },
  { month: "May", revenue: 48000, orders: 35000 },
  { month: "Jun", revenue: 45000, orders: 33000 },
  { month: "Jul", revenue: 52000, orders: 38000 },
  { month: "Aug", revenue: 58000, orders: 42000 },
  { month: "Sep", revenue: 54000, orders: 40000 },
  { month: "Oct", revenue: 61000, orders: 45000 },
  { month: "Nov", revenue: 67000, orders: 49000 },
  { month: "Dec", revenue: 72000, orders: 53000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-[var(--solea-radius-md)] p-5 border border-solea-slate-200 shadow-[var(--solea-shadow-sm)]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="text-base font-semibold text-solea-slate-800">
            Revenue Overview
          </h3>
          <p className="text-xs text-solea-slate-400 mt-0.5">
            Monthly revenue and order trends
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-solea-primary-400" />
            <span className="text-solea-slate-500">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-solea-secondary-400" />
            <span className="text-solea-slate-500">Orders</span>
          </div>
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e85d3a" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#e85d3a" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="ordersGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e5ae4e" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#e5ae4e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e9ecef" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#868e96" }}
              axisLine={{ stroke: "#e9ecef" }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#868e96" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e9ecef",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07)",
                fontSize: "13px",
              }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, ""]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#e85d3a"
              strokeWidth={2}
              fill="url(#revenueGrad)"
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="#e5ae4e"
              strokeWidth={2}
              fill="url(#ordersGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
