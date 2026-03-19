import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/floating/whatsapp-button";

// Import standar: Jauh lebih optimal untuk Server Components di Next.js App Router
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";

// Route Segment Config: Halaman dijadikan statis dengan Revalidasi setiap 1 jam (ISR)
export const dynamic = "force-static";
export const revalidate = 3600;

export default function Home() {
  /**
   * SEO ADVANCED: Structured Data JSON-LD
   * Membantu Google mengerti profil bisnis secara robotik.
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
        <StatsSection />
        <WorkflowSection />
        <PortfolioSection />
        <PricingSection />
        <FaqSection />
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}
