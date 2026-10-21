import Link from "next/link";
import { partnerModels, services, whatsappLink } from "@/lib/site-data";

const nuraBenefits = [
  "Digitar e atualizar cadastros",
  "Lembrar de fazer follow-up",
  "Ler histórico das conversas",
  "Resolver solicitações financeiras/administrativas direto",
  "Medir satisfação sem pesquisa manual",
  "Delegar conversas manualmente",
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`mt-0.5 h-4 w-4 shrink-0 ${className}`}
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
  );
}

export default function Services() {
  const cardClass =
    "rounded-2xl border border-ink-200 dark:border-ink-800 p-7 hover:border-brand-600 hover:shadow-lg hover:shadow-brand-600/5 transition-all";

  return (
    <section id="servicos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Serviços
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            O que fazemos
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            id="parcerias"
            className="sm:col-span-2 lg:col-span-3 rounded-2xl border border-ink-200 dark:border-ink-800 p-7 lg:p-8"
          >
            <h3 className="text-xl font-semibold text-ink-900 dark:text-white">
              Parcerias com 3 modelos
            </h3>
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-400 max-w-2xl">
              Para agências, consultorias e profissionais que querem oferecer tecnologia, IA e
              automação aos seus clientes sem precisar desenvolver.
            </p>
            <div className="mt-7 grid md:grid-cols-3 gap-5">
              {partnerModels.map((model) => (
                <div
                  key={model.title}
                  className="rounded-xl bg-ink-50 dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                    {model.label}
                  </span>
                  <h4 className="mt-2 font-semibold text-ink-900 dark:text-white">{model.title}</h4>
                  <p className="mt-1 text-sm font-semibold text-brand-600">{model.highlight}</p>
                  <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">{model.description}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-ink-700 dark:text-ink-200">
                    <Check className="text-brand-600" />
                    {model.example}
                  </p>
                </div>
              ))}
            </div>
            <a
              href={whatsappLink("Olá! Quero saber mais sobre o programa de parcerias da Allu Digital.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Quero ser parceiro
            </a>
          </div>

          {services.map((service) => {
            const content = (
              <>
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">{service.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                      <Check className="text-brand-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </>
            );

            return "href" in service && service.href ? (
              <Link key={service.title} href={service.href} className={cardClass}>
                {content}
              </Link>
            ) : (
              <div key={service.title} className={cardClass}>
                {content}
              </div>
            );
          })}

          <Link
            href="/nura"
            className="group sm:col-span-2 lg:col-span-3 rounded-2xl gradient-brand p-7 lg:p-8 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/25 transition-all grid lg:grid-cols-2 gap-8"
          >
            <div className="flex flex-col">
              <span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold w-fit">
                Nura
              </span>
              <h3 className="mt-3 text-xl font-semibold">
                Plataforma de Atendimento do WhatsApp com IA
              </h3>
              <p className="mt-3 text-sm text-white/85">
                WhatsApp, Instagram e Messenger centralizados a partir de R$350/mês
              </p>
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
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Veja o que você e sua equipe não precisam mais fazer!
              </p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {nuraBenefits.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-white/90">
                    <Check />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
