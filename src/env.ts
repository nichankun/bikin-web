import { z } from "zod";

/**
 * Validasi Variabel Lingkungan menggunakan Zod.
 * Memastikan aplikasi tidak 'crash' di produksi karena ENV yang hilang.
 */
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url().default("http://localhost:3000"),
  // Tambahkan variabel lain di sini jika ada (misal: API_KEY, DB_URL)
});

// Melakukan parsing dan validasi langsung saat aplikasi dimuat
export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});
