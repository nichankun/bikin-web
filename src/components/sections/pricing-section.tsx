import { ScrollAnimation } from "../ui-custom/scroll-animation";
import { PricingCard } from "../ui-custom/pricing-card";

export function PricingSection() {
  return (
    <section id="harga" className="py-24 bg-white relative">
      <div className="absolute top-40 right-0 w-125 h-125 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Investasi Digital Anda
          </h2>
          <p className="text-slate-600 text-lg">
            Pilih skala development yang sesuai dengan kebutuhan dan target
            bisnis Anda.
          </p>
        </ScrollAnimation>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          <PricingCard
            direction="right"
            tier="Starter Level"
            title="Landing Page UMKM"
            price="Rp 1.5jt"
            features={[
              "Single Page Premium UI",
              "Mobile Responsive Design",
              "Integrasi Tombol WhatsApp",
              "<b>Gratis</b> Domain (.com) & Hosting 1Thn",
            ]}
            btnText="Pilih Paket Starter"
          />
          <PricingCard
            direction="up"
            isPopular
            tier="🎓 Paling Laris (Skripsi / Custom)"
            title="Web App & Sistem"
            price="Rp 3jt"
            desc="Sistem terstruktur, dashboard admin, integrasi API, atau untuk Tugas Akhir IT."
            features={[
              "Full Source Code & Database",
              "Mentoring Alur Logika (Skripsi)",
              "Tech Stack: React, Next.js, Node.js",
              "Garansi Revisi & Deploy",
            ]}
            btnText="Konsultasi Fitur"
          />
          <PricingCard
            direction="left"
            tier="Instansi / Perusahaan"
            title="Corporate System"
            price="Rp 7.5jt"
            features={[
              "Multi-Page & Custom CMS Admin",
              "Optimasi Kecepatan Ekstrem",
              "Setup Cloud Database",
              "Maintenance Server Bulanan",
            ]}
            btnText="Tanya Estimasi"
          />
        </div>
      </div>
    </section>
  );
}
