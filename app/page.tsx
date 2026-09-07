import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Calculator } from "@/components/Calculator";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header / Navbar Fixa */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section (Dobra Principal com Mockup do Dashboard) */}
        <Hero />

        {/* 3. Barra de Dores / Contraste (O Caderno vs. SmartMoo) */}
        <PainPoints />

        {/* 4. Módulos & Recursos Principais (4 Pilares) */}
        <Features />

        {/* 5. Como Funciona (Fluxo em 3 Passos) */}
        <HowItWorks />

        {/* 6. Simulador de Impacto / Calculadora Rápida */}
        <Calculator />

        {/* 7. Prova Social e Depoimentos de Pecuaristas */}
        <Testimonials />

        {/* 8. Seção de FAQ (Perguntas Frequentes) */}
        <FAQ />

        {/* 9. CTA Final (Formulário de Demonstração Gratuita) */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* 10. Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
