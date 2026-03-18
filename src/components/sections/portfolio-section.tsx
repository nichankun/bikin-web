"use client";
import { ScrollAnimation } from "../ui-custom/scroll-animation";
import { PortfolioCard } from "../ui-custom/portfolio-card";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-24 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <span className="text-brand-600 font-bold uppercase tracking-wider text-sm bg-brand-50 px-3 py-1 rounded-full">
            Karya Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            Eksplorasi Live Demo
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Coba langsung purwarupa sistem kami di lingkungan standalone.
            Responsif, cepat, dan siap dikustomisasi.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-3 gap-8">
          <PortfolioCard
            title="E-Notulen & Arsip Digital"
            desc="Sistem manajemen rapat terpusat dengan fitur rekapitulasi dashboard dan pengarsipan untuk instansi."
            imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
            badgeText="Instansi"
            badgeColor="bg-white/90 backdrop-blur text-blue-700"
            demoId="demo-instansi"
            delay={0.1}
          />
          <PortfolioCard
            title="Katalog & Reservasi Cafe"
            desc="Website landing page elegan dengan menu interaktif dan integrasi langsung ke WhatsApp admin."
            imageSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
            badgeText="UMKM / F&B"
            badgeColor="bg-white/90 backdrop-blur text-orange-600"
            demoId="demo-cafe"
            delay={0.2}
          />
          <PortfolioCard
            title="Platform Top-Up Game"
            desc="UI sistem PPOB / Topup otomatis lengkap dengan seleksi nominal dan metode pembayaran QRIS."
            imageSrc="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
            badgeText="Custom Web App"
            badgeColor="bg-brand-500/90 backdrop-blur text-white"
            demoId="demo-topup"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
