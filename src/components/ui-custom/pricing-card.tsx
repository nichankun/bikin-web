import Link from "next/link";
import { Check, Gift } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";
import { cn } from "@/lib/utils";

// Interface yang sangat baik untuk Type Safety
interface PricingCardProps {
  tier: string;
  title: string;
  price: string;
  desc?: string;
  features: string[];
  btnText: string;
  direction: "left" | "right" | "up";
}

export function PricingCard({
  tier,
  title,
  price,
  desc,
  features,
  btnText,
  direction,
}: PricingCardProps) {
  return (
    <ScrollAnimation direction={direction}>
      <div
        className={cn(
          "relative rounded-3xl p-8 lg:p-10 border transition-all duration-300",
          "hover:-translate-y-2 bg-white border-slate-200 shadow-xl shadow-slate-200/30",
          "flex flex-col h-full", // Menjaga tinggi kartu tetap sama pada grid
        )}
      >
        <div className="relative z-10 flex flex-col h-full">
          {/* Header Pricing */}
          <div className="text-brand-600 font-bold mb-2 text-sm uppercase tracking-wider">
            {tier}
          </div>
          <h3 className="text-2xl font-black text-slate-900">{title}</h3>

          {/* Harga */}
          <div className="my-6">
            <span className="text-sm font-medium text-slate-500 block mb-1">
              Investasi mulai dari
            </span>
            <span className="font-extrabold text-4xl text-slate-900">
              {price}
            </span>
          </div>

          {/* Deskripsi Opsional */}
          {desc && (
            <p className="text-sm text-slate-500 mb-6 border-b border-slate-100 pb-6 leading-relaxed">
              {desc}
            </p>
          )}

          {/* Daftar Fitur */}
          <ul className="space-y-4 mb-8 flex-1 font-medium text-sm text-slate-600">
            {features.map((feature, i) => {
              // Logika bisnis untuk menentukan ikon
              const isGift =
                feature.includes("Gratis") || feature.includes("Bonus");

              return (
                // Menggunakan kombinasi index dan string feature agar key lebih unik
                <li key={`${i}-${feature}`} className="flex items-start gap-3">
                  {isGift ? (
                    <Gift
                      size={18}
                      className="text-emerald-500 shrink-0 mt-0.5"
                      aria-hidden="true" // A11y: Sembunyikan ikon dekoratif dari Screen Reader
                    />
                  ) : (
                    <Check
                      size={18}
                      className="text-brand-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  {/* Eksekusi HTML string yang dikirim dari parent */}
                  <span dangerouslySetInnerHTML={{ __html: feature }} />
                </li>
              );
            })}
          </ul>

          {/* Tombol CTA - Diganti menjadi <Link> */}
          <Link
            href="#wa"
            className="w-full block text-center py-4 rounded-xl font-bold transition-all duration-300 bg-slate-900 text-white hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/20 mt-auto"
          >
            {btnText}
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
}
