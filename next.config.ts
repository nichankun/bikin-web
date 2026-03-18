import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Image Optimization: Konfigurasi yang sudah Anda miliki
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
      {
        protocol: "https",
        hostname: "api.duniagames.co.id",
      },
      {
        protocol: "https",
        hostname: "static.upstation.media",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "images.tokopedia.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  /**
   * 2. PROXY / REWRITES (Audit Poin 8: Production Security)
   * Menghindari CORS dan menyembunyikan URL asli backend Anda.
   */
  async rewrites() {
    return [
      {
        // Path yang akan dipanggil di frontend (misal: fetch('/api/backend/data'))
        source: "/api/backend/:path*",
        // URL tujuan asli backend Anda
        destination:
          process.env.NODE_ENV === "production"
            ? "https://api.devpro.id/:path*" // Sesuaikan dengan domain API asli nanti
            : "http://localhost:5000/:path*", // URL backend lokal saat development
      },
    ];
  },

  /**
   * 3. SECURITY HEADERS (Audit Poin 8)
   * Mencegah serangan Clickjacking, XSS, dan Sniffing.
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()", // Keamanan privasi user
          },
        ],
      },
    ];
  },
};

export default nextConfig;
