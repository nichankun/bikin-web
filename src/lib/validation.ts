import { z } from "zod";

// 1. Definisikan Schema Validasi
export const ContactFormSchema = z.object({
  email: z.string().email({ message: "Format email tidak valid" }),
  name: z.string().min(2, { message: "Nama minimal 2 karakter" }).optional(),
  message: z.string().min(10, { message: "Pesan terlalu pendek" }).optional(),
});

// 2. Extract Type secara otomatis dari Schema
export type ContactFormData = z.infer<typeof ContactFormSchema>;

// 3. Fungsi Validasi yang Aman
export function validateContactForm(data: unknown): ContactFormData {
  // .parse akan melempar error jika data tidak sesuai schema
  // Ini jauh lebih aman daripada sekadar mengecek .includes("@")
  const validatedData = ContactFormSchema.parse(data);

  return validatedData;
}
