"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// 1. Ekstraksi data navigasi ke luar komponen
const NAV_LINKS = [
  { name: "Showcase", href: "#portfolio" },
  { name: "Cara Kerja", href: "#alur" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek untuk mendeteksi scroll dan mengubah background navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md py-3 shadow-md border-slate-200"
          : "bg-transparent py-5 border-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo - Dijadikan Link agar bisa diklik untuk kembali ke Home/atas */}
          <Link
            href="/"
            className="font-extrabold text-2xl tracking-tighter text-slate-900"
          >
            BikinWeb<span className="text-brand-500">.</span>
          </Link>

          {/* Desktop Links - Menggunakan next/link */}
          <div className="hidden md:flex gap-8 items-center font-medium text-sm text-slate-600">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#harga"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-500 transition-all duration-300"
            >
              Cek Harga
            </Link>
          </div>

          {/* Mobile Toggle - Ditambah atribut ARIA untuk Aksesibilitas */}
          <button
            className="md:hidden p-2 text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white border-b transition-all duration-300 overflow-hidden",
          // Mencegah interaksi klik saat menu sedang tertutup menggunakan pointer-events-none
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none",
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Otomatis tutup menu setelah diklik
              className="block py-2 text-lg font-semibold text-slate-900 border-b border-slate-100"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#harga"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-brand-500 text-white py-4 rounded-xl font-bold"
          >
            Cek Harga Sekarang
          </Link>
        </div>
      </div>
    </nav>
  );
}
