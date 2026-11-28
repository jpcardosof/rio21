import type { SessionType } from "@/siteConfig";

export type Locale = "pt" | "en";

export const locales: readonly Locale[] = ["pt", "en"];

export const localePath: Record<Locale, string> = { pt: "/", en: "/en" };

export type Dictionary = {
  htmlLang: string;
  ogLocale: string;
  seo: { title: string; description: string; keywords: string[] };
  whatsappMessage: string;
  nav: { href: string; label: string }[];
  ui: {
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    themeToggle: string;
    languageLabel: string;
    logoHome: string;
    ctaShort: string;
    ctaWhatsapp: string;
    ctaInstagram: string;
  };
  hero: {
    eyebrow: string;
    title: string[];
    subtitle: string;
    secondaryCta: string;
    facts: { label: string; value: string }[];
    badge: string;
    imageAlt: string;
  };
  trial: {
    eyebrow: string;
    title: string;
    text: string;
    steps: { title: string; text: string }[];
    bringTitle: string;
    bring: string[];
    or: string;
  };
  about: {
    eyebrow: string;
    title: string;
    text: string[];
    values: string[];
    imageAlt: string;
  };
  classes: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; text: string; meta: string }[];
    footnote: string;
    images: { submission: string; armlock: string };
  };
  team: {
    eyebrow: string;
    title: string;
    founderRole: string;
    belt: (degree: number) => string;
    professors: string;
    instructors: string;
  };
  schedule: {
    eyebrow: string;
    title: string;
    intro: string;
    days: string[];
    daysShort: string[];
    sessions: Record<SessionType, string>;
    beginnerTag: string;
    legend: string;
    note: string;
    tablistLabel: string;
    today: string;
    guideTitle: string;
    guide: { group: string; items: { name: string; detail: string }[] }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    whatsapp: string;
    instagram: string;
    email: string;
    location: string;
    locationValue: string;
    directions: string;
    viewOnMaps: string;
    mapTitle: string;
  };
  footer: { slogan: string; rights: string; backToTop: string };
  app: { title: string; text: string; appStoreLabel: string; googlePlayLabel: string };
};

export const methodPath: Record<Locale, string> = { pt: "/metodo", en: "/en/method" };
