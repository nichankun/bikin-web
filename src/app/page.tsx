// app/page.tsx
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappButton } from "@/components/floating/whatsapp-button";

import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { FaqSection } from "@/components/sections/faq-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <PortfolioSection />
        <PricingSection />
        <WorkflowSection />
        <FaqSection />
      </main>

      <Footer />
      <WhatsappButton />
    </>
  );
}
