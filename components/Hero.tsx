"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  TrendingUp, 
  WifiOff, 
  AlertTriangle, 
  Calendar, 
  Scale, 
  DollarSign, 
  ShieldCheck, 
  Activity,
  ChevronUp
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"lote" | "sanidade" | "financeiro">("lote");
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950/80 text-white overflow-hidden">
      {/* Background Agro Pattern & Ambient Lighting */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gestão Pecuária Inteligente e Lucrativa</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight text-white leading-[1.18]">
              O controle da sua fazenda do pasto ao fechamento da arroba —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400">
                sem depender de cadernos e planilhas confusas.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Centralize pesagens, controle sanitário, custos operacionais e taxa de desmame em uma plataforma simples que funciona direto no celular, <strong className="text-white font-semibold">mesmo sem internet no curral</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#demonstracao"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-950/40 hover:shadow-amber-500/25 transform hover:-translate-y-0.5 active:translate-y-0 transition-all text-center"
              >
                <span>Agendar Demonstração Gratuita</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-sm transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>Ver Como Funciona (2 min)</span>
              </button>
            </div>

            {/* Trust Badge / Quick Social Proof */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-slate-200 font-semibold">+180.000</strong> cabeças monitoradas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-slate-200 font-semibold">98%</strong> de retenção de dados no campo</span>
              </div>
              <div className="flex items-center gap-2">
                <WifiOff className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300">100% Offline no Curral</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive App Mockup / Dashboard Preview */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glowing Border */}
              <div className="relative rounded-2xl bg-gradient-to-b from-emerald-500/30 via-slate-800 to-slate-900/90 p-1 shadow-2xl shadow-emerald-950/60 border border-emerald-500/20">
                
                {/* App Screen Window Header */}
                <div className="bg-slate-900/90 rounded-t-xl px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 font-medium">SmartMoo • Fazenda Santa Maria (Recria & Engorda)</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-900/50 border border-emerald-500/30 text-[11px] text-emerald-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Sincronizado</span>
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="bg-slate-950/95 p-4 sm:p-5 rounded-b-xl space-y-4">
                  
                  {/* Top Stats Grid */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    {/* Stat 1: GMD */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-900/40">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>GMD Médio</span>
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                        +1.18 <span className="text-[11px] font-normal text-slate-400">kg/dia</span>
                      </div>
                      <div className="text-[10px] text-emerald-400 flex items-center font-medium mt-0.5">
                        <ChevronUp className="w-3 h-3" /> +14% vs meta
                      </div>
                    </div>

                    {/* Stat 2: Peso Médio */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-900/40">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Peso Médio</span>
                        <Scale className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <div className="text-base sm:text-lg font-bold text-white flex items-baseline gap-1">
                        452 <span className="text-[11px] font-normal text-slate-400">kg</span>
                      </div>
                      <div className="text-[10px] text-amber-300 font-medium mt-0.5">
                        15.06 @ estimada
                      </div>
                    </div>

                    {/* Stat 3: Custo por @ */}
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-900/40">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Custo por @</span>
                        <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <div className="text-base sm:text-lg font-bold text-emerald-400 flex items-baseline gap-0.5">
                        <span className="text-xs">R$</span>138<span className="text-xs">,40</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                        Margem: <span className="text-emerald-300 font-semibold">+42%</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Interactive Mini Card: Lote Nelore Nel-04 */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-800/40 border border-emerald-600/40 flex items-center justify-center text-emerald-300 font-bold text-xs">
                          L-04
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">Lote Nelore Machos 24M</div>
                          <div className="text-xs text-slate-400">Pasto Piquet 12 • 140 Animais</div>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                        Pronto p/ Abate
                      </span>
                    </div>

                    {/* Curva de Ganho Simulado */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Evolução da meta de peso (480 kg)</span>
                        <span className="text-emerald-400 font-semibold">94% concluído</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/5">
                        <div className="h-full bg-gradient-to-r from-emerald-600 to-amber-400 rounded-full w-[94%]" />
                      </div>
                    </div>

                    {/* Timeline de Pesagem Rápida */}
                    <div className="grid grid-cols-3 pt-2 text-center text-xs divide-x divide-white/5 bg-slate-950/60 rounded-lg py-2 border border-white/5">
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Entrada</div>
                        <div className="font-semibold text-slate-300">320 kg</div>
                        <div className="text-[9px] text-slate-500">12/Mai</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Última Pesagem</div>
                        <div className="font-semibold text-amber-400">452 kg</div>
                        <div className="text-[9px] text-slate-500">Hoje (12s/boce)</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase">Projeção Abate</div>
                        <div className="font-semibold text-emerald-400">510 kg (17@)</div>
                        <div className="text-[9px] text-slate-500">em 28 dias</div>
                      </div>
                    </div>
                  </div>

                  {/* Sanitário & Alerta no Curral */}
                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Alerta Sanitário: Febre Aftosa</div>
                        <div className="text-[11px] text-amber-200/80">Lote Bezerros Desmame (Pasto 07) — Vence em 4 dias</div>
                      </div>
                    </div>
                    <button className="px-2.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition-colors shrink-0">
                      Lançar Doses
                    </button>
                  </div>

                </div>

              </div>

              {/* Floating Badge: 100% Offline */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-slate-900/95 border border-emerald-500/40 backdrop-blur-md rounded-xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <WifiOff className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Sem internet no curral?</div>
                  <div className="text-[11px] text-slate-300">Pese e lance manejos 100% offline</div>
                </div>
              </div>

              {/* Floating Badge: Velocidade de Manejo */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900/95 border border-amber-500/40 backdrop-blur-md rounded-xl p-3 shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Pesagem Ultra-Rápida</div>
                  <div className="text-[11px] text-amber-300">Média de 12s por animal</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Demo Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-emerald-900/60 rounded-2xl overflow-hidden shadow-2xl p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Play className="w-5 h-5 text-amber-400 fill-current" />
                Como o SmartMoo Revoluciona o Manejo
              </h3>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-white text-xl font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video bg-slate-950 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-pulse">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">Demonstração Interativa do Sistema</h4>
                <p className="text-xs text-slate-400 max-w-sm">Veja na prática a leitura de brincos, pesagem na balança e cálculo automático de arrobas em menos de 2 minutos.</p>
              </div>
              <a
                href="#demonstracao"
                onClick={() => setVideoModalOpen(false)}
                className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
              >
                Agendar Apresentação Completa ao Vivo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
