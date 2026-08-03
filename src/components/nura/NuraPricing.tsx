import { nuraPricing } from "@/lib/nura-data";
import { whatsappLink } from "@/lib/site-data";

export default function NuraPricing() {
  return (
    <section id="planos" className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Planos e preços
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            Comece organizando seu atendimento
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl bg-white dark:bg-ink-900 border-2 border-brand-600 p-8">
            <span className="text-sm font-semibold text-brand-600">Plano de entrada</span>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-ink-900 dark:text-white">{nuraPricing.price}</span>
            </div>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{nuraPricing.implantationNote}</p>
            <ul className="mt-6 space-y-2.5">
              {nuraPricing.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
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
            <a
              href={whatsappLink(
                "Olá! Quero contratar o plano de entrada do Nura."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 hover:-translate-y-0.5 transition-transform"
            >
              Falar com o time
            </a>
          </div>

          <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-8 flex flex-col">
            <span className="text-sm font-semibold text-ink-900 dark:text-white">
              Precisa de mais? Planos maiores e Agente de IA personalizado
            </span>
            <p className="mt-3 text-sm text-ink-500 dark:text-ink-400 flex-1">{nuraPricing.customNote}</p>
            <a
              href={whatsappLink(
                "Olá! Quero saber mais sobre planos maiores e Agente de IA personalizado integrado ao Nura."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 px-6 py-3 text-sm font-semibold text-ink-900 dark:text-white hover:border-brand-600 hover:text-brand-600 transition-colors"
            >
              Falar sobre customização
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
