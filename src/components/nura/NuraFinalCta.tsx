import { contact, whatsappLink } from "@/lib/site-data";

export default function NuraFinalCta() {
  return (
    <section className="py-20 lg:py-24 bg-ink-900">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Migre seu atendimento para o Nura sem pagar as taxas dos CRMs
          tradicionais.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={whatsappLink("Olá! Quero migrar meu atendimento para o Nura.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
          >
            Falar no WhatsApp
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-3.5 text-sm font-semibold text-white hover:border-white/40 transition-colors"
          >
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
