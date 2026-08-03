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

export const nuraPricing = {
  price: "R$350/mês",
  includes: ["1 conexão de WhatsApp", "3 filas de atendimento", "até 5 usuários"],
  implantationNote: "+ taxa de implantação sob consulta",
  customNote:
    "Precisa de um Agente de IA personalizado integrado ao CRM? Isso é tratado sob consulta — o R$350/mês cobre a organização do atendimento (CRM); customizações e IA são orçadas conforme a necessidade.",
};

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
