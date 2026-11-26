import type { Dictionary } from "./types";

export const en: Dictionary = {
  htmlLang: "en",
  ogLocale: "en_GB",
  seo: {
    title: "Rio21 BJJ | Brazilian Jiu-Jitsu in Odivelas, Lisbon",
    description:
      "Brazilian Jiu-Jitsu academy in Odivelas, Lisbon. Classes for mini kids, kids, teens and adults, Monday to Saturday. Your first class is free.",
    keywords: [
      "Brazilian Jiu-Jitsu Lisbon",
      "BJJ Odivelas",
      "BJJ Lisbon",
      "Rio21 BJJ",
      "Kids Jiu-Jitsu Lisbon",
      "Self-defence Lisbon",
      "Free trial BJJ class Lisbon"
    ]
  },
  whatsappMessage: "Hi Rio21! I'd like to book a free trial class in Odivelas.",
  nav: [
    { href: "#aulas", label: "Classes" },
    { href: "#horario", label: "Timetable" },
    { href: "#equipa", label: "Team" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contact" }
  ],
  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeToggle: "Toggle light/dark mode",
    languageLabel: "Language",
    logoHome: "Rio21 BJJ — home",
    ctaShort: "Free class",
    ctaWhatsapp: "Book a free class",
    ctaInstagram: "Message on Instagram"
  },
  hero: {
    eyebrow: "Brazilian Jiu-Jitsu · Odivelas, Lisbon",
    title: ["Strong mind.", "Strong body."],
    subtitle:
      "Technique, discipline and confidence on a mat built for every level — from your first session to competition.",
    secondaryCta: "See timetable",
    facts: [
      { label: "Training", value: "Mon–Sat · 7am–9:30pm" },
      { label: "Groups", value: "Kids · Teens · Adults" },
      { label: "Experience", value: "Not required" }
    ],
    badge: "1st class free",
    imageAlt: "Rio21 black belt kneeling on the mat, watching the training session"
  },
  trial: {
    eyebrow: "Free trial class",
    title: "Your first class is on us",
    text: "No commitment, no experience needed. Come and meet the team, feel the atmosphere and try Jiu-Jitsu on the mat.",
    steps: [
      { title: "Send a message", text: "Reach us on WhatsApp or Instagram." },
      { title: "Pick a class", text: "We'll help you find the right time slot." },
      { title: "Step on the mat", text: "Arrive 10 minutes early. A coach will guide you." }
    ],
    bringTitle: "What to bring",
    bring: [
      "Comfortable sportswear, no zips",
      "A water bottle",
      "Flip-flops for off the mat",
      "No gi needed to get started"
    ],
    or: "or"
  },
  about: {
    eyebrow: "About",
    title: "Building people on and off the mat",
    text: [
      "Rio21 is a Brazilian Jiu-Jitsu team born in Odivelas, Lisbon.",
      "Through technique, discipline and respect, we help children, teens and adults build confidence, self-control, fitness and a real sense of community."
    ],
    values: ["Discipline", "Respect", "Growth", "Confidence", "Family", "Resilience"],
    imageAlt: "Two Rio21 athletes drilling guard on the mat"
  },
  classes: {
    eyebrow: "Classes",
    title: "A class for every stage",
    intro: "From your first roll to the podium. All classes are mixed and led by the Rio21 coaching team.",
    items: [
      {
        title: "Kids & Mini Kids",
        text: "Coordination, respect and discipline through play. A safe place to grow with good values.",
        meta: "Mini Kids Mon & Wed 6pm · Kids 6:30pm"
      },
      {
        title: "Teens",
        text: "Technique, fitness and confidence in a group designed for their age.",
        meta: "Tue & Thu 6:30pm"
      },
      {
        title: "Beginners",
        text: "Start from zero with clear fundamentals and close guidance. No experience needed.",
        meta: "Mon–Sat · several classes"
      },
      {
        title: "Adults & Advanced",
        text: "Technical training to refine the details: strategy, intensity and consistency.",
        meta: "Mon–Sat"
      },
      {
        title: "Competition",
        text: "Dedicated preparation for gi and no-gi tournaments, with a training plan and fight strategy.",
        meta: "With the coaching team"
      },
      {
        title: "Self-Defence",
        text: "Control, distance and composure — including classes dedicated to women.",
        meta: "Classes & workshops"
      },
      {
        title: "Parents & Kids",
        text: "Train as a family: parents and children learn together, with technique adapted to each age.",
        meta: "Dates on Instagram"
      }
    ],
    footnote: "Not sure where to start? Tell us your age and goals — we'll point you to the right class.",
    images: {
      adults: "Adult class training at Rio21 in Odivelas",
      kids: "Children smiling during a kids Jiu-Jitsu class"
    }
  },
  team: {
    eyebrow: "Team",
    title: "Who coaches you on the mat",
    founderRole: "Founder",
    belt: (degree) => `Black belt · ${degree}${degree === 1 ? "st" : degree === 2 ? "nd" : degree === 3 ? "rd" : "th"} degree`,
    professors: "Professors",
    instructors: "Instructors"
  },
  schedule: {
    eyebrow: "Timetable",
    title: "Weekly timetable",
    intro: "Monday to Saturday, morning to evening. Highlighted classes are ideal for your first session.",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    sessions: {
      beginners: "Beginners",
      allLevels: "All levels",
      advanced: "Advanced",
      sparring: "Sparring",
      miniKids: "Mini Kids",
      kids: "Kids",
      teens: "Teens"
    },
    beginnerTag: "Great to start",
    legend: "Great for your first class",
    note: "Times may change on public holidays and event days. Check with us before your first class.",
    tablistLabel: "Days of the week",
    today: "Today"
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        question: "Do I need any experience to start?",
        answer:
          "No. Beginner classes are made for people starting from zero, with step-by-step teaching and close guidance."
      },
      {
        question: "How do I book the free trial class?",
        answer: "Send us a message on WhatsApp or Instagram. We'll help you choose the right class and time."
      },
      {
        question: "Do I need a gi for my first class?",
        answer:
          "Not necessarily. Come in comfortable sportswear and check with the coach about the recommended gear."
      },
      {
        question: "Is Jiu-Jitsu suitable for children?",
        answer:
          "Yes. Mini Kids and Kids classes build coordination, respect, discipline and confidence in a safe environment. We also run Parents & Kids sessions."
      },
      {
        question: "Are there classes for women?",
        answer: "Yes. All classes are mixed, and we also run self-defence classes dedicated to women."
      },
      {
        question: "Can I train without wanting to compete?",
        answer:
          "Absolutely. Jiu-Jitsu is great for fitness, self-defence and confidence, with or without competition goals."
      },
      {
        question: "Do you support athletes who want to compete?",
        answer:
          "Yes. The coaching team supports athletes in national gi and no-gi championships with dedicated preparation."
      }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "Come train with us",
    text: "The best way to get to know Rio21 is to step on the mat. Get in touch and book your free class.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "Email",
    location: "Location",
    locationValue: "Odivelas, Lisbon",
    directions: "Open in Google Maps",
    mapTitle: "Map showing Rio21 BJJ in Odivelas"
  },
  footer: {
    slogan: "Strong mind, strong body.",
    rights: "All rights reserved.",
    backToTop: "Back to top"
  }
};
