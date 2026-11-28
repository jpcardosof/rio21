/**
 * Dados independentes do idioma (contactos, horário, imagens).
 * Os textos traduzidos vivem em `content/pt.ts` e `content/en.ts`.
 */

export type SessionType =
  | "beginners"
  | "allLevels"
  | "advanced"
  | "noGi"
  | "sparring"
  | "miniKids"
  | "kids"
  | "teens";

/** Turmas indicadas para quem vem à aula experimental. */
export const beginnerFriendly: readonly SessionType[] = ["beginners", "allLevels"];

/** Duração de cada turma, em minutos (tabela de horários oficial). */
export const sessionMinutes: Record<SessionType, number> = {
  beginners: 60,
  allLevels: 60,
  advanced: 60,
  noGi: 60,
  sparring: 30,
  miniKids: 30,
  kids: 50,
  teens: 50
};

export const siteConfig = {
  name: "Rio21 BJJ",
  url: "https://rio21bjj.pt",
  logo: "/images/logotipo_png.png",
  logoBadge: "/images/logotipo.png",
  contacts: {
    email: "geral@rio21lisboa.com",
    whatsapp: "351916995642",
    whatsappDisplay: "+351 916 995 642",
    instagram: "https://www.instagram.com/rio21.matriz/",
    instagramHandle: "@rio21.matriz",
    instagramDm: "https://ig.me/m/rio21.matriz"
  },
  /** Academia "RIO21 - Matriz Ramada" (link do Google Maps enviado pela academia). */
  /** App MentorFlow, usada pelos alunos para marcar aulas. */
  apps: {
    appStore: "https://apps.apple.com/app/id6755339405",
    googlePlay: "https://play.google.com/store/apps/details?id=eu.mentorflow.client"
  },
  location: {
    streetAddress: "Avenida Amália Rodrigues 30, Ramada",
    postalCode: "2620-521",
    locality: "Odivelas",
    region: "Lisboa",
    country: "PT",
    latitude: 38.8117353,
    longitude: -9.1918799,
    mapsUrl: "https://maps.app.goo.gl/9pGGGg1uZsmHqShr7",
    /** Abre o Google Maps (app no telemóvel) já com a navegação até à academia. */
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=38.8117353%2C-9.1918799&dir_action=navigate",
    mapEmbedUrl: "https://www.google.com/maps?q=38.8117353,-9.1918799&z=17&output=embed"
  },
  images: {
    // As 4 fotos oficiais do site — cada uma usada num só sítio.
    hero: { src: "/images/principal.jpeg", width: 1024, height: 1535 },
    about: { src: "/images/luta.jpeg", width: 1024, height: 1535 },
    submission: { src: "/images/submissao.jpeg", width: 1098, height: 1432 },
    armlock: { src: "/images/armlock.jpeg", width: 1024, height: 1536 }
  },
  team: {
    founders: [
      { name: "Fábio Braga", belt: 2, instagram: "https://www.instagram.com/fabiobraga.bjj/" },
      { name: "Samuel Correia", belt: 1, instagram: "https://www.instagram.com/butterflysamuel/" }
    ],
    professors: ["Robson Carvalho", "Appio Neto", "Carlos Tavares", "Kathe Paula"],
    instructors: ["Edder", "Matheus", "Ricardinho"]
  },
  /** Início do ciclo do currículo (segunda-feira). Mudar para reiniciar a contagem das semanas. */
  curriculumStart: "2026-11-16",
  /** Horário semanal da academia de Odivelas (índice 0 = segunda-feira). Fonte: tabela oficial de novembro de 2026. */
  timetable: [
    [
      ["06:15", "allLevels"],
      ["08:00", "advanced"],
      ["12:00", "beginners"],
      ["18:00", "miniKids"],
      ["18:30", "kids"],
      ["19:30", "advanced"],
      ["20:30", "beginners"]
    ],
    [
      ["06:15", "allLevels"],
      ["12:00", "noGi"],
      ["13:00", "sparring"],
      ["18:30", "teens"],
      ["19:30", "beginners"],
      ["20:30", "advanced"],
      ["21:30", "sparring"]
    ],
    [
      ["06:15", "allLevels"],
      ["08:00", "advanced"],
      ["12:00", "beginners"],
      ["18:00", "miniKids"],
      ["18:30", "kids"],
      ["19:30", "advanced"],
      ["20:30", "beginners"]
    ],
    [
      ["06:15", "allLevels"],
      ["12:00", "advanced"],
      ["13:00", "sparring"],
      ["18:30", "teens"],
      ["19:30", "beginners"],
      ["20:30", "advanced"],
      ["21:30", "sparring"]
    ],
    [
      ["06:15", "allLevels"],
      ["07:30", "sparring"],
      ["12:00", "allLevels"],
      ["13:00", "sparring"],
      ["18:00", "miniKids"],
      ["18:30", "kids"],
      ["19:30", "allLevels"],
      ["20:30", "sparring"]
    ],
    [
      ["10:00", "allLevels"],
      ["11:00", "sparring"]
    ]
  ] as ReadonlyArray<ReadonlyArray<readonly [string, SessionType]>>
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.contacts.whatsapp}?text=${encodeURIComponent(message)}`;
}
