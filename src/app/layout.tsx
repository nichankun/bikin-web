// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Menjamin teks langsung muncul
});

export const metadata: Metadata = {
  title: "DevPro | Jasa Pembuatan Website & Aplikasi Web",
  description: "Sistem Digital Premium, Hasil Terukur.",
  // Metadata baru untuk performa SEO 2026
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: "#0f172a", // Slate-900 sesuai UI kamu
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn("scroll-smooth font-sans", geist.variable)}
    >
      <body
        className={cn(
          "bg-background text-foreground antialiased",
          "selection:bg-brand-500 selection:text-white",
          "relative min-h-screen flex flex-col",
        )}
      >
        {children}
      </body>
    </html>
  );
}
