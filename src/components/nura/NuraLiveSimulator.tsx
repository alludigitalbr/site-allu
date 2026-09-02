"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { from: "client" | "ai"; text: string };

type Step = {
  msg?: Msg;
  typing?: "client" | "ai";
  fields?: Partial<typeof emptyFields>;
  delay: number;
};

const emptyFields = {
  nome: "",
  email: "",
  interesse: "",
  estagio: "",
};

const steps: Step[] = [
  { typing: "client", delay: 900 },
  { msg: { from: "client", text: "Oi! Vi o anúncio de vocês, queria entender melhor o produto." }, delay: 1100 },
  { fields: { nome: "Ana Paula" }, delay: 900 },
  { typing: "ai", delay: 800 },
  { msg: { from: "ai", text: "Oi Ana! Claro 🙂 me passa seu e-mail que te envio mais detalhes." }, delay: 1100 },
  { typing: "client", delay: 900 },
  { msg: { from: "client", text: "ana.paula@gmail.com — quero entender os planos e preços" }, delay: 1200 },
  { fields: { email: "ana.paula@gmail.com", interesse: "Planos e preços" }, delay: 1000 },
  { fields: { estagio: "Qualificação" }, delay: 1000 },
  { typing: "ai", delay: 800 },
  { msg: { from: "ai", text: "Perfeito! Vou te passar os valores certinho, um momento 👍" }, delay: 1200 },
  { fields: { estagio: "Proposta enviada" }, delay: 1600 },
  { delay: 2200 }, // pause before reset
];

export default function NuraLiveSimulator() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState<"client" | "ai" | null>(null);
  const [fields, setFields] = useState({ ...emptyFields });
  const [flash, setFlash] = useState<string | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion.current) {
      setMessages(steps.filter((s) => s.msg).map((s) => s.msg as Msg));
      setFields({
        nome: "Ana Paula",
        email: "ana.paula@gmail.com",
        interesse: "Planos e preços",
        estagio: "Proposta enviada",
      });
      return;
    }

    let cancelled = false;
    let i = 0;

    function reset() {
      setMessages([]);
      setFields({ ...emptyFields });
      setTyping(null);
      setFlash(null);
      i = 0;
    }

    function runStep() {
      if (cancelled) return;
      const step = steps[i];
      if (!step) {
        reset();
        i = 0;
        setTimeout(runStep, 400);
        return;
      }

      setTyping(step.typing ?? null);
      if (step.msg) {
        setMessages((prev) => [...prev, step.msg as Msg]);
        setTyping(null);
      }
      if (step.fields) {
        setFields((prev) => ({ ...prev, ...step.fields }));
        const key = Object.keys(step.fields)[0];
        setFlash(key);
        setTimeout(() => setFlash(null), 900);
      }

      i += 1;
      setTimeout(runStep, step.delay);
    }

    const start = setTimeout(runStep, 600);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, []);

  const fieldRows: { key: keyof typeof emptyFields; label: string }[] = [
    { key: "nome", label: "Nome" },
    { key: "email", label: "E-mail" },
    { key: "interesse", label: "Interesse" },
    { key: "estagio", label: "Estágio do funil" },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 uppercase tracking-wide">
            Veja a IA em ação
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            Enquanto o cliente conversa, o cadastro se preenche sozinho
          </h2>
          <p className="mt-4 text-ink-500 dark:text-ink-400">
            Simulação de como a IA do Nura lê uma conversa real de WhatsApp e atualiza o CRM em
            tempo real — sem ninguém digitando nada.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-stretch">
          {/* WhatsApp chat */}
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-brand-600/5 card-surface flex flex-col">
            <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
              <span className="ml-3 flex items-center gap-1.5 text-xs font-medium text-ink-500 dark:text-ink-400">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                WhatsApp — Ana Paula
              </span>
            </div>
            <div className="flex-1 min-h-[280px] p-4 sm:p-5 flex flex-col gap-2.5 justify-end">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`reveal max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                    m.from === "client"
                      ? "self-start rounded-tl-none bg-surface-muted text-ink-700 dark:text-ink-200"
                      : "self-end rounded-tr-none gradient-brand text-white"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {typing && (
                <div
                  className={`flex items-center gap-1 rounded-lg px-3 py-2.5 w-fit ${
                    typing === "client"
                      ? "self-start rounded-tl-none bg-surface-muted"
                      : "self-end rounded-tr-none gradient-brand"
                  }`}
                  aria-hidden
                >
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className={`h-1.5 w-1.5 rounded-full animate-bounce ${
                        typing === "client" ? "bg-ink-400" : "bg-white/80"
                      }`}
                      style={{ animationDelay: `${d * 120}ms` }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CRM card */}
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-brand-600/5 card-surface flex flex-col">
            <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
              <span className="text-xs font-medium text-ink-500 dark:text-ink-400">
                crm.chatallu.com.br — novo lead
              </span>
            </div>
            <div className="flex-1 p-4 sm:p-5 space-y-4">
              {fieldRows.map((row) => (
                <div
                  key={row.key}
                  className={`rounded-lg border px-3.5 py-3 transition-colors duration-500 ${
                    flash === row.key
                      ? "border-brand-500 bg-brand-50 dark:bg-brand-500/10"
                      : "border-border-subtle bg-surface-muted"
                  }`}
                >
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                    {row.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink-900 dark:text-white min-h-[20px]">
                    {fields[row.key] || (
                      <span className="text-ink-300 dark:text-ink-700">— aguardando —</span>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-1 text-xs text-brand-600 dark:text-brand-400">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M10 2a1 1 0 01.894.553l1.382 2.766 3.05.443a1 1 0 01.554 1.706l-2.207 2.152.521 3.037a1 1 0 01-1.451 1.054L10 12.347l-2.723 1.364a1 1 0 01-1.451-1.054l.521-3.037-2.207-2.152a1 1 0 01.554-1.706l3.05-.443L9.106 2.553A1 1 0 0110 2z" />
                </svg>
                Preenchido automaticamente pela IA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
