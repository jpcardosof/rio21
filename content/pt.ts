import type { Dictionary } from "./types";

export const pt: Dictionary = {
  htmlLang: "pt-PT",
  ogLocale: "pt_PT",
  seo: {
    title: "Jiu-Jitsu em Odivelas e Ramada, Lisboa | RIO21 Lisboa",
    description:
      "Academia de Jiu-Jitsu Brasileiro (BJJ) na Ramada, Odivelas, junto a Lisboa. Turmas para crianças, adolescentes e adultos. A primeira aula é gratuita.",
    keywords: [
      "Jiu-Jitsu Odivelas",
      "Jiu-Jitsu Ramada",
      "BJJ Odivelas",
      "Jiu-Jitsu Lisboa",
      "RIO21 Lisboa",
      "Jiu-Jitsu para crianças Odivelas",
      "Defesa pessoal Odivelas",
      "Aula experimental gratuita jiu-jitsu"
    ]
  },
  whatsappMessage: "Olá! Gostaria de marcar uma aula experimental gratuita na Rio21.",
  nav: [
    { href: "#aulas", label: "Aulas" },
    { href: "/metodo", label: "Método" },
    { href: "#horario", label: "Horário" },
    { href: "#equipa", label: "Equipa" },
    { href: "#faq", label: "FAQ" },
    { href: "#contacto", label: "Contacto" }
  ],
  ui: {
    skipToContent: "Saltar para o conteúdo",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    themeToggle: "Alternar entre modo claro e escuro",
    languageLabel: "Idioma",
    logoHome: "RIO21 Lisboa, página inicial",
    ctaShort: "Aula grátis",
    ctaWhatsapp: "Marcar aula grátis",
    ctaInstagram: "Mensagem no Instagram"
  },
  hero: {
    eyebrow: "Jiu-Jitsu Brasileiro na Ramada · Odivelas, Lisboa",
    title: ["Mente forte.", "Corpo forte."],
    subtitle:
      "Técnica, disciplina e confiança num ambiente preparado para todos os níveis, do primeiro treino à competição.",
    secondaryCta: "Ver horário",
    facts: [
      { label: "Treinos", value: "Seg–Sáb · 06h15–22h" },
      { label: "Turmas", value: "Kids · Teens · Adultos" },
      { label: "Experiência", value: "Não é necessária" }
    ],
    badge: "1.ª aula grátis",
    imageAlt: "Faixa preta da Rio21 ajoelhado no tatame a observar o treino"
  },
  trial: {
    eyebrow: "Aula experimental",
    title: "A primeira aula é gratuita",
    text: "Sem compromisso e sem necessidade de experiência. Vem conhecer a equipa, o ambiente e a nossa forma de treinar.",
    steps: [
      { title: "Envia uma mensagem", text: "Contacta-nos pelo WhatsApp ou pelo Instagram." },
      { title: "Escolhe a turma", text: "Indicamos a turma e o horário mais adequados ao teu nível." },
      { title: "Vem treinar", text: "Chega 10 minutos antes para vestires o kimono. O professor acompanha-te durante a aula." }
    ],
    bringTitle: "Antes da aula",
    bring: [
      "Kimono fornecido pela academia",
      "Garrafa de água",
      "Chinelos para fora do tatame",
      "Unhas cortadas, por segurança"
    ],
    or: "ou"
  },
  about: {
    eyebrow: "Sobre",
    title: "Formar pessoas dentro e fora do tatame",
    text: [
      "A Rio21 é uma equipa de Jiu-Jitsu Brasileiro fundada em Odivelas, com academia na Ramada, junto a Lisboa.",
      "Através da técnica, da disciplina e do respeito, ajudamos crianças, jovens e adultos a desenvolver confiança, autocontrolo, condição física e espírito de equipa."
    ],
    values: ["Disciplina", "Respeito", "Evolução", "Confiança", "Família", "Superação"],
    imageAlt: "Dois atletas da Rio21 a treinar guarda no tatame"
  },
  classes: {
    eyebrow: "Aulas",
    title: "Uma turma para cada fase",
    intro: "Do primeiro treino à competição. Todas as turmas são mistas e acompanhadas pela equipa técnica da Rio21.",
    items: [
      {
        title: "Kids & Mini Kids",
        text: "Coordenação motora, respeito e disciplina através de atividades lúdicas, num ambiente seguro e acompanhado.",
        meta: "Mini Kids seg., qua. e sex. 18:00 · Kids 18:30"
      },
      {
        title: "Adolescentes",
        text: "Técnica, condição física e autoconfiança, numa turma pensada para jovens dos 13 aos 15 anos.",
        meta: "Ter. e qui. 18:30"
      },
      {
        title: "Iniciantes",
        text: "Fundamentos claros e acompanhamento próximo para quem começa do zero. Não é necessária experiência.",
        meta: "Seg. a sáb. · várias turmas"
      },
      {
        title: "Adultos & Avançados",
        text: "Treino técnico focado no detalhe, na estratégia e na consistência.",
        meta: "Seg. a sáb. · No-Gi à terça"
      },
      {
        title: "Competição",
        text: "Preparação específica para campeonatos de gi e no-gi, com plano de treino e estratégia de combate.",
        meta: "Com a equipa técnica"
      },
      {
        title: "Defesa Pessoal",
        text: "Controlo, gestão de distância e autocontrolo, com aulas dedicadas a mulheres.",
        meta: "Aulas e workshops"
      },
      {
        title: "Pais & Filhos",
        text: "Pais e filhos treinam juntos, com técnicas adaptadas a cada idade.",
        meta: "Datas no Instagram"
      }
    ],
    footnote: "Não sabes qual a turma indicada? Diz-nos a tua idade e o teu objetivo e ajudamos-te a escolher.",
    images: {
      submission: "Atleta da Rio21 a finalizar a partir da guarda, no tatame da academia",
      armlock: "Professor da Rio21 a acompanhar um armlock durante o treino"
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
    intro: "De segunda a sábado, de manhã à noite. As turmas assinaladas são as mais indicadas para a primeira aula.",
    days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    daysShort: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    sessions: {
      beginners: "Iniciantes",
      allLevels: "Todos os níveis",
      advanced: "Avançados",
      noGi: "No-Gi",
      sparring: "Sparring",
      miniKids: "Mini Kids",
      kids: "Kids",
      teens: "Adolescentes"
    },
    beginnerTag: "Indicada para começar",
    legend: "Indicada para a primeira aula",
    note: "Os horários podem sofrer alterações em feriados e dias de evento. Recomendamos que confirmes connosco antes da primeira aula.",
    tablistLabel: "Dias da semana",
    today: "Hoje",
    guideTitle: "Guia de turmas",
    guide: [
      {
        group: "Crianças",
        items: [
          { name: "Mini Kids", detail: "3 a 6 anos · 30 min" },
          { name: "Kids I", detail: "7 a 9 anos · 50 min" },
          { name: "Kids II", detail: "10 a 12 anos · 50 min" },
          { name: "Adolescentes", detail: "13 a 15 anos · 50 min" }
        ]
      },
      {
        group: "Adultos",
        items: [
          { name: "Iniciantes", detail: "Faixa branca até 2 graus · 1h" },
          { name: "Avançados", detail: "Acima de faixa branca 2 graus · 1h" },
          { name: "Sparring", detail: "Avançados · 30 min" }
        ]
      }
    ]
  },
  faq: {
    eyebrow: "FAQ",
    title: "Perguntas frequentes",
    items: [
      {
        question: "Preciso de experiência para começar?",
        answer:
          "Não. As turmas de iniciantes são pensadas para quem começa do zero, com uma progressão gradual e acompanhamento próximo."
      },
      {
        question: "Onde fica a academia?",
        answer:
          "Na Avenida Amália Rodrigues 30, na Ramada (Odivelas), junto a Lisboa. O mapa e as direções estão na secção de contacto."
      },
      {
        question: "Como marco a aula experimental gratuita?",
        answer:
          "Basta enviares-nos uma mensagem pelo WhatsApp ou pelo Instagram. Ajudamos-te a escolher a turma e o horário."
      },
      {
        question: "Preciso de kimono para a primeira aula?",
        answer:
          "Não. A academia fornece o kimono durante a aula. Traz apenas uma garrafa de água e chinelos para usar fora do tatame."
      },
      {
        question: "O Jiu-Jitsu é indicado para crianças?",
        answer:
          "Sim. As turmas Mini Kids (3 a 6 anos) e Kids (7 a 12 anos) desenvolvem coordenação, respeito, disciplina e confiança num ambiente seguro. Existem também aulas de Pais & Filhos."
      },
      {
        question: "Há aulas para mulheres?",
        answer: "Sim. Todas as turmas são mistas e existem também aulas de defesa pessoal dedicadas a mulheres."
      },
      {
        question: "Posso treinar sem querer competir?",
        answer:
          "Sem dúvida. O Jiu-Jitsu melhora a condição física, a capacidade de defesa pessoal e a autoconfiança, independentemente de objetivos competitivos."
      },
      {
        question: "Há acompanhamento para quem quer competir?",
        answer: "Sim. A equipa técnica prepara e acompanha os atletas em campeonatos nacionais de gi e no-gi."
      }
    ]
  },
  contact: {
    eyebrow: "Contacto",
    title: "Vem treinar connosco",
    text: "A melhor forma de conhecer a Rio21 é experimentar uma aula na nossa academia na Ramada, em Odivelas. Entra em contacto connosco e marca a tua aula gratuita.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "Email",
    location: "Morada",
    locationValue: "Av. Amália Rodrigues 30\n2620-521 Ramada, Odivelas",
    directions: "Como chegar (GPS)",
    viewOnMaps: "Ver no Google Maps",
    mapTitle: "Mapa da localização da RIO21 Lisboa na Ramada, Odivelas"
  },
  app: {
    title: "Já és aluno?",
    text: "Marca as tuas aulas e acompanha a tua evolução na app MentorFlow.",
    appStoreLabel: "Descarregar a app MentorFlow na App Store",
    googlePlayLabel: "Descarregar a app MentorFlow no Google Play"
  },
  footer: {
    slogan: "Mente forte, corpo forte.",
    rights: "Todos os direitos reservados.",
    backToTop: "Voltar ao topo"
  }
};
