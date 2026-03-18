// src/components/ui-custom/stat-card.tsx
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  desc: string;
}

export function StatCard({ icon, title, value, desc }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-6 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center">
        {icon}
      </div>
      <div className="font-black text-3xl text-slate-900 mb-1">{value}</div>
      <div className="font-bold text-slate-800 mb-3">{title}</div>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
