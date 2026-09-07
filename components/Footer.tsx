"use client";

import { ShieldCheck, Heart, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 border border-emerald-500/30 shadow-md shadow-emerald-950/40 overflow-hidden">
              <img
                src="/logo.png"
                alt="SmartMoo Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white tracking-tight">
                Smart<span className="text-amber-400">Moo</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold -mt-1">
                Gestão Pecuária Inteligente
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#recursos" className="hover:text-amber-400 transition-colors">Recursos</a>
            <a href="#como-funciona" className="hover:text-amber-400 transition-colors">Como Funciona</a>
            <a href="#comparativo" className="hover:text-amber-400 transition-colors">Comparativo</a>
            <a href="#calculadora" className="hover:text-amber-400 transition-colors">Simulador</a>
            <a href="#depoimentos" className="hover:text-amber-400 transition-colors">Depoimentos</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
            <a href="#demonstracao" className="hover:text-amber-400 transition-colors text-amber-400 font-bold">Demonstração</a>
          </div>
        </div>

        {/* Partners & Legal Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
          <div>
            <p className="text-slate-400">
              <strong>Sócios Fundadores:</strong> Miguel Oliveira | Victor Baretta
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              SmartMoo Tecnologia Agropecuária LTDA • Desde 2026
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Dados 100% Protegidos e Criptografados
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/5 text-center text-[11px] text-slate-600">
          © {currentYear} SmartMoo. Todos os direitos reservados. Feito para o pecuarista brasileiro.
        </div>

      </div>
    </footer>
  );
}
