import { Code2, Zap, ShieldCheck } from "lucide-react";
import { StatCard } from "../ui-custom/stat-card";
import { ScrollAnimation } from "../ui-custom/scroll-animation";

// 1. Ekstraksi data ke luar komponen.
// Menyimpan referensi ikon (bukan elemen JSX) agar lebih modular.
const STATS_DATA = [
  {
    id: "clean-code",
    icon: Code2,
    iconColor: "text-blue-500",
    title: "Clean Code Architecture",
    value: "100%",
    desc: "Struktur kode modular yang mudah dimaintain dan di-scale sesuai standar industri 2026.",
  },
  {
    id: "performance",
    icon: Zap,
    iconColor: "text-amber-500",
    title: "Performa Kecepatan",
    value: "99/100",
    desc: "Optimasi LCP dan FID maksimal menggunakan Next.js App Router dan React Server Components.",
  },
  {
    id: "security",
    icon: ShieldCheck,
    iconColor: "text-emerald-500",
    title: "Keamanan Sistem",
    value: "Enterprise",
    desc: "Perlindungan data tingkat tinggi dengan validasi end-to-end dan arsitektur server-side.",
  },
];

// 2. TIDAK ADA "use client" di sini, sehingga komponen ini murni Server Component
export function StatsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS_DATA.map((stat, index) => {
            // Kita deklarasikan ikon sebagai komponen di sini
            const Icon = stat.icon;

            return (
              // 3. Menggunakan ID unik sebagai key, index hanya untuk kalkulasi delay
              <ScrollAnimation key={stat.id} direction="up" delay={index * 0.1}>
                <StatCard
                  // 4. Instansiasi JSX ikon terjadi di fase render
                  icon={<Icon className={stat.iconColor} size={32} />}
                  title={stat.title}
                  value={stat.value}
                  desc={stat.desc}
                />
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
