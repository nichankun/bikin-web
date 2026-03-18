import { ScrollAnimation } from "../ui-custom/scroll-animation";

export function HeroSection() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-center px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 opacity-30 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <ScrollAnimation
          direction="in"
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-bold tracking-wide uppercase shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            Spesialis Web App & Sistem {currentYear}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1]">
            Sistem Digital Premium, <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-brand-600 to-emerald-400">
              Hasil Terukur.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Dari Landing Page UMKM interaktif hingga pengembangan Web App
            kompleks untuk Skripsi & Instansi. Dibangun dengan standar performa
            tertinggi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#wa"
              className="bg-brand-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-xl"></i> Konsultasi Sekarang
            </a>
            <a
              href="#portfolio"
              className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-900 hover:bg-slate-50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Lihat Live Demo <i className="fas fa-arrow-right text-sm"></i>
            </a>
          </div>
        </ScrollAnimation>
      </section>

      {/* Marquee diletakkan di bawah Hero agar rapi */}
      <div className="bg-slate-900 py-5 border-y border-slate-800 overflow-hidden relative flex">
        <div className="absolute inset-0 z-10 bg-linear-to-r from-slate-900 via-transparent to-slate-900 pointer-events-none"></div>
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-slate-400 font-bold text-sm tracking-widest uppercase w-max">
          {[1, 2].map((i) => (
            <span key={i} className="flex items-center gap-12 ml-12">
              <span className="flex items-center gap-2">
                <i className="fab fa-react text-blue-400 text-xl"></i> React.js
              </span>
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px] font-black">
                  N
                </div>{" "}
                Next.js
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-wind text-teal-400 text-xl"></i> Tailwind
                CSS
              </span>
              <span className="flex items-center gap-2">
                <i className="fab fa-node-js text-green-500 text-xl"></i>{" "}
                Node.js
              </span>
              <span className="flex items-center gap-2">
                <i className="fas fa-database text-blue-300 text-xl"></i>{" "}
                PostgreSQL
              </span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
