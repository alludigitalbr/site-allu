"use client";

import { useMemo, useState } from "react";
import { nuraPlans, type NuraPlan } from "@/lib/nura-data";
import { whatsappLink } from "@/lib/site-data";

type FlagKey = keyof NuraPlan["flags"];

const flagOptions: { key: FlagKey; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Messenger do Facebook" },
  { key: "carteirizacao", label: "Carteirização" },
  { key: "agendamento", label: "Agendamento" },
  { key: "chatInterno", label: "Chat interno" },
  { key: "kanban", label: "Kanban" },
  { key: "apiExterna", label: "API externa / integrações" },
  { key: "agenteIA", label: "Agente de IA" },
  { key: "flowbuilder", label: "FlowBuilder (fluxos automáticos)" },
  { key: "treinamento", label: "Treinamento da equipe" },
  { key: "acompanhamento", label: "Acompanhamento dedicado" },
];

export default function NuraSimulator() {
  const [usuarios, setUsuarios] = useState(1);
  const [filas, setFilas] = useState(2);
  const [flags, setFlags] = useState<Record<FlagKey, boolean>>({
    instagram: false,
    facebook: false,
    carteirizacao: false,
    agendamento: false,
    chatInterno: false,
    kanban: false,
    apiExterna: false,
    agenteIA: false,
    integracoes: false,
    flowbuilder: false,
    treinamento: false,
    acompanhamento: false,
  });

  function toggleFlag(key: FlagKey) {
    setFlags((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  // Treinamento é um serviço agregado e não trava o plano; acompanhamento dedicado é exclusivo do Pro
  const nonGatingFlags: FlagKey[] = ["treinamento"];

  const recommended = useMemo(() => {
    const orderedPlans = [...nuraPlans].sort((a, b) => a.quotas.usuarios - b.quotas.usuarios);
    const match = orderedPlans.find((plan) => {
      if (plan.quotas.usuarios < usuarios) return false;
      if (plan.quotas.filas < filas) return false;
      return (Object.keys(flags) as FlagKey[]).every(
        (key) => nonGatingFlags.includes(key) || !flags[key] || plan.flags[key]
      );
    });
    return match ?? nuraPlans[nuraPlans.length - 1];
  }, [usuarios, filas, flags]);

  const selectedFeatureLabels = flagOptions.filter((opt) => flags[opt.key]).map((opt) => opt.label);

  const whatsappMessage = `Olá! Fiz a simulação no site e preciso de: ${usuarios} usuário(s), ${filas} fila(s)${
    selectedFeatureLabels.length ? `, com ${selectedFeatureLabels.join(", ")}` : ""
  }. O plano recomendado foi o ${recommended.name} (${recommended.priceLabel}). Podemos conversar?`;

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Simulador
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            Monte sua operação e veja o plano ideal
          </h2>
          <p className="mt-4 text-ink-500 dark:text-ink-400">
            Selecione o que sua equipe precisa — a gente calcula o plano mais barato que atende.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-5 gap-6 items-start">
          {/* controls */}
          <div className="lg:col-span-3 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-6 sm:p-8 space-y-7">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="usuarios" className="text-sm font-semibold text-ink-900 dark:text-white">
                  Usuários
                </label>
                <span className="text-sm font-bold text-brand-600 dark:text-brand-400">{usuarios}</span>
              </div>
              <input
                id="usuarios"
                type="range"
                min={1}
                max={10}
                value={usuarios}
                onChange={(e) => setUsuarios(Number(e.target.value))}
                className="mt-3 w-full accent-brand-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="filas" className="text-sm font-semibold text-ink-900 dark:text-white">
                  Filas de atendimento
                </label>
                <span className="text-sm font-bold text-brand-600 dark:text-brand-400">{filas}</span>
              </div>
              <input
                id="filas"
                type="range"
                min={1}
                max={4}
                value={filas}
                onChange={(e) => setFilas(Number(e.target.value))}
                className="mt-3 w-full accent-brand-500"
              />
            </div>

            <div>
              <span className="text-sm font-semibold text-ink-900 dark:text-white">
                Funcionalidades desejadas
              </span>
              <div className="mt-3 grid sm:grid-cols-2 gap-2.5">
                {flagOptions.map((opt) => (
                  <label
                    key={opt.key}
                    className={`flex items-center gap-2.5 rounded-lg border px-3 py-2.5 text-sm cursor-pointer transition-colors ${
                      flags[opt.key]
                        ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10 text-ink-900 dark:text-white"
                        : "border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:border-brand-400"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={flags[opt.key]}
                      onChange={() => toggleFlag(opt.key)}
                      className="h-4 w-4 accent-brand-500"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* result */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 rounded-2xl gradient-brand p-7 text-white flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Plano recomendado
            </span>
            <span className="mt-2 text-2xl font-bold">{recommended.name}</span>
            <span className="mt-1 text-3xl font-bold">{recommended.priceLabel}</span>

            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• {usuarios} usuário(s), {filas} fila(s)</li>
              {selectedFeatureLabels.length > 0 ? (
                selectedFeatureLabels.map((label) => <li key={label}>• {label}</li>)
              ) : (
                <li>• Nenhuma funcionalidade extra selecionada</li>
              )}
            </ul>

            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-600 hover:-translate-y-0.5 transition-transform"
            >
              Falar com o time sobre esse plano
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
