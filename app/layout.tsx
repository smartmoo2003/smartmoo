import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const viewport: Viewport = {
  themeColor: "#1E3A2B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "SmartMoo | Gestão Pecuária Inteligente e Lucrativa",
  description: "O software moderno de gestão para pecuaristas. Centralize pesagens, controle sanitário, custos operacionais e margem por arroba no pasto e no confinamento.",
  keywords: [
    "gestão pecuária",
    "software pecuária de corte",
    "controle de rebanho",
    "manejo de gado",
    "pesagem bovina offline",
    "custo por arroba",
    "SmartMoo",
    "IATF",
    "GMD bovino"
  ],
  authors: [{ name: "SmartMoo" }],
  openGraph: {
    title: "SmartMoo | Gestão Pecuária Inteligente e Lucrativa",
    description: "Do pasto ao fechamento da arroba sem cadernos e planilhas confusas. Funciona 100% offline no curral.",
    url: "https://smartmoo.com.br",
    siteName: "SmartMoo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartMoo | Gestão Pecuária Inteligente",
    description: "Controle da fazenda na palma da mão, mesmo sem internet no curral.",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
