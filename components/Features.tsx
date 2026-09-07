"use client";

import { useState } from "react";
import { 
  Scale, 
  Syringe, 
  Coins, 
  WifiOff, 
  TrendingUp, 
  CalendarCheck, 
  Calculator, 
  RefreshCw,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "manejo",
      title: "Manejo e Pesagem Ágil",
      shortDesc: "Acompanhamento de GMD individual ou por lote, projeção de abate e curva de ganho de peso.",
      icon: Scale,
      color: "emerald",
      badge: "Velocidade na Mangueira",
      details: [
        "Cálculo instantâneo de Ganho Médio Diário (GMD) entre pesagens",
        "Projeção automática da data ideal para envio ao frigorífico",
        "Leitura rápida por brinco visual, chip RFID ou lote agrupado",
        "Alertas visuais de animais refugos ou com curva de peso abaixo da média"
      ],
      metric: {
        value: "12 seg",
        label: "Tempo médio por animal na pesagem"
      }
    },
    {
      id: "sanidade",
      title: "Sanidade e Reprodução (IATF)",
      shortDesc: "Calendário de vacinação com aviso automático, período de carência e controle reprodutivo.",
      icon: Syringe,
      color: "amber",
      badge: "Segurança de Rebanho",
      details: [
        "Controle rigoroso do período de carência de vacinas e vermífugos",
        "Protocolos de IATF e diagnóstico de prenhez com índices de concepção",
        "Histórico veterinário vitalício por animal em caso de auditoria",
        "Notificações automáticas para a equipe de campo das datas de vacina"
      ],
      metric: {
        value: "100%",
        label: "Conformidade sanitária e carência cumprida"
      }
    },
    {
      id: "financeiro",
      title: "Financeiro e Custo por Cabeça",
      shortDesc: "Custo nutricional, desembolso por pasto/confinamento e margem líquida por arroba produzida.",
      icon: Coins,
      color: "emerald",
      badge: "Margem na Ponta do Lápis",
      details: [
        "Apropriação automática de custos de ração, suplemento e pastagem",
        "Custo real por arroba (@) produzida antes de fechar com o frigorífico",
        "Centro de custos dividido por pasto, retiro ou lote em confinamento",
        "DRE zootécnico e financeiro pronto para prestação de contas"
      ],
      metric: {
        value: "R$ 138/@",
        label: "Controle cirúrgico de custo de produção"
      }
    },
    {
      id: "offline",
      title: "Modo Offline no Curral",
      shortDesc: "Faça todos os lançamentos sem sinal 4G. Os dados sincronizam ao conectar no Wi-Fi da sede.",
      icon: WifiOff,
      color: "amber",
      badge: "Sem Depender de 4G",
      details: [
        "Lançamento de pesagens, trocas de pasto e mortes sem internet",
        "Banco de dados local no aparelho sem travamentos nem perdas",
        "Sincronização automática em segundo plano quando achar rede Wi-Fi",
        "Compatível com celulares Android e iPhone de qualquer modelo"
      ],
      metric: {
        value: "0 falhas",
        label: "Perda zero de dados no campo"
      }
    }
  ];

  return (
    <section id="recursos" className="py-20 sm:py-28 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Tecnologia Feita para a Realidade da Fazenda
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Tudo o que sua pecuária precisa em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              4 pilares fundamentais
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Elimine a burocracia e tenha clareza zootécnica e financeira no dia a dia da fazenda.
          </p>
        </div>

        {/* Pillar Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isHovered = activeTab === index;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`group rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                  isHovered
                    ? "bg-slate-900 border-emerald-500/50 shadow-xl shadow-emerald-950/60 -translate-y-1.5"
                    : "bg-slate-900/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600/20 to-emerald-800/40 border border-emerald-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-3 border-t border-white/10">
                    {pillar.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metric Bottom Box */}
                <div className="mt-6 pt-4 border-t border-white/5 bg-slate-950/60 rounded-xl p-3 border border-white/5">
                  <div className="text-lg font-extrabold text-amber-400">
                    {pillar.metric.value}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {pillar.metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-emerald-900/60 via-slate-900 to-slate-900 border border-emerald-500/30 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Quer ver como esses módulos funcionam no seu rebanho?</h4>
            <p className="text-xs sm:text-sm text-slate-300">Nossos consultores montam uma simulação personalizada para a sua fazenda.</p>
          </div>
          <a
            href="#demonstracao"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all"
          >
            <span>Ver Demonstração Prática</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
