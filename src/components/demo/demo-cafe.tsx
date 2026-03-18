"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Coffee,
  ChevronRight,
  MapPin,
  Clock,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DemoCafe() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll untuk transisi navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased bg-[#fdf8f6]">
      {/* --- FLOATING NAVBAR --- 
         Catatan: top-14 digunakan agar navbar berada tepat di bawah header "Live Demo" (h-14).
         Saat di-scroll, posisi turun sedikit lagi (top-20) untuk efek "gantung" yang lebih nyata.
      */}
      <div
        className={`fixed w-full z-40 flex justify-center px-4 transition-all duration-500 ${
          isScrolled ? "top-18" : "top-14"
        }`}
      >
        <nav
          className={`transition-all duration-500 flex items-center justify-between ${
            isScrolled
              ? "w-full max-w-5xl bg-white/90 backdrop-blur-md shadow-2xl border border-white/20 py-3 px-8 rounded-full"
              : "w-full max-w-7xl bg-transparent py-6 px-6 rounded-none border-transparent"
          }`}
        >
          {/* Logo */}
          <div className="shrink-0">
            <span
              className={`font-serif text-2xl font-bold tracking-tight transition-colors duration-500 ${
                isScrolled ? "text-[#2c221c]" : "text-white"
              }`}
            >
              Drayl Coffee<span className="text-[#b4846c]">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
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
            <Link href="#contact">
              <Button
                className={`rounded-full px-8 transition-all duration-300 font-bold shadow-lg ${
                  isScrolled
                    ? "bg-[#2c221c] text-white hover:bg-[#b4846c]"
                    : "bg-white text-[#2c221c] hover:bg-[#f2e8e5]"
                }`}
              >
                Reservasi Meja
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? "text-[#2c221c]" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown (Gantung di bawah navbar) */}
        <div
          className={`md:hidden absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-[32px] border border-gray-100 shadow-2xl transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? "max-h-80 opacity-100 py-6"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="px-6 space-y-4">
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
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block pt-4"
            >
              <Button className="w-full bg-[#2c221c] text-white py-7 rounded-2xl font-bold shadow-md">
                Reservasi Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- HERO SECTION --- */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop"
            alt="Cafe Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#2c221c]/95 to-[#2c221c]/40"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-24">
          <span className="text-[#f2e8e5] uppercase tracking-[0.4em] text-xs font-black mb-6 block animate-in fade-in duration-1000">
            Roastery & Space
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Seduhan Terbaik <br />{" "}
            <span className="italic text-[#b4846c]">di Setiap Gelasnya.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Nikmati perpaduan biji kopi pilihan nusantara dengan suasana ruang
            yang dirancang untuk inspirasi dan kolaborasi Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="#menu">
              <Button
                size="lg"
                className="px-10 py-8 bg-[#b4846c] text-white rounded-full font-bold hover:bg-[#8e6855] transition-all shadow-2xl hover:shadow-amber-900/40 transform hover:-translate-y-1"
              >
                Lihat Menu
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-8 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#2c221c] transition-all"
              >
                Lokasi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section id="menu" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2c221c] mb-6">
              Menu Andalan Kami
            </h2>
            <div className="h-1.5 w-24 bg-[#b4846c] mx-auto rounded-full"></div>
          </div>

          <div className="mb-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center">
              <span className="bg-[#f2e8e5] p-3 rounded-2xl mr-5">
                <Coffee size={24} className="text-[#b4846c]" />
              </span>
              Signature Coffee
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <MenuCard
                title="Drayl Aren Latte"
                price="28.000"
                desc="Espresso blend house, susu segar, dan gula aren organik khas lokal."
                image="https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=500&auto=format&fit=crop"
              />
              <MenuCard
                title="Japanese Iced"
                price="32.000"
                desc="Manual brew V60 disajikan dingin dengan biji single origin pilihan."
                image="https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=500&auto=format&fit=crop"
              />
              <MenuCard
                title="Classic Mocha"
                price="35.000"
                desc="Paduan espresso pekat dengan cokelat artisan dan steamed milk."
                image="https://images.unsplash.com/photo-1572442388796-11668a67ef84?q=80&w=500&auto=format&fit=crop"
                soldOut
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center">
              <span className="bg-[#f2e8e5] p-3 rounded-2xl mr-5">
                <ShoppingBag size={24} className="text-[#b4846c]" />
              </span>
              Pastry & Bites
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <PastryCard
                title="Butter Croissant"
                price="22.000"
                desc="Renyah di luar, lembut dan buttery di dalam."
                image="https://images.unsplash.com/photo-1555507036-ab1d4075c6f1?q=80&w=500&auto=format&fit=crop"
              />
              <PastryCard
                title="Fudge Brownie"
                price="25.000"
                desc="Cokelat pekat dengan tekstur chewy dan taburan sea salt."
                image="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=500&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-[#2c221c] text-[#f2e8e5] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h4 className="font-serif text-3xl font-bold text-white mb-6">
              Drayl Coffee<span className="text-[#b4846c]">.</span>
            </h4>
            <p className="text-[#f2e8e5]/60 leading-relaxed font-light">
              Menyajikan ruang untuk ide-ide brilian Anda, ditemani secangkir
              kopi terbaik di kota.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <Clock size={20} className="text-[#b4846c]" /> Jam Operasional
            </h5>
            <ul className="space-y-4 text-[#f2e8e5]/70 font-medium">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Senin - Jumat</span> <span>08:00 - 22:00</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sabtu - Minggu</span> <span>07:00 - 23:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <MapPin size={20} className="text-[#b4846c]" /> Kunjungi Kami
            </h5>
            <p className="text-[#f2e8e5]/70 mb-8 leading-relaxed">
              Jl. Boulevard Panakkukang No. 88
              <br />
              Makassar, Sulawesi Selatan
            </p>
            <Button
              variant="outline"
              className="border-[#b4846c] text-[#b4846c] hover:bg-[#b4846c] hover:text-white rounded-full px-8 py-6 group"
            >
              Maps{" "}
              <ChevronRight
                className="ml-2 group-hover:translate-x-2 transition-transform"
                size={18}
              />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function NavOption({
  href,
  isScrolled,
  children,
}: {
  href: string;
  isScrolled: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`font-bold transition-all duration-300 ${
        isScrolled
          ? "text-gray-600 hover:text-[#b4846c]"
          : "text-white/80 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavOption({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-4 text-lg font-bold text-gray-800 hover:text-[#b4846c] rounded-2xl transition-all"
    >
      {children}
    </Link>
  );
}

function MenuCard({
  title,
  price,
  desc,
  image,
  soldOut = false,
}: {
  title: string;
  price: string;
  desc: string;
  image: string;
  soldOut?: boolean;
}) {
  return (
    <div
      className={`group border border-gray-100 rounded-[40px] p-6 hover:shadow-2xl transition-all duration-500 bg-white ${
        soldOut ? "opacity-75" : "hover:-translate-y-2"
      }`}
    >
      <div className="relative rounded-[32px] overflow-hidden mb-6 h-64 w-full">
        {soldOut && (
          <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
            <span className="bg-red-600 text-white px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
              Sold Out
            </span>
          </div>
        )}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-1000 ${
            soldOut ? "grayscale" : "group-hover:scale-110"
          }`}
        />
      </div>
      <div className="flex justify-between items-start mb-4">
        <h4
          className={`text-2xl font-bold tracking-tight ${
            soldOut ? "text-gray-400" : "text-gray-900"
          }`}
        >
          {title}
        </h4>
        <span className={`font-black text-[#b4846c]`}>Rp {price}</span>
      </div>
      <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-2 font-medium">
        {desc}
      </p>
      <Button
        disabled={soldOut}
        className={`w-full py-7 rounded-2xl font-black transition-all ${
          soldOut
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-none"
            : "bg-[#2c221c] text-white hover:bg-[#b4846c] shadow-lg"
        }`}
      >
        {soldOut ? "Habis" : "Pesan"}
      </Button>
    </div>
  );
}

function PastryCard({
  title,
  price,
  desc,
  image,
}: {
  title: string;
  price: string;
  desc: string;
  image: string;
}) {
  return (
    <div className="group border border-gray-100 rounded-[32px] p-5 hover:shadow-2xl transition-all duration-500 bg-white flex items-center gap-6 cursor-pointer hover:-translate-y-1">
      <div className="relative w-32 h-32 shrink-0 rounded-2xl overflow-hidden shadow-md">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-bold text-gray-900 group-hover:text-[#b4846c] transition-colors mb-1 tracking-tight">
          {title}
        </h4>
        <p className="text-[#b4846c] font-black mb-2 italic">Rp {price}</p>
        <p className="text-gray-500 text-xs leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </div>
  );
}
