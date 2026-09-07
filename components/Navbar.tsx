"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, ChevronRight, ShieldCheck, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Recursos", href: "#recursos" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Comparativo", href: "#comparativo" },
    { name: "Simulador", href: "#calculadora" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-emerald-900/40 py-3"
          : "bg-slate-900/80 backdrop-blur-sm py-4 border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1 shadow-md shadow-emerald-950/40 border border-emerald-500/30 group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src="/logo.png"
                alt="SmartMoo Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                Smart<span className="text-amber-400">Moo</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold -mt-1">
                Gestão Pecuária
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20consultor%20do%20SmartMoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar com Consultor</span>
            </a>

            <a
              href="#demonstracao"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-md shadow-amber-950/30 hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Testar Grátis</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#demonstracao"
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 transition-colors"
            >
              Testar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/98 border-b border-emerald-900/60 px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-emerald-950/60 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <a
              href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20falar%20com%20um%20consultor%20do%20SmartMoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-slate-200 bg-white/5 border border-white/10"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Falar com Consultor</span>
            </a>
            <a
              href="#demonstracao"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-md"
            >
              <span>Agendar Demonstração Gratuita</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
