import { whatsappLink } from "@/lib/site-data";

const whatWeDo = [
  "Mapeamento e redesenho de processos",
  "Automação de tarefas e fluxos de trabalho",
  "Soluções com IA generativa (agentes, assistentes e chatbots treinados com os dados da sua empresa)",
  "Integração entre sistemas, como ERP, CRM e outras ferramentas do dia a dia",
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-ink-50 dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wide">
            Sobre Nós
          </span>
          <p className="mt-4 text-xl sm:text-2xl font-semibold text-ink-900 dark:text-white leading-snug">
            Somos uma consultoria de Inteligência Artificial e automação de processos.
            Ajudamos empresas a entender como seus processos funcionam hoje,
            identificar gargalos e transformar operações manuais em fluxos inteligentes,
            integrados e escaláveis.
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

          <div>
            <h3 className="text-xl font-bold text-ink-900 dark:text-white">Como trabalhamos</h3>
            <p className="mt-5 text-ink-500 dark:text-ink-400">
              Primeiro entendemos o seu negócio, depois escolhemos a tecnologia. Cada projeto
              começa com um diagnóstico do processo, segue com uma solução sob medida e termina
              com acompanhamento para garantir que a automação realmente gere eficiência.
            </p>
          </div>

          <div className="rounded-2xl border-l-4 border-brand-500 bg-white dark:bg-ink-900 p-6 self-start">
            <h3 className="text-xl font-bold text-ink-900 dark:text-white">Vamos conversar?</h3>
            <p className="mt-3 text-ink-500 dark:text-ink-400">
              Se a sua equipe gasta tempo demais com tarefas que poderiam rodar sozinhas, fale
              com a gente.
            </p>
            <a
              href={whatsappLink("Olá! Quero conversar sobre automação de processos e IA na minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-lg gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:-translate-y-0.5 transition-transform"
            >
              Falar com o time
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
