// app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Menggunakan font lokal Geist untuk performa maksimal (tanpa request eksternal)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DevPro | Jasa Pembuatan Website & Aplikasi Web",
  description: "Sistem Digital Premium, Hasil Terukur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      // suppressHydrationWarning penting jika nantinya kamu memakai next-themes (Dark Mode Shadcn)
      suppressHydrationWarning
      className={cn("scroll-smooth font-sans", geist.variable)}
    >
      <head>
        {/* Link AOS.css sudah dihapus karena kita menggunakan Framer Motion */}

        {/* Font Awesome untuk ikon-ikon UI */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>

      <body
        className={cn(
          "bg-background text-foreground antialiased",
          "selection:bg-brand-500 selection:text-white",
          "relative overflow-x-hidden min-h-screen",
        )}
      >
        {children}
      </body>
    </html>
  );
}
