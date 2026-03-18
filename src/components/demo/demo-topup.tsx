export function DemoTopup() {
  return (
    <div
      id="demo-topup"
      className="min-h-full bg-slate-900 text-slate-200 pb-20 font-sans"
    >
      <div className="bg-slate-950 p-4 flex justify-between items-center border-b border-slate-800 sticky top-0 z-10 shadow-lg shadow-black/20">
        <div className="text-brand-500 font-black text-2xl italic tracking-tighter">
          VOUCHER<span className="text-white">STORE</span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="bg-linear-to-r from-purple-700 to-blue-600 rounded-3xl p-8 mb-8 shadow-2xl shadow-purple-900/40 flex justify-between items-center overflow-hidden relative">
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur w-fit px-3 py-1 rounded-full text-xs font-bold mb-3 text-white">
              🔥 SUPER DEAL
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              Diskon Top-Up 20%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
