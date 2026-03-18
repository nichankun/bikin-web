import { ScrollAnimation } from "../ui-custom/scroll-animation";
import { StatCard } from "../ui-custom/stat-card";

export function StatsSection() {
  return (
    <section className="py-16 bg-white relative z-20">
      <ScrollAnimation className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <StatCard value="3+" label="Tahun Experience" />
        <StatCard value="100%" label="Garansi Revisi" />
        <StatCard
          value={<i className="fas fa-code text-brand-500"></i>}
          label="Clean Code Architecture"
        />
        <StatCard value="24/7" label="Technical Support" />
      </ScrollAnimation>
    </section>
  );
}
