import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { whatsappLink } from "@/lib/site-data";
import {
  devBeneficios,
  devCaso,
  devFeatures,
  devIntro,
  devPacoteItens,
  devParaVoceSe,
  devSteps,
} from "@/lib/consultoria-dev-data";

export const metadata: Metadata = {
  title: "Consultoria em Desenvolvimento — Allu Digital",
  description:
    "Seu sistema foi criado com IA e precisa de organização? Estruturamos o código, versionamento com GitHub, CI/CD, deploy em VPS e gestão ágil com Jira. Pacote de 10h por R$1.500.",
  alternates: { canonical: "/servicos/consultoria-desenvolvimento" },
};

function Check() {
  return (
    <svg className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ConsultoriaDesenvolvimentoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Consultoria em Desenvolvimento
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Transforme o sistema criado com IA em um software profissional
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">{devIntro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pacote"
                className="inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
              >
                Ver pacote
              </a>
              <a
                href={whatsappLink("Olá! Quero saber mais sobre a consultoria em desenvolvimento da Allu Digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-900 dark:text-white hover:border-brand-600 hover:text-brand-600 transition-colors"
              >
                Falar com o time
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              Esse serviço é para você se...
            </h2>
            <ul className="mt-8 space-y-4">
              {devParaVoceSe.map((item) => (
                <li key={item} className="flex gap-3 text-ink-700 dark:text-ink-200">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">O que fazemos</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {devFeatures.map((f) => (
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

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">Benefícios</h2>
            <ul className="mt-8 space-y-4">
              {devBeneficios.map((b) => (
                <li key={b} className="flex gap-3 text-ink-700 dark:text-ink-200">
                  <Check />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">Como funciona</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {devSteps.map((s, i) => (
                <div
                  key={s.title}
                  className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
                >
                  <span className="text-xs font-bold text-brand-600">0{i + 1}</span>
                  <h3 className="mt-6 font-semibold text-ink-900 dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pacote" className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950 scroll-mt-20">
          <div className="mx-auto max-w-4xl px-5">
            <div className="rounded-2xl gradient-brand p-8 sm:p-10 text-white">
              <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold">
                Pacote de consultoria
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold">Pacote 10 horas: R$ 1.500</h2>
              <p className="mt-3 text-white/90">
                Horas de consultoria especializada para usar conforme a necessidade do seu projeto:
              </p>
              <ul className="mt-6 space-y-3">
                {devPacoteItens.map((item) => (
                  <li key={item} className="flex gap-3 text-white">
                    <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/85">
                Ideal para começar. Precisa de mais? Horas adicionais podem ser contratadas a
                qualquer momento.
              </p>
              <a
                href={whatsappLink("Olá! Quero o pacote de consultoria em desenvolvimento de 10 horas (R$1.500) da Allu Digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-lg bg-ink-900 px-7 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 transition-transform"
              >
                Quero o pacote
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Caso real
            </span>
            <p className="mt-4 text-lg text-ink-700 dark:text-ink-200">{devCaso}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
