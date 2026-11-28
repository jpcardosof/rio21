# Rio21 BJJ — Website

Site da academia Rio21 BJJ em Odivelas (Lisboa). Página única, minimalista, em **português (`/`)** e **inglês (`/en`)**, com **modo claro e escuro**. O objetivo principal é levar o visitante a marcar a **aula experimental gratuita** pelo WhatsApp.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3 com tokens de cor em variáveis CSS (`app/globals.css`)
- Fontes: **Impact** nos títulos (com **Anton** como alternativa em Android/iOS) e **Source Sans 3** no texto

## Correr localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` (PT) ou `http://localhost:3000/en` (EN).

## Onde editar

| O quê | Ficheiro |
|---|---|
| Textos em português | `content/pt.ts` |
| Textos em inglês | `content/en.ts` |
| Contactos, WhatsApp, Instagram, mapa | `siteConfig.ts` → `contacts`, `location` |
| Horário semanal | `siteConfig.ts` → `timetable` (índice 0 = segunda); durações em `sessionMinutes` |
| Professores e instrutores | `siteConfig.ts` → `team` |
| Imagens usadas | `siteConfig.ts` → `images` |
| Cores (design system) | `app/globals.css` → `:root` e `.dark` |
| Currículos (Método) e Graus de Valores | `content/curriculum.pt.ts` e `content/curriculum.en.ts` |
| Início do ciclo de semanas | `siteConfig.ts` → `curriculumStart` (segunda-feira) |
| Links da app MentorFlow | `siteConfig.ts` → `apps` |

Ao adicionar um texto novo, adiciona-o **nos dois ficheiros** (`pt.ts` e `en.ts`). O TypeScript avisa se faltar algum.

### Horário

Cada sessão é `["HH:MM", tipo]`. Os tipos são `beginners`, `allLevels`, `advanced`, `noGi`, `sparring`, `miniKids`, `kids`, `teens`. Os tipos `beginners` e `allLevels` aparecem assinalados como "ideal para a primeira aula".

### Método e semana atual

A página **Método** (`/metodo` e `/en/method`) mostra o currículo de cada turma e os Graus de Valores. A semana atual é calculada automaticamente a partir de `curriculumStart` (hora de Lisboa): 16 semanas para Mini Kids, Kids, Iniciantes e Avançados, 8 para o Feminino, sempre a recomeçar sem pausas. Para reiniciar o ciclo, muda a data para a segunda-feira da nova semana 1.

Testes da contagem de semanas e dos conteúdos: `npm test`.

## Design system

- **Cores:** preto `#0A0A0A`, branco, cinzas `#BABABA` `#E2E2E1` `#757575`, amarelo `#F9E04C` (tom dos cartazes Rio21).
- **Regra do amarelo:** no modo claro o amarelo é só **fundo** com texto preto (amarelo como texto sobre branco é ilegível). No modo escuro também pode ser usado como texto.
- `#757575` só como texto secundário sobre branco. No modo escuro o texto secundário é `#BABABA`.
- **Títulos:** classe `.display` (Impact, maiúsculas, sem negrito).
- **Botões:** `.btn-primary` (amarelo), `.btn-ghost` (contorno), `.btn-ink` (preto, para usar sobre amarelo).
- **Logótipo:** `public/images/logotipo_png.png` é usado como máscara CSS e muda de cor automaticamente com o tema.

## Estrutura

```
app/(pt)/          → página PT em "/"  (html lang="pt-PT")
app/(en)/en/       → página EN em "/en" (html lang="en")
app/sitemap.ts     → sitemap com hreflang
components/        → secções da página
content/           → textos PT/EN, metadados SEO e JSON-LD
```

## Antes de publicar

- Contactos, morada e horário confirmados com a academia em novembro de 2026.
- Confirmar a autorização de uso das fotos em `public/images/`.
- Deploy na Vercel: build com `npm run build`.
