import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollAnimation } from "../ui-custom/scroll-animation";

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
            <AccordionItem
              value="item-1"
              className="bg-white border border-slate-200 rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-brand-600 hover:no-underline text-left py-6">
                Berapa lama estimasi pengerjaan?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                Untuk Landing Page UMKM sekitar 3-5 hari kerja. Untuk Custom Web
                App (seperti e-notulen, topup, atau skripsi) biasanya 2-4
                minggu, tergantung kompleksitas database dan integrasi API.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-white border border-slate-200 rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-brand-600 hover:no-underline text-left py-6">
                Saya tidak paham IT, apakah teknis hosting dibantu?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                Pasti! Semua urusan teknis seperti pembelian domain (.com),
                setup hosting/VPS, hingga upload ke server kami yang kerjakan.
                Anda hanya terima beres berupa link website yang sudah live.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-white border border-slate-200 rounded-2xl px-6 data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="font-bold text-lg text-slate-900 hover:text-brand-600 hover:no-underline text-left py-6">
                Khusus paket Skripsi, apakah dibantu jelaskan code-nya?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6">
                Tentu. Kami tidak hanya sekadar membuatkan aplikasi, tetapi juga
                akan memberikan sesi bedah alur logika (bisa via chat atau
                dokumentasi) agar Anda benar-benar paham cara kerjanya saat
                ditanya dosen penguji.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  );
}
