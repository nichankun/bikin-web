import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Building2, Store, Rocket } from "lucide-react";
import { ScrollAnimation } from "./scroll-animation";

// Interface sudah sangat rapi dengan TypeScript
interface PortfolioCardProps {
  title: string;
  desc: string;
  imageSrc: string;
  badgeText: string;
  badgeColor: string;
  demoId: string;
  delay: number;
}

// Tidak perlu "use client", komponen ini murni Server Component!
export function PortfolioCard({
  title,
  desc,
  imageSrc,
  badgeText,
  badgeColor,
  demoId,
  delay,
}: PortfolioCardProps) {
  // Mapping ikon berdasarkan jenis badge (Logika bisnis tetap berjalan di Server)
  const Icon = badgeText.includes("Instansi")
    ? Building2
    : badgeText.includes("UMKM")
      ? Store
      : Rocket;

  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group flex flex-col hover:-translate-y-2 transition-all duration-300 h-full">
        {/* Bagian Gambar / Thumbnail */}
        <div className="h-56 bg-slate-200 overflow-hidden relative flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw" // Optimasi sizes bawaan Next.js
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Badge Kategori */}
          <div
            className={`absolute top-4 left-4 ${badgeColor} text-xs px-3 py-1.5 rounded-full font-bold shadow-sm z-10 flex items-center gap-1.5`}
          >
            <Icon size={14} /> {badgeText}
          </div>
        </div>

        {/* Bagian Konten & Deskripsi */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-brand-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
            {desc}
          </p>

          {/* Navigasi ke Tab Baru menggunakan standar Next.js */}
          <Link
            href={`/demo/${demoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-brand-500 transition-colors flex items-center justify-center gap-2"
          >
            <PlayCircle size={20} /> Buka Live Demo
          </Link>
        </div>
      </div>
    </ScrollAnimation>
  );
}
