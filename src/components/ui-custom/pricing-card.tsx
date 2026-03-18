import { ScrollAnimation } from "./scroll-animation";

interface PricingCardProps {
  tier: string;
  title: string;
  price: string;
  desc?: string;
  features: string[];
  btnText: string;
  isPopular?: boolean;
  direction: "left" | "right" | "up";
}

export function PricingCard({
  tier,
  title,
  price,
  desc,
  features,
  btnText,
  isPopular,
  direction,
}: PricingCardProps) {
  return (
    <ScrollAnimation direction={direction}>
      <div
        className={`relative rounded-3xl p-8 lg:p-10 border transition-transform hover:-translate-y-2 ${isPopular ? "bg-slate-900 border-slate-700 shadow-2xl shadow-brand-500/20 transform lg:-translate-y-6" : "bg-white border-slate-200 shadow-xl shadow-slate-200/30"}`}
      >
        {isPopular && (
          <>
            <div className="absolute -inset-0.5 bg-linear-to-br from-brand-400 to-emerald-600 rounded-3xl blur opacity-30 pointer-events-none"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-brand-400 to-brand-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap z-20">
              🎓 Paling Laris (Skripsi / Custom)
            </div>
          </>
        )}
        <div className="relative z-10 mt-2">
          <div
            className={`${isPopular ? "text-slate-400" : tier === "Instansi / Perusahaan" ? "text-blue-600" : "text-slate-500"} font-bold mb-2 text-sm uppercase tracking-wider`}
          >
            {tier}
          </div>
          <h3
            className={`text-2xl font-black ${isPopular ? "text-white" : "text-slate-900"}`}
          >
            {title}
          </h3>
          <div className="my-6">
            {(isPopular || tier === "Instansi / Perusahaan") && (
              <>
                <span
                  className={`text-sm font-medium ${isPopular ? "text-slate-400" : "text-slate-500"}`}
                >
                  Mulai dari
                </span>
                <br />
              </>
            )}
            <span
              className={`font-extrabold ${isPopular ? "text-5xl text-white" : "text-4xl text-slate-900"}`}
            >
              {price}
            </span>
          </div>
          {desc && (
            <p className="text-sm text-slate-400 mb-6 border-b border-slate-700 pb-6">
              {desc}
            </p>
          )}
          <ul
            className={`space-y-4 mb-8 flex-1 font-medium text-sm ${isPopular ? "text-slate-300" : "text-slate-600"}`}
          >
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <i
                  className={`fas ${feature.includes("Gratis") ? "fa-gift" : "fa-check-circle"} ${isPopular ? "text-brand-400" : "text-brand-500"} mt-0.5 text-lg`}
                ></i>
                <span dangerouslySetInnerHTML={{ __html: feature }} />
              </li>
            ))}
          </ul>
          <a
            href="#wa"
            className={`w-full block text-center py-4 rounded-xl font-bold transition-colors ${isPopular ? "bg-brand-500 text-white hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/50" : "bg-slate-100 text-slate-900 hover:bg-slate-200"}`}
          >
            {btnText}
          </a>
        </div>
      </div>
    </ScrollAnimation>
  );
}
