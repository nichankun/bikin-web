"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Plus,
  FileText,
  Clock,
  FileCheck,
  Folder,
  MoreVertical,
  UserPlus,
  Search,
  Bell,
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// --- VIEW 1: DASHBOARD ---
function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<FileText className="text-indigo-600" />}
          label="Total Notulen"
          value="1,248"
        />
        <StatCard
          icon={<Clock className="text-amber-500" />}
          label="Menunggu TTD"
          value="12"
        />
        <StatCard
          icon={<FileCheck className="text-emerald-500" />}
          label="Arsip Valid"
          value="98%"
        />
      </div>
      <Card className="rounded-2xl border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <h3 className="font-bold">Aktivitas Terakhir</h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-indigo-600 font-bold"
          >
            Lihat Semua
          </Button>
        </div>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <tbody className="divide-y">
              {["Rapat Koordinasi Triwulan", "Evaluasi Anggaran IT"].map(
                (t) => (
                  <tr key={t} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {t}
                    </td>
                    <td className="px-6 py-4 text-slate-500">18 Mar 2026</td>
                    <td className="px-6 py-4 text-right">
                      <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-[10px] font-bold">
                        SELESAI
                      </span>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

// --- VIEW 2: DAFTAR NOTULEN ---
function NotulenView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black">Daftar Notulen</h2>
        <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-xl">
          <Plus className="mr-2" /> Buat Baru
        </Button>
      </div>
      <div className="bg-white border rounded-2xl p-4 flex gap-4 shadow-sm">
        <div className="flex-1 relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm"
            placeholder="Cari notulen..."
          />
        </div>
      </div>
      <div className="bg-white border rounded-2xl overflow-hidden shadow-sm h-100 flex items-center justify-center text-slate-400 italic">
        Data notulen sedang dimuat...
      </div>
    </div>
  );
}

// --- VIEW 3: ARSIP DIGITAL (FOLDER GRID) ---
function ArsipView() {
  const folders = [
    { name: "Laporan Keuangan", count: "124 Files", color: "text-blue-600" },
    { name: "SK Pelantikan", count: "45 Files", color: "text-amber-600" },
    { name: "Dokumen Latsar", count: "89 Files", color: "text-emerald-600" },
    { name: "Arsip Umum", count: "312 Files", color: "text-slate-600" },
  ];
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-black text-slate-900">Arsip Digital</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {folders.map((f) => (
          <Card
            key={f.name}
            className="hover:border-indigo-500 cursor-pointer transition-all group border-slate-200/60 shadow-sm"
          >
            <CardContent className="p-6">
              <Folder
                className={`${f.color} mb-4 group-hover:scale-110 transition-transform`}
                size={40}
                fill="currentColor"
                fillOpacity={0.1}
              />
              <p className="font-bold text-slate-900 truncate">{f.name}</p>
              <p className="text-xs text-slate-500 mt-1">{f.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// --- VIEW 4: MANAJEMEN USER ---
function UserView() {
  const users = [
    { name: "Imam Hayatul", role: "Super Admin", mail: "imam@sultra.go.id" },
    { name: "Siti Aminah", role: "Sekretaris", mail: "siti@sultra.go.id" },
  ];
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black">Manajemen User</h2>
        <Button
          variant="outline"
          className="rounded-xl border-indigo-200 text-indigo-600 hover:bg-indigo-50"
        >
          <UserPlus className="mr-2" /> Tambah User
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((u) => (
          <Card key={u.name} className="border-slate-200/60 shadow-sm">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-700">
                  {u.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm text-slate-900">{u.name}</p>
                  <p className="text-xs text-slate-500">{u.role}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical size={16} />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

// --- MAIN PAGE CONTENT ---
function PageContent() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "dashboard";

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-8 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <SidebarTrigger />
        <Separator orientation="vertical" className="mx-2 h-4" />
        <div className="flex-1 flex justify-between items-center">
          <span className="text-sm font-bold text-slate-900 uppercase tracking-tighter">
            Panel Administrasi
          </span>
          <div className="flex items-center gap-4 text-slate-500">
            <Bell size={18} />
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300" />
          </div>
        </div>
      </header>

      <main className="p-8 max-w-7xl mx-auto w-full">
        {tab === "dashboard" && <DashboardView />}
        {tab === "notulen" && <NotulenView />}
        {tab === "arsip" && <ArsipView />}
        {tab === "users" && <UserView />}
      </main>
    </div>
  );
}

export default function DemoInstansiPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading Panel...</div>}>
      <PageContent />
    </Suspense>
  );
}

// --- SUB-COMPONENTS ---
function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card className="border-slate-200/60 shadow-sm rounded-2xl hover:border-indigo-300 transition-all">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">
            {label}
          </p>
          <p className="text-2xl font-black text-slate-900">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
