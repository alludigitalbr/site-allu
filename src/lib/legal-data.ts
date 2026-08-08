import type { LegalBlock } from "@/components/legal/LegalContent";

export const legalMeta = {
  lastUpdated: "06 de agosto de 2026",
  version: "1.0",
};

export const privacyBlocks: LegalBlock[] = [
  { type: "h2", text: "1. Quem somos" },
  {
    type: "p",
    text: "O **Nura** é uma plataforma de atendimento, automação e inteligência artificial para WhatsApp, Instagram e Messenger, operada pela **ALLU DIGITAL TECNOLOGIA E CONSULTORIA EM INTELIGENCIA ARTIFICIAL LTDA**, inscrita no CNPJ sob o nº 57.787.089/0001-03, com sede em R. Vesper, 100, Casa 30, Vila Santo Antônio do Portão, Cotia/SP, CEP 06.716-715 (doravante \"Allu Digital\", \"nós\" ou \"plataforma\").",
  },
  {
    type: "p",
    text: "Atuamos como **controlador de dados pessoais** em relação às informações fornecidas por você ao se cadastrar, contratar e usar nossos serviços, e como **operador de dados pessoais** em relação aos dados dos clientes finais (os contatos e clientes dos nossos clientes) que trafegam pela plataforma.",
  },
  {
    type: "p",
    text: "Esta política se aplica ao site institucional, ao painel administrativo, à API e a todas as integrações oficiais da plataforma — incluindo as integrações com WhatsApp Business Platform, Instagram e Messenger, fornecidas pela Meta Platforms, Inc.",
  },

  { type: "h2", text: "2. Dados que coletamos" },
  { type: "p", text: "**2.1 Dados de cadastro**" },
  {
    type: "ul",
    items: [
      "Identificação: nome completo, CPF ou CNPJ, razão social.",
      "Contato: e-mail, telefone, endereço comercial.",
      "Acesso: nome de usuário, senha criptografada, tokens de autenticação.",
      "Pagamento: dados de cobrança processados pelos provedores de pagamento (não armazenamos dados completos de cartão).",
    ],
  },
  { type: "p", text: "**2.2 Dados de uso da plataforma**" },
  {
    type: "ul",
    items: [
      "Conversas: mensagens trocadas entre você (ou sua equipe) e seus clientes finais via WhatsApp, Instagram, Messenger e demais canais conectados.",
      "Mídia: imagens, áudios, vídeos e documentos enviados nas conversas.",
      "Contatos: base de clientes finais (nome, telefone, tags, histórico de atendimento).",
      "Configurações: automações, fluxos, integrações e permissões de usuários.",
    ],
  },
  { type: "p", text: "**2.3 Dados técnicos automáticos**" },
  {
    type: "ul",
    items: [
      "Conexão: endereço IP, tipo de navegador, sistema operacional, idioma.",
      "Uso: páginas visitadas, ações realizadas, timestamps, métricas de performance.",
      "Cookies: identificadores de sessão e preferências.",
    ],
  },
  {
    type: "quote",
    text: "Importante: o conteúdo das mensagens trocadas via WhatsApp, Instagram e Messenger é tratado conforme as políticas da Meta e a LGPD. Áudios podem ser transcritos automaticamente por serviços de inteligência artificial para viabilizar o atendimento — essa transcrição é processada como parte da prestação do serviço, não para treinar modelos de terceiros.",
  },

  { type: "h2", text: "3. Como usamos seus dados" },
  {
    type: "ul",
    items: [
      "Prestação do serviço: enviar, receber e gerenciar mensagens, contatos e fluxos de atendimento.",
      "Inteligência artificial: transcrição de áudio, geração de respostas automáticas e análise de conteúdo, por meio de provedores de modelos de linguagem (LLMs) contratados pela Allu Digital.",
      "Suporte técnico: investigar e resolver problemas relatados pelos usuários.",
      "Faturamento: emitir notas fiscais, processar cobranças e gerenciar assinaturas.",
      "Segurança: detectar fraudes, prevenir abusos e proteger a integridade da plataforma.",
      "Melhorias de produto: analisar métricas agregadas e anonimizadas.",
      "Comunicação institucional: notificações operacionais, comunicados de segurança e atualizações relevantes.",
      "Marketing: apenas mediante consentimento; você pode revogar a qualquer momento.",
    ],
  },

  { type: "h2", text: "4. Bases legais (LGPD)" },
  {
    type: "p",
    text: "Conforme o art. 7º da Lei nº 13.709/2018 (LGPD), tratamos dados pessoais com base em: execução de contrato, cumprimento de obrigação legal, legítimo interesse (segurança e prevenção a fraudes), consentimento (marketing e finalidades específicas) e exercício regular de direitos.",
  },

  { type: "h2", text: "5. Integração com WhatsApp, Instagram e Messenger (Meta)" },
  {
    type: "p",
    text: "Utilizamos a **WhatsApp Business Platform (Cloud API)**, a **Instagram Messaging API** e o **Messenger Platform**, fornecidos pela Meta Platforms, Inc., para permitir o envio e recebimento de mensagens com seus clientes finais.",
  },
  {
    type: "p",
    text: "Operamos em conformidade com os Termos de Serviço da Meta para Empresas, a Política de Comércio do WhatsApp, a Política de Uso Aceitável do WhatsApp Business e as Diretrizes de Mensagens do WhatsApp Business.",
  },
  {
    type: "p",
    text: "As mensagens trafegadas são armazenadas em nossos servidores apenas pelo tempo necessário para a prestação do serviço. A Meta também processa as mensagens em seus próprios servidores, conforme a política de privacidade da Meta (whatsapp.com/legal/privacy-policy-br).",
  },

  { type: "h2", text: "6. Compartilhamento de dados" },
  { type: "p", text: "Não vendemos seus dados. Compartilhamos informações pessoais apenas com:" },
  {
    type: "ul",
    items: [
      "Provedores de infraestrutura: hospedagem, banco de dados, armazenamento de mídia e e-mail transacional, todos com contratos de proteção de dados.",
      "Provedores de pagamento: para emissão de cobranças e gestão de assinaturas.",
      "Provedores de IA: DeepSeek, OpenRouter e Anthropic, para funcionalidades de transcrição de áudio e geração de respostas automáticas, exclusivamente quando você ativa essas funcionalidades.",
      "Meta Platforms: para viabilizar o envio/recebimento de mensagens via WhatsApp, Instagram e Messenger.",
      "Autoridades competentes: mediante ordem judicial, requisição administrativa ou cumprimento de obrigação legal.",
    ],
  },

  { type: "h2", text: "7. Cookies" },
  {
    type: "p",
    text: "Utilizamos cookies essenciais (autenticação e segurança de sessão) e, quando aplicável, cookies de desempenho para entender o uso da plataforma. Você pode gerenciar preferências nas configurações do seu navegador.",
  },

  { type: "h2", text: "8. Seus direitos (titular dos dados)" },
  {
    type: "p",
    text: "Conforme o art. 18 da LGPD: confirmação e acesso, correção, anonimização/bloqueio/eliminação, portabilidade, informação sobre compartilhamento, revogação de consentimento e oposição.",
  },
  {
    type: "p",
    text: "Para exercer seus direitos, entre em contato pelo e-mail **contato@alludigital.com.br**. Responderemos em até 15 dias úteis.",
  },

  { type: "h2", text: "9. Segurança da informação" },
  {
    type: "p",
    text: "Adotamos medidas técnicas e organizacionais, incluindo criptografia em trânsito (TLS), controles de acesso, autenticação, monitoramento de eventos de segurança e backups regulares. Em caso de incidente que possa gerar risco relevante, notificaremos a ANPD e os titulares afetados conforme exigido por lei.",
  },

  { type: "h2", text: "10. Retenção e exclusão" },
  {
    type: "ul",
    items: [
      "Dados de cadastro e fiscais: durante a vigência do contrato e por mais 5 anos após a rescisão (obrigações legais e fiscais).",
      "Mensagens e conversas: durante a vigência do contrato; após cancelamento, excluídas em até 30 dias, salvo obrigação legal de retenção.",
      "Dados de log: 6 meses, conforme o Marco Civil da Internet (Lei 12.965/2014).",
      "Dados de marketing: até a revogação do consentimento.",
    ],
  },

  { type: "h2", text: "11. Transferência internacional" },
  {
    type: "p",
    text: "Alguns provedores (incluindo Meta Platforms e provedores de IA/nuvem) podem estar localizados fora do Brasil. Garantimos que qualquer transferência internacional observe as hipóteses do art. 33 da LGPD.",
  },

  { type: "h2", text: "12. Menores de idade" },
  {
    type: "p",
    text: "Nossos serviços não se destinam a menores de 18 anos. Não coletamos intencionalmente dados de menores; caso identificados, serão excluídos prontamente.",
  },

  { type: "h2", text: "13. Alterações desta política" },
  {
    type: "p",
    text: "Podemos atualizar esta política periodicamente. Alterações materiais serão comunicadas com antecedência razoável. A data de atualização consta no início do documento.",
  },

  { type: "h2", text: "14. Contato — Encarregado de Dados (DPO)" },
  {
    type: "table",
    rows: [
      ["Empresa", "Allu Digital Tecnologia e Consultoria em Inteligência Artificial LTDA"],
      ["CNPJ", "57.787.089/0001-03"],
      ["E-mail", "contato@alludigital.com.br"],
      ["Endereço", "R. Vesper, 100, Casa 30 — Vila Santo Antônio do Portão, Cotia/SP, CEP 06.716-715"],
      ["Prazo de resposta", "Até 15 dias úteis"],
    ],
  },
  {
    type: "p",
    text: "Você também pode acionar a Autoridade Nacional de Proteção de Dados (ANPD) em www.gov.br/anpd.",
  },
];

export const termsBlocks: LegalBlock[] = [
  { type: "h2", text: "1. Aceitação dos Termos" },
  {
    type: "p",
    text: "Estes Termos de Uso constituem um contrato entre você (\"Usuário\") e a **ALLU DIGITAL TECNOLOGIA E CONSULTORIA EM INTELIGENCIA ARTIFICIAL LTDA**, CNPJ 57.787.089/0001-03, com sede em Cotia/SP, mantenedora da plataforma **Nura** (\"Allu Digital\", \"Nura\", \"nós\" ou \"plataforma\"). Ao criar conta, contratar um plano ou usar a plataforma, você aceita estes Termos e nossa Política de Privacidade.",
  },

  { type: "h2", text: "2. Definições" },
  {
    type: "ul",
    items: [
      "Plataforma: software, APIs, painel administrativo e serviços associados.",
      "Usuário: pessoa física ou jurídica que contrata os serviços.",
      "Conteúdo: mensagens, mídias, contatos, fluxos e dados inseridos ou processados na plataforma.",
      "Cliente Final: destinatário das mensagens enviadas pelo Usuário através da plataforma.",
    ],
  },

  { type: "h2", text: "3. Cadastro e conta" },
  {
    type: "p",
    text: "Você deve ter no mínimo 18 anos (pessoa física) ou ser pessoa jurídica regularmente constituída, fornecer informações verdadeiras e cumprir os requisitos da Meta Platforms para uso da WhatsApp Business Platform, Instagram e Messenger. Você é responsável por proteger suas credenciais de acesso.",
  },

  { type: "h2", text: "4. Descrição do serviço" },
  {
    type: "p",
    text: "A plataforma é um SaaS multi-tenant de atendimento, automação e inteligência artificial para WhatsApp, Instagram, Messenger e demais canais, oferecendo: caixa de entrada unificada, automações e fluxos, integração com modelos de IA (transcrição de áudio, respostas inteligentes), campanhas respeitando as políticas da Meta, painel administrativo e APIs/webhooks para integração com sistemas próprios.",
  },
  {
    type: "p",
    text: "O conjunto de funcionalidades depende do plano contratado e pode ser alterado, observado o equilíbrio contratual.",
  },

  { type: "h2", text: "5. Planos e pagamento" },
  {
    type: "p",
    text: "Cobrança em regime de assinatura recorrente. Preços e planos vigentes são apresentados no momento da contratação. O custo de mensagens cobradas pela Meta no modelo de conversações do WhatsApp Business Platform é repassado ao Usuário conforme tabela vigente da Meta.",
  },

  { type: "h2", text: "6. Atraso, suspensão e cancelamento" },
  {
    type: "p",
    text: "Em caso de atraso, será concedida tolerância antes da suspensão do serviço. O Usuário pode cancelar a qualquer momento pelo painel; o cancelamento produz efeitos ao final do ciclo vigente. Após o cancelamento, o Usuário tem 30 dias para solicitar exportação de dados antes da exclusão definitiva, ressalvadas obrigações legais de retenção.",
  },

  { type: "h2", text: "7. Uso aceitável" },
  {
    type: "p",
    text: "É vedado: enviar spam ou mensagens em desconformidade com as políticas do WhatsApp Business; transmitir conteúdo ilegal, ofensivo ou que viole direitos de terceiros; realizar fraudes ou phishing; burlar limites técnicos ou explorar vulnerabilidades; coletar dados de terceiros sem consentimento; compartilhar credenciais com não autorizados.",
  },

  { type: "h2", text: "8. Conformidade com a Meta" },
  {
    type: "p",
    text: "A plataforma opera integrada à WhatsApp Business Platform, Instagram Messaging API e Messenger Platform da Meta. O Usuário se compromete a observar os Termos de Serviço da Meta para Empresas, a Política de Comércio do WhatsApp, a Política de Uso Aceitável do WhatsApp Business e as Diretrizes de Mensagens do WhatsApp Business.",
  },
  {
    type: "quote",
    text: "Importante: o bloqueio, banimento ou restrição de números/contas pela Meta é decisão exclusiva da Meta Platforms. A Allu Digital não tem ingerência sobre essas decisões.",
  },

  { type: "h2", text: "9. Propriedade intelectual" },
  {
    type: "p",
    text: "A plataforma, software, marca e documentação são de propriedade exclusiva da Allu Digital. A contratação concede licença limitada, não exclusiva e revogável de uso. O conteúdo inserido pelo Usuário permanece de sua propriedade; a Allu Digital recebe licença limitada para processá-lo apenas para prestar o serviço.",
  },

  { type: "h2", text: "10. Limitação de responsabilidade" },
  {
    type: "p",
    text: "A Allu Digital não garante disponibilidade ininterrupta nem resultados comerciais específicos, e não responde por: bloqueios/banimentos impostos pela Meta, falhas de provedores terceiros, uso indevido por credenciais comprometidas, ou conteúdo enviado/processado pelo Usuário e seus clientes finais. A responsabilidade total está limitada ao valor pago nos últimos 12 meses de assinatura.",
  },

  { type: "h2", text: "11. Indenização" },
  {
    type: "p",
    text: "O Usuário se compromete a indenizar a Allu Digital por reclamações decorrentes de violação destes Termos, uso indevido da plataforma ou reclamações de terceiros relacionadas à sua atuação.",
  },

  { type: "h2", text: "12. Modificações dos Termos" },
  {
    type: "p",
    text: "Podem ser atualizados periodicamente; alterações materiais serão comunicadas com antecedência mínima de 30 dias.",
  },

  { type: "h2", text: "13. Foro e legislação aplicável" },
  {
    type: "p",
    text: "Regidos pelas leis do Brasil. Fica eleito o foro da comarca de Cotia/SP, ressalvado o direito do consumidor de optar pelo foro de seu domicílio.",
  },

  { type: "h2", text: "14. Contato" },
  {
    type: "table",
    rows: [
      ["Empresa", "Allu Digital Tecnologia e Consultoria em Inteligência Artificial LTDA"],
      ["CNPJ", "57.787.089/0001-03"],
      ["E-mail", "contato@alludigital.com.br"],
      ["Endereço", "R. Vesper, 100, Casa 30 — Vila Santo Antônio do Portão, Cotia/SP, CEP 06.716-715"],
    ],
  },
];
