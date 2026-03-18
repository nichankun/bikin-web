export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="font-extrabold text-3xl tracking-tighter text-slate-900 mb-6">
          DevPro<span className="text-brand-500">.</span>
        </div>
        <p className="text-slate-500 max-w-md mb-8">
          Arsitektur web berkinerja tinggi untuk membawa ide bisnis dan project
          Anda ke realitas digital.
        </p>
        <div className="flex gap-4 mb-12">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-white transition-all"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-white transition-all"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-500 hover:text-white transition-all"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="text-slate-400 text-sm w-full border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center pb-20 md:pb-0">
          <p>&copy; {currentYear} DevPro Web Solutions. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
