import NextDynamic from "next/dynamic";
import { Suspense } from "react";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/floating/whatsapp-button";
import { HeroSection } from "@/components/sections/hero-section";
import { Skeleton } from "@/components/ui/skeleton";

// BUNDLE OPTIMIZATION: Named Export handling
const StatsSection = NextDynamic(
  () =>
    import("@/components/sections/stats-section").then(
      (mod) => mod.StatsSection,
    ),
  { loading: () => <Skeleton className="h-50 w-full my-10" /> },
);

const WorkflowSection = NextDynamic(
  () =>
    import("@/components/sections/workflow-section").then(
      (mod) => mod.WorkflowSection,
    ),
  { loading: () => <Skeleton className="h-100 w-full my-10" /> },
);

const PortfolioSection = NextDynamic(
  () =>
    import("@/components/sections/portfolio-section").then(
      (mod) => mod.PortfolioSection,
    ),
  { loading: () => <Skeleton className="h-150 w-full my-10 rounded-3xl" /> },
);

const PricingSection = NextDynamic(
  () =>
    import("@/components/sections/pricing-section").then(
      (mod) => mod.PricingSection,
    ),
  { loading: () => <Skeleton className="h-150 w-full my-10" /> },
);

const FaqSection = NextDynamic(
  () =>
    import("@/components/sections/faq-section").then((mod) => mod.FaqSection),
  { loading: () => <Skeleton className="h-100 w-full my-10" /> },
);

export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  /**
   * SEO ADVANCED: Structured Data JSON-LD
   * Membantu Google mengerti profil bisnis DevPro secara robotik.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "DevPro Digital",
    description: "Jasa Pembuatan Website & Aplikasi Web Premium",
    url: "https://devpro.id",
    telephone: "+628123456789", // Ganti dengan nomor asli
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    priceRange: "Rp1.500.000 - Rp50.000.000",
  };

  return (
    <>
      {/* Injeksi JSON-LD ke Head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="overflow-x-hidden min-h-screen">
        <HeroSection />

        <Suspense fallback={<Skeleton className="h-50 w-full" />}>
          <StatsSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-100 w-full" />}>
          <WorkflowSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-150 w-full" />}>
          <PortfolioSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="h-150 w-full" />}>
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
