import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alludigital.com.br"),
  title: "Allu Digital - Inovação em Agentes de IA para o seu Negócio",
  description:
    "Especialistas em desenvolvimento de Agentes de IA e soluções no-code/low-code para empresas B2B. Transforme seu negócio com inteligência artificial.",
  keywords: [
    "agentes de IA",
    "inteligência artificial",
    "automação",
    "B2B",
    "no-code",
    "low-code",
    "consultoria IA",
    "portfólio de projetos de IA",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Allu Digital - Inovação em Agentes de IA para o seu Negócio",
    description:
      "Especialistas em desenvolvimento de Agentes de IA e soluções no-code/low-code para empresas B2B.",
    url: "https://alludigital.com.br",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-ink-900 dark:text-white bg-white dark:bg-ink-950 transition-colors">
        {children}
      </body>
    </html>
  );
}
