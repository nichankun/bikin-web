"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Zap,
  Check,
  Headphones,
  User,
  CreditCard,
  Diamond,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- SUB-KOMPONEN (Penting untuk struktur yang bersih) ---

function GameCard({
  title,
  img,
  tag,
  tagColor,
  active,
}: {
  title: string;
  img: string;
  tag?: string;
  tagColor?: string;
  active?: boolean;
}) {
  return (
    <Link href="#order" className="group relative block">
      <div
        className={`aspect-3/4 rounded-2xl overflow-hidden mb-4 border-2 shadow-xl transition-all duration-300 relative ${active ? "border-[#22d3ee]" : "border-[#2a3b56] group-hover:border-[#22d3ee]"}`}
      >
        <Image
          src={img}
          alt={title}
          fill
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b1120]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="absolute bottom-4 left-4 right-4 bg-[#22d3ee] py-2 px-3 rounded-xl text-center text-[#0b1120] font-black text-[10px] transform translate-y-12 group-hover:translate-y-0 transition-transform tracking-wider">
          TOP UP
        </div>
        {tag && (
          <div
            className={`absolute top-2 right-2 ${tagColor} text-white text-[9px] font-black px-3 py-1 rounded-full shadow-lg animate-bounce`}
          >
            {tag}
          </div>
        )}
      </div>
      <h3 className="font-bold text-center text-slate-100 group-hover:text-[#22d3ee] transition-colors truncate text-sm">
        {title}
      </h3>
    </Link>
  );
}

// --- KOMPONEN UTAMA ---

export function DemoTopup() {
  const [selectedNominal, setSelectedNominal] = useState("172");
  const [selectedPayment, setSelectedPayment] = useState("dana");

  return (
    <div className="bg-[#0b1120] text-slate-300 font-sans antialiased min-h-screen selection:bg-[#22d3ee] selection:text-[#0b1120]">
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#161e31]/80 backdrop-blur-xl border-b border-[#2a3b56]/50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="https://img.icons8.com/fluency/96/controller.png"
              alt="Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-extrabold tracking-tighter text-white">
              Drayl<span className="text-[#22d3ee]">Store</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest items-center">
            <Link href="#" className="text-[#22d3ee]">
              Home
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-[#22d3ee] transition-colors"
            >
              Lacak Pesanan
            </Link>
            <div className="bg-[#161e31]/50 px-4 py-1.5 rounded-full border border-[#2a3b56] flex items-center gap-2">
              <Headphones size={14} className="text-[#22d3ee]" /> CS 24/7
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="text-slate-400 hover:text-white p-2">
              <Search size={20} />
            </button>
            <Button className="bg-linear-to-r from-[#22d3ee] to-[#818cf8] px-6 py-2 rounded-full text-xs font-black text-[#0b1120] shadow-[0_0_15px_rgba(34,211,238,0.3)] border-none">
              MASUK
            </Button>
          </div>
        </div>
      </nav>

      {/* --- HERO BANNER --- */}
      <header className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#161e31]">
            <div className="relative h-75 md:h-100">
              <Image
                src="https://api.duniagames.co.id/api/content/upload/file/4096180351664188933.jpg"
                alt="Banner"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0b1120] via-[#0b1120]/20 to-transparent" />
            </div>
            <div className="absolute bottom-10 left-6 md:left-12 max-w-lg">
              <div className="bg-[#f472b6]/20 text-[#f472b6] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-[#f472b6]/30 inline-block">
                SPECIAL OFFER
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
                Bonus Diamond MLBB <br /> Hingga 20%!
              </h1>
              <Button className="bg-white text-[#0b1120] font-black px-8 py-6 rounded-2xl hover:bg-[#22d3ee] transition-all border-none">
                KLAIM SEKARANG
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* --- POPULAR SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-10 border-b border-[#2a3b56] pb-6">
          <Image
            src="https://img.icons8.com/fluency/96/fire-element.png"
            alt="Hot"
            width={32}
            height={32}
          />
          <h2 className="text-2xl font-black text-white uppercase tracking-tighter">
            Game Terpopuler
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <GameCard
            title="Mobile Legends"
            img="https://api.duniagames.co.id/api/content/upload/file/8114337051598842122.jpg"
            active
          />
          <GameCard
            title="PUBG Mobile"
            img="https://static.upstation.media/wp-content/uploads/2021/09/27150116/pubg-mobile-india-will-be-called-battlegrounds-mobile-india.jpg"
          />
          <GameCard
            title="Free Fire"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mXUfL_8oR_zQc8hV6E4pG0rYfM1aR6z_Gg&s"
            tag="EVENT"
            tagColor="bg-[#f472b6]"
          />
          <GameCard
            title="Genshin Impact"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6_Iu6UvjO9PZc6_0iE9Wj5vU6n5xYpE4vA&s"
          />
          <GameCard
            title="Valorant"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p6vPqYmFmP_h_3pGvP0vP_vP_pP_pP_pP_A&s"
          />
          <GameCard
            title="eFootball 2026"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_L-F-r_vP_pP_pP_pP_pP_pP_pP_pP_pP_A&s"
            tag="UPDATE"
            tagColor="bg-[#4ade80]"
          />
        </div>
      </section>

      {/* --- ORDER SECTION --- */}
      <section id="order" className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1 */}
            <div className="bg-[#161e31] p-8 rounded-[32px] border border-[#2a3b56]">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-10 bg-[#22d3ee] text-[#0b1120] rounded-xl flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  1
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  User ID
                </h2>
                <User className="ml-auto text-[#22d3ee]/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="User ID"
                  className="w-full bg-[#0b1120]/50 border-2 border-[#2a3b56] rounded-2xl py-4 px-6 focus:border-[#22d3ee] outline-none text-white transition-all font-bold"
                />
                <input
                  type="text"
                  placeholder="Zone ID"
                  className="w-full bg-[#0b1120]/50 border-2 border-[#2a3b56] rounded-2xl py-4 px-6 focus:border-[#22d3ee] outline-none text-white transition-all font-bold"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#161e31] p-8 rounded-[32px] border border-[#2a3b56]">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-10 bg-[#22d3ee] text-[#0b1120] rounded-xl flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  2
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Nominal
                </h2>
                <Diamond className="ml-auto text-[#22d3ee]/50" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { id: "172", label: "172 Diamonds", price: "38.900" },
                  { id: "257", label: "257 Diamonds", price: "58.000" },
                  { id: "706", label: "706 Diamonds", price: "155.500" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedNominal(item.id)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all relative overflow-hidden ${selectedNominal === item.id ? "bg-[#22d3ee]/10 border-[#22d3ee] shadow-lg shadow-[#22d3ee]/10" : "bg-[#0b1120]/30 border-[#2a3b56] hover:border-[#22d3ee]/50"}`}
                  >
                    <span className="block font-black text-white text-base mb-1">
                      {item.label}
                    </span>
                    <span className="text-xs text-[#22d3ee] font-bold">
                      Rp {item.price}
                    </span>
                    {selectedNominal === item.id && (
                      <Check
                        className="absolute top-2 right-2 text-[#22d3ee]"
                        size={14}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#161e31] p-8 rounded-[32px] border border-[#2a3b56]">
              <div className="flex items-center gap-4 mb-8">
                <div className="size-10 bg-[#22d3ee] text-[#0b1120] rounded-xl flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                  3
                </div>
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Pembayaran
                </h2>
                <CreditCard className="ml-auto text-[#22d3ee]/50" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["dana", "ovo", "shopeepay"].map((pay) => (
                  <button
                    key={pay}
                    onClick={() => setSelectedPayment(pay)}
                    className={`bg-white p-4 rounded-2xl border-2 h-16 flex items-center justify-center relative transition-all ${selectedPayment === pay ? "border-[#22d3ee] shadow-lg shadow-[#22d3ee]/20" : "opacity-40 border-transparent"}`}
                  >
                    <div className="relative h-6 w-20">
                      <Image
                        src={`https://upload.wikimedia.org/wikipedia/commons/${pay === "dana" ? "7/72/Logo_dana_blue.svg" : pay === "ovo" ? "e/eb/Logo_ovo_purple.svg" : "i/thumb/e/ec/ShopeePay.svg/1200px-ShopeePay.svg.png"}`}
                        alt={pay}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:sticky lg:top-28">
            <div className="bg-[#161e31] p-8 rounded-[32px] border-t-4 border-t-[#22d3ee] border-x border-b border-[#2a3b56] shadow-2xl">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#2a3b56]">
                <h2 className="text-xl font-black text-white uppercase tracking-tight">
                  Ringkasan
                </h2>
              </div>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-slate-500">Game</span>{" "}
                  <span className="text-white">MLBB</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-slate-500">Item</span>{" "}
                  <span className="text-white">{selectedNominal} Diamonds</span>
                </div>
                <div className="pt-6 border-t border-[#2a3b56] flex justify-between items-center">
                  <span className="font-bold text-white">Total</span>
                  <span className="text-2xl font-black text-[#22d3ee] tracking-tighter">
                    {selectedNominal === "172"
                      ? "Rp 38.900"
                      : selectedNominal === "257"
                        ? "Rp 58.000"
                        : "Rp 155.500"}
                  </span>
                </div>
              </div>
              <Button className="w-full bg-linear-to-r from-[#22d3ee] to-[#818cf8] py-8 rounded-2xl text-[#0b1120] font-black text-lg shadow-xl shadow-[#22d3ee]/20 hover:scale-[1.02] transition-transform border-none">
                <Zap size={20} className="mr-2 fill-current" /> BAYAR SEKARANG
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#161e31] py-16 border-t border-[#2a3b56]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-bold text-slate-500 tracking-[0.3em] uppercase mb-4">
            &copy; 2026 Drayl Store Indonesia
          </p>
          <div className="flex justify-center gap-6 opacity-30 grayscale transition-all hover:grayscale-0 hover:opacity-100">
            <Image
              src="https://img.icons8.com/fluency/96/instagram-new.png"
              width={24}
              height={24}
              alt="IG"
            />
            <Image
              src="https://img.icons8.com/fluency/96/whatsapp.png"
              width={24}
              height={24}
              alt="WA"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
