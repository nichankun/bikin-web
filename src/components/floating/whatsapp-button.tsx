import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Ekstraksi nomor WA ke konstanta agar mudah dikelola
const WA_NUMBER = "6281234567890"; // Ganti dengan nomor asli Anda
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

// 2. TIDAK ADA "use client" - Komponen ini sangat ringan sebagai Server Component
export function WhatsappButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer" // 3. Keamanan: Wajib ada 'noopener' untuk target="_blank"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 p-4",
        "bg-brand-500 text-white rounded-full shadow-2xl transition-all duration-300",
        "hover:scale-110 active:scale-95 group overflow-hidden",
      )}
    >
      {/* 4. A11y: Ikon diberi aria-hidden agar tidak dibaca ganda oleh Screen Reader */}
      <MessageCircle size={28} className="shrink-0" aria-hidden="true" />

      {/* Label Ekspansi (Hover) */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-sm md:text-base">
        Chat Sekarang
      </span>

      {/* Indikator Notifikasi Aktif (Ping Animation) - aria-hidden="true" */}
      <span className="absolute top-2 right-2 flex h-3 w-3" aria-hidden="true">
        {/* Self-closing tags untuk elemen kosong */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-brand-500" />
      </span>
    </a>
  );
}
