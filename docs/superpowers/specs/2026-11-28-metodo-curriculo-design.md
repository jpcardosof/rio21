# Método Rio21: currículo semanal, Graus de Valores e app MentorFlow

Data: 2026-11-28 · Estado: proposta para aprovação

## Intenção
Quem ainda não conhece a Rio21 deve perceber, logo no site, que existe uma estrutura completa por trás das aulas: um currículo semana a semana para cada turma e um sistema de valores para as crianças. É uma prova de qualidade para novos alunos e pais. O objetivo principal do site continua a ser a marcação da aula experimental gratuita.

## Objetivos
- Mostrar na página principal, de forma curta, o que se treina **esta semana** em cada turma ("Esta semana no tatame"), com ligação para o detalhe.
- Criar a página **Método** (`/metodo` em PT, `/en/method` em EN) com o currículo completo de cada turma, a semana atual destacada e os **Graus de Valores** das crianças.
- Indicar a semana do ciclo em que estamos, calculada automaticamente.
- Adicionar no fim da página um bloco **"Já és aluno?"** com os links da app MentorFlow (App Store e Google Play).
- Introduzir uma biblioteca de animação leve para dar mais vida às transições sem pesar no carregamento.

## Não objetivos
- Não substituir o horário nem a marcação da aula grátis por WhatsApp.
- Não criar área de aluno, login ou marcação de aulas no site (isso é feito no MentorFlow).
- Não editar currículos através de um painel; os dados vivem num ficheiro de código.

## Anti-objetivos
- A página principal não pode voltar a ficar pesada: o destaque é um único cartão.
- O CTA da aula grátis não pode competir com o MentorFlow (este fica no fim, para quem já é aluno).
- Nada de travessões "—" nos textos; tom profissional (PT-PT com "tu").

## Fontes
PDFs enviados pela academia: Currículo Mini Kids (30 min, 16 semanas), Kids I e II (50 min, 16 semanas), Iniciantes (1h, 16 semanas), Avançados (1h30, 16 semanas), Feminino (1h, 8 semanas) e Graus de Valores (5 graus).

## Abordagens consideradas
- **A) Secção completa na página principal:** tudo visível, mas volta a tornar a página principal pesada.
- **B) Destaque na página principal + página Método (escolhida pelo utilizador):** a página principal fica leve e mostra que o método está "vivo"; o detalhe fica numa página própria, boa também para SEO.
- **C) Só página Método no menu:** limpo, mas novos visitantes dificilmente a encontram.

## Desenho

### Contagem de semanas
- Início do ciclo: **segunda-feira, 16 de novembro de 2026** (hoje, sábado 28/11, é o último dia da semana 2).
- Semana atual = `floor(dias desde o início / 7) % semanasDoCiclo + 1`, no fuso Europe/Lisbon.
- Cada turma usa o seu ciclo: 16 semanas (Mini Kids, Kids, Iniciantes, Avançados) ou 8 (Feminino). Ao fim do ciclo recomeça na semana 1.
- Calculada no browser após carregar (o site é estático; se fosse calculada no build ficava desatualizada). O HTML inicial mostra a semana do momento do build e é corrigido ao montar.
- A data de início fica num só sítio (`siteConfig`) para a academia poder reiniciar o ciclo.

### Dados
- Novo ficheiro `content/curriculum.ts`: por turma, `id`, duração, número de semanas e lista de semanas. Cada semana tem blocos com rótulo (ex.: "Defesa pessoal", "Jiu-Jitsu desportivo", "Tópico") e conteúdo.
- Textos em PT conforme os PDFs (com revisão ortográfica PT-PT, ex.: "quadril" mantém-se por ser termo técnico usado pela academia). Versão EN traduzida com terminologia BJJ habitual.

### Página principal: "Esta semana no tatame"
- Um cartão logo a seguir ao Horário: "Semana N de 16", e uma linha por turma com o tema principal da semana, e botão "Ver o método completo".
- Também um link "Método" no menu.

### Página Método
1. Cabeçalho curto: título, introdução ("um currículo de 16 semanas para cada turma…"), destaque da semana atual.
2. Separadores por turma (Mini Kids, Kids I e II, Iniciantes, Avançados, Feminino), com duração da aula.
3. Para a turma escolhida: cartão grande "Esta semana" + grelha das semanas do ciclo (4 colunas no computador, 1 no telemóvel), semana atual realçada a amarelo, semanas passadas ligeiramente esbatidas.
4. Graus de Valores: os 5 graus com a sua cor (pequena amostra de cor, para não fugir ao design system), frase, três pontos e "Como se perde".
5. CTA final para a aula grátis.

### Graus de Valores na página principal (pedido do utilizador)
- Dentro da secção Sobre ("Formar pessoas dentro e fora do tatame"), por baixo do texto e da foto: título "Graus de Valores · Para crianças", frase "Pequenas atitudes, grandes conquistas", parágrafo curto sobre como funciona (cada grau é um valor praticado em casa, na escola e no tatame; a família acompanha e pode retirar o grau).
- Os 5 graus como riscas coloridas (como graus numa faixa), cada uma com o nome do valor; em linha no computador, em lista no telemóvel. Riscas aparecem em cascata.
- Link "Ver como funciona" para a secção dos Graus na página Método (`/metodo#graus`).

### "Já és aluno?" (MentorFlow)
- Faixa discreta antes do rodapé, em todas as páginas: "Já és aluno? Marca as tuas aulas na app MentorFlow" com botões App Store e Google Play.

### Animações
- Biblioteca: **Motion** (motion.dev), carregada com `LazyMotion` + `domAnimation` (~15 KB, carregado de forma assíncrona), com `MotionConfig reducedMotion="user"`.
- Usos: indicador deslizante nos separadores, transição suave do conteúdo ao mudar de turma, entrada em cascata dos cartões das semanas, contador da semana.
- As animações CSS atuais mantêm-se onde já funcionam (são mais leves).

### Navegação, idiomas e SEO
- Rotas: `app/(pt)/metodo` e `app/(en)/en/method`; metadados com hreflang, entrada no sitemap.
- Links do menu passam a apontar para a página principal com âncora (`/#aulas`) quando se está na página Método.
- A troca PT/EN na página Método leva para a página Método do outro idioma.

## Decisões do builder (minhas)
- Posição do destaque: depois do Horário.
- Nome da página: "Método" (EN "Method").
- Motion em vez de GSAP (mais pesada) ou só CSS (sem transições de saída/indicador).
- Kids I e II partilham um único currículo (o PDF é "Kids I e II").
- Turmas sem currículo próprio (Adolescentes, Todos os níveis, No-Gi, Sparring) não aparecem no cartão nem nos separadores.
- Semana: o site está na Vercel, por isso as páginas são regeneradas de hora a hora (`revalidate`) e o browser corrige a semana ao abrir (cobre a passagem de domingo para segunda).
- Graus de Valores ficam na página Método, junto das turmas Kids.

## Respostas do utilizador (2026-11-28)
1. MentorFlow: App Store `https://apps.apple.com/app/id6755339405` e Google Play `https://play.google.com/store/apps/details?id=eu.mentorflow.client` (verificado: "Mentorflow - Mentee app").
2. Duração: seguir a duração das aulas do horário (Avançados 1h). A página Método mostra as durações do horário.
3. Feminino: aparece só na página Método, como "Turma disponível", sem horário.
4. Feminino: ciclo de 8 semanas com o mesmo início (16/11/2026); da semana 8 volta à 1.
5. O ciclo nunca para: da última semana volta à primeira, sem pausas.
6. Textos transcritos a partir das imagens dos PDFs.

Aprovado pelo utilizador ("Avance com a B" + respostas acima).
