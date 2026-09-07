"use client";

import { Star, Quote, MapPin, CheckCircle } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Rodrigo Mendonça",
      role: "Pecuarista de Recria e Engorda",
      farm: "Fazenda Santa Maria",
      location: "Maracaju - MS",
      heads: "1.400 cabeças",
      quote: "Reduzimos pela metade o tempo de pesagem do gado na mangueira. Antes a equipe levava o dia todo e ainda tinha erro de anotação. Hoje em 12 segundos o boi já tá pesado e registrado, sem estresse.",
      highlight: "50% menos tempo na pesagem",
      avatarBg: "from-amber-600 to-amber-800",
      initials: "RM"
    },
    {
      name: "Carlos Eduardo Silveira",
      role: "Produtor e Gestor Agro",
      farm: "Agropecuária Vale Verde",
      location: "Rio Verde - GO",
      heads: "3.200 cabeças (Pasto + Confinamento)",
      quote: "O maior ganho foi saber o custo real da arroba de cada lote antes de negociar com o frigorífico. Nunca mais vendi no escuro. O SmartMoo pagou a mensalidade do ano inteiro no primeiro lote que fechei.",
      highlight: "+R$ 45.000 em assertividade na venda",
      avatarBg: "from-emerald-700 to-emerald-900",
      initials: "CS"
    },
    {
      name: "Marcos Vinicius Rezende",
      role: "Criador de Nelore Mocho & Cruzamento",
      farm: "Fazenda Boa Esperança",
      location: "Água Boa - MT",
      heads: "850 matrizes",
      quote: "O modo offline no curral é perfeito. O sinal 4G na nossa mangueira é zero, e o peão consegue lançar as vacinas e a IATF direto no celular dele sem travar. Quando ele chega na sede com Wi-Fi, já sincroniza tudo pro meu computador.",
      highlight: "100% offline aprovado pelos vaqueiros",
      avatarBg: "from-slate-700 to-slate-900",
      initials: "MR"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Resultados Reais no Campo
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Quem produz e lucra com o{" "}
            <span className="text-emerald-400">SmartMoo</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Veja o depoimento de pecuaristas que transformaram a gestão do rebanho e aumentaram a margem por arroba produzida.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-950/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/40 transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 pointer-events-none" />

              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Highlight metric */}
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  {t.highlight}
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-3.5">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-md border border-white/20 shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">{t.name}</h4>
                  <div className="text-xs text-amber-400 font-medium">{t.farm}</div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{t.location} • {t.heads}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 py-6 border-y border-white/10 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-400 font-medium text-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Suporte Humanizado por WhatsApp com Zootecnistas</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Treinamento Gratuito para a sua Equipe de Campo</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Sem Taxa de Cancelamento ou Fidelidade Abusiva</span>
          </div>
        </div>

      </div>
    </section>
  );
}
