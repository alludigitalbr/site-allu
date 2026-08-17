import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NuraSubNav from "@/components/nura/NuraSubNav";
import { whatsappLink } from "@/lib/site-data";
import { whatsappOferece } from "@/lib/nura-pages-data";

export const metadata: Metadata = {
  title: "CRM para WhatsApp — Nura",
  description:
    "Nura CRM transforma o WhatsApp em uma operação organizada de atendimento, vendas e automação — para equipes que vendem e atendem pelo WhatsApp.",
};

export default function NuraCrmWhatsappPage() {
  return (
    <>
      <Header />
      <NuraSubNav />
      <main className="flex-1">
        <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              CRM para WhatsApp
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Vender pelo WhatsApp sem organização vira caos
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">
              Conversa se perde, follow-up é esquecido, e ninguém enxerga o funil de vendas até o
              mês fechar no vermelho. O Nura centraliza comunicação, leads, funil e automações num
              único lugar.
            </p>
            <a
              href={whatsappLink("Olá! Quero organizar meu atendimento no WhatsApp com o Nura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Organizar meu atendimento
            </a>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              O que o Nura entrega
            </h2>
            <ul className="mt-8 space-y-3">
              {whatsappOferece.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-ink-700 dark:text-ink-200">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Pra quem é
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Empresas que vendem e atendem pelo WhatsApp
            </h2>
            <p className="mt-4 text-ink-500 dark:text-ink-400">
              Se sua equipe já não consegue acompanhar as conversas em um WhatsApp comum, o Nura
              organiza atendimento, funil e automações sem exigir que você troque de número.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Chega de perder venda por desorganização
            </h2>
            <a
              href={whatsappLink("Olá! Quero saber mais sobre o CRM para WhatsApp do Nura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
