import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devpro.id"; // Pastikan domain sesuai saat production

  // 1. Rute Utama (Landing Page)
  const mainRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1, // Prioritas tertinggi untuk beranda
  };

  // 2. Rute Demo Portofolio (Berdasarkan ID demo yang kamu buat)
  const demoRoutes = ["demo-instansi", "demo-cafe", "demo-topup"].map(
    (demoId) => ({
      url: `${baseUrl}/demo/${demoId}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const, // Karena demo jarang berubah
      priority: 0.8, // Prioritas sedikit di bawah beranda
    }),
  );

  // Menggabungkan semua rute menjadi satu array sitemap
  return [mainRoute, ...demoRoutes];
}
