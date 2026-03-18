import Image from "next/image";

export function DemoCafe() {
  return (
    <div id="demo-cafe" className="min-h-full bg-[#121212] text-white pb-20">
      <div className="h-100 relative flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Cafe Hero"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-black/50 to-black/60 z-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#d4af37] mb-4">
            The Artisan Cafe
          </h1>
          <p className="text-xl tracking-widest text-gray-300 uppercase">
            Premium Coffee & Eatery
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <h2 className="text-3xl font-serif italic mb-12 text-white border-b border-gray-800 pb-4 inline-block">
          Menu Signature Kami
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800 text-left">
            <div className="h-40 bg-gray-800 rounded-xl mb-5 overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Caramel Macchiato"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-xl text-[#d4af37]">
              Caramel Macchiato
            </h3>
            <p className="text-gray-400 text-sm mt-2 mb-4">
              Espresso premium dengan sentuhan vanilla dan saus caramel.
            </p>
            <div className="font-bold text-xl">Rp 35.000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
