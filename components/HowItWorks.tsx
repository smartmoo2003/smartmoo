"use client";

import { UploadCloud, Smartphone, LineChart, ArrowRight, Check } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cadastre seus animais e lotes",
      desc: "Importe facilmente sua planilha de Excel atual ou cadastre seus animais direto pelo celular. Organize por pasto, categoria, lote ou raça em poucos minutos.",
      icon: UploadCloud,
      highlight: "Importação rápida de planilhas",
    },
    {
      number: "02",
      title: "Lance os manejos no campo",
      desc: "Na mangueira, pese os animais, aplique vacinas e anote ocorrências em segundos. Interface 100% pensada para o sol forte e uso com uma mão só.",
      icon: Smartphone,
      highlight: "Uso com 1 mão e modo offline",
    },
    {
      number: "03",
      title: "Tome decisões com relatórios prontos",
      desc: "Saiba exatamente qual lote deu mais lucro, qual pasto teve o melhor GMD e a hora perfeita de vender para o frigorífico com a margem máxima.",
      icon: LineChart,
      highlight: "Custo por arroba em 1 clique",
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Simplicidade na Rotina
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Como o SmartMoo entra na rotina da sua fazenda em{" "}
            <span className="text-amber-400">3 passos simples</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Sem processos complexos ou cursos demorados. Criado para que qualquer pessoa da sua equipe comece a usar no primeiro dia.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connecting Line between steps on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-500/30 via-amber-500/40 to-emerald-500/30 -translate-y-8 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative z-10 rounded-2xl bg-slate-950/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/40 transition-all group"
              >
                <div className="space-y-5">
                  {/* Top Step Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-900/30 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-800/40 transition-all">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <span className="text-3xl font-mono font-extrabold text-slate-700 group-hover:text-emerald-400 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-14 text-center">
          <a
            href="#demonstracao"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <span>Quer ver a importação dos seus dados em teste?</span>
            <span className="text-amber-400 font-bold underline underline-offset-4">Fale com um especialista →</span>
          </a>
        </div>

      </div>
    </section>
  );
}
