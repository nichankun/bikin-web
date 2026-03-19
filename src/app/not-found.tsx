import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveLeft, MessageCircle } from "lucide-react"; // Menambah ikon agar lebih interaktif

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      {/* 1. Heading H1 dengan aksen warna brand */}
      <h1 className="text-8xl font-extrabold text-brand-500 mb-4 tracking-tighter">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Waduh! Halamannya Hilang.
      </h2>

      <p className="text-muted-foreground mb-8 max-w-md">
        Sepertinya rute yang Anda tuju sudah pindah atau memang belum dibuat.
        Jangan khawatir, kami bisa bantu Anda kembali ke jalan yang benar.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Tombol Utama */}
        <Link href="/">
          <Button size="lg" className="gap-2">
            <MoveLeft size={18} />
            Kembali ke Beranda
          </Button>
        </Link>

        {/* Tombol Cadangan (Konversi) */}
        <Link href="https://wa.me/6281234567890" target="_blank">
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-brand-500 text-brand-600"
          >
            <MessageCircle size={18} />
            Tanya Admin
          </Button>
        </Link>
      </div>
    </div>
  );
}
