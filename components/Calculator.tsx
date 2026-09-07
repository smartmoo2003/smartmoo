"use client";

import { useState } from "react";
import { Calculator as CalcIcon, Clock, TrendingUp, DollarSign, ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";

export function Calculator() {
  const herdSizes = [
    {
      label: "200 cabeças",
      heads: 200,
      hoursSavedMonth: 28,
      assertivenessGain: "R$ 14.500",
      daysSavedYear: "14 dias",
      description: "Ideal para produtores em fase de profissionalização e recria ágil."
    },
    {
      label: "500 cabeças",
      heads: 500,
      hoursSavedMonth: 54,
      assertivenessGain: "R$ 38.000",
      daysSavedYear: "27 dias",
      description: "Mais giro de pasto e precisão total no momento de travar arrobas."
    },
    {
      label: "1.000 cabeças",
      heads: 1000,
      hoursSavedMonth: 96,
      assertivenessGain: "R$ 82.000",
      daysSavedYear: "48 dias",
      description: "Gestão multi-pastos com controle sanitário e nutricional em tempo real."
    },
    {
      label: "5.000+ cabeças",
      heads: 5000,
      hoursSavedMonth: 280,
      assertivenessGain: "R$ 390.000+",
      daysSavedYear: "140 dias",
      description: "Operação de grande porte: rastreabilidade total, confinamento e máxima margem líquida."
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(1); // default 500 cabeças
  const current = herdSizes[selectedIndex];

  return (
    <section id="calculadora" className="py-20 sm:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Simulador de Retorno
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Descubra o impacto do SmartMoo no{" "}
            <span className="text-amber-400">tamanho da sua boiada</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Selecione a quantidade de animais para simular a economia de tempo e o ganho em assertividade na venda de arrobas.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 rounded-3xl border border-emerald-500/30 p-6 sm:p-10 shadow-2xl shadow-emerald-950/40 relative overflow-hidden">
          
          <div className="space-y-8">
            {/* Step 1: Select Herd Size Buttons */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 text-center sm:text-left">
                1. Selecione o tamanho do seu rebanho:
              </label>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {herdSizes.map((item, idx) => {
                  const isSelected = selectedIndex === idx;
                  return (
                    <button
                      key={item.label}
                      onClick={() => setSelectedIndex(idx)}
                      className={`py-3.5 px-4 rounded-xl text-center font-bold text-sm sm:text-base transition-all duration-200 border ${
                        isSelected
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-400 shadow-lg shadow-amber-950/40 scale-[1.02]"
                          : "bg-slate-950 text-slate-300 border-white/10 hover:border-emerald-500/40 hover:bg-slate-900"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Estimated Results Grid */}
            <div className="pt-4 border-t border-white/10">
              <label className="block text-xs uppercase tracking-wider font-bold text-emerald-400 mb-4 text-center sm:text-left">
                2. Estimativa de ganhos operacionais e financeiros:
              </label>

              <div className="grid sm:grid-cols-3 gap-4">
                
                {/* Metric 1: Horas Economizadas */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-semibold">Tempo Economizado</span>
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      ~{current.hoursSavedMonth}h <span className="text-xs font-normal text-slate-400">/mês</span>
                    </div>
                    <p className="text-[11px] text-emerald-400 font-medium mt-1">
                      Menos tempo no curral e no Excel
                    </p>
                  </div>
                </div>

                {/* Metric 2: Assertividade na Venda */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-emerald-500/40 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-bl-lg">
                    Mais Lucro
                  </div>
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-semibold">Ganho em Negociação</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                      {current.assertivenessGain}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Estimativa por safra sem descontos surpresa
                    </p>
                  </div>
                </div>

                {/* Metric 3: Dias Livres no Ano */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-semibold">Produtividade de Campo</span>
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
                      {current.daysSavedYear}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Economizados em burocracia no ano
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Context Summary & CTA */}
            <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm text-slate-300">
                  <strong className="text-white font-semibold">{current.label}:</strong> {current.description}
                </p>
              </div>

              <a
                href="#demonstracao"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <span>Quero Essa Economia</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
