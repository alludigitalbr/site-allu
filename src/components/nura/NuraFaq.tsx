export default function NuraFaq({
  title = "Perguntas frequentes",
  items,
}: {
  title?: string;
  items: { q: string; a: string }[];
}) {
  return (
    <section className="py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">{title}</h2>
        <div className="mt-8 divide-y divide-ink-200 dark:divide-ink-800 border-t border-b border-ink-200 dark:border-ink-800">
          {items.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900 dark:text-white">
                {item.q}
                <svg
                  className="h-4 w-4 shrink-0 text-ink-400 transition-transform group-open:rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
              </summary>
              <p className="mt-2.5 text-sm text-ink-500 dark:text-ink-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
