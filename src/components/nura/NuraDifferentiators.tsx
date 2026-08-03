import { nuraDifferentiators } from "@/lib/nura-data";

export default function NuraDifferentiators() {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Diferenciais
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            Por que a Nura e não os concorrentes
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {nuraDifferentiators.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-7 ${
                item.highlight
                  ? "gradient-brand text-white lg:col-span-2"
                  : "border border-ink-200 dark:border-ink-800 text-ink-900 dark:text-white"
              }`}
            >
              <h3 className={`font-semibold ${item.highlight ? "text-white" : "text-ink-900 dark:text-white"}`}>
                {item.title}
              </h3>
              <p className={`mt-2 text-sm ${item.highlight ? "text-white/90" : "text-ink-500 dark:text-ink-400"}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
