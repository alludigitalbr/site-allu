import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { whatsappLink } from "@/lib/site-data";
import {
  infraFeatures,
  suporteBeneficios,
  suporteFeatures,
  suporteIntro,
  suporteModalidades,
  suporteParaQuem,
  suporteSteps,
} from "@/lib/infra-suporte-data";

export const metadata: Metadata = {
  title: "Infraestrutura e Manutenção da Rede de Computadores — Allu Digital",
  description:
    "Cabeamento estruturado, redes wi-fi, servidores, VPN, backup, suporte técnico remoto e presencial e manutenção preventiva e corretiva. Avulso ou contrato mensal.",
  alternates: { canonical: "/servicos/infraestrutura-manutencao-rede" },
};

const infraGroup = infraFeatures.filter((f) => f.title !== "Instalação e gestão de servidores");

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

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6">
      <h4 className="font-semibold text-ink-900 dark:text-white">{title}</h4>
      <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{description}</p>
    </div>
  );
}

export default function InfraestruturaManutencaoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Infraestrutura e manutenção
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Infraestrutura e Manutenção da Rede de Computadores
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">{suporteIntro}</p>
            <a
              href={whatsappLink("Olá! Quero saber mais sobre infraestrutura e manutenção da rede de computadores com a Allu Digital.")}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">O que oferecemos</h2>

            <h3 className="mt-10 text-sm font-semibold text-brand-600 uppercase tracking-wide">
              Infraestrutura de rede
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {infraGroup.map((f) => (
                <FeatureCard key={f.title} title={f.title} description={f.description} />
              ))}
            </div>

            <h3 className="mt-12 text-sm font-semibold text-brand-600 uppercase tracking-wide">
              Suporte e manutenção
            </h3>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suporteFeatures.map((f) => (
                <FeatureCard key={f.title} title={f.title} description={f.description} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">Benefícios</h2>
              <ul className="mt-8 space-y-4">
                {suporteBeneficios.map((b) => (
                  <li key={b} className="flex gap-3 text-ink-700 dark:text-ink-200">
                    <Check />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">Para quem é</h2>
              <p className="mt-8 text-ink-500 dark:text-ink-400">{suporteParaQuem}</p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              Modalidades de atendimento
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {suporteModalidades.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-7"
                >
                  <h3 className="text-xl font-semibold text-ink-900 dark:text-white">{m.title}</h3>
                  <p className="mt-3 text-sm text-ink-500 dark:text-ink-400">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">Como funciona</h2>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {suporteSteps.map((s, i) => (
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

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Case real
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Tokai — instrumentos musicais
            </h2>
            <p className="mt-4 text-ink-500 dark:text-ink-400">
              Estruturamos e mantemos a rede da Tokai: servidor Linux com Samba configurado e VPN
              para atender 35 máquinas, com organização de infraestrutura que sustenta o dia a dia
              da operação, suporte dedicado.
            </p>
            <p className="mt-4 text-ink-500 dark:text-ink-400">
              Mantemos a infraestrutura e a rede de computadores da Tokai — mais de 35 máquinas,
              servidores, wi-fi, backup, cloud e etc.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Sua rede e sua TI merecem suporte de verdade
            </h2>
            <a
              href={whatsappLink("Olá! Quero saber mais sobre infraestrutura, suporte e manutenção de TI.")}
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
