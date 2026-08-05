import { nuraPlans } from "@/lib/nura-data";
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

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {nuraPlans.map((plan) => (
            <div
              key={plan.slug}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.highlight
                  ? "bg-white dark:bg-ink-900 border-2 border-brand-600 shadow-lg shadow-brand-600/10"
                  : "bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full gradient-brand px-3 py-1 text-[11px] font-semibold text-white">
                  Mais popular
                </span>
              )}
              <span className="text-sm font-semibold text-brand-600 dark:text-brand-400">
                {plan.name}
              </span>
              <div className="mt-2 flex items-baseline gap-1">
                <span
                  className={`font-bold text-ink-900 dark:text-white ${
                    plan.price === null ? "text-2xl" : "text-3xl"
                  }`}
                >
                  {plan.priceLabel}
                </span>
              </div>

              <ul className="mt-5 space-y-2 flex-1">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-ink-700 dark:text-ink-200"
                  >
                    <svg
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600"
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
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(`Olá! Quero contratar o plano ${plan.name} do Nura.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.highlight
                    ? "gradient-brand text-white shadow-sm shadow-brand-600/30"
                    : "border border-ink-200 dark:border-ink-800 text-ink-900 dark:text-white hover:border-brand-600 hover:text-brand-600"
                }`}
              >
                {plan.price === null ? "Falar sobre o Pro" : "Falar com o time"}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-ink-500 dark:text-ink-400">
          + taxa de implantação sob consulta em todos os planos.
        </p>
      </div>
    </section>
  );
}
