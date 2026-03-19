import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Mengonfigurasi font lokal/Google dengan variabel CSS untuk mencegah Layout Shift (CLS)
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Menentukan URL dasar secara otomatis (Mendukung environment Vercel)
const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://devpro.id"; // Ganti dengan domain asli kamu
};

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "BikinWeb | Jasa Pembuatan Website & Aplikasi Web Premium",
    template: "%s | BikinWeb",
  },
  description:
    "Solusi pengembangan sistem digital, Web App, dan Landing Page dengan teknologi Next.js 16 dan Tailwind 4. Hasil terukur, cepat, dan aman.",
  keywords: [
    "Jasa Website",
    "Next.js Developer",
    "Web App",
    "Software House Indonesia",
    "Bikin Web Profesional",
  ],
  authors: [{ name: "BikinWeb Team" }],

  // SEO Advanced: Canonical URL
  alternates: {
    canonical: "/",
  },

  // Open Graph untuk Social Share (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: getBaseUrl(),
    siteName: "BikinWeb Digital",
    title: "BikinWeb | Jasa Pembuatan Website & Aplikasi Web",
    description: "Sistem Digital Premium, Hasil Terukur.",
    images: [
      {
        url: "/og-image.jpg", // Pastikan file ini ada di folder public/
        width: 1200,
        height: 630,
        alt: "BikinWeb Digital Preview",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "BikinWeb Digital",
    description: "Jasa Pembuatan Website & Web App Premium.",
    images: ["/og-image.jpg"],
  },

  // Konfigurasi Robot Crawler Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Konfigurasi Viewport diekstrak sesuai dokumentasi Next.js terbaru
export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Mendukung Accessibility (A11y) agar user bisa melakukan zoom
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning // Mencegah error mismatch pada plugin ekstensi browser
      className={cn("scroll-smooth font-sans", geist.variable)}
    >
      <body className="bg-background text-foreground antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
