import Link from "next/link";
import { contact } from "@/lib/site-data";
import { SocialLinks, WhatsappIcon } from "@/components/SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/#parcerias" className="hover:text-white transition-colors">
                Parcerias
              </a>
            </li>
            <li>
              <Link href="/servicos/consultoria-ti-ia" className="hover:text-white transition-colors">
                Consultoria de IA
              </Link>
            </li>
            <li>
              <Link href="/servicos/consultoria-desenvolvimento" className="hover:text-white transition-colors">
                Consultoria em Desenvolvimento
              </Link>
            </li>
            <li>
              <Link href="/servicos/infraestrutura-manutencao-rede" className="hover:text-white transition-colors">
                Infraestrutura e Manutenção da Rede
              </Link>
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
                aria-label={`Abrir WhatsApp: ${contact.whatsappDisplay}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <WhatsappIcon className="h-5 w-5 text-[#25D366]" />
                {contact.whatsappDisplay}
              </a>
            </li>
            <li>{contact.hours}</li>
            <li className="pt-2">
              <SocialLinks className="text-ink-200" />
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
