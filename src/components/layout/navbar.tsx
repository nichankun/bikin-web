"use client";
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-40 backdrop-blur-lg border-b shadow-sm transition-all duration-300 ${isScrolled ? "bg-white/90 border-slate-200/50 shadow-md" : "bg-white/80 border-slate-200/50 shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="font-extrabold text-2xl tracking-tighter text-slate-900">
            DevPro<span className="text-brand-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 items-center font-medium text-sm text-slate-600">
            <a
              href="#portfolio"
              className="hover:text-brand-600 transition-colors"
            >
              Showcase
            </a>
            <a href="#alur" className="hover:text-brand-600 transition-colors">
              Cara Kerja
            </a>
            <a href="#faq" className="hover:text-brand-600 transition-colors">
              FAQ
            </a>
          </div>
          <a
            href="#harga"
            className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-500 hover:shadow-lg hover:shadow-brand-500/30 transition-all duration-300"
          >
            Cek Harga
          </a>
        </div>
      </div>
    </nav>
  );
}
