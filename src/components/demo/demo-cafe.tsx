"use client";

import { useState, useEffect, type ReactNode } from "react";
import Image from "next/image";
import {
  Menu as MenuIcon,
  X,
  Coffee,
  ChevronRight,
  MapPin,
  Clock,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// --- 1. TYPES & INTERFACES ---

interface MenuItem {
  id: string;
  title: string;
  price: string;
  desc: string;
  image: string;
  soldOut?: boolean;
}

interface PastryItem {
  id: string;
  title: string;
  price: string;
  desc: string;
  image: string;
}

interface NavOptionProps {
  href: string;
  isScrolled: boolean;
  children: ReactNode;
}

interface MobileNavOptionProps {
  href: string;
  onClick: () => void;
  children: ReactNode;
}

// --- 2. DATA CONSTANTS ---

const COFFEE_MENU: MenuItem[] = [
  {
    id: "c1",
    title: "Drayl Aren Latte",
    price: "28.000",
    desc: "Espresso blend house, susu segar, dan gula aren organik khas lokal.",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800",
  },
  {
    id: "c2",
    title: "Japanese Iced",
    price: "32.000",
    desc: "Manual brew V60 disajikan dingin dengan biji single origin pilihan.",
    image:
      "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=800",
  },
  {
    id: "c3",
    title: "Classic Mocha",
    price: "35.000",
    desc: "Paduan espresso pekat dengan cokelat artisan dan steamed milk.",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67ef84?q=80&w=800",
    soldOut: true,
  },
];

const PASTRY_MENU: PastryItem[] = [
  {
    id: "p1",
    title: "Butter Croissant",
    price: "22.000",
    desc: "Renyah di luar, lembut dan buttery di dalam.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1d4075c6f1?q=80&w=500",
  },
  {
    id: "p2",
    title: "Fudge Brownie",
    price: "25.000",
    desc: "Cokelat pekat dengan tekstur chewy dan taburan sea salt.",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=500",
  },
];

// --- 3. MAIN COMPONENT ---

export function DemoCafe() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased bg-[#fdf8f6] selection:bg-[#b4846c] selection:text-white">
      {/* Navbar */}
      <header
        className={`fixed w-full z-40 flex justify-center px-4 transition-all duration-500 ${
          isScrolled ? "top-18" : "top-14"
        }`}
      >
        <nav
          className={`transition-all duration-500 flex items-center justify-between ${
            isScrolled
              ? "w-full max-w-5xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 py-3 px-8 rounded-full"
              : "w-full max-w-7xl bg-transparent py-6 px-6"
          }`}
        >
          <div className="shrink-0">
            <Link
              href="#"
              className={`font-serif text-2xl font-bold tracking-tight transition-colors ${isScrolled ? "text-[#2c221c]" : "text-white"}`}
            >
              Drayl Coffee<span className="text-[#b4846c]">.</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <NavOption href="#home" isScrolled={isScrolled}>
              Beranda
            </NavOption>
            <NavOption href="#menu" isScrolled={isScrolled}>
              Menu
            </NavOption>
            <NavOption href="#about" isScrolled={isScrolled}>
              Tentang Kami
            </NavOption>
            <Button
              className={`rounded-full px-8 transition-all font-bold shadow-lg ${
                isScrolled
                  ? "bg-[#2c221c] text-white hover:bg-[#b4846c]"
                  : "bg-white text-[#2c221c] hover:bg-[#f2e8e5]"
              }`}
            >
              Reservasi Meja
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled || isMobileMenuOpen ? "text-[#2c221c]" : "text-white"}`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-[32px] border border-gray-100 shadow-2xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 py-6"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-6 space-y-2">
            <MobileNavOption
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </MobileNavOption>
            <MobileNavOption
              href="#menu"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </MobileNavOption>
            <MobileNavOption
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tentang Kami
            </MobileNavOption>
            <div className="pt-4">
              <Button className="w-full bg-[#2c221c] text-white py-7 rounded-2xl font-bold shadow-md">
                Reservasi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000"
            alt="Suasana Cafe Premium"
            fill
            className="object-cover scale-105"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#2c221c]/95 to-[#2c221c]/30" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mt-24">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8">
            Seduhan Terbaik <br />{" "}
            <span className="italic text-[#b4846c]">di Setiap Gelasnya.</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="px-10 py-8 bg-[#b4846c] text-white rounded-full font-bold hover:bg-[#8e6855] transition-all transform hover:-translate-y-1"
            >
              Lihat Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-10 py-8 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#2c221c]"
            >
              Lokasi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2c221c] mb-6">
              Menu Andalan Kami
            </h2>
            <div className="h-1.5 w-24 bg-[#b4846c] mx-auto rounded-full" />
          </div>

          <div className="mb-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-4">
              <span className="bg-[#f2e8e5] p-3 rounded-2xl">
                <Coffee size={24} className="text-[#b4846c]" />
              </span>
              Signature Coffee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {COFFEE_MENU.map((item) => (
                <MenuCard key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center gap-4">
              <span className="bg-[#f2e8e5] p-3 rounded-2xl">
                <ShoppingBag size={24} className="text-[#b4846c]" />
              </span>
              Pastry & Bites
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PASTRY_MENU.map((item) => (
                <PastryCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#2c221c] text-[#f2e8e5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h4 className="font-serif text-3xl font-bold text-white mb-6">
              Drayl Coffee<span className="text-[#b4846c]">.</span>
            </h4>
            <p className="text-[#f2e8e5]/60 leading-relaxed font-light italic">
              Menyajikan ruang untuk ide-ide brilian Anda
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Clock size={20} className="text-[#b4846c]" /> Jam Operasional
            </h5>
            <div className="space-y-4 text-[#f2e8e5]/70">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Senin - Jumat</span> <span>08:00 - 22:00</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Sabtu - Minggu</span> <span>07:00 - 23:00</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <MapPin size={20} className="text-[#b4846c]" /> Lokasi Kami
            </h5>
            <p className="text-[#f2e8e5]/70 mb-8">
              Jl. Boulevard Panakkukang No. 88, Makassar
            </p>
            <Button
              variant="outline"
              className="border-[#b4846c] text-[#b4846c] hover:bg-[#b4846c] hover:text-white rounded-full px-8 group"
            >
              Buka di Maps{" "}
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- 4. HELPER COMPONENTS (Optimized Image Handling) ---

const NavOption = ({ href, isScrolled, children }: NavOptionProps) => (
  <Link
    href={href}
    className={`font-bold transition-all ${isScrolled ? "text-gray-600 hover:text-[#b4846c]" : "text-white/80 hover:text-white"}`}
  >
    {children}
  </Link>
);

const MobileNavOption = ({ href, onClick, children }: MobileNavOptionProps) => (
  <Link
    href={href}
    onClick={onClick}
    className="block px-4 py-4 text-lg font-bold text-gray-800 hover:text-[#b4846c] rounded-2xl"
  >
    {children}
  </Link>
);

const MenuCard = ({ title, price, desc, image, soldOut }: MenuItem) => {
  // Image Fallback State
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <article
      className={`group border border-gray-100 rounded-[40px] p-6 bg-white transition-all duration-500 ${soldOut ? "opacity-60" : "hover:shadow-2xl hover:-translate-y-2"}`}
    >
      <div className="relative rounded-[32px] overflow-hidden mb-6 h-64 w-full">
        {soldOut && (
          <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
            <span className="bg-red-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest">
              Sold Out
            </span>
          </div>
        )}
        <Image
          src={imgSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-1000 ${!soldOut && "group-hover:scale-110"}`}
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={() =>
            setImgSrc(
              `https://placehold.co/600x400/2c221c/ffffff?text=${title}`,
            )
          }
        />
      </div>
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h4>
        <span className="font-black text-[#b4846c]">Rp {price}</span>
      </div>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2">
        {desc}
      </p>
      <Button
        disabled={soldOut}
        className={`w-full py-7 rounded-2xl font-black ${soldOut ? "bg-gray-100 text-gray-400" : "bg-[#2c221c] hover:bg-[#b4846c]"}`}
      >
        {soldOut ? "Habis" : "Pesan Sekarang"}
      </Button>
    </article>
  );
};

const PastryCard = ({ title, price, desc, image }: PastryItem) => {
  // Image Fallback State
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <article className="group border border-gray-100 rounded-[32px] p-4 bg-white flex items-center gap-6 hover:shadow-xl transition-all hover:-translate-y-1">
      <div className="relative w-28 h-28 shrink-0 rounded-2xl overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="120px"
          onError={() =>
            setImgSrc(
              `https://placehold.co/200x200/b4846c/ffffff?text=${title}`,
            )
          }
        />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-bold text-gray-900 mb-1">{title}</h4>
        <p className="text-[#b4846c] font-black mb-1">Rp {price}</p>
        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
          {desc}
        </p>
      </div>
    </article>
  );
};
