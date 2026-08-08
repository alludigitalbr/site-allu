import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LegalContent from "@/components/legal/LegalContent";
import { legalMeta, privacyBlocks } from "@/lib/legal-data";

export const metadata: Metadata = {
  title: "Política de Privacidade — Nura",
  description: "Política de Privacidade da plataforma Nura, operada pela Allu Digital.",
};

export default function PrivacidadePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="mx-auto max-w-3xl px-5">
            <Link
              href="/nura"
              className="text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
            >
              ← Voltar para o Nura
            </Link>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              Política de Privacidade
            </h1>
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
              Última atualização: {legalMeta.lastUpdated} · Versão {legalMeta.version}
            </p>

            <div className="mt-10">
              <LegalContent blocks={privacyBlocks} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
