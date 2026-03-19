"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Di sini kamu bisa mengirim error ke layanan tracking seperti Sentry atau LogSnag
    console.error("Critical Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      {/* Visual Indicator */}
      <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
        <span className="text-4xl font-bold">!</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">Waduh, Ada Kendala Teknis!</h1>

      <p className="text-muted-foreground mb-2 max-w-md">
        Jangan panik, sistem kami sudah mencatat kejadian ini. Silakan coba muat
        ulang halaman.
      </p>

      {/* Menampilkan Digest ID untuk bantuan teknis (Opsional) */}
      {error.digest && (
        <p className="text-xs text-muted-foreground/50 mb-8 font-mono">
          Error ID: {error.digest}
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Tombol Reset (Mencoba render ulang segmen yang error) */}
        <Button onClick={reset} size="lg" className="gap-2">
          <RefreshCcw size={18} />
          Coba Lagi
        </Button>

        {/* Tombol Home (Pintu keluar jika reset gagal) */}
        <Link href="/">
          <Button variant="outline" size="lg" className="gap-2">
            <Home size={18} />
            Kembali ke Beranda
          </Button>
        </Link>
      </div>
    </div>
  );
}
