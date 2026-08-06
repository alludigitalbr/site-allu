"use client";

import { useMemo, useState } from "react";
import {
  portfolioCases,
  portfolioPillars,
  portfolioStats,
  type PortfolioPillarSlug,
} from "@/lib/site-data";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioPillarSlug | "todos">("todos");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const filteredCases = useMemo(() => {
    if (activeFilter === "todos") return portfolioCases;
    return portfolioCases.filter((c) => c.pillars.includes(activeFilter));
  }, [activeFilter]);

  function toggle(slug: string) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-ink-50 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Portfólio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            {portfolioCases.length} cases reais de agentes de IA e atendimento em produção
          </h2>
          <p className="mt-4 text-ink-500 dark:text-ink-400">
            Organizados pelos 4 pilares de atuação da Allu Digital. Filtre por pilar ou explore
            cada case para ver contexto, abordagem e resultados.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {portfolioStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-4"
            >
              <div className="text-xl font-bold text-brand-600">{stat.value}</div>
              <div className="mt-1 text-xs text-ink-500 dark:text-ink-400 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("todos")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeFilter === "todos"
                ? "gradient-brand text-white"
                : "bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:border-brand-600"
            }`}
          >
            Todos os pilares
          </button>
          {portfolioPillars.map((pillar) => (
            <button
              key={pillar.slug}
              type="button"
              onClick={() => setActiveFilter(pillar.slug)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === pillar.slug
                  ? "gradient-brand text-white"
                  : "bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 text-ink-700 dark:text-ink-200 hover:border-brand-600"
              }`}
            >
              {pillar.title}
            </button>
          ))}
        </div>

        {/* Cases */}
        <div className="mt-8 grid gap-5">
          {filteredCases.map((c) => {
            const isOpen = expanded.has(c.slug);
            return (
              <div
                key={c.slug}
                className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(c.slug)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <div>
                    <h3 className="font-semibold text-ink-900 dark:text-white">{c.title}</h3>
                    {c.client && (
                      <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">Cliente: {c.client}</p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {c.pillars.map((slug) => {
                        const pillar = portfolioPillars.find((p) => p.slug === slug);
                        return (
                          <span
                            key={slug}
                            className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700"
                          >
                            {pillar?.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <svg
                    className={`h-5 w-5 shrink-0 text-ink-500 dark:text-ink-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.2 7.5a1 1 0 011.4 0L10 10.9l3.4-3.4a1 1 0 111.4 1.4l-4.1 4.1a1 1 0 01-1.4 0L5.2 8.9a1 1 0 010-1.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="border-t border-ink-200 dark:border-ink-800 px-6 py-6 space-y-4 text-sm text-ink-700 dark:text-ink-200">
                    {c.context && (
                      <p>
                        <span className="font-semibold text-ink-900 dark:text-white">Contexto: </span>
                        {c.context}
                      </p>
                    )}
                    {c.challenge && (
                      <p>
                        <span className="font-semibold text-ink-900 dark:text-white">Desafio: </span>
                        {c.challenge}
                      </p>
                    )}
                    {c.approach && (
                      <div>
                        <p className="font-semibold text-ink-900 dark:text-white">Abordagem:</p>
                        <ul className="mt-2 space-y-2 list-disc pl-5">
                          {c.approach.map((item) => (
                            <li key={item.label}>
                              <span className="font-medium text-ink-900 dark:text-white">{item.label}: </span>
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {c.approachParagraph && (
                      <p>
                        <span className="font-semibold text-ink-900 dark:text-white">Abordagem: </span>
                        {c.approachParagraph}
                      </p>
                    )}
                    {c.results && (
                      <p>
                        <span className="font-semibold text-ink-900 dark:text-white">Resultados: </span>
                        {c.results}
                      </p>
                    )}
                    {c.tools && c.tools.length > 0 && (
                      <div>
                        <p className="font-semibold text-ink-900 dark:text-white">Ferramentas:</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {c.tools.map((tool) => (
                            <span
                              key={tool}
                              className="rounded-md bg-ink-50 dark:bg-ink-950 border border-ink-200 dark:border-ink-800 px-2.5 py-1 text-xs text-ink-700 dark:text-ink-200"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
