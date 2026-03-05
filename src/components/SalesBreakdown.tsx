"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { category: "Electronics", sales: 42000 },
  { category: "Clothing", sales: 35000 },
  { category: "Home", sales: 28000 },
  { category: "Sports", sales: 22000 },
  { category: "Books", sales: 18000 },
  { category: "Beauty", sales: 15000 },
];

export default function SalesBreakdown() {
  return (
    <div className="bg-white rounded-[var(--solea-radius-md)] p-5 border border-solea-slate-200 shadow-[var(--solea-shadow-sm)]">
      <div className="mb-5">
        <h3 className="text-base font-semibold text-solea-slate-800">
          Sales by Category
        </h3>
        <p className="text-xs text-solea-slate-400 mt-0.5">
          Top performing product categories
        </p>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e9ecef"
              horizontal={false}
            />
            <XAxis
              type="number"
              tick={{ fontSize: 12, fill: "#868e96" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <YAxis
              dataKey="category"
              type="category"
              tick={{ fontSize: 12, fill: "#495057" }}
              axisLine={false}
              tickLine={false}
              width={80}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e9ecef",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07)",
                fontSize: "13px",
              }}
              formatter={(value) => [`$${Number(value).toLocaleString()}`, "Sales"]}
            />
            <Bar
              dataKey="sales"
              fill="#e85d3a"
              radius={[0, 6, 6, 0]}
              background={{ fill: "#f8f9fa", radius: 6 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
