export type ProgramId = "miniKids" | "kids" | "beginners" | "advanced" | "women";

export type CurriculumBlock = {
  label: string;
  title?: string;
  /** Vários itens separados por "; " aparecem em linhas próprias. */
  detail: string;
};

export type CurriculumWeek = {
  /** Tema curto para o cartão "Esta semana no tatame". */
  headline: string;
  blocks: CurriculumBlock[];
};

export type Program = {
  id: ProgramId;
  name: string;
  audience: string;
  duration: string;
  /** Turmas sem lugar no horário (ex.: Feminino). */
  availability?: string;
  weeks: CurriculumWeek[];
};

export type ValueGrade = {
  number: number;
  color: string;
  /** Segunda cor da risca (grau 5: verde com amarelo). */
  accent?: string;
  title: string;
  motto: string;
  points: string[];
  howToLose: string;
};

export type MethodDictionary = {
  seo: { title: string; description: string };
  nav: string;
  eyebrow: string;
  title: string;
  intro: string;
  weekLabel: (week: number, total: number) => string;
  thisWeek: string;
  tablistLabel: string;
  programs: Program[];
  values: {
    eyebrow: string;
    title: string;
    intro: string;
    /** Texto curto para a página principal. */
    summary: string;
    more: string;
    howToLoseLabel: string;
    grades: ValueGrade[];
  };
  teaser: { eyebrow: string; text: string; cta: string };
  cta: { title: string; text: string };
};
