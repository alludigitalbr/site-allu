import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NuraSubNav from "@/components/nura/NuraSubNav";
import NuraHero from "@/components/nura/NuraHero";
import NuraNaoPrecisaMaisFazer from "@/components/nura/NuraNaoPrecisaMaisFazer";
import NuraFeatures from "@/components/nura/NuraFeatures";
import NuraDashboards from "@/components/nura/NuraDashboards";
import NuraPricing from "@/components/nura/NuraPricing";
import NuraDifferentiators from "@/components/nura/NuraDifferentiators";
import NuraFinalCta from "@/components/nura/NuraFinalCta";

export const metadata: Metadata = {
  title: "Nura - Atendimento WhatsApp, Instagram e IA centralizados",
  description:
    "CRM de atendimento com WhatsApp, Instagram e IA integrados, organização por tags e filas, e aceita customizações — a partir de R$350/mês.",
};

export default function NuraPage() {
  return (
    <>
      <Header />
      <NuraSubNav />
      <main className="flex-1">
        <NuraHero />
        <NuraNaoPrecisaMaisFazer />
        <NuraFeatures />
        <NuraDashboards />
        <NuraPricing />
        <NuraDifferentiators />
        <NuraFinalCta />
      </main>
      <Footer />
    </>
  );
}
