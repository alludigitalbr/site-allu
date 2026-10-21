export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950"
      />

      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-white">
            A Inteligência Artificial que realmente <span className="gradient-brand-text">trabalha pela sua empresa</span>
          </h1>
          <p className="mt-6 text-lg text-ink-500 dark:text-ink-400 max-w-2xl">
            Para empresas que querem melhorar a eficiência, identificar oportunidades de
            automação e melhorar os processos de atendimento, financeiro, SAC ou comercial com IA.
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
        </div>
      </div>
    </section>
  );
}
