"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  ShoppingBag,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Flame,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: ShoppingBag, label: "Products", active: false },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help", active: false },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white border-r border-solea-slate-200 flex flex-col z-20 transition-all duration-300 ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 h-16 border-b border-solea-slate-200">
        <div className="w-9 h-9 rounded-[var(--solea-radius-md)] bg-solea-primary-500 flex items-center justify-center flex-shrink-0">
          <Flame className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <span className="text-lg font-semibold text-solea-slate-800 tracking-tight">
            Solea
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[var(--solea-radius-sm)] text-sm font-medium transition-colors ${
              item.active
                ? "bg-solea-primary-50 text-solea-primary-600"
                : "text-solea-slate-500 hover:bg-solea-slate-100 hover:text-solea-slate-700"
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Collapse toggle */}
      <div className="p-3 border-t border-solea-slate-200">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-[var(--solea-radius-sm)] text-solea-slate-400 hover:bg-solea-slate-100 hover:text-solea-slate-600 transition-colors text-sm"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <>
              <ChevronLeft className="w-4 h-4" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
