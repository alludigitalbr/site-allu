import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { whatsappLink } from "@/lib/site-data";
import { suporteFeatures, suporteBeneficios } from "@/lib/infra-suporte-data";

export const metadata: Metadata = {
  title: "Suporte e Manutenção — Allu Digital",
  description:
    "Suporte técnico dedicado, manutenção preventiva e corretiva, monitoramento contínuo e consultoria técnica para manter sua operação de TI sempre no ar.",
};

export default function SuporteManutencaoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Suporte e manutenção
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Sua operação de TI sempre no ar
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">
              Suporte técnico contínuo e manutenção preventiva que resolvem problema rápido e
              evitam que ele volte a acontecer — sem depender de sorte pra sua infraestrutura
              continuar funcionando.
            </p>
            <a
              href={whatsappLink("Olá! Quero saber mais sobre suporte e manutenção com a Allu Digital.")}
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
              {suporteFeatures.map((f) => (
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
              {suporteBeneficios.map((b) => (
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
              Mantemos a rede e o SAC da Tokai em operação: manutenção da infraestrutura para 35
              máquinas e um dashboard operacional com visibilidade total do funil de atendimento —
              161 atendimentos por mês monitorados em tempo real.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Sua TI merece suporte de verdade
            </h2>
            <a
              href={whatsappLink("Olá! Quero saber mais sobre planos de suporte e manutenção.")}
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
