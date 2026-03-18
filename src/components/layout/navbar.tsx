"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Gunakan Lucide sesuai package.json
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Showcase", href: "#portfolio" },
    { name: "Cara Kerja", href: "#alur" },
    { name: "FAQ", href: "#faq" },
  ];

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
          {/* Logo */}
          <div className="font-extrabold text-2xl tracking-tighter text-slate-900">
            BikinWeb<span className="text-brand-500">.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center font-medium text-sm text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#harga"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-500 transition-all duration-300"
            >
              Cek Harga
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden absolute w-full bg-white border-b transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-semibold text-slate-900 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#harga"
            className="block w-full text-center bg-brand-500 text-white py-4 rounded-xl font-bold"
          >
            Cek Harga Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}
