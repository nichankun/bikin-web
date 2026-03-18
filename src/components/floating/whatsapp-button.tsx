export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-brand-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center gap-3 group"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold">
        Chat Sekarang
      </span>
      <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-brand-500"></span>
      </span>
    </a>
  );
}
