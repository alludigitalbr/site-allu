import Link from "next/link";
import { contact } from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/#servicos" className="hover:text-white transition-colors">
                Agentes de IA
              </a>
            </li>
            <li>
              <a href="/#servicos" className="hover:text-white transition-colors">
                Consultoria PO
              </a>
            </li>
            <li>
              <a href="/#servicos" className="hover:text-white transition-colors">
                Automações
              </a>
            </li>
            <li>
              <Link href="/nura" className="hover:text-white transition-colors">
                Plataforma Nura
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/#sobre" className="hover:text-white transition-colors">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="hover:text-white transition-colors">
                Portfólio
              </a>
            </li>
            <li>
              <a href="/#contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contato</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-white transition-colors"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>{contact.hours}</li>
            <li className="flex gap-4 pt-1">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-400">
          <p>© {year} Allu Digital. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link href="/nura/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/nura/termos" className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
