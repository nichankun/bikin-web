// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://devpro.id" // Ganti dengan domain asli kamu nanti
      : "http://localhost:3000",
  ),
  title: {
    default: "DevPro | Jasa Pembuatan Website & Aplikasi Web Premium",
    template: "%s | DevPro",
  },
  description:
    "Solusi pengembangan sistem digital, Web App, dan Landing Page dengan teknologi Next.js 16 dan Tailwind 4. Hasil terukur, cepat, dan aman.",
  keywords: [
    "Jasa Website",
    "Next.js Developer",
    "Web App",
    "Software House Indonesia",
  ],
  authors: [{ name: "DevPro Team" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://devpro.id", // Ganti dengan domain kamu nanti
    siteName: "DevPro Digital",
    title: "DevPro | Jasa Pembuatan Website & Aplikasi Web",
    description: "Sistem Digital Premium, Hasil Terukur.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Memungkinkan zoom untuk aksesibilitas
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn("scroll-smooth font-sans", geist.variable)}
    >
      <body className="bg-background text-foreground antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
