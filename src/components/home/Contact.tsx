"use client";

import { FormEvent } from "react";
import { contact, whatsappLink } from "@/lib/site-data";

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const subject = data.get("subject")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    const text = [
      `Olá! Meu nome é ${name} (${email}).`,
      subject && `Assunto: ${subject}`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
              Contato
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ink-900 dark:text-white">
              Estamos prontos para transformar seus desafios em oportunidades com o poder da
              Inteligência Artificial.
            </h2>

            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="font-semibold text-ink-900 dark:text-white">WhatsApp</dt>
                <dd>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    {contact.whatsappDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-900 dark:text-white">E-mail</dt>
                <dd>
                  <a href={`mailto:${contact.email}`} className="text-brand-600 hover:underline">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-900 dark:text-white">Instagram</dt>
                <dd>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    {contact.instagramHandle}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-900 dark:text-white">LinkedIn</dt>
                <dd>
                  <a
                    href={contact.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:underline"
                  >
                    Marcelo Viviani Junior
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink-900 dark:text-white">Horário</dt>
                <dd className="text-ink-500 dark:text-ink-400">{contact.hours}</dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-ink-200 dark:border-ink-800 p-7 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-ink-900 dark:text-white mb-1.5">
                Nome
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-ink-200 dark:border-ink-800 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink-900 dark:text-white mb-1.5">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-ink-200 dark:border-ink-800 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-ink-900 dark:text-white mb-1.5">
                Assunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-lg border border-ink-200 dark:border-ink-800 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-ink-900 dark:text-white mb-1.5">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-lg border border-ink-200 dark:border-ink-800 px-4 py-2.5 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-600/30 hover:-translate-y-0.5 transition-transform"
            >
              Enviar pelo WhatsApp
            </button>
            <p className="text-xs text-ink-500 dark:text-ink-400">
              Ao enviar, abrimos o WhatsApp com sua mensagem pronta pra falar direto com o time.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
