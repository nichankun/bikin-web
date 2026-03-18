// src/app/demo/[id]/page.tsx
import { notFound } from "next/navigation";
import { DemoInstansi } from "@/components/demo/demo-instansi";
import { DemoCafe } from "@/components/demo/demo-cafe";
import { DemoTopup } from "@/components/demo/demo-topup";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface DemoPageProps {
  params: Promise<{ id: string }>;
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { id } = await params;

  // Pemetaan ID ke komponen demo
  const demos: Record<string, React.ReactNode> = {
    "demo-instansi": <DemoInstansi />,
    "demo-cafe": <DemoCafe />,
    "demo-topup": <DemoTopup />,
  };

  const selectedDemo = demos[id];

  if (!selectedDemo) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Mini Header untuk navigasi balik */}
      <div className="h-14 bg-slate-900 flex items-center justify-between px-6 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <Link
            href="/#portfolio"
            className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Kembali ke DevPro
          </Link>
          <div className="h-4 w-px bg-slate-700 hidden sm:block" />
          <span className="text-slate-500 text-xs font-mono hidden sm:block">
            Preview Mode: Standalone
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-white text-xs font-bold uppercase tracking-widest">
            Live Demo
          </span>
        </div>
      </div>

      {/* Render Komponen Demo secara Full */}
      <div className="flex-1 overflow-auto">{selectedDemo}</div>
    </main>
  );
}
