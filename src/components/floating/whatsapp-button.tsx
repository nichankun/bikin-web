"use client";

import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/6281234567890" // Ganti dengan nomor Anda
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4",
        "bg-brand-500 text-white rounded-full shadow-2xl transition-all duration-300",
        "hover:scale-110 active:scale-95 group overflow-hidden",
      )}
    >
      {/* Icon Lucide sebagai pengganti Font Awesome */}
      <MessageCircle size={28} className="shrink-0" />

      {/* Label yang muncul saat hover (Desktop) dan tetap terbaca Screen Reader */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm md:text-base">
        Chat Sekarang
      </span>

      {/* Indikator Notifikasi Aktif (Ping Animation) */}
      <span className="absolute top-2 right-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-brand-500"></span>
      </span>
    </a>
  );
}
