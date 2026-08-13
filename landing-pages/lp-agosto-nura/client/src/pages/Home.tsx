/* Style direction: Operação em Foco — editorial SaaS, paper quente, ink navy,
   Nura Tangerine for action, spacious asymmetry, and product evidence first. */

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Facebook,
  Gauge,
  Hash,
  Instagram,
  LayoutDashboard,
  Menu,
  MessageCircle,
  MessagesSquare,
  Network,
  Phone,
  Play,
  Route,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Tag,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

const ASSETS = {
  logo: "/manus-storage/nura-logo_6953928f.svg",
  icon: "/manus-storage/nura-icon_a1fdd670.svg",
  kanban: "/manus-storage/kanban-operacional_6d0cb99e.png",
  dashboard: "/manus-storage/dashboard-indicadores_24a90946.png",
  funnel: "/manus-storage/funil-vendas_17ab036c.png",
};

const WHATSAPP_NUMBER = "5511914373505";
const OFFER_MESSAGE =
  "Olá! Vim pela campanha de agosto e quero garantir a condição especial do Nura CRM: ativação de R$350 + mensalidade de R$350, sem fidelidade.";

function buildWhatsAppUrl(message = OFFER_MESSAGE) {
  const params = new URLSearchParams(window.location.search);
  const attribution = [
    params.get("utm_source"),
    params.get("utm_medium"),
    params.get("utm_campaign"),
  ]
    .filter(Boolean)
    .join(" / ");

  const finalMessage = attribution
    ? `${message}\n\nOrigem: ${attribution}`
    : message;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
}

function track(event: string) {
  const umami = (
    window as Window & {
      umami?: { track: (eventName: string) => void };
    }
  ).umami;
  umami?.track(event);
}

function CtaLink({
  children,
  secondary = false,
  className = "",
  message = OFFER_MESSAGE,
}: {
  children: ReactNode;
  secondary?: boolean;
  className?: string;
  message?: string;
}) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      onClick={() => track(secondary ? "cta-specialist" : "cta-august-offer")}
      className={`cta-link ${secondary ? "cta-link--secondary" : "cta-link--primary"} ${className}`}
    >
      <span>{children}</span>
      {secondary ? <ArrowRight size={17} strokeWidth={2.3} /> : <MessageCircle size={18} strokeWidth={2.25} />}
    </a>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? "reveal--visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const painPoints = [
  "Você sabe quem está esperando resposta agora?",
  "Qual vendedor está cuidando de cada lead?",
  "Quantos atendimentos ficaram parados hoje?",
  "Seu time ainda controla conversas por planilha?",
];

const featureGroups = [
  {
    number: "01",
    icon: MessagesSquare,
    label: "INBOX UNIFICADO",
    title: "Toda conversa chega no lugar certo.",
    description: "WhatsApp, Instagram e Facebook em uma operação compartilhada, com histórico e contexto para o time inteiro.",
    tags: ["WhatsApp", "Instagram", "Facebook"],
    tone: "mint",
  },
  {
    number: "02",
    icon: Route,
    label: "ORGANIZAÇÃO",
    title: "Leads sem disputa. Responsáveis claros.",
    description: "Filas, carteiras, tags, permissões e Kanban para saber o próximo passo de cada atendimento.",
    tags: ["Kanban", "Carteiras", "Tags"],
    tone: "orange",
  },
  {
    number: "03",
    icon: Bot,
    label: "AUTOMAÇÃO + IA",
    title: "Seu time ganha tempo sem perder o toque humano.",
    description: "Chatbots, FlowBuilder, agentes de IA e integrações para automatizar o que é repetitivo e escalar o que funciona.",
    tags: ["FlowBuilder", "Agentes de IA", "Webhooks"],
    tone: "blue",
  },
  {
    number: "04",
    icon: Gauge,
    label: "VISÃO DE GESTÃO",
    title: "Decisões com dados, não com sensação.",
    description: "Acompanhe volume, tempo de resposta, satisfação e desempenho da operação em tempo real.",
    tags: ["Dashboards", "Relatórios", "Indicadores"],
    tone: "ink",
  },
];

const faqs = [
  {
    question: "Preciso trocar meu número de WhatsApp?",
    answer: "Não. O Nura pode trabalhar com WhatsApp via QR Code: você conecta seu número lendo o código, assim como faz no WhatsApp Web. A equipe orienta a melhor configuração para a sua operação.",
  },
  {
    question: "A oferta de agosto tem taxa de implantação?",
    answer: "Não. Nesta campanha não haverá taxa de implantação. A condição é uma taxa de ativação de R$350 e mensalidade de R$350.",
  },
  {
    question: "O que está incluído nessa condição?",
    answer: "Até 20 usuários, departamentos/filas sem limite e todas as funcionalidades habilitadas, sem criar uma combinação de planos para você escolher.",
  },
  {
    question: "Existe fidelidade ou multa de cancelamento?",
    answer: "Não. A oferta não tem fidelidade e você pode cancelar quando quiser.",
  },
  {
    question: "Posso organizar os clientes por vendedor ou equipe?",
    answer: "Sim. Filas, carteiras, responsáveis, tags, permissões e Kanban ajudam a organizar a operação por equipe, etapa e prioridade.",
  },
  {
    question: "Consigo usar IA e integrar com outros sistemas?",
    answer: "Sim. O Nura reúne automações, chatbot, agentes de IA, FlowBuilder, webhooks e integrações para adaptar a operação aos seus processos.",
  },
];

const offerFeatures = [
  "Dash de gestão dos atendimentos",
  "Dash de indicadores",
  "Instagram",
  "Facebook",
  "Carteirização",
  "Agendamento",
  "Chat interno",
  "Kanban",
  "API de integração",
  "Integrações com n8n, webhooks, Typebot e outras ferramentas",
  "IA",
  "Agente Supervisor de Atendimento",
  "Respostas rápidas",
  "Transcrição de áudio para texto",
  "Tags",
  "FlowBuilder",
  "Funil de vendas",
];

function NuraMark({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand-lockup ${light ? "brand-lockup--light" : ""}`}>
      <img src={ASSETS.icon} alt="" className="brand-lockup__icon" />
      <div>
        <div className="brand-lockup__name">NURA</div>
        <div className="brand-lockup__descriptor">ATENDIMENTO • IA • KANBAN</div>
      </div>
    </div>
  );
}

function AppWindow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`app-window ${className}`}>
      <div className="app-window__bar">
        <span className="app-window__dots"><i /><i /><i /></span>
        <span className="app-window__url">crm.chatallu.com.br / operação</span>
        <ShieldCheck size={15} />
      </div>
      {children}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <a href="#top" aria-label="Nura CRM — início" onClick={closeMenu}>
            <NuraMark />
          </a>

          <nav className={`site-nav ${mobileMenuOpen ? "site-nav--open" : ""}`} aria-label="Navegação principal">
            <a href="#problema" onClick={closeMenu}>O problema</a>
            <a href="#solucao" onClick={closeMenu}>Como funciona</a>
            <a href="#recursos" onClick={closeMenu}>Recursos</a>
            <a href="#oferta" onClick={closeMenu}>Oferta</a>
            <CtaLink secondary className="site-nav__cta">Falar com especialista</CtaLink>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section paper-grid">
          <div className="container hero-section__inner">
            <div className="hero-copy">
              <div className="campaign-chip"><span className="campaign-chip__dot" /> OFERTA DE AGOSTO · CONDIÇÃO ÚNICA</div>
              <p className="eyebrow">CENTRAL DE ATENDIMENTO E VENDAS</p>
              <h1>Seu WhatsApp virou uma operação. <span className="highlight-orange">Agora ela precisa de um centro.</span></h1>
              <p className="hero-copy__lead">O Nura reúne WhatsApp, Instagram, equipe, filas, carteiras, Kanban e IA em uma única operação — para você parar de procurar conversa e começar a enxergar o que está acontecendo.</p>
              <div className="hero-actions">
                <CtaLink>Quero garantir a condição de agosto</CtaLink>
                <a href="#solucao" className="text-link">Ver como o Nura organiza <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-proof-row">
                <span><Check size={14} /> Até 20 usuários</span>
                <span><Check size={14} /> Filas sem limite</span>
                <span><Check size={14} /> Sem fidelidade</span>
              </div>
            </div>

            <Reveal className="hero-visual" delay={120}>
              <div className="hero-visual__note note-top"><span>01</span> TUDO NO LUGAR CERTO</div>
              <AppWindow>
                <div className="hero-visual__canvas">
                  <img src={ASSETS.kanban} alt="Kanban operacional do Nura com filas de atendimento e indicadores" />
                  <div className="hero-visual__overlay hero-visual__overlay--top"><span className="status-dot" /> 18 atendimentos em andamento</div>
                  <div className="hero-visual__overlay hero-visual__overlay--bottom"><Sparkles size={14} /> IA disponível para o time</div>
                </div>
              </AppWindow>
              <div className="hero-visual__note note-bottom"><ArrowRight size={15} /> Mais clareza. Menos retrabalho.</div>
            </Reveal>
          </div>
          <div className="hero-scroll-hint"><span>SCROLL PARA ORGANIZAR</span><ArrowDownRight size={16} /></div>
        </section>

        <section className="pain-section" id="problema">
          <div className="container">
            <div className="section-kicker section-kicker--light"><span>O CUSTO DA DESORGANIZAÇÃO</span><span className="section-kicker__line" /></div>
            <div className="pain-section__intro">
              <h2>Quando o atendimento cresce, <em>o improviso começa a cobrar.</em></h2>
              <p>O problema não é ter muitas conversas. É não conseguir saber qual delas merece atenção agora.</p>
            </div>
            <div className="pain-grid">
              {painPoints.map((pain, index) => (
                <Reveal key={pain} delay={index * 60} className="pain-card">
                  <span className="pain-card__number">0{index + 1}</span>
                  <p>{pain}</p>
                  <ArrowDownRight size={18} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="solution-section" id="solucao">
          <div className="container">
            <div className="section-kicker"><span>A OPERAÇÃO NO CENTRO</span><span className="section-kicker__line" /></div>
            <div className="solution-section__heading">
              <div>
                <h2>Um lugar para acompanhar <span className="highlight-mint">todas as conversas.</span></h2>
              </div>
              <p>O Nura centraliza os canais e transforma atendimento espalhado em um fluxo que sua equipe consegue seguir, medir e melhorar.</p>
            </div>

            <div className="solution-stage">
              <div className="solution-stage__rail"><span>01</span><span className="rail-line" /><span>02</span><span className="rail-line" /><span>03</span></div>
              <Reveal className="solution-stage__product">
                <AppWindow>
                  <div className="solution-dashboard">
                    <div className="solution-dashboard__sidebar">
                      <div className="mini-brand"><img src={ASSETS.icon} alt="" /></div>
                      <span className="mini-sidebar__active"><MessagesSquare size={13} /> Inbox</span>
                      <span><LayoutDashboard size={13} /> Dashboard</span>
                      <span><UsersRound size={13} /> Equipe</span>
                      <span><Settings2 size={13} /> Configurações</span>
                    </div>
                    <div className="solution-dashboard__main">
                      <div className="solution-dashboard__top"><div><small>VISÃO GERAL</small><strong>Olá, equipe Nura</strong></div><span className="mini-avatar">MV</span></div>
                      <div className="metric-row">
                        <div><small>ATENDIMENTOS</small><strong>248</strong><span className="metric-up">+18,4%</span></div>
                        <div><small>EM ESPERA</small><strong>12</strong><span className="metric-warn">atenção</span></div>
                        <div><small>TEMPO MÉDIO</small><strong>04:12</strong><span className="metric-down">-08,2%</span></div>
                      </div>
                      <div className="mini-chart"><div className="mini-chart__head"><span>Volume por canal</span><span>Hoje <ChevronDown size={12} /></span></div><div className="chart-bars"><i style={{ height: "44%" }} /><i style={{ height: "65%" }} /><i style={{ height: "52%" }} /><i style={{ height: "78%" }} /><i style={{ height: "60%" }} /><i style={{ height: "88%" }} /><i style={{ height: "72%" }} /><i style={{ height: "94%" }} /></div><div className="chart-labels"><span>09h</span><span>12h</span><span>15h</span><span>18h</span></div></div>
                    </div>
                  </div>
                </AppWindow>
              </Reveal>
              <div className="solution-stage__callout callout-one"><span>01</span><strong>Canais conectados</strong><small>WhatsApp · Instagram · Facebook</small></div>
              <div className="solution-stage__callout callout-two"><span>02</span><strong>Time organizado</strong><small>Filas · carteiras · responsáveis</small></div>
              <div className="solution-stage__callout callout-three"><span>03</span><strong>Gestão visível</strong><small>Indicadores em tempo real</small></div>
            </div>
          </div>
        </section>

        <section className="feature-section" id="recursos">
          <div className="container">
            <div className="feature-section__heading">
              <div><div className="section-kicker"><span>RECURSOS QUE TRABALHAM JUNTOS</span><span className="section-kicker__line" /></div><h2>Não é sobre ter mais ferramentas. <span className="highlight-orange">É sobre operar melhor.</span></h2></div>
              <p>Tudo o que você precisa para atender, organizar, automatizar e acompanhar — já habilitado na condição de agosto.</p>
            </div>
            <div className="feature-grid">
              {featureGroups.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Reveal key={feature.number} delay={index * 70} className={`feature-card feature-card--${feature.tone}`}>
                    <div className="feature-card__top"><span>{feature.number}</span><Icon size={22} strokeWidth={1.8} /></div>
                    <p className="feature-card__label">{feature.label}</p>
                    <h3>{feature.title}</h3>
                    <p className="feature-card__description">{feature.description}</p>
                    <div className="feature-card__tags">{feature.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="proof-section">
          <div className="container proof-section__inner">
            <Reveal className="proof-section__copy">
              <div className="section-kicker"><span>PROVA VISUAL</span><span className="section-kicker__line" /></div>
              <h2>O que antes ficava escondido na conversa, <span className="highlight-mint">aparece na tela.</span></h2>
              <p>Veja a operação acontecendo: filas, responsáveis, indicadores e próximos passos em uma visão que seu time consegue usar no dia a dia.</p>
              <div className="proof-list"><span><CircleCheck size={17} /> Atendimento acompanhado ao vivo</span><span><CircleCheck size={17} /> Histórico para não perder contexto</span><span><CircleCheck size={17} /> Gestão sem depender de planilha</span></div>
              <a href={buildWhatsAppUrl("Olá! Quero ver o Nura funcionando e entender como ele pode organizar minha operação.")} target="_blank" rel="noreferrer" className="arrow-link" onClick={() => track("cta-see-product")}>Quero ver o Nura funcionando <ArrowRight size={17} /></a>
            </Reveal>
            <Reveal className="proof-section__visual" delay={120}>
              <div className="proof-section__stamp">VISÃO<br /><strong>REAL</strong></div>
              <AppWindow><img src={ASSETS.dashboard} alt="Dashboard de indicadores do Nura com volume, tempo de resposta e satisfação" loading="lazy" /></AppWindow>
              <span className="proof-section__caption">Dashboard de indicadores · Nura CRM</span>
              <div className="proof-section__secondary-visual">
                <AppWindow><img src={ASSETS.funnel} alt="Funil de Vendas do Nura com etapas de novos leads, qualificação, negociação e fechamento" loading="lazy" /></AppWindow>
                <span className="proof-section__caption">Funil de vendas · etapas configuráveis para acompanhar cada lead</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="steps-section">
          <div className="container">
            <div className="section-kicker"><span>COMO COMEÇAR</span><span className="section-kicker__line" /></div>
            <div className="steps-section__heading"><h2>Três movimentos para tirar a operação do improviso.</h2><p>O especialista entende seu cenário, orienta a conexão dos canais e ajuda sua equipe a começar com clareza.</p></div>
            <div className="steps-grid">
              <div className="step-card"><div className="step-card__index">01</div><Network size={24} /><h3>Conecte seus canais</h3><p>WhatsApp, Instagram e Facebook em uma central de atendimento.</p></div>
              <div className="step-card step-card--active"><div className="step-card__index">02</div><UsersRound size={24} /><h3>Organize a equipe</h3><p>Defina filas, carteiras, responsáveis e o fluxo de cada atendimento.</p></div>
              <div className="step-card"><div className="step-card__index">03</div><Gauge size={24} /><h3>Acompanhe e automatize</h3><p>Use indicadores, automações e IA para ganhar previsibilidade.</p></div>
            </div>
          </div>
        </section>

        <section className="offer-section" id="oferta">
          <div className="container offer-section__inner">
            <div className="offer-section__intro">
              <div className="section-kicker section-kicker--light"><span>A CONDIÇÃO DE AGOSTO</span><span className="section-kicker__line" /></div>
              <h2>Uma oferta. <em>Sem letra miúda.</em></h2>
              <p>Para empresas que querem organizar a operação agora, sem começar por um plano limitado ou por um contrato longo.</p>
              <div className="offer-section__aside"><Clock3 size={17} /><span>Disponível somente para contratos fechados em agosto.</span></div>
            </div>
            <Reveal className="offer-card" delay={120}>
              <div className="offer-card__ribbon">OFERTA ESPECIAL · AGOSTO</div>
              <div className="offer-card__body">
                <div className="offer-card__top"><NuraMark light /><span className="offer-card__available"><span /> condição ativa</span></div>
                <p className="offer-card__eyebrow">Acesso completo para organizar sua operação</p>
                <div className="offer-card__pricing">
                  <div><small>TAXA DE ATIVAÇÃO</small><strong>R$ 350</strong><span>uma única vez</span></div>
                  <div className="offer-card__plus">+</div>
                  <div><small>MENSALIDADE</small><strong>R$ 350<sup>/mês</sup></strong><span>cancele quando quiser</span></div>
                </div>
                <div className="offer-card__divider" />
                <div className="offer-card__benefits"><span><Check size={16} /> Sem taxa de implantação</span><span><Check size={16} /> Até 20 usuários</span><span><Check size={16} /> Departamentos/filas sem limite</span><span><Check size={16} /> Todas as funcionalidades habilitadas</span><span><Check size={16} /> Sem fidelidade</span></div>
                <div className="offer-card__included">
                  <p className="offer-card__included-title">Tudo habilitado para sua operação</p>
                  <div className="offer-card__included-grid">{offerFeatures.map((feature) => <span key={feature}><Check size={14} /> {feature}</span>)}</div>
                </div>
                <CtaLink className="offer-card__cta">Quero ativar minha condição</CtaLink>
                <p className="offer-card__fineprint">Condição válida para contratos fechados durante o mês de agosto. Consulte o especialista sobre a ativação da sua operação.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="faq-section">
          <div className="container faq-section__inner">
            <div className="faq-section__heading"><div className="section-kicker"><span>ANTES DE FALAR COM O TIME</span><span className="section-kicker__line" /></div><h2>As dúvidas que costumam travar uma decisão.</h2><p>Se a sua pergunta não estiver aqui, o especialista continua a conversa no WhatsApp.</p><CtaLink secondary className="faq-section__cta">Falar com um especialista</CtaLink></div>
            <div className="faq-list">
              {faqs.map((faq) => <details key={faq.question} className="faq-item"><summary>{faq.question}<span className="faq-item__icon"><ChevronDown size={17} /></span></summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="container final-cta-section__inner">
            <div className="final-cta-section__mark"><img src={ASSETS.icon} alt="" /><span>05<br />AGO</span></div>
            <div><p className="eyebrow eyebrow--light">O PRÓXIMO ATENDIMENTO PODE COMEÇAR AQUI</p><h2>Chega de perder cliente por falta de organização.</h2><p>Converse com o time da Allu Digital e veja como levar sua operação para o Nura — com a condição especial de agosto.</p></div>
            <CtaLink className="final-cta-section__button">Quero falar sobre o Nura</CtaLink>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div><NuraMark /><p>Atendimento, IA e organização em um só lugar.</p></div>
          <div className="site-footer__contact"><span>Allu Digital</span><a href="mailto:contato@alludigital.com.br">contato@alludigital.com.br</a><a href={buildWhatsAppUrl("Olá! Quero falar com o time da Allu Digital sobre o Nura.")} target="_blank" rel="noreferrer">(11) 91437-3505</a></div>
          <div className="site-footer__legal"><span>Seg–Sex · 9h–18h</span><span>© 2026 Allu Digital</span></div>
        </div>
      </footer>

      <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer" className="mobile-sticky-cta" onClick={() => track("cta-mobile-sticky")}><MessageCircle size={18} /> Conhecer a condição de agosto <ArrowRight size={17} /></a>
    </div>
  );
}
