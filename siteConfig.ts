export type PoleId = "odivelas" | "vilaFrancaXira";

export const siteConfig = {
  name: "Rio21 BJJ",
  unitName: "Rio21 Lisboa",
  slogan: "Mente forte, corpo forte.",
  url: "https://rio21bjj.pt",
  seo: {
    title: "Rio21 Lisboa | Jiu-Jitsu Brasileiro em Odivelas",
    description:
      "Escola de Jiu-Jitsu Brasileiro em Odivelas. Aulas para kids, adolescentes e adultos, de segunda a sábado, das 7h às 21h30. Defesa pessoal, competição e primeira aula gratuita. Filial em Vila Franca de Xira.",
    keywords: [
      "Jiu-Jitsu Odivelas",
      "BJJ Odivelas",
      "Rio21 Lisboa",
      "Rio21 BJJ",
      "Jiu-Jitsu Vila Franca de Xira",
      "BJJ Vila Franca de Xira",
      "Jiu-Jitsu Kids Odivelas",
      "Defesa pessoal para mulheres",
      "Jiu-Jitsu Brasileiro Lisboa",
      "Aula experimental gratuita jiu-jitsu"
    ],
    locale: "pt_PT"
  },
  navigation: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Aulas", href: "#aulas" },
    { label: "Professores", href: "#professores" },
    { label: "Horários", href: "#horarios" },
    { label: "Filiais", href: "#filiais" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contacto", href: "#contacto" }
  ],
  ctas: {
    primary: "Marcar aula pelo WhatsApp",
    secondary: "Conhecer as aulas"
  },
  contacts: {
    email: "contacto@rio21bjj.pt",
    instagramDm: "https://ig.me/m/rio21.lisboa",
    whatsapp: "351916995642",
    whatsappDisplay: "+351 916 995 642",
    whatsappUrl:
      "https://wa.me/351916995642?text=Ol%C3%A1%20Rio21%21%20Gostaria%20de%20marcar%20uma%20aula%20experimental%20em%20Odivelas."
  },
  social: {
    instagram: [
      {
        name: "Rio21 Lisboa · Odivelas",
        handle: "@rio21.lisboa",
        type: "Escola",
        url: "https://www.instagram.com/rio21.lisboa/"
      },
      {
        name: "Rio21 Vila Franca de Xira",
        handle: "@rio21_vfx",
        type: "Filial",
        url: "https://www.instagram.com/rio21_vfx/"
      },
      {
        name: "Fábio Braga",
        handle: "@fabiobraga.bjj",
        type: "Professor",
        url: "https://www.instagram.com/fabiobraga.bjj/"
      },
      {
        name: "Samuel Correia",
        handle: "@butterflysamuel",
        type: "Professor",
        url: "https://www.instagram.com/butterflysamuel/"
      },
    ]
  },
  hero: {
    location: "Odivelas · Lisboa",
    title: "Jiu-Jitsu Brasileiro em Odivelas",
    subtitle:
      "Na Rio21 Lisboa treinas técnica, disciplina e confiança num tatame preparado para todos os níveis — do primeiro treino à competição.",
    highlights: [
      "Seg a Sáb · 07h00 – 21h30",
      "Kids · Adolescentes · Adultos",
      "1.ª aula gratuita"
    ]
  },
  about: {
    title: "Formar pessoas dentro e fora do tatame",
    text:
      "A Rio21 é uma equipa de Jiu-Jitsu Brasileiro nascida em Odivelas e com filial em Vila Franca de Xira. Através da técnica, da disciplina e do respeito, ajudamos crianças, jovens e adultos a desenvolver confiança, autocontrolo, condição física e espírito de comunidade.",
    image: "/images/team/equipa-rio21.jpg",
    imageAlt: "Professores da equipa Rio21 BJJ no tatame",
    values: [
      "Disciplina",
      "Respeito",
      "Evolução",
      "Confiança",
      "Família",
      "Superação"
    ]
  },
  classes: [
    {
      id: "kids",
      title: "Kids & Mini Kids",
      text:
        "Jiu-Jitsu para crianças com foco em coordenação, respeito, disciplina e diversão. Um espaço seguro para crescer com valores.",
      schedule: "Mini Kids · Seg e Qua às 18h00",
      image: "/images/instagram-official/jiu-jitsu-criancas.jpg",
      imageAlt: "Publicação oficial da Rio21 sobre aulas de Jiu-Jitsu para crianças"
    },
    {
      id: "paisFilhos",
      title: "Pais & Filhos",
      text:
        "Aulas para treinar em família: pais e filhos aprendem juntos no tatame, com jogos e técnica adaptada a cada idade.",
      schedule: "Datas anunciadas no Instagram",
      image: "/images/instagram-official/pais-e-filhos.jpg",
      imageAlt: "Publicação oficial da Rio21 sobre aulas de pais e filhos"
    },
    {
      id: "iniciantes",
      title: "Iniciantes",
      text:
        "Começa do zero com fundamentos claros, acompanhamento próximo e um ambiente acolhedor. Não precisas de experiência.",
      schedule: "Turmas de segunda a sábado",
      image: "/images/classes/iniciantes.jpg",
      imageAlt: "Professor da Rio21 a orientar aula de iniciantes"
    },
    {
      id: "adultos",
      title: "Adultos & Avançados",
      text:
        "Treinos técnicos para evoluir no detalhe: estratégia, intensidade e consistência para adolescentes e adultos de todos os níveis.",
      schedule: "Turmas de segunda a sábado",
      image: "/images/classes/adultos.jpg",
      imageAlt: "Treino de Jiu-Jitsu de adultos na Rio21 com equipa a assistir"
    },
    {
      id: "competicao",
      title: "Competição",
      text:
        "Preparação específica para quem quer competir: plano de treino, estratégia de luta e experiência de pódio com a equipa Rio21.",
      schedule: "Acompanhamento pela equipa técnica",
      image: "/images/instagram-official/nacional-open-2025.jpg",
      imageAlt: "Publicação oficial da Rio21 para o Nacional Open 2025"
    },
    {
      id: "defesaPessoal",
      title: "Defesa Pessoal",
      text:
        "Princípios práticos de controlo, distância e autocontrolo — incluindo aulas de defesa pessoal dedicadas a mulheres.",
      schedule: "Aulas e workshops regulares",
      image: "/images/instagram-official/defesa-pessoal-mulheres.jpg",
      imageAlt: "Publicação oficial da Rio21 sobre defesa pessoal para mulheres"
    }
  ],
  benefits: {
    title:
      "O Jiu-Jitsu não é apenas uma luta. É uma ferramenta de desenvolvimento físico, mental e emocional.",
    items: [
      { title: "Autoconfiança", icon: "shield" },
      { title: "Condição física", icon: "pulse" },
      { title: "Defesa pessoal", icon: "guard" },
      { title: "Redução de stress", icon: "leaf" },
      { title: "Foco e disciplina", icon: "target" },
      { title: "Respeito e autocontrolo", icon: "handshake" },
      { title: "Comunidade", icon: "people" },
      { title: "Desenvolvimento infantil", icon: "star" }
    ]
  },
  team: {
    founders: [
      {
        id: "founderFabioBraga",
        name: "Fábio Braga",
        image: "/images/coaches/fabio-braga.jpg",
        imageAlt: "Fábio Braga, fundador da Rio21 BJJ"
      },
      {
        id: "founderSamuelCorreia",
        name: "Samuel Correia",
        image: "/images/coaches/samuel-butterfly.jpg",
        imageAlt: "Samuel Correia, fundador da Rio21 BJJ"
      }
    ],
    professors: [
      {
        id: "professorFabioBraga",
        name: "Fábio Braga",
        image: "/images/coaches/fabio-braga.jpg",
        imageAlt: "Professor Fábio Braga da Rio21 BJJ"
      },
      {
        id: "professorSamuelCorreia",
        name: "Samuel Correia",
        image: "/images/coaches/samuel-butterfly.jpg",
        imageAlt: "Professor Samuel Correia da Rio21 BJJ"
      },
      { id: "professorRobsonCarvalho", name: "Robson Carvalho" },
      { id: "professorAppioNeto", name: "Appio Neto" },
      { id: "professorCarlosTavares", name: "Carlos Tavares" },
      { id: "professoraKathePaula", name: "Kathe Paula" }
    ],
    instructors: [
      { id: "instrutorEdder", name: "Edder" },
      { id: "instrutorMatheus", name: "Matheus" },
      { id: "instrutorRicardinho", name: "Ricardinho" }
    ],
    departments: [
      {
        id: "administrativo",
        title: "Administrativo",
        members: [
          { id: "administrativoCarolina", name: "Carolina" },
          { id: "administrativoRicardinho", name: "Ricardinho" }
        ]
      },
      {
        id: "merchandising",
        title: "Merchandising",
        members: [{ id: "merchandisingRicardinho", name: "Ricardinho" }]
      }
    ]
  },
  schedule: {
    odivelas: {
      title: "Rio21 Lisboa · Odivelas",
      badge: "Sede",
      days: "Segunda a Sábado",
      hours: "07h00 – 21h30",
      timetable: [
        {
          day: "Segunda",
          sessions: [
            { time: "09:00", title: "Avançados" },
            { time: "10:00", title: "Sparring" },
            { time: "12:00", title: "Iniciantes" },
            { time: "18:00", title: "Mini Kids" },
            { time: "18:30", title: "Kids" },
            { time: "19:30", title: "Iniciantes" },
            { time: "20:30", title: "Iniciantes" }
          ]
        },
        {
          day: "Terça",
          sessions: [
            { time: "07:00", title: "Iniciantes" },
            { time: "12:00", title: "All Levels" },
            { time: "13:00", title: "Sparring" },
            { time: "18:30", title: "Adolescentes" },
            { time: "19:30", title: "Iniciantes" },
            { time: "20:30", title: "Avançados" },
            { time: "21:30", title: "Sparring" }
          ]
        },
        {
          day: "Quarta",
          sessions: [
            { time: "09:00", title: "Avançados" },
            { time: "10:00", title: "Sparring" },
            { time: "12:00", title: "Iniciantes" },
            { time: "18:00", title: "Mini Kids" },
            { time: "18:30", title: "Kids" },
            { time: "19:30", title: "Avançados" },
            { time: "20:30", title: "Iniciantes" }
          ]
        },
        {
          day: "Quinta",
          sessions: [
            { time: "07:00", title: "Iniciantes" },
            { time: "12:00", title: "Avançados" },
            { time: "13:00", title: "Sparring" },
            { time: "18:30", title: "Adolescentes" },
            { time: "19:30", title: "Iniciantes" },
            { time: "20:30", title: "Avançados" },
            { time: "21:30", title: "Sparring" }
          ]
        },
        {
          day: "Sexta",
          sessions: [
            { time: "07:00", title: "All Levels" },
            { time: "08:00", title: "Sparring" },
            { time: "12:00", title: "All Levels" },
            { time: "13:00", title: "Sparring" },
            { time: "19:30", title: "All Levels" },
            { time: "20:30", title: "Sparring" }
          ]
        },
        {
          day: "Sábado",
          sessions: [
            { time: "10:00", title: "All Levels" },
            { time: "11:00", title: "Sparring" }
          ]
        }
      ]
    },
    vilaFrancaXira: {
      title: "Rio21 Vila Franca de Xira",
      badge: "Filial",
      days: "Segunda a Sábado",
      hours: "09h00 – 20h15",
      timetable: [
        {
          day: "Segunda",
          sessions: [
            { time: "09:00", title: "All Levels" },
            { time: "12:00", title: "All Levels" },
            { time: "18:00", title: "Kids & Adolescentes" },
            { time: "19:15", title: "All Levels" },
            { time: "20:15", title: "Avançados" }
          ]
        },
        {
          day: "Terça",
          sessions: [
            { time: "09:00", title: "All Levels" },
            { time: "12:00", title: "All Levels" },
            { time: "17:00", title: "Mini Kids" },
            { time: "18:00", title: "Kids & Adolescentes" },
            { time: "19:15", title: "All Levels" },
            { time: "20:15", title: "Avançados" }
          ]
        },
        {
          day: "Quarta",
          sessions: [
            { time: "09:00", title: "No-Gi" },
            { time: "12:00", title: "No-Gi" },
            { time: "19:15", title: "All Levels" },
            { time: "20:15", title: "No-Gi" }
          ]
        },
        {
          day: "Quinta",
          sessions: [
            { time: "09:00", title: "All Levels" },
            { time: "12:00", title: "All Levels" },
            { time: "17:00", title: "Mini Kids" },
            { time: "18:00", title: "Kids & Adolescentes" },
            { time: "19:15", title: "All Levels" },
            { time: "20:15", title: "All Levels" }
          ]
        },
        {
          day: "Sexta",
          sessions: [
            { time: "09:00", title: "All Levels" },
            { time: "12:00", title: "All Levels" },
            { time: "18:00", title: "Kids & Adolescentes" },
            { time: "19:15", title: "All Levels" },
            { time: "20:15", title: "Avançados" }
          ]
        },
        {
          day: "Sábado",
          sessions: [
            { time: "09:00", title: "Kids & Adolescentes" },
            { time: "10:00", title: "All Levels" }
          ]
        }
      ]
    },
    note:
      "Confirma sempre o horário da tua turma no Instagram oficial antes da primeira aula."
  },
  poles: [
    {
      id: "odivelas" as PoleId,
      role: "Sede",
      name: "Rio21 Lisboa",
      shortName: "Odivelas",
      location: "Odivelas, Lisboa",
      description:
        "A casa da Rio21: tatame amplo, turmas para kids, adolescentes e adultos, de segunda a sábado. É aqui que a equipa nasce e cresce.",
      teachers: ["Equipa técnica Rio21"],
      classes: ["Kids", "Iniciantes", "Adultos", "Avançados", "Defesa Pessoal"],
      instagram: "@rio21.lisboa",
      instagramUrl: "https://www.instagram.com/rio21.lisboa/",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Rio21%20BJJ%20Odivelas",
      mapEmbedUrl:
        "https://www.google.com/maps?q=Rio21%20BJJ%20Odivelas&output=embed",
      image: "/images/poles/odivelas.jpg",
      imageAlt: "Professor da Rio21 no tatame da sede em Odivelas",
      cta: "Marcar aula em Odivelas"
    },
    {
      id: "vilaFrancaXira" as PoleId,
      role: "Filial",
      name: "Rio21 Vila Franca de Xira",
      shortName: "Vila Franca de Xira",
      location: "Vila Franca de Xira, Lisboa",
      description:
        "A filial Rio21 em Vila Franca de Xira leva a mesma cultura de treino a norte do Tejo: Jiu-Jitsu, defesa pessoal e turmas para todas as idades.",
      teachers: ["Equipa técnica Rio21"],
      classes: ["Kids", "Adultos", "Avançados", "Defesa Pessoal"],
      instagram: "@rio21_vfx",
      instagramUrl: "https://www.instagram.com/rio21_vfx/",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Rio21%20Vila%20Franca%20de%20Xira",
      mapEmbedUrl:
        "https://www.google.com/maps?q=Rio21%20Vila%20Franca%20de%20Xira&output=embed",
      image: "/images/poles/vila-franca-xira.jpg",
      imageAlt: "Equipa Rio21 reunida na abertura da filial de Vila Franca de Xira",
      cta: "Marcar aula em Vila Franca de Xira"
    }
  ],
  trial: {
    title: "Experimenta uma aula gratuita",
    text:
      "A melhor forma de conhecer a Rio21 é pisar o tatame. Marca a tua primeira aula experimental gratuita em Odivelas ou na filial de Vila Franca de Xira.",
    objections: [
      "Não precisas de experiência",
      "Ambiente seguro e acolhedor",
      "Primeira aula gratuita",
      "Acompanhamento desde o primeiro treino"
    ],
    interests: [
      "Kids / Mini Kids",
      "Pais & Filhos",
      "Iniciantes",
      "Adultos / Avançados",
      "Competição",
      "Defesa pessoal"
    ]
  },
  gallery: [
    {
      src: "/images/gallery/equipa-01.jpg",
      alt: "Professor da Rio21 no tatame de Odivelas com bandeiras ao fundo",
      category: "Equipa"
    },
    {
      src: "/images/gallery/treino-01.jpg",
      alt: "Professor a supervisionar rolls no treino da Rio21",
      category: "Treino adultos"
    },
    {
      src: "/images/gallery/kids-01.jpg",
      alt: "Crianças na aula Mini Kids da Rio21",
      category: "Treino kids"
    },
    {
      src: "/images/gallery/graduacao-01.jpg",
      alt: "Aluna emocionada no momento de graduação na Rio21",
      category: "Graduações"
    },
    {
      src: "/images/gallery/defesa-01.jpg",
      alt: "Cartaz de aula de defesa pessoal para mulheres da Rio21",
      category: "Defesa pessoal"
    },
    {
      src: "/images/gallery/competicao-01.jpg",
      alt: "Atleta da Rio21 em combate de competição de Jiu-Jitsu",
      category: "Competições"
    },
    {
      src: "/images/gallery/competicao-02.jpg",
      alt: "Atleta da Rio21 em prova de grappling ADCC",
      category: "Competições"
    },
    {
      src: "/images/gallery/arte-suave-01.jpg",
      alt: "Cartaz Arte Suave da Rio21 BJJ com atletas a treinar",
      category: "Comunidade"
    },
    {
      src: "/images/instagram-official/graduacao-fabio-braga.jpg",
      alt: "Fábio Braga numa graduação divulgada pelo Instagram oficial da Rio21",
      category: "Graduações"
    },
    {
      src: "/images/instagram-official/atleta-rio21.jpg",
      alt: "Atleta com kimono oficial da Rio21 antes de entrar no tatame",
      category: "Equipa"
    },
    {
      src: "/images/instagram-official/jiu-jitsu-mulheres.jpg",
      alt: "Publicação da Rio21 dedicada às mulheres no Jiu-Jitsu",
      category: "Comunidade"
    },
    {
      src: "/images/instagram-official/defesa-pessoal-mulheres.jpg",
      alt: "Aula de defesa pessoal para mulheres divulgada pela Rio21",
      category: "Defesa pessoal"
    },
    {
      src: "/images/instagram-official/jiu-jitsu-criancas.jpg",
      alt: "Publicação da Rio21 sobre Jiu-Jitsu para crianças",
      category: "Treino kids"
    },
    {
      src: "/images/instagram-official/pais-e-filhos.jpg",
      alt: "Publicação da Rio21 sobre aulas de pais e filhos",
      category: "Família"
    },
    {
      src: "/images/instagram-official/seminario-fabio-braga.jpg",
      alt: "Seminário com Fábio Braga divulgado pela Rio21",
      category: "Seminários"
    },
    {
      src: "/images/instagram-official/faixas-rio21.jpg",
      alt: "Faixas de Jiu-Jitsu numa publicação oficial da Rio21",
      category: "Graduações"
    }
  ],
  instagramSection: {
    featured: {
      src: "/images/instagram-official/atleta-rio21.jpg",
      alt: "Atleta com kimono oficial da Rio21 numa publicação da escola",
      handle: "@rio21.lisboa",
      name: "Rio21 Lisboa · Odivelas",
      type: "Escola",
      url: "https://www.instagram.com/rio21.lisboa/"
    },
    secondary: {
      src: "/images/instagram/rio21-vfx-01.jpg",
      alt: "Cartaz de benefícios do Jiu-Jitsu da Rio21 Vila Franca de Xira",
      handle: "@rio21_vfx",
      name: "Rio21 Vila Franca de Xira",
      type: "Filial",
      url: "https://www.instagram.com/rio21_vfx/"
    }
  },
  testimonials: {
    title: "O que vais encontrar no tatame",
    text:
      "A experiência de quem começa a treinar connosco, seja no primeiro mês ou na preparação para competir.",
    items: [
      "Comecei sem experiência e senti-me acompanhado desde o primeiro treino.",
      "O meu filho ganhou mais confiança, foco e disciplina.",
      "Ambiente técnico, professores atentos e uma equipa que nos faz querer voltar.",
      "O Jiu-Jitsu ajudou-me a lidar melhor com a pressão e a melhorar a condição física."
    ]
  },
  faqs: [
    {
      question: "Preciso de experiência para começar?",
      answer:
        "Não. As turmas de iniciantes existem para quem está a começar do zero, com explicação progressiva e acompanhamento."
    },
    {
      question: "Posso fazer uma aula experimental gratuita?",
      answer:
        "Sim. Envia o formulário ou fala diretamente connosco pelo WhatsApp para marcares a primeira aula em Odivelas."
    },
    {
      question: "O Jiu-Jitsu é indicado para crianças?",
      answer:
        "Sim. As aulas kids e mini kids trabalham coordenação, respeito, disciplina e confiança num ambiente seguro. Há ainda aulas de pais & filhos."
    },
    {
      question: "Preciso de comprar kimono antes da primeira aula?",
      answer:
        "Não necessariamente. Fala com o professor antes da primeira aula para confirmares o equipamento recomendado."
    },
    {
      question: "Há aulas para mulheres?",
      answer:
        "Sim. Todas as turmas são mistas e existem aulas de defesa pessoal dedicadas a mulheres."
    },
    {
      question: "Qual unidade devo escolher?",
      answer:
        "A sede fica em Odivelas e a filial em Vila Franca de Xira. Escolhe pela tua localização — a cultura de treino é a mesma."
    },
    {
      question: "Posso treinar defesa pessoal sem querer competir?",
      answer:
        "Sim. O Jiu-Jitsu é útil para defesa pessoal, autocontrolo e confiança, mesmo sem objetivo competitivo."
    },
    {
      question: "Há acompanhamento para quem quer competir?",
      answer:
        "Sim. A equipa técnica acompanha os atletas em campeonatos nacionais de gi e no-gi, com preparação específica."
    }
  ],
  media: {
    heroImage: "/images/hero/rio21-hero.jpg",
    heroImageAlt:
      "Professor da Rio21 a avaliar alunos durante treino de Jiu-Jitsu em Odivelas"
  }
} as const;
