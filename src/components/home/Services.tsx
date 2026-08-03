import Link from "next/link";
import { services } from "@/lib/site-data";

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            Como entregamos os 4 pilares na prática
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-ink-200 dark:border-ink-800 p-7 hover:border-brand-600 hover:shadow-lg hover:shadow-brand-600/5 transition-all"
            >
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">{service.description}</p>
              <ul className="mt-5 space-y-2.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <Link
            href="/nura"
            className="group rounded-2xl gradient-brand p-7 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/25 transition-all flex flex-col"
          >
            <span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold w-fit">
              Produto Allu Digital
            </span>
            <h3 className="mt-3 text-lg font-semibold">Nura — Plataforma de Atendimento com IA</h3>
            <p className="mt-3 text-sm text-white/85">
              WhatsApp, Instagram e Messenger centralizados, com Kanban de atendimento, filas,
              carteiras e Agentes de IA integrados — a partir de R$350/mês.
            </p>
            <ul className="mt-5 space-y-2.5 flex-1">
              {["Atendimento omnichannel", "Automações com IA", "Kanban e organização de leads"].map(
                (feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/90">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0"
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
                )
              )}
            </ul>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
              Conhecer o Nura
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M10.3 3.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4L13.6 10H4a1 1 0 110-2h9.6l-3.3-3.3a1 1 0 010-1.4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
