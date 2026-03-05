"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-solea-slate-200 flex items-center justify-between px-8">
      {/* Left: Page title + breadcrumb */}
      <div>
        <h1 className="text-xl font-semibold text-solea-slate-800">
          Dashboard
        </h1>
        <p className="text-xs text-solea-slate-400">
          Welcome back, here&apos;s what&apos;s happening today.
        </p>
      </div>

      {/* Right: Search, notifications, avatar */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-solea-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-56 pl-9 pr-4 py-2 text-sm bg-solea-slate-50 border border-solea-slate-200 rounded-[var(--solea-radius-sm)] text-solea-slate-600 placeholder:text-solea-slate-400 focus:outline-none focus:ring-2 focus:ring-solea-primary-200 focus:border-solea-primary-400 transition-colors"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 rounded-[var(--solea-radius-sm)] text-solea-slate-500 hover:bg-solea-slate-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-solea-primary-500 rounded-full" />
        </button>

        {/* User avatar */}
        <button className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-solea-secondary-200 flex items-center justify-center text-sm font-semibold text-solea-secondary-800">
            AM
          </div>
          <ChevronDown className="w-4 h-4 text-solea-slate-400 hidden sm:block" />
        </button>
      </div>
    </header>
  );
}
