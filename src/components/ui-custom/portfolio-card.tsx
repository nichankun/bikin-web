"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "./scroll-animation";

interface PortfolioCardProps {
  title: string;
  desc: string;
  imageSrc: string;
  badgeIcon: string;
  badgeText: string;
  badgeColor: string;
  demoId: string;
  delay: number;
  onOpenDemo: (id: string) => void;
}

export function PortfolioCard({
  title,
  desc,
  imageSrc,
  badgeIcon,
  badgeText,
  badgeColor,
  demoId,
  delay,
  onOpenDemo,
}: PortfolioCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 group flex flex-col hover:-translate-y-2 transition-all duration-300 h-full">
        {/* Container Gambar */}
        <div className="h-56 bg-slate-200 overflow-hidden relative flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
            className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
              demoId === "demo-topup" ? "opacity-50" : ""
            }`}
          />

          {/* Ikon Khusus untuk Topup Game (Opsional sesuai desain awal) */}
          {demoId === "demo-topup" && (
            <i className="fas fa-gamepad absolute text-5xl text-brand-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.8)] transition-transform group-hover:scale-110 z-10"></i>
          )}

          {/* Badge Label */}
          <div
            className={`absolute top-4 left-4 ${badgeColor} text-xs px-3 py-1.5 rounded-full font-bold shadow-sm z-10`}
          >
            <i className={`${badgeIcon} mr-1`}></i> {badgeText}
          </div>
        </div>

        {/* Konten Teks */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-bold text-xl mb-2 text-slate-900 group-hover:text-brand-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
            {desc}
          </p>

          {/* Tombol Aksi */}
          <Button
            onClick={() => onOpenDemo(demoId)}
            className="w-full bg-slate-900 text-white py-6 rounded-xl font-bold hover:bg-brand-500 transition-colors flex items-center justify-center gap-2"
          >
            <i className="fas fa-play-circle text-lg"></i> Buka Live Demo
          </Button>
        </div>
      </div>
    </ScrollAnimation>
  );
}
