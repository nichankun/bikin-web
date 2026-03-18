export function DemoInstansi() {
  return (
    <div id="demo-instansi" className="min-h-full flex bg-slate-50">
      <div className="w-64 bg-blue-900 text-white p-5 hidden md:block">
        <h2 className="font-bold text-xl mb-8">E-Notulen Instansi</h2>
        <ul className="space-y-4 opacity-80 text-sm">
          <li className="bg-blue-800 p-2 rounded">📊 Dashboard</li>
          <li>📅 Agenda Rapat</li>
          <li>📁 Arsip Dokumen</li>
          <li>⚙️ Pengaturan Panel</li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">
          Dashboard Rekapitulasi
        </h1>
        <p className="text-slate-500 mb-8">
          Sistem Informasi Manajemen Rapat Digital
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-slate-500 text-sm font-medium">
              Total Rapat Bulan Ini
            </div>
            <div className="text-4xl font-black text-blue-600 mt-2">24</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-slate-500 text-sm font-medium">
              Notulen Menunggu TTD
            </div>
            <div className="text-4xl font-black text-orange-500 mt-2">5</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="text-slate-500 text-sm font-medium">
              Dokumen Terarsip
            </div>
            <div className="text-4xl font-black text-brand-500 mt-2">1,204</div>
          </div>
        </div>
      </div>
    </div>
  );
}
