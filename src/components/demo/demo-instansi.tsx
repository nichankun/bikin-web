"use client";

import React, { useState } from "react";
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
  Menu, // Tambah Icon Menu
  X, // Tambah Icon Close
} from "lucide-react";
import { Button } from "@/components/ui/button";

type TabId = "dashboard" | "notulen" | "arsip" | "users";

export function DemoInstansi() {
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State Menu Mobile

  // Fungsi helper untuk pindah tab sekaligus tutup menu mobile
  const handleTabChange = (id: TabId) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC] text-slate-900 font-sans">
      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop gelap */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar Content (Mobile) */}
          <aside className="fixed left-0 top-0 bottom-0 w-72 bg-slate-900 p-6 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-10 px-2">
              <div className="flex items-center gap-3 text-white">
                <div className="size-9 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black">
                  E
                </div>
                <span className="font-black tracking-tight text-lg">
                  E-NOTULEN
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 space-y-2">
              <NavItem
                id="dashboard"
                label="Dashboard"
                icon={<LayoutDashboard size={18} />}
                active={activeTab === "dashboard"}
                onClick={() => handleTabChange("dashboard")}
              />
              <NavItem
                id="notulen"
                label="Daftar Notulen"
                icon={<FileText size={18} />}
                active={activeTab === "notulen"}
                onClick={() => handleTabChange("notulen")}
              />
              <NavItem
                id="arsip"
                label="Arsip Digital"
                icon={<Archive size={18} />}
                active={activeTab === "arsip"}
                onClick={() => handleTabChange("arsip")}
              />
              <NavItem
                id="users"
                label="User Management"
                icon={<Users size={18} />}
                active={activeTab === "users"}
                onClick={() => handleTabChange("users")}
              />
            </nav>
          </aside>
        </div>
      )}

      {/* --- DESKTOP SIDEBAR (Tetap sama) --- */}
      <aside className="w-64 bg-slate-900 shrink-0 hidden md:flex flex-col p-6 shadow-2xl z-20">
        <div className="flex items-center gap-3 text-white mb-10 px-2">
          <div className="size-9 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center font-black shadow-lg shadow-indigo-500/20">
            E
          </div>
          <div>
            <span className="font-black tracking-tight text-lg block leading-none">
              E-NOTULEN
            </span>
            <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">
              Bapenda Sultra
            </span>
          </div>
        </div>

        <nav className="flex-1 space-y-1.5">
          <NavItem
            id="dashboard"
            label="Dashboard"
            icon={<LayoutDashboard size={18} />}
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
          <NavItem
            id="notulen"
            label="Daftar Notulen"
            icon={<FileText size={18} />}
            active={activeTab === "notulen"}
            onClick={() => setActiveTab("notulen")}
          />
          <NavItem
            id="arsip"
            label="Arsip Digital"
            icon={<Archive size={18} />}
            active={activeTab === "arsip"}
            onClick={() => setActiveTab("arsip")}
          />
          <NavItem
            id="users"
            label="User Management"
            icon={<Users size={18} />}
            active={activeTab === "users"}
            onClick={() => setActiveTab("users")}
          />
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
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 shrink-0 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            {/* Hamburger Button untuk Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>

            <div className="hidden md:block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              {activeTab === "dashboard"
                ? "Dashboard Utama"
                : activeTab.toUpperCase()}
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
            <button className="text-slate-400 hover:text-indigo-600 relative p-1">
              <Bell size={20} />
              <span className="absolute top-1 right-1 size-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-px h-6 bg-slate-200 hidden xs:block"></div>
            <div className="size-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden shadow-inner relative">
              <Image
                src="https://ui-avatars.com/api/?name=Imam+Hayatul&background=6366f1&color=fff"
                alt="Avatar"
                fill
              />
            </div>
          </div>
        </header>

        {/* Dynamic Content Area (Isinya tetap sama) */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar scroll-smooth">
          {activeTab === "dashboard" && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-900">
                    Halo, Pak Imam! 👋
                  </h1>
                  <p className="text-slate-500 text-sm mt-1 font-medium italic">
                    Bapenda Sultra - Digital Minutes System
                  </p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-6 rounded-2xl font-bold shadow-xl shadow-indigo-600/30 flex items-center gap-2 border-none">
                  <Plus size={20} strokeWidth={3} />
                  Buat Notulen Baru
                </Button>
              </div>

              {/* Stats Cards */}
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
              <div className="bg-white border border-slate-200/60 shadow-sm rounded-[2rem] overflow-hidden">
                <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800">
                    Aktivitas Terakhir
                  </h3>
                  <button
                    onClick={() => setActiveTab("notulen")}
                    className="text-xs font-bold text-indigo-600 hover:underline"
                  >
                    Lihat Semua
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                      <tr>
                        <th className="px-6 md:px-8 py-4">Nama Rapat</th>
                        <th className="px-6 md:px-8 py-4 text-center">
                          Tanggal
                        </th>
                        <th className="px-6 md:px-8 py-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
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
          )}

          {/* Render Tab lainnya (notulen, arsip, users) menggunakan logika yang sama seperti di atas */}
          {activeTab === "notulen" && (
            <div className="text-center py-20 font-bold text-slate-400">
              Daftar Notulen View...
            </div>
          )}
          {activeTab === "arsip" && (
            <div className="text-center py-20 font-bold text-slate-400">
              Arsip Digital View...
            </div>
          )}
          {activeTab === "users" && (
            <div className="text-center py-20 font-bold text-slate-400">
              User Management View...
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// --- SUB-KOMPONEN PEMBANTU ---

function NavItem({
  label,
  icon,
  active,
  onClick,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
        active
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({
  label,
  value,
  trend,
  color,
  icon,
}: {
  label: string;
  value: string;
  trend?: string;
  color: string;
  icon: React.ReactNode;
}) {
  const colorMap: Record<string, string> = {
    indigo: "bg-indigo-50 text-indigo-600",
    amber: "bg-amber-50 text-amber-500",
    emerald: "bg-emerald-50 text-emerald-500",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-2xl ${colorMap[color]}`}>{icon}</div>
        {trend && (
          <span className="text-[10px] font-black bg-slate-50 px-2 py-1 rounded-lg">
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
}: {
  title: string;
  subtitle: string;
  date: string;
  status: string;
  statusColor: string;
}) {
  const statusMap: Record<string, string> = {
    emerald: "bg-emerald-100 text-emerald-700",
    amber: "bg-amber-100 text-amber-700",
    slate: "bg-slate-100 text-slate-500",
  };

  return (
    <tr className="hover:bg-slate-50/80 transition-colors">
      <td className="px-6 md:px-8 py-5">
        <div className="flex flex-col">
          <span className="font-bold text-slate-800">{title}</span>
          <span className="text-[10px] text-slate-400">{subtitle}</span>
        </div>
      </td>
      <td className="px-6 md:px-8 py-5 text-center text-slate-500">{date}</td>
      <td className="px-6 md:px-8 py-5 text-right">
        <span
          className={`${statusMap[statusColor]} px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
