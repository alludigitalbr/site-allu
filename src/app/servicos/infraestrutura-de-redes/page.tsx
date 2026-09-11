import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { whatsappLink } from "@/lib/site-data";
import { infraFeatures, infraBeneficios } from "@/lib/infra-suporte-data";

export const metadata: Metadata = {
  title: "Infraestrutura de Redes — Allu Digital",
  description:
    "Cabeamento estruturado, redes wi-fi corporativas, organização de rack e servidores. Infraestrutura de rede projetada para durar e escalar com sua empresa.",
};

export default function InfraestruturaDeRedesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Infraestrutura de redes
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Rede sólida é a base de qualquer operação que não pode parar
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">
              Projetamos e implantamos infraestrutura de rede — cabeamento, wi-fi corporativo,
              organização de rack e servidores — pensada para performance, segurança e
              crescimento, não só para funcionar no dia da instalação.
            </p>
            <a
              href={whatsappLink("Olá! Quero saber mais sobre infraestrutura de redes com a Allu Digital.")}
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
              O que fazemos
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {infraFeatures.map((f) => (
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
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              Benefícios
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {infraBeneficios.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-ink-900 dark:text-white">{b.title}</h3>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Case real
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Tokai — instrumentos musicais
            </h2>
            <p className="mt-4 text-ink-500 dark:text-ink-400">
              Estruturamos e mantemos a rede da Tokai: servidor Linux com Samba configurado para
              atender 35 máquinas, com organização de infraestrutura que sustenta o dia a dia da
              operação sem depender de um técnico presencial constante.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Sua rede está pronta pra crescer com a empresa?
            </h2>
            <a
              href={whatsappLink("Olá! Quero um diagnóstico de infraestrutura de rede pra minha empresa.")}
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
