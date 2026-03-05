import { ShoppingBag, Users, Star, Package, CreditCard } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Activity {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    icon: ShoppingBag,
    color: "text-solea-primary-500",
    bg: "bg-solea-primary-50",
    title: "New order received",
    description: "Order #ORD-7291 placed by Elena Martinez",
    time: "2 min ago",
  },
  {
    icon: Users,
    color: "text-solea-accent-500",
    bg: "bg-solea-accent-50",
    title: "New customer registered",
    description: "James Okoro joined the platform",
    time: "18 min ago",
  },
  {
    icon: Star,
    color: "text-solea-secondary-500",
    bg: "bg-solea-secondary-50",
    title: "Product review added",
    description: 'Sofia Chen left a 5-star review for "Yoga Mat Premium"',
    time: "1 hour ago",
  },
  {
    icon: Package,
    color: "text-solea-info",
    bg: "bg-blue-50",
    title: "Shipment dispatched",
    description: "Order #ORD-7288 shipped via Express",
    time: "3 hours ago",
  },
  {
    icon: CreditCard,
    color: "text-solea-success",
    bg: "bg-green-50",
    title: "Payment received",
    description: "$349.00 from Lucas Bernard",
    time: "5 hours ago",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white rounded-[var(--solea-radius-md)] p-5 border border-solea-slate-200 shadow-[var(--solea-shadow-sm)]">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-solea-slate-800">
          Recent Activity
        </h3>
        <p className="text-xs text-solea-slate-400 mt-0.5">
          Latest events on your store
        </p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className={`w-9 h-9 rounded-[var(--solea-radius-sm)] ${activity.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}
            >
              <activity.icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-solea-slate-700">
                {activity.title}
              </p>
              <p className="text-xs text-solea-slate-400 mt-0.5 truncate">
                {activity.description}
              </p>
            </div>
            <span className="text-xs text-solea-slate-400 flex-shrink-0">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
