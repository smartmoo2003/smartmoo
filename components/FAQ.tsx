"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one opened by default

  const faqs = [
    {
      question: "O SmartMoo funciona se não tiver internet na fazenda?",
      answer: "Sim, 100%! O aplicativo foi construído pensando na realidade do campo brasileiro. Você pode pesar o gado, aplicar vacinas, registrar trocas de pasto e mortes mesmo sem nenhum sinal de internet ou 4G. Assim que o aparelho se conectar ao Wi-Fi da sede ou captar sinal, todos os dados são sincronizados automaticamente e com total segurança."
    },
    {
      question: "É difícil ensinar o peão ou a equipe da mangueira a mexer?",
      answer: "Absolutamente não. A interface do SmartMoo foi desenhada para ser simples como um aplicativo de mensagens, com botões grandes, números legíveis sob o sol forte e atalhos rápidos de digitação com uma mão só. Além disso, nós oferecemos vídeos de 1 minuto em linguagem simples e treinamento direto para a sua equipe."
    },
    {
      question: "Consigo importar os dados que já tenho nas minhas planilhas de Excel?",
      answer: "Sim! Você não precisa redigitar nada. Nossa equipe de implantação ajuda você a importar sua planilha de rebanho existente (Excel, CSV ou de outros sistemas) diretamente para o SmartMoo em poucos minutos, deixando tudo pronto para o seu próximo manejo."
    },
    {
      question: "Qual o suporte oferecido caso eu tenha dúvidas?",
      answer: "Nosso suporte é direto pelo WhatsApp, feito por especialistas que entendem de pecuária de corte, manejo e zootecnia (não são robôs confusos). Atendemos de segunda a sábado em horário comercial com tempo médio de resposta inferior a 5 minutos."
    },
    {
      question: "Posso testar antes de assinar?",
      answer: "Com certeza! Você pode solicitar uma demonstração guiada gratuita e testar o SmartMoo no seu celular na sua própria fazenda por 14 dias sem compromisso e sem precisar cadastrar cartão de crédito."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-950 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Dúvidas Frequentes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes do{" "}
            <span className="text-amber-400">Homem do Campo</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tire todas as suas dúvidas sobre o funcionamento do SmartMoo na rotina da sua propriedade.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900 border-emerald-500/40 shadow-lg shadow-emerald-950/40"
                    : "bg-slate-900/60 border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-emerald-500/20 text-emerald-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-400">Converse direto com nossa equipe pelo WhatsApp agora mesmo.</p>
          </div>
          <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20SmartMoo"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
