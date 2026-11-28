import type { Dictionary } from "./types";

export const en: Dictionary = {
  htmlLang: "en",
  ogLocale: "en_GB",
  seo: {
    title: "Rio21 BJJ | Brazilian Jiu-Jitsu in Odivelas, Lisbon",
    description:
      "Brazilian Jiu-Jitsu academy in Ramada, Odivelas (Lisbon). Classes for children, teens and adults, Monday to Saturday. Your first class is free.",
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
  whatsappMessage: "Hello! I would like to book a free trial class at Rio21.",
  nav: [
    { href: "#aulas", label: "Classes" },
    { href: "/en/method", label: "Method" },
    { href: "#horario", label: "Timetable" },
    { href: "#equipa", label: "Team" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contact" }
  ],
  ui: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeToggle: "Switch between light and dark mode",
    languageLabel: "Language",
    logoHome: "Rio21 BJJ, home page",
    ctaShort: "Free class",
    ctaWhatsapp: "Book a free class",
    ctaInstagram: "Message on Instagram"
  },
  hero: {
    eyebrow: "Brazilian Jiu-Jitsu · Odivelas, Lisbon",
    title: ["Strong mind.", "Strong body."],
    subtitle:
      "Technique, discipline and confidence in an environment built for every level, from your first session to competition.",
    secondaryCta: "See timetable",
    facts: [
      { label: "Training", value: "Mon–Sat · 6:15am–10pm" },
      { label: "Groups", value: "Kids · Teens · Adults" },
      { label: "Experience", value: "Not required" }
    ],
    badge: "1st class free",
    imageAlt: "Rio21 black belt kneeling on the mat, watching the training session"
  },
  trial: {
    eyebrow: "Free trial class",
    title: "Your first class is free",
    text: "No commitment and no experience required. Come and meet the team, see the environment and experience the way we train.",
    steps: [
      { title: "Send us a message", text: "Get in touch on WhatsApp or Instagram." },
      { title: "Choose your class", text: "We will recommend the class and time that best suit your level." },
      { title: "Come and train", text: "Arrive 10 minutes early to put on your gi. A coach will guide you throughout the class." }
    ],
    bringTitle: "Before class",
    bring: [
      "Gi provided by the academy",
      "Water bottle",
      "Flip-flops for off the mat",
      "Short nails, for safety"
    ],
    or: "or"
  },
  about: {
    eyebrow: "About",
    title: "Developing people on and off the mat",
    text: [
      "Rio21 is a Brazilian Jiu-Jitsu team founded in Odivelas, Lisbon.",
      "Through technique, discipline and respect, we help children, teens and adults develop confidence, self-control, fitness and team spirit."
    ],
    values: ["Discipline", "Respect", "Growth", "Confidence", "Family", "Resilience"],
    imageAlt: "Two Rio21 athletes drilling guard on the mat"
  },
  classes: {
    eyebrow: "Classes",
    title: "A class for every stage",
    intro: "From your first session to competition. All classes are mixed and supervised by the Rio21 coaching team.",
    items: [
      {
        title: "Kids & Mini Kids",
        text: "Motor coordination, respect and discipline through play, in a safe and supervised environment.",
        meta: "Mini Kids Mon, Wed & Fri 6pm · Kids 6:30pm"
      },
      {
        title: "Teens",
        text: "Technique, fitness and self-confidence in a class designed for ages 13 to 15.",
        meta: "Tue & Thu 6:30pm"
      },
      {
        title: "Beginners",
        text: "Clear fundamentals and close guidance for complete beginners. No experience required.",
        meta: "Mon–Sat · several classes"
      },
      {
        title: "Adults & Advanced",
        text: "Technical training focused on detail, strategy and consistency.",
        meta: "Mon–Sat · No-Gi on Tuesdays"
      },
      {
        title: "Competition",
        text: "Dedicated preparation for gi and no-gi tournaments, with a training plan and fight strategy.",
        meta: "With the coaching team"
      },
      {
        title: "Self-Defence",
        text: "Control, distance management and composure, with classes dedicated to women.",
        meta: "Classes & workshops"
      },
      {
        title: "Parents & Kids",
        text: "Parents and children train together, with techniques adapted to each age.",
        meta: "Dates on Instagram"
      }
    ],
    footnote: "Not sure which class is right for you? Tell us your age and goals and we will help you choose.",
    images: {
      submission: "Rio21 athlete finishing a submission from guard on the academy mat",
      armlock: "Rio21 coach watching an armlock during training"
    }
  },
  team: {
    eyebrow: "Team",
    title: "The coaches who guide you on the mat",
    founderRole: "Founder",
    belt: (degree) => `Black belt · ${degree}${degree === 1 ? "st" : degree === 2 ? "nd" : degree === 3 ? "rd" : "th"} degree`,
    professors: "Professors",
    instructors: "Instructors"
  },
  schedule: {
    eyebrow: "Timetable",
    title: "Weekly timetable",
    intro: "Monday to Saturday, morning to evening. Highlighted classes are the best choice for your first session.",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    sessions: {
      beginners: "Beginners",
      allLevels: "All levels",
      advanced: "Advanced",
      noGi: "No-Gi",
      sparring: "Sparring",
      miniKids: "Mini Kids",
      kids: "Kids",
      teens: "Teens"
    },
    beginnerTag: "Suitable for beginners",
    legend: "Recommended for your first class",
    note: "Times may change on public holidays and event days. We recommend checking with us before your first class.",
    tablistLabel: "Days of the week",
    today: "Today",
    guideTitle: "Class guide",
    guide: [
      {
        group: "Children",
        items: [
          { name: "Mini Kids", detail: "Ages 3 to 6 · 30 min" },
          { name: "Kids I", detail: "Ages 7 to 9 · 50 min" },
          { name: "Kids II", detail: "Ages 10 to 12 · 50 min" },
          { name: "Teens", detail: "Ages 13 to 15 · 50 min" }
        ]
      },
      {
        group: "Adults",
        items: [
          { name: "Beginners", detail: "White belt up to 2 stripes · 1h" },
          { name: "Advanced", detail: "White belt with 3+ stripes and above · 1h" },
          { name: "Sparring", detail: "Advanced students · 30 min" }
        ]
      }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        question: "Do I need any experience to start?",
        answer:
          "No. Beginner classes are designed for people starting from zero, with gradual progression and close guidance."
      },
      {
        question: "How do I book the free trial class?",
        answer: "Simply send us a message on WhatsApp or Instagram. We will help you choose the right class and time."
      },
      {
        question: "Do I need a gi for my first class?",
        answer:
          "No. The academy provides a gi during the class. Just bring a water bottle and flip-flops for off the mat."
      },
      {
        question: "Is Jiu-Jitsu suitable for children?",
        answer:
          "Yes. Our Mini Kids (ages 3 to 6) and Kids (ages 7 to 12) classes develop coordination, respect, discipline and confidence in a safe environment. We also run Parents & Kids sessions."
      },
      {
        question: "Are there classes for women?",
        answer: "Yes. All classes are mixed, and we also offer self-defence classes dedicated to women."
      },
      {
        question: "Can I train without wanting to compete?",
        answer:
          "Absolutely. Jiu-Jitsu improves fitness, self-defence skills and self-confidence, regardless of competitive goals."
      },
      {
        question: "Do you support athletes who want to compete?",
        answer: "Yes. Our coaching team prepares and supports athletes in national gi and no-gi championships."
      }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "Come and train with us",
    text: "The best way to get to know Rio21 is to try a class. Get in touch and book your free trial class.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "Email",
    location: "Address",
    locationValue: "Av. Amália Rodrigues 30\n2620-521 Ramada, Odivelas",
    directions: "Get directions (GPS)",
    viewOnMaps: "View on Google Maps",
    mapTitle: "Map showing the Rio21 BJJ location in Ramada, Odivelas"
  },
  footer: {
    slogan: "Strong mind, strong body.",
    rights: "All rights reserved.",
    backToTop: "Back to top"
  }
};
