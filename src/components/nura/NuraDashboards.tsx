import Image from "next/image";

export default function NuraDashboards() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Dashboards
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            Indicadores em tempo real, sem planilha
          </h2>
          <p className="mt-4 text-ink-500 dark:text-ink-400">
            Atendimentos, tempo de resposta, satisfação e volume por canal — acompanhados ao vivo
            direto no Nura.
          </p>
        </div>

        <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-600/10 card-surface">
          <div className="flex items-center gap-1.5 border-b border-border-subtle px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-200 dark:bg-ink-700" />
            <span className="ml-3 text-xs font-medium text-ink-500 dark:text-ink-400">
              crm.chatallu.com.br
            </span>
          </div>
          <Image
            src="/images/brand/nura/dashboard-indicadores.png"
            alt="Dashboard de indicadores do Nura"
            width={1669}
            height={811}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
