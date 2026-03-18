"use client";

import React, { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Archive,
  Users,
  Search,
  Bell,
  Plus,
  FileCheck,
  Clock,
  Folder,
  History,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// --- SUB-KOMPONEN INTERNAL ---

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
        active
          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  color,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}) {
  return (
    <Card className="border-slate-200/60 shadow-sm rounded-2xl overflow-hidden bg-white">
      <CardContent className="p-6 flex items-center gap-4">
        <div className={`p-3 rounded-xl ${color}`}>
          <Icon size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">
            {label}
          </p>
          <p className="text-2xl font-black text-slate-900 leading-none">
            {value}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

// --- KOMPONEN UTAMA ---

export function DemoInstansi() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-900 overflow-hidden font-sans">
      {/* 1. SIDEBAR INTERNAL */}
      <aside className="w-64 bg-slate-900 shrink-0 hidden md:flex flex-col p-6">
        <div className="flex items-center gap-3 text-white mb-10 px-2">
          <div className="size-8 bg-indigo-500 rounded-lg flex items-center justify-center font-black">
            E
          </div>
          <span className="font-black tracking-tight text-lg">E-NOTULEN</span>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
          <NavItem
            icon={FileText}
            label="Daftar Notulen"
            active={activeTab === "notulen"}
            onClick={() => setActiveTab("notulen")}
          />
          <NavItem
            icon={Archive}
            label="Arsip Digital"
            active={activeTab === "arsip"}
            onClick={() => setActiveTab("arsip")}
          />
          <NavItem
            icon={Users}
            label="User Management"
            active={activeTab === "users"}
            onClick={() => setActiveTab("users")}
          />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800 flex items-center gap-3 px-2 text-white">
          <div className="size-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs">
            IH
          </div>
          <div className="overflow-hidden">
            <p className="text-xs font-bold truncate">Imam Hayatul</p>
            <p className="text-[10px] text-slate-500 truncate">
              Bapenda Sultra
            </p>
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header Dashboard */}
        <header className="h-16 bg-white border-b border-slate-200 shrink-0 flex items-center justify-between px-8 sticky top-0 z-10">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-tighter">
            Sistem Informasi Notulensi Digital
          </h2>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-900">
              <Bell size={18} />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200" />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-black tracking-tight">
                    Selamat Datang, Imam
                  </h1>
                  <p className="text-slate-500 text-sm">
                    Berikut ringkasan aktivitas notulensi hari ini.
                  </p>
                </div>
                <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold shadow-lg shadow-indigo-600/20">
                  <Plus className="mr-2 h-4 w-4" /> Notulen Baru
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                  icon={FileText}
                  label="Total Notulen"
                  value="1,248"
                  color="bg-indigo-50 text-indigo-600"
                />
                <StatCard
                  icon={Clock}
                  label="Menunggu TTD"
                  value="12"
                  color="bg-amber-50 text-amber-500"
                />
                <StatCard
                  icon={FileCheck}
                  label="Arsip Valid"
                  value="98%"
                  color="bg-emerald-50 text-emerald-500"
                />
              </div>

              <Card className="border-slate-200/60 shadow-sm rounded-2xl overflow-hidden bg-white">
                <div className="p-6 border-b flex justify-between items-center">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <History size={18} className="text-indigo-600" /> Aktivitas
                    Terakhir
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-slate-100">
                      {[
                        "Rapat Koordinasi Bapenda",
                        "Evaluasi Anggaran IT",
                        "Finalisasi Latsar CPNS",
                      ].map((t) => (
                        <tr
                          key={t}
                          className="hover:bg-slate-50/50 transition-colors"
                        >
                          <td className="px-6 py-4 font-semibold text-slate-800">
                            {t}
                          </td>
                          <td className="px-6 py-4 text-slate-500 text-xs">
                            18 Mar 2026
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                              SELESAI
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}

          {activeTab === "notulen" && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-black tracking-tight">
                Daftar Notulen
              </h2>
              <div className="bg-white border rounded-2xl p-4 flex gap-4 shadow-sm">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={18}
                  />
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm outline-none"
                    placeholder="Cari notulen..."
                  />
                </div>
              </div>
              <div className="bg-white border rounded-3xl h-64 flex items-center justify-center text-slate-400 italic shadow-sm border-dashed">
                Data notulen siap ditampilkan...
              </div>
            </div>
          )}

          {activeTab === "arsip" && (
            <div className="space-y-6 animate-in zoom-in-95 duration-500">
              <h2 className="text-2xl font-black tracking-tight text-slate-900">
                Arsip Digital
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {["Keuangan", "Kepegawaian", "Aset Sultra", "Umum"].map((f) => (
                  <Card
                    key={f}
                    className="hover:border-indigo-500 cursor-pointer transition-all group border-slate-200/60 shadow-sm rounded-3xl bg-white"
                  >
                    <CardContent className="p-8">
                      <Folder
                        className="text-indigo-600 mb-4 group-hover:scale-110 transition-transform"
                        size={40}
                        fill="currentColor"
                        fillOpacity={0.1}
                      />
                      <p className="font-bold text-slate-900 truncate">{f}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">
                        24 Files
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "users" && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-2xl font-black tracking-tight mb-6">
                Manajemen User
              </h2>
              <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl text-indigo-700 text-sm">
                Modul ini hanya dapat diakses oleh Administrator tingkat
                Provinsi.
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
