import NextDynamic from "next/dynamic";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";

/**
 * 1. BUNDLE PERFORMANCE (Audit Poin 5):
 * Menggunakan Dynamic Import untuk memecah bundle setiap demo.
 * Ini memastikan jika user membuka 'demo-cafe', mereka tidak mendownload kode 'demo-topup'.
 */
const DemoInstansi = NextDynamic(
  () =>
    import("@/components/demo/demo-instansi").then((mod) => mod.DemoInstansi),
  {
    loading: () => <Skeleton className="h-screen w-full" />,
  },
);
const DemoCafe = NextDynamic(
  () => import("@/components/demo/demo-cafe").then((mod) => mod.DemoCafe),
  {
    loading: () => <Skeleton className="h-screen w-full" />,
  },
);
const DemoTopup = NextDynamic(
  () => import("@/components/demo/demo-topup").then((mod) => mod.DemoTopup),
  {
    loading: () => <Skeleton className="h-screen w-full" />,
  },
);

interface DemoPageProps {
  params: Promise<{ id: string }>;
}

/**
 * 2. SEO ADVANCED (Audit Poin 4):
 * Membuat Metadata unik secara dinamis berdasarkan ID demo untuk meningkatkan ranking pencarian.
 */
export async function generateMetadata({
  params,
}: DemoPageProps): Promise<Metadata> {
  const { id } = await params;

  const demoInfo: Record<string, { title: string; desc: string }> = {
    "demo-instansi": {
      title: "Web Profil Instansi",
      desc: "Pratinjau sistem informasi publik dan profil instansi profesional.",
    },
    "demo-cafe": {
      title: "Sistem Manajemen Cafe",
      desc: "Pratinjau sistem manajemen menu, pesanan, dan transaksi cafe modern.",
    },
    "demo-topup": {
      title: "Platform Topup Game",
      desc: "Pratinjau platform topup otomatis dengan integrasi payment gateway.",
    },
  };

  const demo = demoInfo[id];
  if (!demo) return { title: "Demo Not Found" };

  return {
    title: `Preview: ${demo.title}`,
    description: demo.desc,
    openGraph: {
      title: `Live Demo: ${demo.title} - DevPro Digital`,
      description: demo.desc,
      images: ["/opengraph-image"], // Menggunakan dynamic OG yang telah dibuat sebelumnya
    },
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { id } = await params;

  // Pemetaan ID ke komponen demo (Menggunakan dynamic components)
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
      {/* Mini Header untuk navigasi balik - TETAP SAMA SESUAI UI ASLI */}
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

      {/* 3. STREAMING & SUSPENSE (UX Resilience - Audit Poin 7):
          Membungkus konten demo dengan Suspense untuk transisi yang mulus. */}
      <div className="flex-1 overflow-auto">
        <Suspense fallback={<Skeleton className="h-screen w-full" />}>
          {selectedDemo}
        </Suspense>
      </div>
    </main>
  );
}
