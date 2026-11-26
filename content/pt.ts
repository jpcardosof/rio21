import type { Dictionary } from "./types";

export const pt: Dictionary = {
  htmlLang: "pt-PT",
  ogLocale: "pt_PT",
  seo: {
    title: "Rio21 BJJ | Jiu-Jitsu Brasileiro em Odivelas",
    description:
      "Academia de Jiu-Jitsu Brasileiro em Odivelas. Aulas para mini kids, kids, adolescentes e adultos, de segunda a sábado. A primeira aula é gratuita.",
    keywords: [
      "Jiu-Jitsu Odivelas",
      "BJJ Odivelas",
      "Rio21 BJJ",
      "Jiu-Jitsu Lisboa",
      "Jiu-Jitsu para crianças Odivelas",
      "Defesa pessoal Odivelas",
      "Aula experimental gratuita jiu-jitsu"
    ]
  },
  whatsappMessage: "Olá Rio21! Gostaria de marcar uma aula experimental gratuita em Odivelas.",
  nav: [
    { href: "#aulas", label: "Aulas" },
    { href: "#horario", label: "Horário" },
    { href: "#equipa", label: "Equipa" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" }
  ],
  ui: {
    skipToContent: "Saltar para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    themeToggle: "Alternar modo claro/escuro",
    languageLabel: "Idioma",
    logoHome: "Rio21 BJJ — início",
    ctaShort: "Aula grátis",
    ctaWhatsapp: "Marcar aula grátis",
    ctaInstagram: "Mensagem no Instagram"
  },
  hero: {
    eyebrow: "Jiu-Jitsu Brasileiro · Odivelas, Lisboa",
    title: ["Mente forte.", "Corpo forte."],
    subtitle:
      "Técnica, disciplina e confiança num tatame preparado para todos os níveis — do primeiro treino à competição.",
    secondaryCta: "Ver horário",
    facts: [
      { label: "Treinos", value: "Seg–Sáb · 07h–21h30" },
      { label: "Turmas", value: "Kids · Teens · Adultos" },
      { label: "Experiência", value: "Não é precisa" }
    ],
    badge: "1.ª aula grátis",
    imageAlt: "Faixa preta da Rio21 ajoelhado no tatame a observar o treino"
  },
  trial: {
    eyebrow: "Aula experimental",
    title: "A primeira aula é por nossa conta",
    text: "Sem compromisso e sem experiência. Vem conhecer a equipa, o ambiente e o Jiu-Jitsu no tatame.",
    steps: [
      { title: "Envia mensagem", text: "Fala connosco pelo WhatsApp ou Instagram." },
      { title: "Escolhe a turma", text: "Ajudamos-te a encontrar o horário certo para ti." },
      { title: "Pisa o tatame", text: "Chega 10 minutos antes. O professor acompanha-te." }
    ],
    bringTitle: "O que trazer",
    bring: [
      "Roupa de desporto confortável, sem fechos",
      "Garrafa de água",
      "Chinelos para fora do tatame",
      "Kimono não é obrigatório para começar"
    ],
    or: "ou"
  },
  about: {
    eyebrow: "Sobre",
    title: "Formar pessoas dentro e fora do tatame",
    text: [
      "A Rio21 é uma equipa de Jiu-Jitsu Brasileiro nascida em Odivelas.",
      "Através da técnica, da disciplina e do respeito, ajudamos crianças, jovens e adultos a desenvolver confiança, autocontrolo, condição física e espírito de comunidade."
    ],
    values: ["Disciplina", "Respeito", "Evolução", "Confiança", "Família", "Superação"],
    imageAlt: "Dois atletas da Rio21 a treinar guarda no tatame"
  },
  classes: {
    eyebrow: "Aulas",
    title: "Uma turma para cada fase",
    intro: "Do primeiro rolamento ao pódio. Todas as turmas são mistas e orientadas pela equipa técnica Rio21.",
    items: [
      {
        title: "Kids & Mini Kids",
        text: "Coordenação, respeito e disciplina através do jogo. Um espaço seguro para crescer com valores.",
        meta: "Mini Kids seg. e qua. 18:00 · Kids 18:30"
      },
      {
        title: "Adolescentes",
        text: "Técnica, condição física e confiança numa turma pensada para a idade.",
        meta: "Ter. e qui. 18:30"
      },
      {
        title: "Iniciantes",
        text: "Começa do zero com fundamentos claros e acompanhamento próximo. Não precisas de experiência.",
        meta: "Seg. a sáb. · várias turmas"
      },
      {
        title: "Adultos & Avançados",
        text: "Treino técnico para evoluir no detalhe: estratégia, intensidade e consistência.",
        meta: "Seg. a sáb."
      },
      {
        title: "Competição",
        text: "Preparação específica para campeonatos de gi e no-gi, com plano de treino e estratégia de luta.",
        meta: "Com a equipa técnica"
      },
      {
        title: "Defesa Pessoal",
        text: "Controlo, distância e autocontrolo — incluindo aulas dedicadas a mulheres.",
        meta: "Aulas e workshops"
      },
      {
        title: "Pais & Filhos",
        text: "Treinar em família: pais e filhos aprendem juntos, com técnica adaptada a cada idade.",
        meta: "Datas no Instagram"
      }
    ],
    footnote: "Não sabes por onde começar? Diz-nos a tua idade e objetivo — indicamos a turma certa.",
    images: {
      adults: "Treino de adultos na Rio21 em Odivelas",
      kids: "Crianças a sorrir durante a aula de Jiu-Jitsu kids"
    }
  },
  team: {
    eyebrow: "Equipa",
    title: "Quem te acompanha no tatame",
    founderRole: "Fundador",
    belt: (degree) => `Faixa preta · ${degree}.º grau`,
    professors: "Professores",
    instructors: "Instrutores"
  },
  schedule: {
    eyebrow: "Horário",
    title: "Horário semanal",
    intro: "De segunda a sábado, da manhã à noite. As turmas assinaladas são ideais para a tua primeira aula.",
    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    daysShort: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    sessions: {
      beginners: "Iniciantes",
      allLevels: "Todos os níveis",
      advanced: "Avançados",
      sparring: "Sparring",
      miniKids: "Mini Kids",
      kids: "Kids",
      teens: "Adolescentes"
    },
    beginnerTag: "Ideal para começar",
    legend: "Ideal para a primeira aula",
    note: "Os horários podem mudar em feriados e eventos. Confirma connosco antes da primeira aula.",
    tablistLabel: "Dias da semana",
    today: "Hoje"
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Preciso de experiência para começar?",
        answer:
          "Não. As turmas de iniciantes existem para quem está a começar do zero, com explicação progressiva e acompanhamento."
      },
      {
        question: "Como marco a aula experimental gratuita?",
        answer:
          "Envia-nos uma mensagem pelo WhatsApp ou Instagram. Ajudamos-te a escolher a turma e o horário."
      },
      {
        question: "Preciso de kimono para a primeira aula?",
        answer:
          "Não necessariamente. Vem com roupa de desporto confortável e fala com o professor para confirmares o equipamento recomendado."
      },
      {
        question: "O Jiu-Jitsu é indicado para crianças?",
        answer:
          "Sim. As aulas Mini Kids e Kids trabalham coordenação, respeito, disciplina e confiança num ambiente seguro. Há também aulas de Pais & Filhos."
      },
      {
        question: "Há aulas para mulheres?",
        answer: "Sim. Todas as turmas são mistas e existem aulas de defesa pessoal dedicadas a mulheres."
      },
      {
        question: "Posso treinar sem querer competir?",
        answer:
          "Claro. O Jiu-Jitsu é ótimo para condição física, defesa pessoal e confiança, mesmo sem objetivo competitivo."
      },
      {
        question: "Há acompanhamento para quem quer competir?",
        answer:
          "Sim. A equipa técnica acompanha os atletas em campeonatos nacionais de gi e no-gi, com preparação específica."
      }
    ]
  },
  contact: {
    eyebrow: "Contacto",
    title: "Vem treinar connosco",
    text: "A melhor forma de conhecer a Rio21 é pisar o tatame. Fala connosco e marca a tua aula grátis.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "Email",
    location: "Local",
    locationValue: "Odivelas, Lisboa",
    directions: "Abrir no Google Maps",
    mapTitle: "Mapa da Rio21 BJJ em Odivelas"
  },
  footer: {
    slogan: "Mente forte, corpo forte.",
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo"
  }
};
