import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { ScrollAnimation } from "../ui-custom/scroll-animation";
import { WorkflowStep } from "../ui-custom/workflow-step";

// 1. Ekstraksi data workflow ke luar komponen (Modular & Clean)
const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Konsultasi",
    desc: "Diskusi flow aplikasi & deal estimasi biaya via WA.",
    isReversed: true,
  },
  {
    step: 2,
    title: "Development",
    desc: "Proses koding UI & Database dengan update berkala.",
    isReversed: false,
  },
  {
    step: 3,
    title: "Revisi & Launch",
    desc: "Pengecekan akhir, serah terima kode, dan sistem Live!",
    isReversed: true,
  },
];

export function WorkflowSection() {
  return (
    <section
      id="alur"
      className="py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Pattern - aria-hidden agar tidak dibaca Screen Reader */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Kolom Kiri: Timeline Workflow */}
        <ScrollAnimation direction="right">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-sm">
            Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 mt-2 leading-tight">
            Proses Cepat, <br /> Tanpa Drama.
          </h2>

          {/* Garis Vertikal Tengah (Timeline Line) */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.3rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-brand-500 before:to-slate-800">
            {/* Looping Komponen WorkflowStep */}
            {WORKFLOW_STEPS.map((item) => (
              <WorkflowStep
                key={item.step}
                step={item.step}
                title={item.title}
                desc={item.desc}
                isReversed={item.isReversed}
              />
            ))}
          </div>
        </ScrollAnimation>

        {/* Kolom Kanan: Card Garansi */}
        <ScrollAnimation
          direction="left"
          className="bg-linear-to-br from-brand-600 to-emerald-900 p-px rounded-3xl"
        >
          <div className="bg-slate-900 p-10 rounded-3xl h-full text-center relative overflow-hidden flex flex-col items-center">
            {/* Dekorasi Glow Blur */}
            <div
              className="absolute top-0 right-0 w-40 h-40 bg-brand-500/20 rounded-bl-full blur-2xl"
              aria-hidden="true"
            />

            {/* 2. Mengganti FontAwesome <i className="fas..."> menjadi Lucide React Component */}
            <ShieldCheck
              size={72}
              className="text-brand-400 mb-6 drop-shadow-lg"
              aria-hidden="true"
            />

            <h3 className="text-3xl font-black mb-4 text-white">
              100% Secure & Guaranteed
            </h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Dana aman. Uang muka kembali penuh jika kami tidak mampu
              menyelesaikan fitur sesuai kesepakatan spesifikasi awal.
            </p>

            {/* 3. Menggunakan <Link> bawaan Next.js */}
            <Link
              href="#wa"
              className="inline-block bg-white text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-brand-50 transition-colors shadow-lg shadow-white/10"
            >
              Booking Jadwal Develop
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
