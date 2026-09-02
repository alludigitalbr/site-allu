export const nuraSubNav = [
  { href: "/nura", label: "Visão geral" },
  { href: "/nura/crm-whatsapp", label: "CRM para WhatsApp" },
  { href: "/nura/recursos", label: "Recursos" },
  { href: "/nura/ia", label: "IA" },
  { href: "/nura/afiliados", label: "Afiliados" },
  { href: "/nura/sobre", label: "Sobre" },
];

// ---------- O que a IA assume ----------

export const naoPrecisaMaisFazer = [
  {
    title: "Digitar e atualizar cadastros",
    description:
      "A IA lê as conversas do WhatsApp e preenche automaticamente nome, e-mail, interesse, status da negociação e estágio do funil — sem intervenção humana.",
  },
  {
    title: "Qualificar leads manualmente",
    description:
      "O sistema conversa com o contato inicial, faz as perguntas de triagem e identifica se o lead é qualificado antes de repassar a um vendedor.",
  },
  {
    title: "Lembrar de fazer follow-up",
    description:
      "A ferramenta agenda e envia mensagens de acompanhamento personalizadas no momento certo, com base no histórico de conversas.",
  },
  {
    title: "Organizar histórico de conversas",
    description:
      "As interações via áudio ou texto são transcritas, resumidas e categorizadas automaticamente, eliminando a necessidade de ler históricos longos.",
  },
  {
    title: "Agendar reuniões manualmente",
    description:
      "O sistema envia horários disponíveis, confirma presença e envia lembretes antes do compromisso, direto no WhatsApp do cliente.",
  },
  {
    title: "Delegar conversas manualmente",
    description:
      "As mensagens recebidas são distribuídas para o vendedor ou setor correto com base no contexto do atendimento.",
  },
  {
    title: "Detectar quando escalar para um humano",
    description:
      "A IA sabe identificar sozinha quando o assunto sai do escopo dela (reclamação grave, pedido explícito de falar com atendente, situação sensível) e transfere na hora — sem o cliente ficar preso num bot que não resolve.",
  },
  {
    title: "Resolver solicitações financeiras/administrativas direto",
    description:
      "Segunda via de boleto, status de pedido, consulta de agendamento — a IA busca a informação no sistema (ERP, financeiro, agenda) e responde sozinha, sem precisar de alguém indo manualmente atrás do dado.",
  },
  {
    title: "Medir satisfação sem pesquisa manual",
    description:
      "A IA analisa o tom da conversa e identifica sinais de insatisfação ou risco de perda do cliente automaticamente, sem depender de enviar pesquisa de NPS manualmente.",
  },
  {
    title: "Reengajar lead esfriado",
    description:
      "Identifica sozinha contatos que pararam de responder e dispara uma tentativa de reativação no momento certo, sem depender de alguém revisar planilha de leads parados.",
  },
];

// ---------- IA ----------

export const iaFeatures = [
  {
    title: "Resumo inteligente de conversas",
    description: "Retoma qualquer atendimento sem reler o histórico inteiro.",
  },
  {
    title: "Transcrição de áudio no chat",
    description: "Todo áudio recebido vira texto pesquisável automaticamente.",
  },
  {
    title: "Apoio ao atendente",
    description: "Sugestões de resposta com base no contexto da conversa.",
  },
  {
    title: "Triagem de leads",
    description: "Classifica novas conversas por intenção antes de chegarem à fila.",
  },
  {
    title: "Agente Supervisor de Atendimento IA",
    description: "Acompanha a operação e sinaliza atendimentos que precisam de atenção.",
  },
];

export const iaModels = [
  { model: "openai/gpt-oss-20b", use: "Respostas rápidas e conversas complexas" },
  { model: "OpenAI Whisper Large V3", use: "Transcrição de áudio" },
];

export const iaSecurity = [
  "A IA tem papel de apoio — decisões finais continuam com o atendente humano",
  "Dados sensíveis não são usados para treinar modelos de terceiros",
  "Processamento em conformidade com a LGPD",
  "Transcrição e resumo existem para acelerar o atendimento, não para substituí-lo",
];

export const iaFaq = [
  {
    q: "A IA substitui o atendente?",
    a: "Não. Ela resume, transcreve e sugere — quem decide e responde continua sendo a sua equipe.",
  },
  {
    q: "A IA responde o cliente sozinha?",
    a: "Só se você configurar esse modo. Por padrão, ela apoia o atendente humano em vez de responder automaticamente.",
  },
  {
    q: "Como funciona o resumo de conversa?",
    a: "A cada atendimento retomado, o Nura gera um resumo do histórico — útil quando outro atendente assume a conversa.",
  },
  {
    q: "A transcrição de áudio funciona pra qualquer áudio recebido?",
    a: "Sim, todo áudio que chega pelo WhatsApp é transcrito automaticamente e fica pesquisável no histórico.",
  },
  {
    q: "Preciso pagar à parte pela IA?",
    a: "Os recursos de IA variam por plano — confira o que está incluso em cada um na página de planos.",
  },
  {
    q: "Meus dados são usados pra treinar modelo de terceiros?",
    a: "Não. O processamento segue a LGPD e os dados não são usados para treinar modelos externos.",
  },
];

// ---------- Recursos ----------

export const recursosCategorias = [
  {
    title: "Inbox e atendimento",
    items: [
      "Caixa de entrada unificada",
      "Múltiplos atendentes",
      "Carteirização de contatos",
      "Histórico completo por conversa",
      "Tags e filas de atendimento",
      "Respostas rápidas",
    ],
  },
  {
    title: "Canais",
    items: [
      "WhatsApp via QR Code",
      "WhatsApp API Oficial (Cloud API)",
      "Coexistência com o número pessoal",
      "Instagram DM",
      "Messenger do Facebook",
    ],
  },
  {
    title: "CRM e vendas",
    items: [
      "Kanban do funil de vendas",
      "Contatos ilimitados",
      "Campos personalizados",
      "Agenda vinculada ao contato",
    ],
  },
  {
    title: "Automações",
    items: [
      "FlowBuilder — fluxos visuais sem código",
      "Gatilhos por mensagem, tag ou etapa",
      "Ações automáticas encadeadas",
      "Webhook por evento",
    ],
  },
  {
    title: "Agendamento",
    items: [
      "Links públicos de agendamento",
      "Lembretes automáticos por WhatsApp",
    ],
  },
  {
    title: "Campanhas e disparos",
    items: [
      "Envio em massa segmentado",
      "Respeito a opt-out",
      "Histórico de envio",
    ],
  },
  {
    title: "Inteligência artificial",
    items: [
      "Resumo de conversas",
      "Transcrição de áudio",
      "Agente Supervisor de Atendimento IA",
    ],
  },
  {
    title: "Relatórios e métricas",
    items: [
      "Volume de atendimento",
      "Tempo médio de resposta",
      "NPS integrado",
      "Exportação de conversa em PDF",
    ],
  },
  {
    title: "Gestão e segurança",
    items: [
      "Permissões por usuário/função",
      "Multiempresa",
      "Conformidade com a LGPD",
    ],
  },
];

export const recursosFaq = [
  {
    q: "Preciso trocar meu número de WhatsApp?",
    a: "Não. O Nura pode trabalhar com WhatsApp via QR Code: você conecta seu número lendo o código, assim como faz no WhatsApp Web.",
  },
  {
    q: "Posso organizar os clientes por vendedor ou equipe?",
    a: "Sim. Filas, carteiras, responsáveis, tags, permissões e Kanban ajudam a organizar a operação por equipe, etapa e prioridade.",
  },
  {
    q: "O Nura integra com outros sistemas?",
    a: "Sim, via webhook por evento e API externa (disponível a partir do plano Start), conectando o Nura a ERPs, planilhas ou outros CRMs.",
  },
  {
    q: "Dá pra usar em mais de uma empresa na mesma conta?",
    a: "Sim, o Nura suporta operação multiempresa, com permissões separadas por usuário e função.",
  },
];

// ---------- CRM para WhatsApp ----------

export const whatsappOferece = [
  "Atendimento em equipe, com carteiras e filas — sem depender de um WhatsApp pessoal",
  "Funil de vendas visual (Kanban) com cada lead numa etapa clara",
  "Histórico centralizado por contato — qualquer atendente assume a conversa com contexto",
  "Automações comerciais por gatilho (tag, etapa, tempo parado)",
  "IA de apoio: resumo de conversa e transcrição de áudio",
  "Campanhas e agendamento de mensagens",
  "Múltiplos números de WhatsApp por conta",
];

// ---------- Sobre ----------

export const sobreCompany = {
  nome: "Allu Digital Tecnologia e Consultoria em Inteligência Artificial LTDA",
  cnpj: "57.787.089/0001-03",
  endereco: "Cotia/SP",
};

// ---------- Afiliados ----------

export const afiliadosMotivos = [
  {
    title: "Dor real, fácil de reconhecer",
    description: "Quase todo mundo que atende cliente pelo WhatsApp já viveu o caos de conversa perdida e follow-up esquecido.",
  },
  {
    title: "Preço acessível",
    description: "Planos a partir de R$350/mês tornam a indicação simples de fechar, sem negociação longa.",
  },
  {
    title: "Planos claros",
    description: "Basic, Start e Pro cobrem desde pequenas equipes até operações sob consultoria — fácil de indicar o certo pra cada perfil.",
  },
];
