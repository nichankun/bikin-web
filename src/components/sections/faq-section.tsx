import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from "../ui-custom/scroll-animation";

// 1. Ekstraksi data FAQ ke luar komponen agar mudah di-maintain
const FAQ_DATA = [
  {
    id: "item-1",
    question: "Berapa lama estimasi pengerjaan?",
    answer:
      "Untuk Landing Page UMKM sekitar 3-5 hari kerja. Untuk Custom Web App (seperti e-notulen, topup, atau skripsi) biasanya 2-4 minggu, tergantung kompleksitas database dan integrasi API.",
  },
  {
    id: "item-2",
    question: "Saya tidak paham IT, apakah teknis hosting dibantu?",
    answer:
      "Pasti! Semua urusan teknis seperti pembelian domain (.com), setup hosting/VPS, hingga upload ke server kami yang kerjakan. Anda hanya terima beres berupa link website yang sudah live.",
  },
  {
    id: "item-3",
    question: "Khusus paket Skripsi, apakah dibantu jelaskan code-nya?",
    answer:
      "Tentu. Kami tidak hanya sekadar membuatkan aplikasi, tetapi juga akan memberikan sesi bedah alur logika (bisa via chat atau dokumentasi) agar Anda benar-benar paham cara kerjanya saat ditanya dosen penguji.",
  },
];

// 2. Komponen tetap sebagai Server Component
export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <ScrollAnimation className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 tracking-tight">
            Frequently Asked Questions
          </h2>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* 3. Mapping data FAQ, JSX menjadi sangat bersih */}
            {FAQ_DATA.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white border border-slate-200 rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-brand-600 hover:no-underline text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  );
}
