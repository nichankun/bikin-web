import { ScrollAnimation } from "../ui-custom/scroll-animation";
import { MessageCircle, ArrowRight, Code2, Cpu, Database } from "lucide-react";

export function HeroSection() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-center px-4">
        {/* Background Blobs - Audit Poin 6: A11Y (aria-hidden) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-20 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-10 -left-10 w-64 h-64 bg-brand-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 -right-10 w-64 h-64 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <ScrollAnimation
          direction="in"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] md:text-xs font-bold tracking-wide uppercase shadow-xl"
            role="status"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Spesialis Web App & Sistem {currentYear}
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.15]">
            Sistem Digital Premium, <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 to-emerald-400">
              Hasil Terukur.
            </span>
          </h1>

          <p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed px-2">
            Dari Landing Page UMKM interaktif hingga pengembangan Web App
            kompleks. Dibangun dengan standar performa tertinggi.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <a
              href="#wa"
              className="bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2"
            >
              <MessageCircle size={22} /> Konsultasi Gratis
            </a>
            <a
              href="#portfolio"
              className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Lihat Demo <ArrowRight size={18} />
            </a>
          </div>
        </ScrollAnimation>
      </section>

      {/* Tech Stack Marquee - Micro-perf: Menggunakan will-change untuk GPU acceleration */}
      <div
        className="bg-slate-900 py-6 border-y border-slate-800 overflow-hidden relative"
        aria-hidden="true" // Audit Poin 6: Elemen dekoratif tidak perlu dibaca Screen Reader
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 md:gap-16 text-slate-400 font-bold text-[10px] md:text-sm tracking-widest uppercase will-change-transform">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-8 md:gap-16">
              <span className="flex items-center gap-2">
                <Code2 size={18} className="text-blue-400" /> React.js
              </span>
              <span className="flex items-center gap-2 text-brand-400">
                Next.js 16
              </span>
              <span className="flex items-center gap-2">
                <Cpu size={18} className="text-teal-400" /> Tailwind 4
              </span>
              <span className="flex items-center gap-2">
                <Database size={18} className="text-blue-300" /> PostgreSQL
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
