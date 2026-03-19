import { ReactNode } from "react";

// Interface sudah sangat jelas dan menggunakan tipe data yang tepat (ReactNode untuk ikon)
interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  desc: string;
}

export function StatCard({ icon, title, value, desc }: StatCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Wrapper Ikon - Ditambah aria-hidden untuk Aksesibilitas */}
      <div
        className="mb-6 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Nilai / Angka Utama */}
      <div className="font-black text-3xl text-slate-900 mb-1">{value}</div>

      {/* Semantic HTML: Menggunakan <h3> alih-alih <div> 
        agar hierarki dokumen (SEO/A11y) lebih rapi.
      */}
      <h3 className="font-bold text-slate-800 mb-3">{title}</h3>

      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
