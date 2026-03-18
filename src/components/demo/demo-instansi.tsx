// src/components/demo/demo-instansi.tsx
"use client";
import {
  LayoutDashboard,
  FileText,
  Archive,
  Users,
  Search,
  Bell,
  CircleUser,
  Plus,
  FileCheck,
  Clock,
  ExternalLink,
} from "lucide-react";

export function DemoInstansi() {
  const recentMinutes = [
    {
      title: "Rapat Koordinasi Triwulan II",
      date: "18 Mar 2026",
      status: "Terverifikasi",
      author: "Admin Sekretariat",
    },
    {
      title: "Pembahasan Anggaran Latsar 2026",
      date: "15 Mar 2026",
      status: "Draft",
      author: "Imam Hayatul",
    },
    {
      title: "Evaluasi Sistem E-Notulen",
      date: "12 Mar 2026",
      status: "Menunggu",
      author: "Kabid IT",
    },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden lg:flex flex-col border-r border-slate-800">
        <div className="p-6">
          <div className="flex items-center gap-3 text-white mb-8">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold">
              D
            </div>
            <span className="font-bold tracking-tight text-lg">E-NOTULEN</span>
          </div>

          <nav className="space-y-1">
            <NavItem
              icon={<LayoutDashboard size={18} />}
              label="Dashboard"
              active
            />
            <NavItem icon={<FileText size={18} />} label="Daftar Notulen" />
            <NavItem icon={<Archive size={18} />} label="Arsip Digital" />
            <NavItem icon={<Users size={18} />} label="Manajemen User" />
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
              <CircleUser size={24} />
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-white truncate">
                Administrator
              </p>
              <p className="text-xs text-slate-500 truncate">Sultra Prov.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Beranda</span>
            <span>/</span>
            <span className="font-semibold text-slate-900">
              Dashboard Statistik
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Cari notulen..."
                className="pl-10 pr-4 py-1.5 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all w-64"
              />
            </div>
            <button className="text-slate-500 hover:text-slate-900 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-black text-slate-900">
                Ringkasan Statistik
              </h1>
              <p className="text-slate-500 text-sm">
                Selamat datang kembali di panel E-Notulen Instansi.
              </p>
            </div>
            <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
              <Plus size={18} /> Buat Notulen Baru
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <StatCard
              icon={<FileText className="text-indigo-600" />}
              label="Total Notulen"
              value="1,248"
              trend="+12% bulan ini"
            />
            <StatCard
              icon={<Clock className="text-amber-500" />}
              label="Menunggu Verifikasi"
              value="14"
              trend="Prioritas Tinggi"
            />
            <StatCard
              icon={<FileCheck className="text-emerald-500" />}
              label="Arsip Tervalidasi"
              value="98%"
              trend="Sangat Bagus"
            />
          </div>

          {/* Recent List Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">
                Notulen Rapat Terbaru
              </h3>
              <button className="text-indigo-600 text-sm font-bold flex items-center gap-1 hover:underline">
                Lihat Semua <ExternalLink size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
                    <th className="px-6 py-4">Judul Notulen</th>
                    <th className="px-6 py-4">Tanggal</th>
                    <th className="px-6 py-4">Penulis</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentMinutes.map((item, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-50/50 transition-colors cursor-pointer group"
                    >
                      <td className="px-6 py-4 font-semibold text-slate-800 group-hover:text-indigo-600">
                        {item.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {item.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {item.author}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                            item.status === "Terverifikasi"
                              ? "bg-emerald-100 text-emerald-700"
                              : item.status === "Draft"
                                ? "bg-slate-100 text-slate-600"
                                : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Sub-components untuk keterbacaan kode
function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
        active
          ? "bg-indigo-600 text-white font-bold"
          : "hover:bg-slate-800 hover:text-white"
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  trend,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">
        {label}
      </p>
      <div className="flex items-end gap-3">
        <h4 className="text-3xl font-black text-slate-900">{value}</h4>
        <span className="text-[10px] font-bold text-slate-400 mb-1.5">
          {trend}
        </span>
      </div>
    </div>
  );
}
