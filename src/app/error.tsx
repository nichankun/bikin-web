"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Waduh, ada yang salah!</h2>
      <p className="text-muted-foreground mb-6">
        Jangan panik, tim kami sudah mendapat laporannya.
      </p>
      <Button onClick={() => reset()}>Coba Lagi</Button>
    </div>
  );
}
