import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  // PERBAIKAN ZOD v4:
  // 1. Gunakan z.url() langsung (bukan z.string().url())
  // 2. Gunakan properti "error" (bukan "message")
  NEXT_PUBLIC_APP_URL: z.url({
    error:
      "NEXT_PUBLIC_APP_URL wajib diisi dengan format URL yang valid (termasuk http/https)",
  }),
});

export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : undefined),
});
