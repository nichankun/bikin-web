"use client";

import { Code2, Zap, ShieldCheck } from "lucide-react";
import { StatCard } from "../ui-custom/stat-card";
import { ScrollAnimation } from "../ui-custom/scroll-animation";

export function StatsSection() {
  const stats = [
    {
      // Ikon Code2 untuk Clean Code Architecture
      icon: <Code2 className="text-blue-500" size={32} />,
      title: "Clean Code Architecture",
      value: "100%",
      desc: "Struktur kode modular yang mudah dimaintain dan di-scale sesuai standar industri 2026.",
    },
    {
      icon: <Zap className="text-amber-500" size={32} />,
      title: "Performa Kecepatan",
      value: "99/100",
      desc: "Optimasi LCP dan FID maksimal menggunakan Next.js App Router dan React Server Components.",
    },
    {
      icon: <ShieldCheck className="text-emerald-500" size={32} />,
      title: "Keamanan Sistem",
      value: "Enterprise",
      desc: "Perlindungan data tingkat tinggi dengan validasi end-to-end dan arsitektur server-side.",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
              <StatCard
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                desc={stat.desc}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
