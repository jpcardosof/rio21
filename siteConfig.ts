/**
 * Dados independentes do idioma (contactos, horário, imagens).
 * Os textos traduzidos vivem em `content/pt.ts` e `content/en.ts`.
 */

export type SessionType =
  | "beginners"
  | "allLevels"
  | "advanced"
  | "sparring"
  | "miniKids"
  | "kids"
  | "teens";

/** Turmas indicadas para quem vem à aula experimental. */
export const beginnerFriendly: readonly SessionType[] = ["beginners", "allLevels"];

export const siteConfig = {
  name: "Rio21 BJJ",
  url: "https://rio21bjj.pt",
  logo: "/images/logotipo_png.png",
  logoBadge: "/images/logotipo.png",
  contacts: {
    email: "contacto@rio21bjj.pt",
    whatsapp: "351916995642",
    whatsappDisplay: "+351 916 995 642",
    instagram: "https://www.instagram.com/rio21.lisboa/",
    instagramHandle: "@rio21.lisboa",
    instagramDm: "https://ig.me/m/rio21.lisboa"
  },
  location: {
    locality: "Odivelas",
    region: "Lisboa",
    country: "PT",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rio21%20BJJ%20Odivelas",
    mapEmbedUrl: "https://www.google.com/maps?q=Rio21%20BJJ%20Odivelas&output=embed"
  },
  images: {
    hero: { src: "/images/hero/rio21-hero.jpg", width: 1024, height: 1535 },
    about: { src: "/images/team/equipa-rio21.jpg", width: 1024, height: 1535 },
    adults: { src: "/images/classes/adultos.jpeg", width: 1098, height: 1432 },
    kids: { src: "/images/classes/kids.jpg", width: 1600, height: 1600 }
  },
  team: {
    founders: [
      { name: "Fábio Braga", belt: 2, instagram: "https://www.instagram.com/fabiobraga.bjj/" },
      { name: "Samuel Correia", belt: 1, instagram: "https://www.instagram.com/butterflysamuel/" }
    ],
    professors: ["Robson Carvalho", "Appio Neto", "Carlos Tavares", "Kathe Paula"],
    instructors: ["Edder", "Matheus", "Ricardinho"]
  },
  /** Horário semanal da academia de Odivelas (índice 0 = segunda-feira). */
  timetable: [
    [
      ["09:00", "advanced"],
      ["10:00", "sparring"],
      ["12:00", "beginners"],
      ["18:00", "miniKids"],
      ["18:30", "kids"],
      ["19:30", "beginners"],
      ["20:30", "beginners"]
    ],
    [
      ["07:00", "beginners"],
      ["12:00", "allLevels"],
      ["13:00", "sparring"],
      ["18:30", "teens"],
      ["19:30", "beginners"],
      ["20:30", "advanced"],
      ["21:30", "sparring"]
    ],
    [
      ["09:00", "advanced"],
      ["10:00", "sparring"],
      ["12:00", "beginners"],
      ["18:00", "miniKids"],
      ["18:30", "kids"],
      ["19:30", "advanced"],
      ["20:30", "beginners"]
    ],
    [
      ["07:00", "beginners"],
      ["12:00", "advanced"],
      ["13:00", "sparring"],
      ["18:30", "teens"],
      ["19:30", "beginners"],
      ["20:30", "advanced"],
      ["21:30", "sparring"]
    ],
    [
      ["07:00", "allLevels"],
      ["08:00", "sparring"],
      ["12:00", "allLevels"],
      ["13:00", "sparring"],
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
