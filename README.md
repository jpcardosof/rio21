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
| Horário semanal | `siteConfig.ts` → `timetable` (índice 0 = segunda) |
| Professores e instrutores | `siteConfig.ts` → `team` |
| Imagens usadas | `siteConfig.ts` → `images` |
| Cores (design system) | `app/globals.css` → `:root` e `.dark` |

Ao adicionar um texto novo, adiciona-o **nos dois ficheiros** (`pt.ts` e `en.ts`). O TypeScript avisa se faltar algum.

### Horário

Cada sessão é `["HH:MM", tipo]`. Os tipos são `beginners`, `allLevels`, `advanced`, `sparring`, `miniKids`, `kids`, `teens`. Os tipos `beginners` e `allLevels` aparecem assinalados como "ideal para a primeira aula".

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

- Confirmar o número de WhatsApp, o email e o horário com a academia.
- Confirmar a autorização de uso das fotos em `public/images/`.
- Deploy na Vercel: build com `npm run build`.
