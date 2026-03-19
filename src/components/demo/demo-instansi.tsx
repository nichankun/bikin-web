"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Archive,
  Users,
  Search,
  Bell,
  Plus,
  Clock,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// --- 1. TYPES & INTERFACES ---

type TabId = "dashboard" | "notulen" | "arsip" | "users";

interface NavItemProps {
  label: string;
  icon: ReactNode;
  active: boolean;
  onClick: () => void;
}

type StatColor = "indigo" | "amber" | "emerald" | "purple";

interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  color: StatColor;
  icon: ReactNode;
}

interface TableRowProps {
  title: string;
  subtitle: string;
  date: string;
  status: string;
  statusColor: "emerald" | "amber" | "slate";
}

// --- 2. MAIN COMPONENT ---

export function DemoInstansi() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabChange = (id: TabId) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC] text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900">
      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <aside className="fixed left-0 top-0 bottom-0 w-72 bg-slate-900 p-6 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-10 px-2">
              <div className="flex items-center gap-3 text-white">
                <div className="size-9 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black">
                  E
                </div>
                <span className="font-black tracking-tight text-lg uppercase">
                  E-Notulen
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 space-y-2">
              <SidebarNavigation
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
            </nav>
          </aside>
        </div>
      )}

      {/* --- DESKTOP SIDEBAR --- */}
      <aside
        className="w-64 bg-slate-900 shrink-0 hidden md:flex flex-col p-6 shadow-2xl z-20"
        role="navigation"
      >
        <div className="flex items-center gap-3 text-white mb-10 px-2">
          <div className="size-9 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black shadow-lg shadow-indigo-500/20">
            E
          </div>
          <div>
            <span className="font-black tracking-tight text-lg block leading-none uppercase">
              E-Notulen
            </span>
            <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
              Bapenda Sultra
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-1.5">
          <SidebarNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800 flex items-center gap-3 px-2 text-white">
          <div className="size-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center font-bold text-indigo-400">
            IH
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-black truncate">Admin Notulen</p>
            <p className="text-[10px] text-slate-500 font-bold truncate uppercase tracking-tighter">
              Administrator
            </p>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main
        className="flex-1 flex flex-col min-w-0 overflow-hidden"
        role="main"
      >
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 shrink-0 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Buka Menu"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              {activeTab === "dashboard" ? "Dashboard Utama" : activeTab}
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <div className="relative hidden sm:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={14}
                strokeWidth={3}
              />
              <input
                type="text"
                placeholder="Cari data..."
                className="pl-9 pr-4 py-1.5 bg-slate-100 border-none rounded-full text-xs outline-none focus:ring-2 focus:ring-indigo-500/20 w-48 transition-all focus:w-64"
              />
            </div>
            <button
              className="text-slate-400 hover:text-indigo-600 relative p-1"
              aria-label="Notifikasi"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 size-2 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-px h-6 bg-slate-200 hidden xs:block" />
            <div className="size-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden shadow-inner relative">
              <Image
                src="https://ui-avatars.com/api/?name=Imam+Hayatul&background=6366f1&color=fff"
                alt="Profil"
                fill
                sizes="32px"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {activeTab === "dashboard" && (
            <DashboardView setActiveTab={setActiveTab} />
          )}
          {activeTab !== "dashboard" && (
            <div className="flex items-center justify-center h-full text-slate-400 font-bold uppercase tracking-widest animate-pulse">
              {activeTab.replace("-", " ")} View...
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// --- 3. SUB-COMPONENTS (Clean Code Refactoring) ---

const SidebarNavigation = ({
  activeTab,
  onTabChange,
}: {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
}) => (
  <>
    <NavItem
      label="Dashboard"
      icon={<LayoutDashboard size={18} />}
      active={activeTab === "dashboard"}
      onClick={() => onTabChange("dashboard")}
    />
    <NavItem
      label="Daftar Notulen"
      icon={<FileText size={18} />}
      active={activeTab === "notulen"}
      onClick={() => onTabChange("notulen")}
    />
    <NavItem
      label="Arsip Digital"
      icon={<Archive size={18} />}
      active={activeTab === "arsip"}
      onClick={() => onTabChange("arsip")}
    />
    <NavItem
      label="User Management"
      icon={<Users size={18} />}
      active={activeTab === "users"}
      onClick={() => onTabChange("users")}
    />
  </>
);

const DashboardView = ({
  setActiveTab,
}: {
  setActiveTab: (id: TabId) => void;
}) => (
  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900">
          Halo, Admin!
        </h1>
        <p className="text-slate-500 text-sm mt-1 font-medium italic">
          Bapenda Sultra - Digital Minutes System
        </p>
      </div>
      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-2xl font-bold shadow-xl shadow-indigo-600/20 border-none">
        <Plus size={20} strokeWidth={3} className="mr-2" /> Buat Notulen Baru
      </Button>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      <StatCard
        label="Total Notulen"
        value="1,248"
        trend="+12.5%"
        color="indigo"
        icon={<FileText size={24} />}
      />
      <StatCard
        label="Menunggu TTD"
        value="12"
        trend="PENTING"
        color="amber"
        icon={<Clock size={24} />}
      />
      <StatCard
        label="Arsip Valid"
        value="98.2%"
        trend="STABIL"
        color="emerald"
        icon={<CheckCircle2 size={24} />}
      />
      <StatCard
        label="Staff Aktif"
        value="42"
        color="purple"
        icon={<Users size={24} />}
      />
    </div>

    {/* Activity Table */}
    <div className="bg-white border border-slate-200 shadow-sm rounded-[2rem] overflow-hidden">
      <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-800">Aktivitas Terakhir</h3>
        <button
          onClick={() => setActiveTab("notulen")}
          className="text-xs font-bold text-indigo-600 hover:underline"
        >
          Lihat Semua
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em]">
            <tr>
              <th className="px-6 md:px-8 py-4">Nama Rapat</th>
              <th className="px-6 md:px-8 py-4 text-center">Tanggal</th>
              <th className="px-6 md:px-8 py-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium">
            <TableRow
              title="Rapat Koordinasi PAD"
              subtitle="Bid. Pendapatan"
              date="18 Mar 2026"
              status="SELESAI"
              statusColor="emerald"
            />
            <TableRow
              title="Evaluasi Digitalisasi"
              subtitle="IT Support"
              date="17 Mar 2026"
              status="PROSES TTD"
              statusColor="amber"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

function NavItem({ label, icon, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm",
        active
          ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/20"
          : "text-slate-400 hover:bg-slate-800 hover:text-white",
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({ label, value, trend, color, icon }: StatCardProps) {
  const colorVariants = {
    indigo: "bg-indigo-50 text-indigo-600",
    amber: "bg-amber-50 text-amber-500",
    emerald: "bg-emerald-50 text-emerald-500",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm transition-hover hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className={cn("p-3 rounded-2xl", colorVariants[color])}>
          {icon}
        </div>
        {trend && (
          <span className="text-[10px] font-black bg-slate-50 px-2 py-1 rounded-lg text-slate-500">
            {trend}
          </span>
        )}
      </div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-2xl font-black text-slate-900 tracking-tight">
        {value}
      </p>
    </div>
  );
}

function TableRow({
  title,
  subtitle,
  date,
  status,
  statusColor,
}: TableRowProps) {
  const statusStyles = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    slate: "bg-slate-100 text-slate-600",
  };

  return (
    <tr className="hover:bg-slate-50/80 transition-colors">
      <td className="px-6 md:px-8 py-5">
        <div className="flex flex-col">
          <span className="font-bold text-slate-800">{title}</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase">
            {subtitle}
          </span>
        </div>
      </td>
      <td className="px-6 md:px-8 py-5 text-center text-slate-500">{date}</td>
      <td className="px-6 md:px-8 py-5 text-right">
        <span
          className={cn(
            "px-3 py-1 rounded-full text-[10px] font-black tracking-widest",
            statusStyles[statusColor],
          )}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
