import Link from "next/link";
import { ScrollAnimation } from "../ui-custom/scroll-animation";
import { MessageCircle, ArrowRight, Code2, Cpu, Database } from "lucide-react";

// 1. Ekstraksi data statis ke luar komponen agar JSX lebih bersih
// dan mencegah re-deklarasi setiap kali komponen dirender.
const TECH_STACK = [
  { id: "react", icon: Code2, label: "React.js", color: "text-blue-400" },
  { id: "next", icon: null, label: "Next.js 16", color: "text-brand-400" },
  { id: "tailwind", icon: Cpu, label: "Tailwind 4", color: "text-teal-400" },
  { id: "pg", icon: Database, label: "PostgreSQL", color: "text-blue-300" },
];

export function HeroSection() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-center px-4">
        {/* Background Blobs - Disembunyikan dari screen reader (A11y) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-10 -left-10 w-64 h-64 bg-brand-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 -right-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl" />
        </div>

        <ScrollAnimation
          direction="in"
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] md:text-xs font-bold tracking-wide uppercase shadow-xl"
            role="status"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500" />
            </span>
            Spesialis Web App & Sistem {currentYear}
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.15]">
            Sistem Digital Premium, <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 to-emerald-400">
              Hasil Terukur.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Dari Landing Page UMKM interaktif hingga pengembangan Web App
            kompleks. Dibangun dengan standar performa tertinggi.
          </p>

          {/* CTA Buttons - Menggunakan next/link */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <Link
              href="#wa"
              className="bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle size={22} /> Konsultasi Gratis
            </Link>
            <Link
              href="#portfolio"
              className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Lihat Demo <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollAnimation>
      </section>

      {/* Tech Stack Marquee */}
      <div
        className="bg-slate-900 py-6 border-y border-slate-800 overflow-hidden relative"
        aria-hidden="true"
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-16 text-slate-400 font-bold text-[10px] md:text-sm tracking-widest uppercase will-change-transform">
          {/* Mapping iterasi dikombinasikan dengan data statis array */}
          {[1, 2, 3].map((iteration) => (
            <div key={iteration} className="flex items-center gap-8 md:gap-16">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech.id}
                  className={`flex items-center gap-2 ${tech.color || ""}`}
                >
                  {tech.icon && <tech.icon size={18} />}
                  {tech.label}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
