# Método Rio21 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a "Método" page (weekly curriculum for 5 classes + Graus de Valores), a "Esta semana no tatame" teaser on the homepage, a MentorFlow "Já és aluno?" strip, and the Motion animation library.

**Architecture:** Curriculum data lives in typed PT/EN content files; a pure, dependency-free `lib/cycle.ts` computes the current week (Europe/Lisbon calendar days, cycle start 2026-11-16, wraps forever). Pages stay statically generated with hourly `revalidate`; client components recompute the week after mount. Motion is loaded through `LazyMotion` + `domAnimation` with `reducedMotion="user"`.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind 3, `motion` (motion.dev), Node 24 built-in test runner for pure logic.

**Spec:** `docs/superpowers/specs/2026-11-28-metodo-curriculo-design.md`

## Global Constraints

- Cycle start: Monday **2026-11-16**, timezone **Europe/Lisbon**; 16-week cycles (miniKids, kids, beginners, advanced), 8-week cycle (women); never pauses; after the last week it returns to week 1.
- Durations shown come from the timetable (`sessionMinutes`): Mini Kids 30 min, Kids 50 min, Iniciantes 1h, Avançados 1h. Feminino 1h, shown as "Turma disponível", no timetable entry.
- Copy: professional PT-PT with "tu"; **no em dash "—" anywhere in rendered text**; PT transcribed from the PDFs, Brazilian gerunds/forms adapted to PT-PT (e.g. "controle" → "controlo", "Esportivo" → "Desportivo", "Bloqueando" → "Bloquear"); BJJ technical terms kept ("quadril", "double leg", "kimura").
- MentorFlow: App Store `https://apps.apple.com/app/id6755339405`, Google Play `https://play.google.com/store/apps/details?id=eu.mentorflow.client`.
- Routes: PT `/metodo`, EN `/en/method`; both in sitemap with hreflang alternates.
- Homepage must stay light: one teaser card only, placed after the Horário section.
- Design system unchanged (tokens in `app/globals.css`); Graus de Valores colours appear only as small swatches.

## Review Focus

- Week boundary at Sunday→Monday midnight in Lisbon (and on DST change days) must switch the week exactly then, not at UTC midnight.
- Dates far in the future (years later) and before the start date must still give a week in 1..N.
- Women (8-week) vs others (16-week) show different week numbers in the same moment (e.g. week 9 of 16 = week 1 of 8).
- Switching PT/EN on the Método page must land on the other language's Método page, not the homepage.
- Menu anchors clicked from the Método page must go to the homepage sections (`/#horario`, `/en#horario`).

---

### Task 1: Week cycle logic

**Files:**
- Create: `lib/cycle.ts`
- Test: `lib/cycle.test.ts`
- Modify: `siteConfig.ts` (add `curriculumStart: "2026-11-16"`)
- Modify: `package.json` (script `"test": "node --test lib/"`)

**Interfaces:**
- Produces: `cycleWeek(now: Date, startIso: string, weeks: number): number` (1-based); `lisbonDayNumber(date: Date): number` (days since epoch of the Lisbon calendar date). No `@/` imports in this file so Node can run it directly.

- [ ] **Step 1: Write failing tests** (`node:test` + `node:assert/strict`):
  - `2026-11-28T12:00:00Z`, start `2026-11-16`, 16 → `2`
  - `2026-11-22T23:30:00Z` (Sun 23:30 Lisbon, WET) → `1`; `2026-11-23T00:10:00Z` → `2`
  - `2027-03-08T10:00:00Z` (week 17) → `1` with 16; `2027-01-11T10:00:00Z` → `1` with 8 (week 9)
  - DST: `2027-03-28T22:30:00Z` (Sun 23:30 WEST) is still the previous week; `2027-03-28T23:10:00Z` (Mon 00:10 WEST) is the next week
  - Before start: `2026-11-15T12:00:00Z` → `16` with 16
- [ ] **Step 2:** Run `npm test` → FAIL (module missing).
- [ ] **Step 3: Implement** `lisbonDayNumber` via `Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Lisbon", year, month, day })` → `Date.UTC(y, m-1, d) / 86_400_000`; `cycleWeek` = `((floor((day - startDay) / 7) % weeks) + weeks) % weeks + 1` with `startDay = Date.UTC(start)/86_400_000`.
- [ ] **Step 4:** Run `npm test` → PASS.
- [ ] **Step 5: Commit** `feat: add weekly curriculum cycle logic`.

### Task 2: Curriculum and values content (PT + EN)

**Files:**
- Create: `content/curriculum.types.ts`, `content/curriculum.pt.ts`, `content/curriculum.en.ts`, `content/curriculum.ts`

**Interfaces:**
- Produces:
  - `type ProgramId = "miniKids" | "kids" | "beginners" | "advanced" | "women"`
  - `type CurriculumBlock = { label: string; title?: string; detail: string }`
  - `type CurriculumWeek = { headline: string; blocks: CurriculumBlock[] }` (`headline` = short theme for the homepage card, e.g. "Gravata · Imobilização lateral")
  - `type Program = { id: ProgramId; name: string; audience: string; duration: string; availability?: string; weeks: CurriculumWeek[] }`
  - `type ValueGrade = { number: number; color: string; title: string; motto: string; points: string[]; howToLose: string }`
  - `type MethodDictionary = { seo: { title: string; description: string }; eyebrow: string; title: string; intro: string; weekLabel: (week: number, total: number) => string; thisWeek: string; tablistLabel: string; programs: Program[]; values: { eyebrow: string; title: string; intro: string; howToLoseLabel: string; grades: ValueGrade[] }; teaser: { eyebrow: string; title: string; cta: string }; cta: { title: string; text: string } }`
  - `getMethod(locale: Locale): MethodDictionary` in `content/curriculum.ts`
- Program order: miniKids, kids, beginners, advanced, women. Week counts: 16,16,16,16,8. Women = Iniciantes weeks 1–8 blocks with its own topics; `availability: "Turma disponível"` / `"Class available"`.
- Graus colours: orange `#F28C28`, green `#2E7D32`, blue `#1565C0`, black `#0A0A0A`, green+yellow (render as green swatch with yellow stripe).

- [ ] **Step 1: Write failing test** `lib/curriculum.test.ts` importing `content/curriculum.pt.ts` and `content/curriculum.en.ts` (these files use only relative type imports so Node can load them): for both locales, `programs.map(p => p.id)` equals `["miniKids","kids","beginners","advanced","women"]`, `programs.map(p => p.weeks.length)` equals `[16,16,16,16,8]`, every week has a non-empty `headline`, `values.grades.length === 5`, and `JSON.stringify(dict)` contains no `"—"`. Update the test script to `node --test lib/`.
- [ ] **Step 2:** Transcribe the 5 curricula + Graus de Valores from the PDF images into `curriculum.pt.ts` (blocks per class: Mini Kids = Exercícios físicos / Defesa pessoal e queda / Jogo; Kids = Exercícios físicos / Defesa pessoal e queda / Chão / Treino / Jogo / Tópico; Iniciantes & Feminino = Defesa pessoal / Jiu-Jitsu desportivo / Tópico da semana; Avançados = Técnica de queda / Técnicas de chão).
- [ ] **Step 3:** Translate to `curriculum.en.ts` with standard BJJ terms (Gravata → Headlock, Imobilização lateral → Side control, Montada → Mount, Joelho na barriga → Knee on belly, Costas → Back control, Quatro apoios → Turtle, Raspagem → Sweep, Passagem de guarda → Guard pass, Chave de braço reta → Straight armlock).
- [ ] **Step 4:** Run `npx tsc --noEmit` → no errors; `grep -c "—" content/curriculum.*.ts` → 0.
- [ ] **Step 5: Commit** `feat: add curriculum and values content (PT/EN)`.

### Task 3: Motion provider

**Files:**
- Modify: `package.json` (dependency `motion`)
- Create: `components/MotionProvider.tsx` (client: `LazyMotion features={() => import("motion/react").then(m => m.domAnimation)} strict` inside `MotionConfig reducedMotion="user"`)
- Modify: `components/RootDocument.tsx` (wrap `children`)

- [ ] **Step 1:** `npm install motion`.
- [ ] **Step 2:** Implement provider; components use `m.*` (not `motion.*`) because of `strict`.
- [ ] **Step 3:** `npm run build` → success; First Load JS for `/` grows by no more than ~6 KB (features load async).
- [ ] **Step 4: Commit** `feat: add Motion with lazy features`.

### Task 4: Método page

**Files:**
- Create: `components/method/MethodPage.tsx` (server), `components/method/ProgramExplorer.tsx` (client: tabs + this week + weeks grid), `components/method/ValuesGrades.tsx`, `components/useCycleWeek.ts` (client hook)
- Create: `app/(pt)/metodo/page.tsx`, `app/(en)/en/method/page.tsx`
- Modify: `content/index.ts` (`buildMethodMetadata(locale)`), `app/sitemap.ts`, `content/types.ts` (`methodPath: Record<Locale, string> = { pt: "/metodo", en: "/en/method" }`)

**Interfaces:**
- Consumes: `cycleWeek`, `getMethod`, `siteConfig.curriculumStart`
- Produces: `useCycleWeek(weeks: number, initial: number): number` (recomputes after mount and every 60 s); `export const revalidate = 3600` on both pages.

- [ ] **Step 1:** Build page: header (eyebrow, title, intro, current week label), ARIA tablist of programs (arrow/Home/End keys, sliding `m.span` indicator with `layoutId`), "Esta semana" highlighted card, grid of all weeks (4 cols ≥ lg, 2 ≥ sm, 1 mobile; current week yellow ring + badge; staggered entrance), Graus de Valores section, final trial CTA.
- [ ] **Step 2:** Metadata with canonical + hreflang (pt-PT `/metodo`, en `/en/method`), sitemap entries.
- [ ] **Step 3:** `npm run build` → `/metodo` and `/en/method` listed; open both, verify the current week shows "Semana 2 de 16" on 2026-11-28 and Feminino "Semana 2 de 8".
- [ ] **Step 4: Commit** `feat: add Método page with weekly curriculum and values`.

### Task 5: Homepage teaser, navigation and language switch

**Files:**
- Create: `components/ThisWeek.tsx` (client)
- Modify: `components/HomePage.tsx` (insert after `<Schedule>`), `content/pt.ts`, `content/en.ts` (nav item "Método"/"Method"), `components/Header.tsx`, `components/Footer.tsx`, `components/LanguageSwitch.tsx`

**Interfaces:**
- Consumes: `useCycleWeek`, `getMethod`, `methodPath`
- Produces: `Header` and `Footer` accept `homeHref: string` and prefix hash links with it on non-home pages; `LanguageSwitch` accepts `paths: Record<Locale, string>` (defaults to `localePath`).

- [ ] **Step 1:** Teaser card: eyebrow "Esta semana no tatame", "Semana N de 16", one row per program (Mini Kids, Kids, Iniciantes, Avançados; Feminino with its own week) showing `headline`, button "Ver o método completo" → `methodPath[locale]`.
- [ ] **Step 2:** Nav gets "Método" link; on the Método page hash links become `/#…` (PT) or `/en#…` (EN); language switch on Método page points to the other Método page.
- [ ] **Step 3:** Verify in browser: from `/metodo` clicking "Horário" lands on `/#horario`; EN switch on `/metodo` goes to `/en/method`.
- [ ] **Step 4: Commit** `feat: add this-week teaser and Método navigation`.

### Task 5b: Graus de Valores on the homepage

**Files:**
- Create: `components/ValuesStripes.tsx` (stripes row, reused on the Método page header of the values section)
- Modify: `components/About.tsx` (append block below text + photo), `components/HomePage.tsx` (pass `getMethod(locale).values` + `methodPath`)

**Interfaces:**
- Consumes: `MethodDictionary["values"]` (`grades[].color`, `grades[].title`), `methodPath`
- Produces: `ValuesStripes({ grades }: { grades: ValueGrade[] })`

- [ ] **Step 1:** Block: eyebrow "Graus de Valores · Para crianças", title "Pequenas atitudes, grandes conquistas", short paragraph, 5 coloured stripes with value names (row ≥ md, list on mobile, staggered reveal), link "Ver como funciona" → `${methodPath[locale]}#graus`.
- [ ] **Step 2:** Verify at 1440 and 390 that stripes fit with no overflow and the link reaches the values section on the Método page.
- [ ] **Step 3: Commit** `feat: show Graus de Valores on the homepage`.

### Task 6: MentorFlow strip

**Files:**
- Create: `components/AppStrip.tsx`
- Modify: `components/HomePage.tsx`, `components/method/MethodPage.tsx` (render before `<Footer>`), `content/types.ts` + `content/pt.ts` + `content/en.ts` (`app: { title: string; text: string; appStore: string; googlePlay: string }`), `siteConfig.ts` (`apps: { appStore, googlePlay }` with the URLs above), `components/icons.tsx` (Apple, Google Play icons)

- [ ] **Step 1:** Strip: "Já és aluno?" + "Marca as tuas aulas na app MentorFlow." + two pill buttons (external, `rel="noreferrer"`).
- [ ] **Step 2:** Verify both links open the store pages.
- [ ] **Step 3: Commit** `feat: add MentorFlow app links`.

### Task 7: Final verification and push

- [ ] `npm test`, `npx tsc --noEmit`, `npm run build` all pass.
- [ ] Screenshots at 1440 and 390, light/dark, for `/`, `/metodo`, `/en/method`; no horizontal overflow, no console errors.
- [ ] Rendered HTML of all pages contains no "—".
- [ ] Reduced motion: content visible, no animations.
- [ ] Update README (where to edit curriculum, cycle start) and push to `main`.
