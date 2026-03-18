import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

/**
 * ADVANCED PERFORMANCE (Audit Poin 4):
 * Menggunakan Edge Runtime untuk pemrosesan metadata dan streaming yang lebih cepat
 * di seluruh node global (Edge Network).
 */
export const runtime = "nodejs";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Mencegah Layout Shift (CLS) dengan swap font
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://devpro.id"
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
    "Bikin Web Profesional",
  ],
  authors: [{ name: "DevPro Team" }],
  // SEO Advanced: Canonical URL & Alternates
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://devpro.id",
    siteName: "DevPro Digital",
    title: "DevPro | Jasa Pembuatan Website & Aplikasi Web",
    description: "Sistem Digital Premium, Hasil Terukur.",
    images: [
      {
        url: "/og-image.jpg", // Fallback jika dynamic OG tidak dimuat
        width: 1200,
        height: 630,
        alt: "DevPro Digital Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPro Digital",
    description: "Jasa Pembuatan Website & Web App Premium.",
    images: ["/og-image.jpg"],
  },
  // Audit Poin 4: Robot configuration yang lebih spesifik
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

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Mendukung Accessibility (A11Y) untuk zoom user
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning // Mencegah error mismatch saat menggunakan theme atau font variable
      className={cn("scroll-smooth font-sans", geist.variable)}
    >
      <body className="bg-background text-foreground antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
