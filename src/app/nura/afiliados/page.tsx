import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NuraSubNav from "@/components/nura/NuraSubNav";
import { whatsappLink } from "@/lib/site-data";
import { afiliadosMotivos } from "@/lib/nura-pages-data";

export const metadata: Metadata = {
  title: "Programa de Afiliados — Nura CRM",
  description:
    "Indique o Nura CRM e fique com 100% da mensalidade do primeiro mês por cada venda indicada.",
};

export default function NuraAfiliadosPage() {
  return (
    <>
      <Header />
      <NuraSubNav />
      <main className="flex-1">
        <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Programa de afiliados
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Indique o Nura. Fique com <span className="gradient-brand-text">100% da primeira mensalidade.</span>
            </h1>
            <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">
              Você indica, seu contato assina o Nura, e a mensalidade completa do primeiro mês é
              sua — sem porcentagem dividida, sem letra miúda.
            </p>
            <a
              href={whatsappLink("Olá! Quero ser afiliado do Nura.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Quero ser afiliado
            </a>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <div className="rounded-2xl gradient-brand p-8 text-white text-center">
              <div className="text-5xl font-bold">100%</div>
              <p className="mt-2 text-white/90">
                da mensalidade do primeiro mês, por cada venda indicada
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              Um produto fácil de indicar
            </h2>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {afiliadosMotivos.map((m) => (
                <div
                  key={m.title}
                  className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
                >
                  <h3 className="font-semibold text-ink-900 dark:text-white">{m.title}</h3>
                  <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Como funciona
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                { n: 1, t: "Você indica", d: "Compartilha o Nura com alguém que atende ou vende pelo WhatsApp." },
                { n: 2, t: "Seu contato assina", d: "A pessoa indicada contrata um dos planos do Nura." },
                { n: 3, t: "A comissão cai", d: "Você recebe 100% da mensalidade do primeiro mês dessa venda." },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg gradient-brand text-white font-bold text-sm">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900 dark:text-white">{step.t}</h3>
                    <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Pronto pra começar a indicar?
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappLink("Olá! Quero ser afiliado do Nura.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
              >
                Seja afiliado
              </a>
              <Link
                href="/nura"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/40 transition-colors"
              >
                Conhecer o Nura
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
