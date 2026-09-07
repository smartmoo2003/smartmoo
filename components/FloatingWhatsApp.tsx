"use client";

import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20conhecer%20o%20SmartMoo%20para%20minha%20fazenda";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover for desktop */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold shadow-xl border border-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Falar com Consultor no WhatsApp 🐮
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com consultor no WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/20"
      >
        {/* Pulse radar ping animation */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500" />
        </span>

        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
