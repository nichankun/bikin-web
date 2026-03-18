// 1. Menggunakan alias 'NextDynamic' untuk menghindari konflik nama dengan config Next.js
import NextDynamic from "next/dynamic";
import { Suspense } from "react";

// Import Komponen Layout (Static - Penting untuk SEO & LCP)
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/floating/whatsapp-button";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * PERFORMANCE ENGINEERING:
 * Memuat section di bawah fold secara dinamis.
 * Menggunakan .then((mod) => mod.Name) karena komponen Anda menggunakan Named Export.
 */
const PortfolioSection = NextDynamic(
  () =>
    import("@/components/sections/portfolio-section").then(
      (mod) => mod.PortfolioSection,
    ),
  { loading: () => <Skeleton className="h-125w-full my-10 rounded-xl" /> },
);

const PricingSection = NextDynamic(
  () =>
    import("@/components/sections/pricing-section").then(
      (mod) => mod.PricingSection,
    ),
  { loading: () => <Skeleton className="h-125 w-full my-10 rounded-xl" /> },
);

const FaqSection = NextDynamic(
  () =>
    import("@/components/sections/faq-section").then((mod) => mod.FaqSection),
  { loading: () => <Skeleton className="h-100 w-full my-10 rounded-xl" /> },
);

/**
 * RENDERING STRATEGY 2026:
 * Memastikan halaman ter-cache secara statis namun tetap bisa diupdate.
 */
export const dynamic = "force-static";
export const revalidate = 3600; // Cache diperbarui setiap jam (ISR)

export default function Home() {
  // SEO: Structured Data JSON-LD (Audit Poin 4)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevPro Digital",
    description: "Jasa Pembuatan Website & Aplikasi Web Premium",
    url: "https://devpro.id",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      description: "Premium Web Development",
    },
  };

  return (
    <>
      {/* Injeksi SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="overflow-x-hidden min-h-screen">
        {/* LCP Section: Harus render segera untuk UX terbaik */}
        <HeroSection />

        <Suspense fallback={<Skeleton className="h-50 w-full" />}>
          <StatsSection />
        </Suspense>

        <WorkflowSection />

        {/* Dynamic Sections: Dimuat saat user mulai scroll (Audit Poin 5) */}
        <Suspense fallback={<Skeleton className="h-125 w-full" />}>
          <PortfolioSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-125 w-full" />}>
          <PricingSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-100 w-full" />}>
          <FaqSection />
        </Suspense>
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}
