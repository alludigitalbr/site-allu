import { nuraFeatureGroups } from "@/lib/nura-data";

export default function NuraFeatures() {
  return (
    <section className="py-20 lg:py-24 bg-ink-50 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Funcionalidades
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
            Tudo que seu time de atendimento precisa
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nuraFeatureGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
            >
              <h3 className="font-semibold text-ink-900 dark:text-white">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-200">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
