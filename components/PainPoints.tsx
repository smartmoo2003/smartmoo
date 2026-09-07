"use client";

import { XCircle, CheckCircle2, Clock, FileWarning, Sparkles, TrendingDown, TrendingUp, Zap, Database } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      caderno: "Anotações em cadernos rasurados na poeira e sujeira do curral",
      smartmoo: "Interface digital limpa no celular, desenhada para operar com uma mão",
    },
    {
      caderno: "Demora de mais de 1 minuto por cabeça na balança e mangueira",
      smartmoo: "Média de 12 segundos por animal na pesagem e digitação rápida",
    },
    {
      caderno: "Perda de históricos de vacinas e carências na hora da venda para frigorífico",
      smartmoo: "Histórico sanitário instantâneo por número de brinco ou chip eletrônico",
    },
    {
      caderno: "Surpresa negativa no fechamento do lote (sem saber o custo real da arroba)",
      smartmoo: "Custo por @ e margem de lucro calculados automaticamente em tempo real",
    },
    {
      caderno: "Horas extras no final do mês passando rascunhos para planilhas manuais no Excel",
      smartmoo: "Relatórios zootécnicos e financeiros prontos em 1 clique para sócios e gerentes",
    },
  ];

  return (
    <section id="comparativo" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            O Contraste que Define seu Lucro
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            O Caderno Tradicional vs. A Gestão com o{" "}
            <span className="text-amber-400">SmartMoo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Veja a diferença entre gerenciar a fazenda no "achismo" e ter previsibilidade total de peso, custos e lucro por lote.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Column A: O Caderno Tradicional */}
          <div className="rounded-2xl bg-slate-950/80 border border-red-900/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-red-900/30 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">MÉTODO ANTIGO</span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-0.5">
                    O Caderno e Planilhas Soltas
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <TrendingDown className="w-5 h-5" />
                </div>
              </div>

              {/* List */}
              <ul className="space-y-4">
                {painPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-snug">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{item.caderno}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Negative Impact Tag */}
            <div className="mt-8 p-4 rounded-xl bg-red-950/30 border border-red-900/50 text-xs text-red-300 flex items-center gap-3">
              <FileWarning className="w-5 h-5 text-red-400 shrink-0" />
              <span>
                <strong>Resultado:</strong> Retrabalho constante, estresse no curral e dinheiro deixado na mesa na hora do abate.
              </span>
            </div>
          </div>

          {/* Column B: SmartMoo */}
          <div className="rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-emerald-950/40 border-2 border-emerald-500/50 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-950/50 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-500/20 blur-3xl pointer-events-none" />
            
            {/* Recommended Badge */}
            <div className="absolute top-4 right-4 hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Alta Eficiência</span>
            </div>

            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-emerald-900/40 pb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">PECUÁRIA MODERNA</span>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 mt-0.5">
                    Com o SmartMoo
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* List */}
              <ul className="space-y-4">
                {painPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-100 text-sm sm:text-base font-medium leading-snug">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item.smartmoo}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Positive Impact Tag */}
            <div className="mt-8 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-xs text-emerald-200 flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                <strong>Resultado:</strong> Manejo 5x mais rápido no curral, equipe engajada e margem líquida por arroba na ponta do lápis.
              </span>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#demonstracao"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition-all"
          >
            <span>Substituir o Caderno pelo SmartMoo Hoje Mesmo</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
