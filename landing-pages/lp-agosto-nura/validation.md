# Validação da LP

## Verificações realizadas

| Item | Resultado |
|---|---|
| Página carrega na prévia | OK |
| Título e descrição em português | OK |
| Oferta de agosto aparece no hero e na seção comercial | OK |
| Condição de ativação e mensalidade | OK: R$350 + R$350/mês |
| Sem implantação, sem fidelidade, cancelamento quando quiser | OK |
| Até 20 usuários e filas/departamentos sem limite | OK |
| Todos os recursos habilitados | OK |
| CTAs com WhatsApp | OK; número público atual da Allu Digital |
| Preservação de UTM no link do WhatsApp | OK; `utm_source`, `utm_medium` e `utm_campaign` são adicionados à mensagem |
| FAQ | OK; 6 objeções respondidas |
| Imagens do produto | OK; Kanban e dashboard reais do Nura foram publicados no armazenamento do projeto |
| Mobile sticky CTA | Implementado para viewport até 720px |
| Tipos e build | OK; `pnpm check` e `pnpm build` concluídos |

## Observações para publicação

O CTA está configurado para `+55 11 91437-3505`, número observado na página institucional do Nura. Antes de ativar campanhas, confirmar com a equipe se esse é o número definitivo de atendimento comercial da oferta de agosto. Também é recomendável inserir os IDs definitivos de Meta Pixel/Google Ads caso a equipe queira eventos além do analytics Umami já presente no template.

Não foram adicionados depoimentos, avaliações ou números de performance não fornecidos, para evitar prova social fabricada.

## Revisão do Funil de Vendas

O screenshot fornecido pelo usuário foi publicado como `/manus-storage/funil-vendas_17ab036c.png` e incorporado à seção de prova visual. A versão de desenvolvimento foi validada em desktop e mobile; a imagem mantém o início da navegação e as etapas do funil com `object-position: left center` em telas menores.

O FAQ agora explica: “Não. O Nura pode trabalhar com WhatsApp via QR Code: você conecta seu número lendo o código, assim como faz no WhatsApp Web. A equipe orienta a melhor configuração para a sua operação.”

A seção da oferta agora lista, além das condições comerciais, dashboard de gestão, dashboard de indicadores, Instagram, Facebook, carteirização, agendamento, chat interno, Kanban, API, integrações com n8n/webhooks/Typebot, IA, agente supervisor, respostas rápidas, transcrição de áudio, tags, FlowBuilder e funil de vendas.

O domínio público ainda mostra o checkpoint anterior até o salvamento do próximo checkpoint, comportamento esperado do fluxo de publicação automática.

Na prévia atualizada, foram confirmados o screenshot do Funil de Vendas, o texto do QR Code com referência ao WhatsApp Web e a lista completa de funcionalidades no card da oferta. Os CTAs continuam gerando links para o WhatsApp com `utm_source`, `utm_medium` e `utm_campaign` incorporados à mensagem.
