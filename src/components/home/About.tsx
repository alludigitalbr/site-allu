import { whatsappLink } from "@/lib/site-data";

const whatWeDo = [
  "Mapeamento e redesenho de processos",
  "Automação de tarefas e fluxos de trabalho",
  "Soluções com IA generativa (agentes, assistentes e chatbots treinados com os dados da sua empresa)",
  "Integração entre sistemas, como ERP, CRM e outras ferramentas do dia a dia",
];

const iconProps = {
  className: "h-5 w-5",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const howWeWork = [
  {
    title: "Diagnóstico",
    description: "Mapeamos seus processos e identificamos os gargalos.",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
    ),
  },
  {
    title: "Solução sob medida",
    description: "Desenhamos a automação ideal para a sua realidade.",
    icon: (
      <svg {...iconProps}>
        <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2V16h5v-.1c0-.8.4-1.5 1-2A6 6 0 0012 3z" />
      </svg>
    ),
  },
  {
    title: "Implementação",
    description: "Colocamos tudo para rodar com o mínimo de impacto na rotina.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
      </svg>
    ),
  },
  {
    title: "Acompanhamento",
    description: "Medimos os resultados e ajustamos para gerar eficiência real.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M14 7h7v7" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-ink-50 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Sobre Nós
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-900 dark:text-white leading-tight">
            Mapeamos como sua empresa funciona hoje e transformamos operações manuais em fluxos
            inteligentes, integrados e escaláveis.
          </h2>
          <p className="mt-5 text-lg text-ink-500 dark:text-ink-400">
            Somos uma consultoria de Inteligência Artificial e automação de processos.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-x-14 gap-y-12">
          <div>
            <h3 className="text-xl font-bold text-ink-900 dark:text-white">O que fazemos</h3>
            <ul className="mt-5 space-y-3">
              {whatWeDo.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700 dark:text-ink-200">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-brand-600"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-ink-900 dark:text-white">Nossa experiência</h3>
            <p className="mt-5 text-ink-500 dark:text-ink-400">
              A Allu Digital foi fundada por Marcelo Viviani Junior, que tem mais de 20 anos de
              experiência em TI. Nesse período, ele atuou em projetos para grandes empresas dos
              setores financeiro, de meios de pagamento e de tecnologia, e liderou times de
              Product Owners. Hoje ele conduz a arquitetura das soluções de automação e IA da Allu
              Digital, junto a um time de desenvolvedores.
            </p>
            <p className="mt-4 text-ink-500 dark:text-ink-400">
              Em 2 anos, já entregamos projetos para empresas de diversos setores, como
              imobiliárias, agências de viagens, construtora e incorporadora, indústria de
              instrumentos musicais, startups, transportadora e prestadores de serviços, sempre
              com o mesmo foco: aumentar a eficiência e otimizar recursos sem complicação.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-ink-900 dark:text-white">
            Como trabalhamos
          </h3>
          <p className="mt-2 text-lg text-ink-500 dark:text-ink-400">
            Primeiro entendemos o seu negócio, depois escolhemos a tecnologia.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howWeWork.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 dark:bg-brand-500/15 text-brand-600 dark:text-brand-400">
                    {step.icon}
                  </span>
                  <span className="text-sm font-semibold text-ink-400">0{i + 1}</span>
                </div>
                <h4 className="mt-6 text-lg font-bold text-ink-900 dark:text-white">{step.title}</h4>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border-l-4 border-brand-500 bg-white dark:bg-ink-900 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h3 className="text-xl font-bold text-ink-900 dark:text-white">Vamos conversar?</h3>
            <p className="mt-2 text-ink-500 dark:text-ink-400">
              Se a sua equipe gasta tempo demais com tarefas que poderiam rodar sozinhas, fale
              com a gente.
            </p>
          </div>
          <a
            href={whatsappLink("Olá! Quero conversar sobre automação de processos e IA na minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
          >
            Falar com o time
          </a>
        </div>
      </div>
    </section>
  );
}
