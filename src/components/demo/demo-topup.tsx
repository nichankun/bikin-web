// src/components/demo/demo-topup.tsx
"use client";
import { Gamepad2, Zap, ShieldCheck, Trophy, CreditCard } from "lucide-react";
import { useState } from "react";

export function DemoTopup() {
  const [selected, setSelected] = useState<number | null>(null);
  const items = [
    { qty: "86 Diamonds", price: "Rp 21.500" },
    { qty: "172 Diamonds", price: "Rp 43.000" },
    { qty: "257 Diamonds", price: "Rp 64.500" },
    { qty: "706 Diamonds", price: "Rp 172.000" },
  ];

  return (
    <div className="bg-slate-950 min-h-full text-slate-200 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom Kiri - Info Game */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 sticky top-8">
            <div className="w-32 h-32 bg-brand-500 rounded-3xl mb-6 shadow-2xl shadow-brand-500/20 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-brand-400 to-brand-700">
                <Gamepad2 size={64} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-black text-white mb-2">
              Mobile Legends
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Top up Diamond Mobile Legends Bang Bang harga paling murah dan
              proses instan 24 jam.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase">
                <Zap size={14} className="text-brand-400" /> Proses 1-3 Menit
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-500 uppercase">
                <ShieldCheck size={14} className="text-brand-400" /> Legal &
                Aman 100%
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan - Pilihan Diamond */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-500/10 rounded-full flex items-center justify-center text-brand-500 font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white">
                Pilih Nominal Top Up
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(i)}
                  className={`p-5 rounded-2xl border-2 text-left transition-all ${
                    selected === i
                      ? "border-brand-500 bg-brand-500/10 shadow-lg shadow-brand-500/10"
                      : "border-slate-800 bg-slate-800/50 hover:border-slate-700"
                  }`}
                >
                  <p className="font-black text-white">{item.qty}</p>
                  <p className="text-sm text-slate-400 mt-1">{item.price}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-brand-500/10 rounded-full flex items-center justify-center text-brand-500 font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white">
                Metode Pembayaran
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 opacity-50 cursor-not-allowed">
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex justify-between items-center">
                <span className="font-bold">QRIS (Auto Scan)</span>
                <CreditCard size={18} />
              </div>
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 flex justify-between items-center">
                <span className="font-bold">Virtual Account</span>
                <Trophy size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
