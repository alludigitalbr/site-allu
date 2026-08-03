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

export const heroStats = [
  { value: "+40", label: "clientes ativos gerados para um único produto" },
  { value: "R$180 mil/mês", label: "de faturamento médio gerado para cliente" },
  { value: "24h → 10min", label: "leadtime de atendimento" },
];

export const values = [
  {
    title: "Inovação",
    description:
      "Sempre à frente, explorando as últimas tendências em IA e no-code.",
  },
  {
    title: "Excelência",
    description:
      "Buscamos a perfeição em tudo o que fazemos, da estratégia à entrega.",
  },
  {
    title: "Parceria",
    description:
      "Vemos nossos clientes como parceiros estratégicos para o sucesso mútuo.",
  },
];

export const problemPillars = [
  {
    title: "Atendimento que não escala",
    description:
      "agentes de IA (voz e texto) que qualificam, respondem e só escalam para um humano quando realmente precisa.",
  },
  {
    title: "Cobrança e processos repetitivos manuais",
    description:
      "automações que eliminam tempo humano gasto em tarefas operacionais (2ª via, régua de cobrança, análise de documentos e editais).",
  },
  {
    title: "Produto sem dono técnico",
    description:
      "arquitetura, infraestrutura e gestão ágil para empresas que precisam de um braço técnico completo, não só um desenvolvedor.",
  },
  {
    title: "Time que não se sustenta sozinho",
    description:
      "formação, documentação e onboarding para a operação continuar rodando sem depender de mim.",
  },
];

export const services = [
  {
    title: "Desenvolvimento de Agentes de IA",
    description:
      "Criamos agentes de IA personalizados com memória contextual, assistentes de voz síncronos e gestão autônoma de funil.",
    features: [
      "Memória do Agente",
      "Assistente de Voz Síncrono",
      "Régua de Cadência Inteligente",
      "Integração Omnichannel",
    ],
  },
  {
    title: "Consultoria e Gestão de Produto (PO)",
    description:
      "Atuamos como Product Owners, organizando backlog e alinhando desenvolvimento com estratégia de negócio.",
    features: [
      "Diagnóstico e Desenho da Solução",
      "Implementação e Integração",
      "Acompanhamento e Otimização",
      "Tradução de Requisitos",
    ],
  },
  {
    title: "Automações No-Code/Low-Code",
    description:
      "Especialistas em automação de processos utilizando plataformas como n8n, Supabase, OpenAI e outras tecnologias.",
    features: [
      "Implantação de CRM",
      "Automações com n8n",
      "Engenharia de Prompt",
      "Integração de APIs",
    ],
  },
];

export type PortfolioPillarSlug =
  | "arquitetura"
  | "automacao"
  | "produto"
  | "times";

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
}

export const portfolioCases: PortfolioCase[] = [
  {
    slug: "watrix",
    title: "Watrix — CRM para Imobiliárias",
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
    title: "Smart CRM — Evolução de CRM B2B com Agentes de IA",
    pillars: ["arquitetura", "automacao", "produto"],
    context:
      "CRM B2B voltado para empresas que precisam automatizar atendimentos com agentes de IA, integrando Meta, API Oficial do WhatsApp ou Evolution API.",
    challenge: "Atender pedidos de novas funcionalidades da base de clientes já ativa.",
    approachParagraph:
      "desenvolvimento de fluxo de sincronização de arquivos XML para imobiliária, backup de workflows e credentials do n8n, fluxo de agendamento de visitas integrado ao Google Calendar, backup automatizado do Supabase, e migração completa de serviços e DNS da VPS Hetzner para a Hostinger.",
    tools: ["Supabase", "n8n (Docker/Portainer)", "Redis", "Cloudflare", "VPS"],
    results:
      "Documentação da entrega, treinamento dos devs internos da Smart CRM, novas features habilitadas para a base de clientes, retenção de clientes e redução de churn.",
  },
  {
    slug: "ai-call-flow",
    title: "AI Call Flow — Produto de Ligações com IA (Inbound & Outbound)",
    pillars: ["automacao", "produto"],
    context:
      "Novo produto voltado a clientes high-ticket, aproveitando a base existente da Smart CRM e abrindo espaço para novos clientes.",
    challenge:
      "Criar um sistema completo de ligações com IA, cobrindo dois fluxos: Inbound — cliente liga, a IA atende, faz triagem e qualificação, e direciona para atendimento humano (usando call forward do celular para um número da IA); Outbound — lead preenche um formulário na web e a IA realiza a ligação diretamente.",
    tools: ["Twilio", "Retell", "OpenAI", "SIP Trunk", "n8n"],
    results:
      "Produto entregue e time comercial treinado para operar com o novo fluxo de ligações. (Aprovação de compliance regulatório incluída no processo.)",
  },
  {
    slug: "s2-viagens-mvp",
    title: "S2 Viagens — MVP de Inteligência Comercial",
    pillars: ["produto", "automacao"],
    challenge:
      "Gerir a entrega de um MVP para detectar inatividade nos atendimentos, identificar oportunidades de pacotes aéreos, recomendar follow-ups e sumarizar conversas.",
    approachParagraph:
      "estruturação de backlog, gestão à vista, cadência semanal de sync com status report (andamento e impedimentos), consultoria de integração e CRM — indicação e fechamento do Helena CRM com base em experiência prévia de mercado —, apoio nas integrações via API, e organização/documentação dos fluxos do n8n.",
  },
  {
    slug: "s2-viagens-sdr",
    title: "S2 Viagens — Agentes SDR via Helena CRM",
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
    title: "Greenville — Automação de Atendimento e Cobrança",
    client: "Loteamento e construtora Greenville",
    pillars: ["automacao"],
    challenge:
      "Automatizar atendimentos manuais e repetitivos — 2ª via de contrato, 2ª via de boleto e extrato de saldo devedor — e criar uma régua de cobrança automática para clientes inadimplentes.",
    results:
      "Leadtime de atendimento reduzido de 24h para 10 minutos; aumento no recebimento de inadimplentes; redução do tempo humano gasto em cobrança manual.",
  },
  {
    slug: "eliezer",
    title: "Eliezer — Automação de Análise de Editais de Licitação Pública",
    pillars: ["automacao"],
    context:
      "Processo manual e repetitivo de buscar editais em portais do governo, analisar um a um, identificar atestados exigidos e verificar documentações e declarações necessárias.",
    approachParagraph:
      "três agentes de IA — agente de análise de editais (lê e resume os principais pontos, envia por e-mail e gera um PDF do resumo), agente de automação para gerar declarações e localizar atestados, e agente de busca automática de editais no portal PNCP.",
    results:
      "Análise que levava 1 semana de trabalho humano passou a ser feita em 5 minutos.",
  },
  {
    slug: "tokai",
    title: "Tokai — Infraestrutura, Atendimento SAC com IA e Monitoramento de Preços",
    client: "Tokai, instrumentos musicais",
    pillars: ["arquitetura", "automacao", "produto"],
    approach: [
      {
        label: "Manutenção de rede",
        text: "servidor Linux com Samba configurado para atender 35 máquinas.",
      },
      {
        label: "Agente de atendimento do SAC",
        text: "agente de IA para pré-atendimento, identificando se o produto está dentro ou fora da garantia, quando o problema começou, e o tipo de cliente (lojista ou consumidor final) — usando o CRM próprio da Allu Digital. Desenvolvimento de um dashboard operacional para acompanhamento de indicadores pela liderança.",
      },
      {
        label: "Dashboard de monitoramento de preços",
        text: "buscador automático de preços dos produtos Tokai na internet, para identificar quem está cumprindo a Política de Preço Mínimo (PMS).",
      },
    ],
    results:
      "Dashboard operacional em produção com visibilidade total do funil de atendimento — 161 atendimentos realizados no mês, com status monitorados em tempo real (em andamento com IA, com humano, aguardando peça, aguardando cliente, etc.).",
  },
];

export const otherClients = [
  "Loteamento Greenville",
  "Clínica Odontológica Amanda Cabral",
  "Madeforte",
  "SAC da Tokai",
];

export const portfolioStats = [
  { value: "10", label: "projetos entregues, de startups a empresas estabelecidas" },
  { value: "+40", label: "clientes ativos gerados para um único produto" },
  { value: "R$180 mil/mês", label: "de faturamento médio gerado para cliente" },
  { value: "24h → 10min", label: "leadtime de atendimento" },
  { value: "1 semana → 5min", label: "análise de editais" },
  { value: "+500/mês", label: "atendimentos monitorados" },
  { value: "23", label: "agentes SDR desenvolvidos para um único cliente" },
];
