import { problemPillars, values } from "@/lib/site-data";

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-ink-50 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Sobre Nós
          </span>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-ink-900 dark:text-white leading-snug">
            Para donos de empresas de pequeno e médio porte que ainda dependem de processos
            manuais e repetitivos — atendimento, cobrança, triagem, análise de documentos — a Allu
            Digital projeta e implanta agentes de IA que assumem essas tarefas, com a arquitetura,
            o time e o produto necessários para sustentar a operação em produção.
          </p>
          <p className="mt-5 text-ink-500 dark:text-ink-400">
            Se o processo segue um padrão, ele pode ser automatizado. Com anos de experiência no
            mercado de tecnologia e um profundo entendimento das dinâmicas B2B, a Allu Digital
            traduz as inovações da IA em soluções práticas e mensuráveis — não em promessas
            abstratas.
          </p>
          <p className="mt-5 inline-flex items-center rounded-lg border-l-4 border-brand-500 bg-white dark:bg-ink-900 pl-4 pr-5 py-3 text-base font-semibold text-ink-900 dark:text-white">
            Aquilo que você não mede, você não gerencia.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
            >
              <h3 className="font-semibold text-ink-900 dark:text-white">{value.title}</h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-ink-900 dark:text-white">O que a Allu resolve</h3>
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {problemPillars.map((pillar, i) => (
              <div key={pillar.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-brand text-white font-bold">
                  {i + 1}
                </span>
                <div>
                  <h4 className="font-semibold text-ink-900 dark:text-white">{pillar.title}</h4>
                  <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
