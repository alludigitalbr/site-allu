import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NuraSubNav from "@/components/nura/NuraSubNav";
import NuraFaq from "@/components/nura/NuraFaq";
import { whatsappLink } from "@/lib/site-data";
import { recursosCategorias, recursosFaq } from "@/lib/nura-pages-data";

export const metadata: Metadata = {
  title: "Recursos do Nura CRM — Todas as funcionalidades",
  description:
    "Inbox unificada, canais, CRM e vendas, automações, agendamento, campanhas, IA, relatórios e gestão — todos os recursos do Nura CRM em um só lugar.",
};

export default function NuraRecursosPage() {
  return (
    <>
      <Header />
      <NuraSubNav />
      <main className="flex-1">
        <section className="relative pt-16 pb-16 lg:pt-20 lg:pb-20 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Recursos
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Todos os recursos do Nura CRM
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">
              Atendimento, canais, funil de vendas, automações, agendamento, campanhas, IA e
              relatórios — tudo reunido em uma única plataforma.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recursosCategorias.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
                >
                  <h3 className="font-semibold text-ink-900 dark:text-white">{cat.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Quer ver os valores?
            </h2>
            <p className="mt-3 text-ink-500 dark:text-ink-400">
              Planos a partir de R$350/mês, sem taxas escondidas.
            </p>
            <Link
              href="/nura#planos"
              className="mt-6 inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Ver planos
            </Link>
          </div>
        </section>

        <NuraFaq items={recursosFaq} />

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Pronto pra organizar seu atendimento?
            </h2>
            <a
              href={whatsappLink("Olá! Quero conhecer os recursos do Nura em detalhes.")}
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
