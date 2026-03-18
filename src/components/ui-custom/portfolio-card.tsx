"use client";

import Image from "next/image";
import Link from "next/link"; // Gunakan Link untuk navigasi
import { PlayCircle, Building2, Store, Rocket } from "lucide-react"; // Gunakan Lucide
import { ScrollAnimation } from "./scroll-animation";

interface PortfolioCardProps {
  title: string;
  desc: string;
  imageSrc: string;
  badgeText: string;
  badgeColor: string;
  demoId: string;
  delay: number;
}

export function PortfolioCard({
  title,
  desc,
  imageSrc,
  badgeText,
  badgeColor,
  demoId,
  delay,
}: PortfolioCardProps) {
  // Mapping ikon berdasarkan jenis badge
  const Icon = badgeText.includes("Instansi")
    ? Building2
    : badgeText.includes("UMKM")
      ? Store
      : Rocket;

  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group flex flex-col hover:-translate-y-2 transition-all duration-300 h-full">
        <div className="h-56 bg-slate-200 overflow-hidden relative flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div
            className={`absolute top-4 left-4 ${badgeColor} text-xs px-3 py-1.5 rounded-full font-bold shadow-sm z-10 flex items-center gap-1.5`}
          >
            <Icon size={14} /> {badgeText}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-brand-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
            {desc}
          </p>

          {/* Navigasi ke Tab Baru */}
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
