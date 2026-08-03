import Image from "next/image";
import { whatsappLink } from "@/lib/site-data";

export default function NuraHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950"
      />

      <div className="mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/brand/nura/nura-logo.svg"
              alt="Nura"
              width={340}
              height={136}
              priority
              className="h-32 sm:h-40 w-auto block dark:hidden"
            />
            <Image
              src="/images/brand/nura/nura-logo-dark.svg"
              alt="Nura"
              width={340}
              height={136}
              priority
              className="h-32 sm:h-40 w-auto hidden dark:block"
            />
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-white">
              Muito mais que um CRM. <span className="gradient-brand-text">Atendimento, IA e organização</span> em um só lugar.
            </h1>
            <p className="mt-6 text-lg text-ink-500 dark:text-ink-400 max-w-xl">
              WhatsApp, Instagram e Agentes de IA integrados, com organização real de leads por
              tags, filas e carteiras — sem as taxas altas e o suporte lento dos CRMs de mercado.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink("Olá! Gostaria de agendar uma demonstração do Nura.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
              >
                Agendar demonstração
              </a>
              <a
                href="#planos"
                className="inline-flex items-center justify-center rounded-lg border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 px-7 py-3.5 text-sm font-semibold text-ink-900 dark:text-white hover:border-brand-600 hover:text-brand-600 transition-colors"
              >
                Ver planos
              </a>
            </div>
          </div>

          {/* Real product screenshot */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/20 via-accent-500/10 to-transparent blur-2xl"
            />
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-600/10 card-surface">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 border-b border-border-subtle px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
                <span className="ml-3 text-xs font-medium text-ink-500 dark:text-ink-400">
                  crm.chatallu.com.br
                </span>
              </div>
              <Image
                src="/images/brand/nura/kanban-operacional.png"
                alt="Kanban operacional do Nura"
                width={1664}
                height={735}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
