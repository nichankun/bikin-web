import { ScrollAnimation } from "../ui-custom/scroll-animation";
import { PricingCard } from "../ui-custom/pricing-card";

// 1. Ekstraksi data ke luar komponen untuk Clean Code dan kemudahan pemeliharaan (DRY Principle)
const PRICING_PLANS = [
  {
    id: "starter",
    tier: "Starter Level",
    title: "Landing Page UMKM",
    price: "Rp 1.5jt",
    desc: "Solusi cepat untuk branding produk, profil usaha, atau promosi jasa dengan tampilan modern.",
    features: [
      "Single Page Premium UI",
      "Mobile Responsive Design",
      "Integrasi Tombol WhatsApp",
      "<b>Gratis</b> Domain (.com) & Hosting 1Thn", // Catatan: Format string HTML ini dibiarkan agar sesuai dengan penanganan di dalam komponen PricingCard kamu
    ],
    btnText: "Pilih Paket Starter",
  },
  {
    id: "academic",
    tier: "Academic & Custom",
    title: "Web App & Sistem",
    price: "Rp 3jt",
    desc: "Sistem terstruktur untuk Dashboard Admin, Inventaris, atau Tugas Akhir/Skripsi IT.",
    features: [
      "Full Source Code & Database",
      "Mentoring Alur Logika (Skripsi)",
      "Tech Stack: React, Next.js 16, Node.js",
      "Garansi Revisi & Deploy Cloud",
    ],
    btnText: "Konsultasi Fitur",
  },
  {
    id: "enterprise",
    tier: "Corporate Level",
    title: "Enterprise System",
    price: "Rp 7.5jt",
    desc: "Sistem skala besar dengan keamanan tinggi dan manajemen data kompleks untuk perusahaan.",
    features: [
      "Multi-Page & Custom CMS Admin",
      "Optimasi Kecepatan Ekstrem",
      "Setup Cloud Database (PostgreSQL)",
      "Maintenance Server Bulanan",
    ],
    btnText: "Tanya Estimasi",
  },
];

export function PricingSection() {
  return (
    <section id="harga" className="py-24 bg-white relative overflow-hidden">
      {/* 2. Background Decor - Self-closing tag & aria-hidden ditambahkan untuk A11y */}
      <div
        className="absolute top-40 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Paket Pengembangan Website
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Pilih skala pengembangan yang sesuai dengan kebutuhan bisnis atau
            target akademik Anda. Semua paket dikerjakan dengan standar performa
            tinggi.
          </p>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 3. Mapping data pricing, blok kode menjadi sangat bersih */}
          {PRICING_PLANS.map((plan) => (
            <PricingCard
              key={plan.id}
              direction="up"
              tier={plan.tier}
              title={plan.title}
              price={plan.price}
              desc={plan.desc}
              features={plan.features}
              btnText={plan.btnText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
