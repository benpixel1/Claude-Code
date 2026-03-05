import { DollarSign, Users, ShoppingBag, Eye } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import RevenueChart from "@/components/RevenueChart";
import SalesBreakdown from "@/components/SalesBreakdown";
import RecentOrders from "@/components/RecentOrders";
import ActivityFeed from "@/components/ActivityFeed";

const stats = [
  {
    title: "Total Revenue",
    value: "$72,450",
    change: 12.5,
    icon: DollarSign,
    color: "primary" as const,
  },
  {
    title: "Total Customers",
    value: "8,429",
    change: 8.2,
    icon: Users,
    color: "accent" as const,
  },
  {
    title: "Total Orders",
    value: "1,243",
    change: -3.1,
    icon: ShoppingBag,
    color: "secondary" as const,
  },
  {
    title: "Page Views",
    value: "142.3K",
    change: 22.4,
    icon: Eye,
    color: "info" as const,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-solea-slate-50">
      <Sidebar />

      {/* Main content area — shifts based on sidebar */}
      <div className="flex-1 ml-[260px] transition-all duration-300">
        <Header />

        <main className="p-8">
          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <SalesBreakdown />
            </div>
          </div>

          {/* Table + Activity row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <RecentOrders />
            </div>
            <div>
              <ActivityFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
