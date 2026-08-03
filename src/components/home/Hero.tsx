import { heroStats } from "@/lib/site-data";

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950"
      />

      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-ink-200 dark:border-ink-800 bg-white/70 dark:bg-ink-900/70 px-3.5 py-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400">
            Agentes de IA em produção, não em promessa
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-white">
            A Inteligência Artificial que realmente <span className="gradient-brand-text">trabalha pela sua empresa</span>
          </h1>
          <p className="mt-6 text-lg text-ink-500 dark:text-ink-400 max-w-2xl">
            Para donos de empresas de pequeno e médio porte que ainda dependem de atendimento,
            cobrança, triagem ou análise de documentos feitos manualmente — se o processo segue um
            padrão repetitivo, ele pode ser automatizado. A Allu Digital projeta e implanta agentes
            de IA que assumem essas tarefas, com a arquitetura, o time e o produto necessários para
            sustentar a operação em produção.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Fale Conosco
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-900 dark:text-white hover:border-brand-600 hover:text-brand-600 transition-colors"
            >
              Ver Portfólio
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-brand-600 pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-ink-900 dark:text-white">{stat.value}</dd>
                <dd className="text-sm text-ink-500 dark:text-ink-400 mt-1">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
