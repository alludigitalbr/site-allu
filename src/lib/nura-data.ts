export const nuraFeatureGroups = [
  {
    title: "Canais de atendimento",
    features: [
      "WhatsApp via Baileys (QR Code) — conexão rápida, sem depender da API oficial",
      "WhatsApp API Oficial (Cloud API) — para operações que exigem o canal certificado pela Meta",
      "Coexistência WhatsApp — usa o número pessoal e a API ao mesmo tempo, sem perder histórico",
      "Instagram DM — atendimento direto pelas mensagens do Instagram",
      "Messenger do Facebook — atendimento direto pelas mensagens do Facebook",
    ],
  },
  {
    title: "Automação & IA",
    features: [
      "Chatbot com fluxos visuais (FlowBuilder) — monta fluxo de atendimento sem código",
      "Integração com IA (OpenAI, DeepSeek) — respostas inteligentes dentro dos fluxos de conversa",
      "Webhook por evento — conecta o CRM a qualquer sistema externo (ex: ERP, planilhas, outros CRMs)",
    ],
  },
  {
    title: "Organização do atendimento",
    features: [
      "Kanban de atendimentos",
      "Carteiras — atendentes com contatos vinculados, cada um enxerga só a sua carteira",
      "Tags e filas de atendimento — organização de leads por segmento/etapa",
      "Respostas rápidas",
      "Permissões de acesso por usuário/função — controla o que cada atendente pode ver e fazer; essencial quando o time cresce e não pode ter todo mundo com acesso a tudo",
    ],
  },
  {
    title: "Relacionamento & growth",
    features: ["Campanhas de disparo", "Agendamento de mensagens", "NPS integrado"],
  },
  {
    title: "Gestão & relatórios",
    features: ["Relatórios de atendimento", "Exportação de conversa em PDF"],
  },
];

export interface NuraPlan {
  slug: "basic" | "start" | "start2" | "pro";
  name: string;
  price: number | null;
  priceLabel: string;
  highlight?: boolean;
  quotas: {
    contas: number;
    usuarios: number;
    filas: number;
    whatsapp: number;
  };
  features: string[];
  flags: {
    instagram: boolean;
    facebook: boolean;
    carteirizacao: boolean;
    agendamento: boolean;
    chatInterno: boolean;
    kanban: boolean;
    apiExterna: boolean;
    agenteIA: boolean;
    integracoes: boolean;
    flowbuilder: boolean;
    treinamento: boolean;
    acompanhamento: boolean;
  };
}

export const nuraPlans: NuraPlan[] = [
  {
    slug: "basic",
    name: "Basic",
    price: 100,
    priceLabel: "R$100/mês",
    quotas: { contas: 1, usuarios: 1, filas: 2, whatsapp: 1 },
    features: [
      "1 conta ativa",
      "1 usuário",
      "2 filas",
      "1 número de WhatsApp",
      "Dash de gestão dos atendimentos",
      "Respostas rápidas",
      "Tags",
    ],
    flags: {
      instagram: false,
      facebook: false,
      carteirizacao: false,
      agendamento: false,
      chatInterno: false,
      kanban: false,
      apiExterna: false,
      agenteIA: false,
      integracoes: false,
      flowbuilder: false,
      treinamento: false,
      acompanhamento: false,
    },
  },
  {
    slug: "start",
    name: "Start",
    price: 350,
    priceLabel: "R$350/mês",
    highlight: true,
    quotas: { contas: 1, usuarios: 5, filas: 3, whatsapp: 1 },
    features: [
      "1 conta ativa",
      "5 usuários",
      "3 filas",
      "1 número de WhatsApp",
      "Dash de gestão dos atendimentos",
      "Instagram",
      "Facebook",
      "Carteirização",
      "Agendamento",
      "Chat interno",
      "Kanban",
      "Respostas rápidas",
      "Tags",
    ],
    flags: {
      instagram: true,
      facebook: true,
      carteirizacao: true,
      agendamento: true,
      chatInterno: true,
      kanban: true,
      apiExterna: false,
      agenteIA: false,
      integracoes: false,
      flowbuilder: false,
      treinamento: false,
      acompanhamento: false,
    },
  },
  {
    slug: "start2",
    name: "Start II",
    price: 400,
    priceLabel: "R$400/mês",
    quotas: { contas: 1, usuarios: 10, filas: 4, whatsapp: 1 },
    features: [
      "1 conta ativa",
      "10 usuários",
      "4 filas",
      "1 número de WhatsApp",
      "Dash de gestão dos atendimentos",
      "Instagram",
      "Facebook",
      "Carteirização",
      "Agendamento",
      "Chat interno",
      "Kanban",
      "API externa",
      "Respostas rápidas",
      "Tags",
      "Integrações",
    ],
    flags: {
      instagram: true,
      facebook: true,
      carteirizacao: true,
      agendamento: true,
      chatInterno: true,
      kanban: true,
      apiExterna: true,
      agenteIA: false,
      integracoes: true,
      flowbuilder: false,
      treinamento: false,
      acompanhamento: false,
    },
  },
  {
    slug: "pro",
    name: "Pro",
    price: null,
    priceLabel: "Sob consulta",
    quotas: { contas: 1, usuarios: 999, filas: 999, whatsapp: 1 },
    features: [
      "Plano personalizado, sem limite fixo de usuários ou filas",
      "Atendimento exclusivo",
      "Consultoria de processo",
      "Consultoria de IA",
      "Dash de gestão dos atendimentos",
      "Instagram",
      "Facebook",
      "Carteirização",
      "Agendamento",
      "Chat interno",
      "Kanban",
      "API de integração",
      "Agente de IA",
      "Respostas rápidas",
      "Tags",
      "FlowBuilder",
      "Treinamento",
      "Acompanhamento",
    ],
    flags: {
      instagram: true,
      facebook: true,
      carteirizacao: true,
      agendamento: true,
      chatInterno: true,
      kanban: true,
      apiExterna: true,
      agenteIA: true,
      integracoes: true,
      flowbuilder: true,
      treinamento: true,
      acompanhamento: true,
    },
  },
];

export const nuraDifferentiators = [
  {
    title: "Preço acessível",
    description:
      "Outros CRMs do mercado cobram taxas altas para o mesmo tipo de operação.",
  },
  {
    title: "Suporte ágil",
    description: "Concorrentes têm suporte demorado; aqui o contato é direto.",
  },
  {
    title: "Aceita customização e integrações diversas",
    description:
      "Diferente de concorrentes que não permitem pedidos de customização nem atendimento personalizado, o Nura abre esse espaço: integrações sob medida com sistemas externos (ERP, outros CRMs, ferramentas internas), fluxos e automações ajustados à operação do cliente. Esse é o diferencial mais forte para empresas que já tentaram um CRM engessado e não conseguiram adaptar ao próprio processo.",
    highlight: true,
  },
  {
    title: "Organização real de leads",
    description:
      "Tags, filas e carteiras pensadas para times que crescem, incluindo controle de permissões por usuário.",
  },
];
