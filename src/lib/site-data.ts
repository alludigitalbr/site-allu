export const contact = {
  whatsappNumber: "5511914373505",
  whatsappDisplay: "(11) 91437-3505",
  whatsappUrl: "https://wa.me/5511914373505",
  email: "contato@alludigital.com.br",
  instagramUrl: "https://www.instagram.com/allu_digital/",
  instagramHandle: "@allu_digital",
  linkedinUrl:
    "https://www.linkedin.com/in/marcelo-viviani-junior-b760aa25/",
  hours: "Seg-Sex, 9h-18h",
};

export function whatsappLink(message: string) {
  return `${contact.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export const partnerModels = [
  {
    label: "Modelo 1",
    title: "Comissão por indicação",
    highlight: "Você indica, nós entregamos",
    description: "Você indica o cliente e a Allu Digital desenvolve o projeto.",
    example: "Exemplo: projeto de R$10 mil, você recebe R$3 mil.",
  },
  {
    label: "Modelo 2",
    title: "Revenda com preço parceiro",
    highlight: "Margem definida por você",
    description: "Você adquire com preço de parceiro e revende pelo valor que quiser.",
    example: "Exemplo: compra por R$10 mil e vende por R$20 mil.",
  },
  {
    label: "Modelo 3",
    title: "White label completo",
    highlight: "Com a sua marca",
    description: "Desenvolvemos nos bastidores e você entrega com a sua identidade.",
    example: "Ideal para agências e consultorias ampliarem o portfólio.",
  },
];

export const services = [
  {
    title: "Consultoria de IA",
    description:
      "Mapeamento de processos, técnicas de design thinking e gestão de projetos, com especialista em processos para melhorar os indicadores do negócio usando tecnologia, automação e integração.",
    features: [
      "Mapeamento de processos",
      "Design thinking",
      "Gestão de projetos",
      "Automação, integração",
    ],
    href: "/servicos/consultoria-ti-ia",
  },
  {
    title: "Consultoria em Desenvolvimento",
    description:
      "Sua empresa já criou um sistema com ferramentas de IA, mas agora precisa de organização para evoluir? Estruturamos o seu código, implantamos boas práticas de engenharia de software e preparamos o seu time para desenvolver com IA de forma profissional, segura e escalável.",
    features: [
      "Estruturação de código legado criado com IA",
      "Desenvolvimento assistido por IA com Claude Code",
      "Versionamento e CI/CD com GitHub Actions",
      "Deploy automatizado em servidores na nuvem",
      "Gestão ágil com sprints e tasks no Jira/Asana",
    ],
  },
  {
    title: "Infraestrutura e Manutenção da Rede de Computadores",
    description:
      "Cabeamento estruturado, redes wi-fi corporativas e servidores, com suporte técnico dedicado e manutenção preventiva e corretiva para manter sua operação de TI sempre no ar.",
    features: [
      "Cabeamento estruturado e wi-fi corporativo",
      "Organização de rack e servidores",
      "Suporte técnico dedicado",
      "Manutenção preventiva e corretiva",
      "Monitoramento contínuo",
    ],
    href: "/servicos/infraestrutura-manutencao-rede",
  },
];

export type PortfolioPillarSlug =
  | "arquitetura"
  | "automacao"
  | "produto"
  | "times"
  | "atendimento";

export const portfolioPillars: {
  slug: PortfolioPillarSlug;
  title: string;
  description: string;
}[] = [
  {
    slug: "arquitetura",
    title: "Arquitetura & Infraestrutura para IA",
    description:
      "VPS, containers, ambientes, DNS, bancos vetoriais, segurança e escalabilidade.",
  },
  {
    slug: "automacao",
    title: "Automação com Agentes de IA",
    description:
      "Agentes SDR, atendimento (voz e texto), qualificação de leads, análise de documentos.",
  },
  {
    slug: "produto",
    title: "Gestão de Produto & Entrega Ágil",
    description:
      "Backlog, sprints, cadência de entregas, gestão à vista, consultoria de ferramentas (CRM).",
  },
  {
    slug: "times",
    title: "Formação e Estruturação de Times",
    description:
      "Montagem de times técnicos, documentação, treinamento e onboarding.",
  },
  {
    slug: "atendimento",
    title: "Plataforma de Atendimento via WhatsApp",
    description:
      "Implantação do Nura para centralizar e organizar o atendimento via WhatsApp.",
  },
];

export interface PortfolioCase {
  slug: string;
  title: string;
  client?: string;
  pillars: PortfolioPillarSlug[];
  context?: string;
  challenge?: string;
  approach?: { label: string; text: string }[];
  approachParagraph?: string;
  tools?: string[];
  results?: string;
  resultsList?: string[];
  image?: { src: string; alt: string; width: number; height: number };
}

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "watrix",
    title: "Automações, Integrações e Desenvolvimento do Cérebro da IA (Plataforma Watrix CRM)",
    client: "Startup do setor imobiliário",
    pillars: ["arquitetura", "automacao", "produto", "times"],
    context:
      "Startup criada do zero, fundada por um empreendedor com forte visão comercial mas sem estrutura técnica. A Allu Digital entrou como braço técnico completo do negócio, responsável por materializar e desenvolver o produto.",
    challenge:
      "Ir da ideação até a entrega em produção, com sustentação de dezenas de clientes simultaneamente.",
    approach: [
      {
        label: "Arquitetura & Infra",
        text: "desenho de arquitetura e infraestrutura, VPS e serviços em container (Portainer), configuração de DNS, ambientes de Dev, Homologação e Produção.",
      },
      {
        label: "Produto & Integrações",
        text: "integração via API com o CRM, agentes SDR implantados em workflows n8n (com aulas gravadas ensinando integração e uso), integração com Meta para captação de leads de campanhas, uso de vector store e XMLs de portais imobiliários.",
      },
      {
        label: "Processo & Time",
        text: "formação de um time de 4 devs e 3 pessoas de implantação, rituais ágeis completos (sprint, story points, planning, daily, refinamento, review e retro), ideação no Miro, backlog no Asana, comunicação no Slack, reuniões diretas com clientes para levantar necessidades de integração.",
      },
    ],
    tools: [
      "n8n",
      "Supabase",
      "Docker",
      "VPS (Hetzner/Hostinger)",
      "ElevenLabs",
      "Retell",
      "Twilio",
      "CRM Helena",
      "Portainer",
      "OpenAI",
      "Gemini",
      "Google Workspace",
      "Vector Store",
    ],
    results:
      "Startup saiu de 0 clientes para uma operação em produção com time formado, documentação e onboarding estruturado — mais de 40 clientes ativos e faturamento médio de R$180 mil/mês.",
  },
  {
    slug: "smart-crm",
    title: "Evolução de CRM B2B com Agentes de IA",
    pillars: ["arquitetura", "automacao", "produto"],
    context:
      "CRM B2B voltado para empresas que precisam automatizar atendimentos com agentes de IA, integrando Meta, API Oficial do WhatsApp ou Evolution API.",
    challenge: "Atender pedidos de novas funcionalidades da base de clientes já ativa.",
    approachParagraph:
      "desenvolvimento de fluxo de sincronização de arquivos XML para imobiliária, backup de workflows e credentials do n8n, fluxo de agendamento de visitas integrado ao Google Calendar, backup automatizado do Supabase, e migração completa de serviços e DNS da VPS Hetzner para a Hostinger.",
    tools: ["Supabase", "n8n (Docker/Portainer)", "Redis", "Cloudflare", "VPS"],
    results:
      "Documentação da entrega, treinamento dos devs internos do cliente, novas features habilitadas para a base de clientes, retenção de clientes e redução de churn.",
  },
  {
    slug: "ai-call-flow",
    title: "AI Call Flow — Produto de Ligações com IA (Inbound & Outbound)",
    pillars: ["automacao", "produto"],
    context:
      "Novo produto voltado a clientes high-ticket, aproveitando a base existente de clientes do CRM B2B e abrindo espaço para novos clientes.",
    challenge:
      "Criar um sistema completo de ligações com IA, cobrindo dois fluxos: Inbound — cliente liga, a IA atende, faz triagem e qualificação, e direciona para atendimento humano (usando call forward do celular para um número da IA); Outbound — lead preenche um formulário na web e a IA realiza a ligação diretamente.",
    tools: ["Twilio", "Retell", "OpenAI", "SIP Trunk", "n8n"],
    results:
      "Produto entregue e time comercial treinado para operar com o novo fluxo de ligações. (Aprovação de compliance regulatório incluída no processo.)",
  },
  {
    slug: "s2-viagens-mvp",
    title: "MVP de Inteligência Comercial",
    client: "Agência de viagens",
    pillars: ["produto", "automacao"],
    challenge:
      "Gerir a entrega de um MVP para detectar inatividade nos atendimentos, identificar oportunidades de pacotes aéreos, recomendar follow-ups e sumarizar conversas.",
    approachParagraph:
      "estruturação de backlog, gestão à vista, cadência semanal de sync com status report (andamento e impedimentos), consultoria de integração e CRM — indicação e fechamento do Helena CRM com base em experiência prévia de mercado —, apoio nas integrações via API, e organização/documentação dos fluxos do n8n.",
  },
  {
    slug: "s2-viagens-sdr",
    title: "Agentes SDR via Helena CRM",
    client: "Agência de viagens",
    pillars: ["automacao", "produto"],
    challenge:
      "Atuar como gestor e consultor de agentes de IA dentro da plataforma Helena CRM, com suporte contínuo às integrações e desenvolvimento de 3 tipos de SDR: SDR por vendedor (23 assistentes, um por vendedor), SDR passivo (inbound) e SDR ativo (outbound).",
    approachParagraph:
      "integração de formulários da Meta e do Lovable com n8n e o CRM — leads que preenchem formulários geram automaticamente um card no funil de vendas, e um agente SDR de IA inicia a abordagem antes de repassar ao vendedor.",
    tools: ["n8n", "APIs REST (CRM Helena)", "Supabase", "OpenAI"],
  },
  {
    slug: "peter-ai",
    title: "Peter AI — Agente Proativo para Slack e Microsoft Teams",
    pillars: ["arquitetura", "automacao", "times"],
    challenge:
      "Criar um agente proativo (Duck), membro do time PeterAI, capaz de mapear conversas e canais, identificar processos manuais e repetitivos, sugerir e criar automações, e resumir grupos de conversa.",
    approachParagraph:
      "integração via Azure Bot Framework, interação por menções (@duck) em canais do Teams, execução de automações e workers na plataforma, integração com CRM, botão de conexão do Microsoft Teams na tela de configurações, reforço de segurança nas integrações e tools dos agentes, e criptografia de dados sensíveis em trânsito e em repouso.",
    tools: [
      "Vite + React",
      "Firebase (Auth, Firestore, RTDB, Storage)",
      "Cloud Functions (Node 22, us-central1)",
      "OpenRouter",
      "Claude Code",
      "CI/CD",
    ],
  },
  {
    slug: "greenville",
    title: "Automação de Atendimento e Cobrança",
    client: "Loteamento e construtora",
    pillars: ["automacao", "atendimento"],
    challenge:
      "Automatizar atendimentos manuais e repetitivos — 2ª via de contrato, 2ª via de boleto e extrato de saldo devedor — e criar uma régua de cobrança automática para clientes inadimplentes.",
    results:
      "Leadtime de atendimento reduzido de 24h para 10 minutos; aumento no recebimento de inadimplentes; redução do tempo humano gasto em cobrança manual.",
  },
  {
    slug: "eliezer",
    title: "Automação de Análise de Editais de Licitação Pública (Plataforma Departamento Leve)",
    pillars: ["automacao"],
    context:
      "Um SaaS para ajudar empresários a ganhar licitação: encontre oportunidades, analise editais com IA, automatize a preparação de documentos e capacite sua equipe. Tudo em uma única plataforma. Antes, o processo era manual e repetitivo: buscar editais em portais do governo, analisar um a um, identificar atestados exigidos e verificar documentações e declarações necessárias.",
    approachParagraph:
      "três agentes de IA — agente de análise de editais (lê e resume os principais pontos, envia por e-mail e gera um PDF do resumo), agente de automação para gerar declarações e localizar atestados, e agente de busca automática de editais no portal PNCP.",
    results:
      "Análise que levava 1 semana de trabalho humano passou a ser feita em 5 minutos.",
  },
  {
    slug: "tokai",
    title: "Infraestrutura e Manutenção da Rede de Computadores",
    client: "Indústria de instrumentos musicais",
    pillars: ["arquitetura"],
    approach: [
      {
        label: "Manutenção de rede",
        text: "servidor Linux com Samba configurado para atender 35 máquinas.",
      },
    ],
  },
  {
    slug: "monitoramento-precos",
    title: "Dashboard de Monitoramento de Preços",
    client: "Indústria de instrumentos musicais",
    pillars: ["automacao", "produto"],
    approachParagraph:
      "buscador automático de preços dos produtos na internet, para identificar quem está cumprindo a Política de Preço Mínimo (PMS).",
  },
  {
    slug: "amanda-cabral",
    title: "Organização dos Atendimentos via WhatsApp",
    client: "Clínica odontológica",
    pillars: ["atendimento"],
    challenge:
      "Centralizar o atendimento aos pacientes pelo WhatsApp, organizando agendamentos e follow-ups que antes eram feitos manualmente pela recepção.",
    results:
      "Atendimento organizado em filas e tags dentro do Nura, com histórico completo por paciente e follow-up estruturado.",
  },
  {
    slug: "sac-tokai",
    title: "SAC - Organização dos Atendimentos do WhatsApp",
    client: "Indústria de instrumentos musicais",
    pillars: ["atendimento"],
    challenge:
      "Centralizar e organizar mais de 600 atendimentos por mês dos clientes de pós-venda.",
    approachParagraph:
      "agente de IA para pré-atendimento, identificando se o produto está dentro ou fora da garantia, quando o problema começou e o tipo de cliente (lojista ou consumidor final), usando o CRM próprio da Allu Digital, com dashboard operacional para acompanhamento de indicadores pela liderança.",
    results:
      "Mais clientes sendo atendidos e maior clareza da etapa do fluxo de atendimento.",
    resultsList: [
      "Mais de 5% dos atendimentos 100% automatizados",
      "Clareza do que está em atendimento agora",
    ],
  },
];
