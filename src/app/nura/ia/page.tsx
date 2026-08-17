import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NuraSubNav from "@/components/nura/NuraSubNav";
import NuraFaq from "@/components/nura/NuraFaq";
import { whatsappLink } from "@/lib/site-data";
import { iaFeatures, iaModels, iaSecurity, iaFaq } from "@/lib/nura-pages-data";

export const metadata: Metadata = {
  title: "IA do Nura CRM — Resumo, transcrição e apoio ao atendimento",
  description:
    "Conheça a IA do Nura CRM: resumo inteligente de conversas, transcrição de áudio, triagem de leads e Agente Supervisor de Atendimento IA.",
};

export default function NuraIaPage() {
  return (
    <>
      <Header />
      <NuraSubNav />
      <main className="flex-1">
        <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Inteligência artificial
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              IA que apoia sua equipe, sem substituir a conversa
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">
              A IA do Nura resume conversas, transcreve áudios e ajuda o atendente a responder
              mais rápido — sem travar o cliente em menu de opções nem tirar a decisão da sua
              equipe.
            </p>
            <a
              href={whatsappLink("Olá! Quero entender melhor a IA do Nura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Falar com o time
            </a>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              O que a IA do Nura faz
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {iaFeatures.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
                >
                  <h3 className="font-semibold text-ink-900 dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Como funciona
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              IA não é chatbot engessado
            </h2>
            <p className="mt-4 border-l-4 border-brand-500 bg-surface-muted rounded-r-lg py-3 pl-4 text-ink-700 dark:text-ink-200">
              A IA do Nura não trava o cliente em menu de opções. Ela entende o que está sendo
              dito e ajuda o atendente humano a responder mais rápido — não substitui a conversa,
              acelera ela.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Modelos de IA utilizados pelo Nura
            </h2>
            <div className="mt-8 overflow-x-auto rounded-lg border border-ink-200 dark:border-ink-800">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-white dark:bg-ink-900 text-ink-500 dark:text-ink-400 text-xs uppercase tracking-wide">
                    <th className="px-4 py-3 font-semibold">Modelo</th>
                    <th className="px-4 py-3 font-semibold">Uso</th>
                  </tr>
                </thead>
                <tbody>
                  {iaModels.map((m) => (
                    <tr key={m.model} className="border-t border-ink-200 dark:border-ink-800">
                      <td className="px-4 py-3 font-medium text-ink-900 dark:text-white">{m.model}</td>
                      <td className="px-4 py-3 text-ink-500 dark:text-ink-400">{m.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Segurança e responsabilidade
            </h2>
            <ul className="mt-8 space-y-3">
              {iaSecurity.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <NuraFaq items={iaFaq} />

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Quer ver a IA do Nura funcionando na prática?
            </h2>
            <a
              href={whatsappLink("Olá! Quero ver a IA do Nura funcionando na prática.")}
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
