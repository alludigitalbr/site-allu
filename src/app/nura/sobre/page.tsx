import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NuraSubNav from "@/components/nura/NuraSubNav";
import { whatsappLink } from "@/lib/site-data";
import { sobreCompany } from "@/lib/nura-pages-data";

export const metadata: Metadata = {
  title: "Sobre o Nura CRM",
  description:
    "O Nura é um produto desenvolvido no Brasil pela Allu Digital, criado para organizar o atendimento e as vendas que acontecem pelo WhatsApp.",
};

export default function NuraSobrePage() {
  return (
    <>
      <Header />
      <NuraSubNav />
      <main className="flex-1">
        <section className="relative pt-16 pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
          <div aria-hidden className="absolute inset-0 -z-10 gradient-mesh bg-white dark:bg-ink-950" />
          <div className="mx-auto max-w-3xl px-5">
            <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
              Sobre
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Um produto brasileiro, feito pra resolver um problema real
            </h1>
            <p className="mt-6 text-lg text-ink-700 dark:text-ink-200">
              O Nura é um produto desenvolvido no Brasil pela Allu Digital. Nasceu da necessidade
              real de empresas que vendem e atendem pelo WhatsApp e não tinham mais como sustentar
              a operação em conversas soltas, sem visibilidade de funil e sem organização de
              equipe.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Por que o Nura existe
            </h2>
            <p className="mt-4 text-ink-500 dark:text-ink-400">
              Criamos o Nura depois de ver o mesmo problema se repetir em clientes de segmentos
              diferentes: imobiliárias, clínicas, indústria, distribuição — todos com o WhatsApp
              virando o principal canal de vendas e nenhuma ferramenta feita pra organizar isso de
              verdade.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
              Quem está por trás
            </h2>
            <p className="mt-4 text-ink-500 dark:text-ink-400">
              O Nura é desenvolvido e mantido pela Allu Digital, empresa especializada em
              Inteligência Artificial, automação empresarial e desenvolvimento de plataformas
              inteligentes.
            </p>
            <div className="mt-6 rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6 text-sm text-ink-500 dark:text-ink-400">
              <p className="font-semibold text-ink-900 dark:text-white">{sobreCompany.nome}</p>
              <p className="mt-1">CNPJ {sobreCompany.cnpj}</p>
              <p className="mt-1">{sobreCompany.endereco}</p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-ink-900">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Quer conhecer o Nura de perto?
            </h2>
            <a
              href={whatsappLink("Olá! Quero conhecer o Nura e a Allu Digital.")}
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
