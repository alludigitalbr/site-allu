export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; rows: [string, string][] };

function renderBold(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-ink-900 dark:text-white">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function LegalContent({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-5 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="pt-6 text-xl font-bold text-ink-900 dark:text-white first:pt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "p") {
          return <p key={i}>{renderBold(block.text)}</p>;
        }
        if (block.type === "quote") {
          return (
            <p
              key={i}
              className="border-l-4 border-brand-500 bg-surface-muted rounded-r-lg py-3 pl-4 text-ink-700 dark:text-ink-200"
            >
              {renderBold(block.text)}
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5">
              {block.items.map((item, j) => (
                <li key={j}>{renderBold(item)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "table") {
          return (
            <div key={i} className="overflow-x-auto rounded-lg border border-border-subtle">
              <table className="w-full text-left text-sm">
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j} className="border-b border-border-subtle last:border-0">
                      <td className="px-4 py-2.5 font-semibold text-ink-900 dark:text-white w-40 align-top">
                        {row[0]}
                      </td>
                      <td className="px-4 py-2.5">{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}
