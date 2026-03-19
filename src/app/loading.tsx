import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Memuat halaman..."
      className="container mx-auto p-8 space-y-12 min-h-screen"
    >
      <Skeleton className="h-100 md:h-125 w-full rounded-3xl" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Skeleton className="h-62.5 rounded-2xl" />
        <Skeleton className="h-62.5 rounded-2xl" />
        <Skeleton className="h-62.5 rounded-2xl" />
      </div>

      {/* Screen reader only text */}
      <span className="sr-only">Memuat...</span>
    </div>
  );
}
