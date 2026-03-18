// src/components/demo/demo-cafe.tsx
"use client";
import { Coffee, Clock, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";

export function DemoCafe() {
  const menuItems = [
    {
      name: "Espresso Dolce",
      price: "35k",
      desc: "Premium Arabica with caramel undertone",
    },
    {
      name: "Matcha Zen Latte",
      price: "42k",
      desc: "Organic ceremonial grade matcha",
    },
    {
      name: "Cloudy Croissant",
      price: "38k",
      desc: "Hand-rolled with French butter",
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-full font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80"
          alt="Cafe Hero"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4">
          <h2 className="text-white text-5xl md:text-7xl font-serif mb-4">
            The Artisan Cafe
          </h2>
          <p className="text-white/80 tracking-[0.3em] uppercase text-sm">
            Brewing Perfection Since 2012
          </p>
        </div>
      </section>

      {/* Info Bar */}
      <div className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="flex items-center gap-4">
            <Clock className="text-amber-700" size={20} />
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">
                Jam Buka
              </p>
              <p className="text-sm font-semibold">08.00 - 22.00 WIB</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-amber-700" size={20} />
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">
                Lokasi
              </p>
              <p className="text-sm font-semibold">
                Jl. Senopati No. 12, Jakarta
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Coffee className="text-amber-700" size={20} />
            <div>
              <p className="text-xs font-bold uppercase text-slate-400">
                Kapasitas
              </p>
              <p className="text-sm font-semibold">Indoor & Outdoor Area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Menu */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-amber-700 font-serif italic">
            Chefs Recommendations
          </span>
          <h3 className="text-3xl font-bold mt-2">Signature Selections</h3>
        </div>

        <div className="space-y-8">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-end border-b border-slate-200 pb-4 group cursor-pointer"
            >
              <div className="flex-1">
                <h4 className="font-bold text-lg group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h4>
                <p className="text-slate-500 text-sm italic">{item.desc}</p>
              </div>
              <div className="text-xl font-serif font-bold text-slate-900">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-900 transition-all flex items-center gap-2 mx-auto">
            Lihat Menu Lengkap <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
