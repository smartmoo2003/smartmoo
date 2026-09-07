"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, ArrowRight, Sparkles, Send, PhoneCall, User, Mail, Users } from "lucide-react";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    herdSize: "500 a 1.000 cabeças",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission / lead capture
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="demonstracao" className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-900/90 rounded-3xl border-2 border-emerald-500/40 p-6 sm:p-12 shadow-2xl shadow-emerald-950/80">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Comece Gratuitamente</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Pronto para ter o{" "}
                <span className="text-amber-400">controle total</span> do seu rebanho na palma da mão?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Junte-se aos pecuaristas que abandonaram o caderno e aumentaram o lucro da fazenda com decisões baseadas em dados reais.
              </p>

              {/* Guarantees Checklist */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span><strong>14 dias de teste gratuito</strong> sem precisar de cartão</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Auxílio gratuito na importação da sua planilha existente</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Apresentação personalizada com especialista zootécnico</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-slate-950 rounded-2xl border border-white/15 p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Solicitação Recebida com Sucesso!</h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Nosso consultor entrará em contato pelo WhatsApp em até 15 minutos para liberar seu acesso de teste.
                    </p>
                    <a
                      href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Acabei%20de%20preencher%20o%20formul%C3%A1rio%20do%20SmartMoo%20e%20quero%20minha%20demonstra%C3%A7%C3%A3o"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                    >
                      <span>Acelerar pelo WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-white mb-2">Agende sua Demonstração</h3>

                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Seu Nome Completo</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="Ex: João Silva"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">E-mail de Contato</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="Ex: joao@fazenda.com.br"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Telefone / WhatsApp com DDD</label>
                      <div className="relative">
                        <PhoneCall className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="Ex: (67) 99999-9999"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Herd Size */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Quantidade Aproximada de Animais</label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.herdSize}
                          onChange={(e) => setFormData({ ...formData, herdSize: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                        >
                          <option value="Até 200 cabeças">Até 200 cabeças</option>
                          <option value="200 a 500 cabeças">200 a 500 cabeças</option>
                          <option value="500 a 1.000 cabeças">500 a 1.000 cabeças</option>
                          <option value="1.000 a 3.000 cabeças">1.000 a 3.000 cabeças</option>
                          <option value="Acima de 3.000 cabeças">Acima de 3.000 cabeças</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-amber-950/50 transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      {loading ? (
                        <span>Enviando dados...</span>
                      ) : (
                        <>
                          <span>Quero uma Demonstração Sem Compromisso</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-400 pt-1">
                      🔒 Seus dados estão seguros e não enviamos spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
