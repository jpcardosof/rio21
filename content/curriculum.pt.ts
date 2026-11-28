import type { CurriculumWeek, MethodDictionary } from "./curriculum.types";

/** Currículos Rio21 (PDFs da academia, transcritos e adaptados a PT-PT). */

const miniKids = (
  [
    ["Strike em pé", "Postura segura + bloqueio de socos + empurrar no peito", "Bulldog"],
    ["Gravata", "Saída da gravata empurrando as costas e o cotovelo", "Futebol"],
    ["Strike no chão", "Amortecimento de queda + pedalada + levantada técnica", "Cabo de guerra"],
    ["Clinch e pegada", "Saída das pegadas de pulso", "Empurrar do círculo"],
    ["Strike em pé", "Jab + direto + double leg", "Queimada"],
    ["Gravata", "Saída da gravata por trás + queda de perna para a frente", "Sinal vermelho"],
    ["Strike no chão", "Bloquear socos na guarda por baixo + empurrar com os pés + levantada técnica", "Queimada"],
    ["Clinch e pegada", "Abraço de urso pela frente por cima dos braços + empurrar o quadril + queda de perna", "Bulldog"],
    ["Strike em pé", "Pisão + double leg", "Jogo do mata"],
    ["Gravata", "Saída da gravata no chão usando a perna por cima da cabeça", "Futebol"],
    ["Strike no chão", "Pedalada na guarda + levantada técnica", "Cabo de guerra"],
    ["Clinch e pegada", "Saída do abraço de urso pela frente com braços soltos + empurrar o queixo de baixo para cima com as duas mãos", "Empurrar do círculo"],
    ["Strike em pé", "Defesa de soco lateral + queda de perna", "Queimada"],
    ["Gravata", "Defesa de double leg + guilhotina", "Sinal vermelho"],
    ["Strike no chão", "Guarda aberta + movimentação + pisão no joelho + levantada técnica", "Queimada"],
    ["Clinch e pegada", "Estrangulamento esgana galo", "Bulldog"]
  ] as const
).map(
  ([category, detail, game]): CurriculumWeek => ({
    headline: `${category} · Jogo: ${game}`,
    blocks: [
      { label: "Exercícios físicos", detail: "Escolha do professor" },
      { label: "Defesa pessoal e queda", title: category, detail },
      { label: "Jogo", detail: game }
    ]
  })
);

const kids = (
  [
    ["Strike em pé", "Postura segura + bloqueio de socos + clinch lateral + queda de quadril", "Guarda", "raspagens da guarda fechada", "Específico de raspagem", "Bulldog", "Irmandade"],
    ["Gravata", "Saída da gravata empurrando as costas e o cotovelo", "Imobilização lateral", "saída da imobilização lateral", "Específico de controlo lateral", "Futebol", "Comportamento no tatame"],
    ["Strike no chão", "Amortecimento de queda + pedalada + levantada técnica", "Guarda", "passagem de guarda fechada", "Específico de passagem de guarda", "Cabo de guerra", "Disciplina"],
    ["Clinch e pegada", "Saída das pegadas de pulso", "Montada / Joelho na barriga", "saída da montada utilizando a ponte", "Específico na montada", "Empurrar do círculo", "Respeito"],
    ["Strike em pé", "Amortecimento de queda + pedaladas nos joelhos + levantada técnica + base de luta + jab + direto", "Guarda", "finalização da guarda fechada", "Específico de finalização + passagem de guarda", "Queimada", "Evolução"],
    ["Gravata", "Saída da gravata + queda para trás + armlock", "Costas", "defesa e saída das costas", "Específico das costas", "Sinal vermelho", "Respeitar os pais"],
    ["Strike no chão", "Bloquear socos na guarda fechada + controlo dos pulsos + triângulo", "Guarda", "passagem da meia guarda", "Específico de meia guarda", "Queimada", "Inspiração"],
    ["Clinch e pegada", "Abraço de urso pela frente por cima dos braços + empurrar o quadril + clinch + queda de quadril", "Imobilização lateral", "controlo lateral ou finalização", "Específico da imobilização lateral", "Bulldog", "Valores"],
    ["Strike em pé", "Base de strike + jab + direto + double leg", "Guarda", "raspagem do pêndulo", "Específico de raspagem", "Jogo do mata", "Irmandade"],
    ["Gravata", "Saída da gravata no chão com socos", "Montada / Joelho na barriga", "saída do joelho na barriga", "Específico na montada", "Futebol", "Comportamento no tatame"],
    ["Strike no chão", "Pedalada na guarda + levantada técnica", "Guarda", "saída de finalização na guarda fechada", "Específico de passagem de guarda", "Cabo de guerra", "Disciplina"],
    ["Clinch e pegada", "Saída em pé do estrangulamento por trás + queda para a frente + armlock", "Costas", "controlo de costas e finalização", "Específico de costas", "Empurrar do círculo", "Respeito"],
    ["Strike em pé", "Defender o chute lateral + derrubada com gancho por dentro + chave de pé", "Guarda", "raspagem da tesoura", "Específico de raspagem", "Queimada", "Evolução"],
    ["Gravata", "Saída da gravata no chão passando a perna sobre a cabeça", "Imobilização lateral", "saída do controlo lateral", "Específico de imobilização lateral", "Sinal vermelho", "Respeitar os pais"],
    ["Strike no chão", "Defesa de socos na guarda + chave de braço", "Guarda", "passagem de guarda fechada", "Específico de passagem de guarda", "Queimada", "Inspiração"],
    ["Clinch e pegada", "Defesa do abraço de urso por trás por cima dos braços", "Montada / Joelho na barriga", "controlo da montada + finalização", "Específico de montada e finalização", "Bulldog", "Valores"]
  ] as const
).map(
  ([category, detail, ground, groundDetail, drill, game, topic]): CurriculumWeek => ({
    headline: `${category} · ${ground}`,
    blocks: [
      { label: "Exercícios físicos", detail: "Escolha do professor" },
      { label: "Defesa pessoal e queda", title: category, detail },
      { label: "Chão", title: ground, detail: `Escolha do instrutor: ${groundDetail}` },
      { label: "Treino", detail: drill },
      { label: "Jogo", detail: game },
      { label: "Tópico", detail: topic }
    ]
  })
);

const beginnerWeeks = [
  ["Strike", "Saída da montada com socos + utilizar a ponte + postura na guarda", "Guarda por baixo", "Puxada para a guarda fechada utilizando o pé no quadril; raspagem da tesoura", "Missão da Rio21"],
  ["Gravata", "Saída da gravata lateral em pé + queda para trás + montada técnica + chave de braço reta", "Imobilização lateral", "Saída da imobilização lateral para a posição de quatro apoios; double leg a partir dos quatro apoios", "Comportamento no tatame"],
  ["Strike", "Esquiva do jab + double leg", "Guarda por cima", "Abertura de guarda em pé + domínio da manga paralela; passagem de guarda cruzando o joelho + imobilização lateral", "Higiene do uniforme"],
  ["Clinch e pegada", "Saída do estrangulamento pela frente + defesa de joelhada + esquiva do jab + cinturada + transição para a montada", "Montada / Joelho na barriga", "Saída da montada com gravata usando a ponte; saída da montada com estrangulamento usando a ponte", "Higiene pessoal"],
  ["Strike", "Defesa de socos na guarda fechada + controlo da distância + pedalada + levantada técnica", "Guarda por baixo", "Raspagem com domínio dos calcanhares quando o oponente fica em pé na guarda fechada; raspagem do garçom", "Aplicação e cartão de frequência"],
  ["Gravata", "Saída da gravata no chão afastando a cabeça + chave de braço reta", "Costas", "Finalização das costas em X; saída das costas usando a ponte, evitando a montada e a imobilização lateral", "Pontualidade"],
  ["Strike", "Controlo de distância com o braço + pisão + cinturada + imobilização lateral", "Guarda por cima", "Abertura de guarda ajoelhado + passagem de guarda por cima da perna; passagem de meia guarda usando o gancho + elevação de quadril + transição para a montada", "Graduação"],
  ["Clinch e pegada", "Bloqueio dos socos cruzados + queda de gravata + chave de braço reta", "Imobilização lateral", "Estrangulamento com o braço do oponente laçado; chave de braço reta girando por cima da cabeça", "O método da Rio21"],
  ["Strike", "Bloqueio de socos na posição de quatro apoios + reposição da guarda fechada", "Guarda por baixo", "Raspagem do pêndulo; chave de braço reta quando o oponente defende a raspagem do pêndulo", "Irmandade"],
  ["Gravata", "Guilhotina em pé", "Montada / Joelho na barriga", "Chave de braço reta na montada; chave de braço americana na montada", "O legado Rio21"],
  ["Strike", "Defesa de socos laterais + queda de quadril + chave de braço reta", "Guarda por cima", "Abertura de guarda em pé com uma mão na gola e outra nas calças; passagem de guarda emborcando com os dois braços por baixo da perna", "Verdade"],
  ["Clinch e pegada", "Saída do abraço de urso pela frente por cima dos braços + queda de quadril + joelho na barriga", "Costas / Quatro apoios", "Transição para as costas a partir dos quatro apoios por cima, com pegada do antebraço, espaço para o joelho, puxada e ganchos; estrangulamento do relógio", "O aluno Rio21"],
  ["Strike", "Defesa de socos na guarda fechada com clinch + triângulo", "Guarda por baixo", "Raspagem da guarda fechada sentando e encaixando a kimura; kimura da guarda fechada", "O faixa preta Rio21"],
  ["Gravata", "Saída da gravata no chão usando a ponte + montada técnica + chave de braço reta", "Imobilização lateral", "Saída da imobilização lateral + reposição da meia guarda; raspagem da meia guarda com esgrima, controlando o pé do oponente", "Crescimento"],
  ["Strike", "Defesa de chute lateral alto + queda de gancho por dentro + chave de pé reta", "Guarda por cima", "Passagem de guarda a partir da De La Riva; passagem de leg drag", "Consistência"],
  ["Clinch e pegada", "Saída do abraço de urso por trás com pegadas por baixo dos braços + gancho na perna + mãos no chão + chave de perna", "Montada / Joelho na barriga", "Saída da montada usando a ponte; saída da montada para a meia guarda", "Autocontrolo"]
] as const;

const adultWeek = (week: (typeof beginnerWeeks)[number], topic: string): CurriculumWeek => {
  const [category, detail, sport, sportDetail] = week;
  return {
    headline: `${category} · ${sport}`,
    blocks: [
      { label: "Defesa pessoal", title: category, detail },
      { label: "Jiu-Jitsu desportivo", title: sport, detail: sportDetail },
      { label: "Tópico da semana", detail: topic }
    ]
  };
};

const womenTopics = [
  "Boas-vindas ao Rio21 Feminino",
  "Os nossos 3 pilares fazem a Rio21",
  "Encontrar formas de celebrar o sucesso",
  "Faz do Jiu-Jitsu um estilo de vida",
  "Definir limites e expectativas",
  "Igualdade no tatame",
  "És mais forte do que pensas",
  "Passar para o próximo nível"
];

const advanced = (
  [
    ["Puxada para a guarda ou quedas de sacrifício", "Guarda por baixo"],
    ["Queda de quadril ou de mão", "Imobilização lateral"],
    ["Catadas de perna", "Guarda por cima"],
    ["Quedas de perna", "Montada ou joelho na barriga"],
    ["Puxada para a guarda ou quedas de sacrifício", "Guarda por baixo"],
    ["Queda de quadril ou de mão", "Costas"],
    ["Catadas de perna", "Guarda por cima"],
    ["Queda de quadril ou de mão", "Imobilização lateral"],
    ["Puxada para a guarda ou quedas de sacrifício", "Guarda por baixo"],
    ["Quedas de perna", "Montada ou joelho na barriga"],
    ["Catadas de perna", "Guarda por cima"],
    ["Quedas de perna", "Costas"],
    ["Puxada para a guarda ou quedas de sacrifício", "Guarda por baixo"],
    ["Queda de quadril ou de mão", "Imobilização lateral"],
    ["Catadas de perna", "Guarda por cima"],
    ["Quedas de perna", "Montada ou joelho na barriga"]
  ] as const
).map(
  ([takedown, ground]): CurriculumWeek => ({
    headline: `${takedown} · ${ground}`,
    blocks: [
      { label: "Técnica de queda", detail: takedown },
      { label: "Técnicas de chão", detail: ground }
    ]
  })
);

export const methodPt: MethodDictionary = {
  seo: {
    title: "Método e currículo | Rio21 BJJ Odivelas",
    description:
      "Conhece o método da Rio21: currículo semana a semana para Mini Kids, Kids, Iniciantes, Avançados e Feminino, e os Graus de Valores para crianças."
  },
  nav: "Método",
  eyebrow: "Método Rio21",
  title: "Um método pensado semana a semana",
  intro:
    "Cada turma segue um currículo estruturado de 16 semanas (8 na turma Feminino). Todas as semanas têm um tema técnico definido, defesa pessoal aplicada e um valor trabalhado dentro e fora do tatame. No fim do ciclo, o currículo recomeça.",
  weekLabel: "Semana {week} de {total}",
  thisWeek: "Esta semana",
  tablistLabel: "Turmas",
  programs: [
    { id: "miniKids", name: "Mini Kids", audience: "3 a 6 anos", duration: "30 min", weeks: miniKids },
    { id: "kids", name: "Kids I e II", audience: "7 a 12 anos", duration: "50 min", weeks: kids },
    {
      id: "beginners",
      name: "Iniciantes",
      audience: "Faixa branca até 2 graus",
      duration: "1h",
      weeks: beginnerWeeks.map((week) => adultWeek(week, week[4]))
    },
    { id: "advanced", name: "Avançados", audience: "Acima de faixa branca 2 graus", duration: "1h", weeks: advanced },
    {
      id: "women",
      name: "Feminino",
      audience: "Turma exclusiva para mulheres",
      duration: "1h",
      availability: "Turma disponível, sem horário definido",
      weeks: womenTopics.map((topic, index) => adultWeek(beginnerWeeks[index], topic))
    }
  ],
  values: {
    eyebrow: "Graus de Valores · Para crianças",
    title: "Pequenas atitudes, grandes conquistas",
    intro:
      "Na Rio21, o Jiu-Jitsu vai além do tatame. Os nossos graus representam valores que ajudam a formar grandes atletas e, principalmente, grandes pessoas.",
    summary:
      "Cada grau na faixa representa um valor praticado em casa, na escola e no tatame. A família acompanha e pode retirar o grau se o valor deixar de ser cumprido.",
    more: "Ver como funciona",
    howToLoseLabel: "Como se perde",
    grades: [
      {
        number: 1,
        color: "#F28C28",
        title: "Larga o telemóvel",
        motto: "Menos tempo no telemóvel, mais tempo no que realmente importa.",
        points: [
          "Evitar o uso excessivo do telemóvel",
          "Estar presente no momento e nas atividades",
          "Mais foco na família, nos amigos e no Jiu-Jitsu"
        ],
        howToLose: "Se esta regra não for cumprida durante um período, o grau pode ser retirado pela família."
      },
      {
        number: 2,
        color: "#3A8F3A",
        title: "Vai bem na escola",
        motto: "O conhecimento também é uma forma de força.",
        points: ["Fazer os trabalhos de casa e estudar", "Ter boas notas", "Demonstrar esforço e dedicação"],
        howToLose:
          "Se houver uma quebra constante no rendimento escolar ou falta de esforço, o grau pode ser retirado pela família."
      },
      {
        number: 3,
        color: "#1E5AA8",
        title: "Respeito aos pais e aos professores",
        motto: "O respeito mostra-se em atitudes, todos os dias.",
        points: ["Ser educado e respeitoso", "Ouvir e obedecer quando necessário", "Tratar bem todos à sua volta"],
        howToLose:
          "Se houver desrespeito, mentiras ou atitudes contrárias a este valor, o grau pode ser retirado pela família."
      },
      {
        number: 4,
        color: "#0A0A0A",
        title: "Higiene",
        motto: "Cuidar de si também é respeitar os outros.",
        points: ["Manter o corpo limpo", "Usar sempre o kimono limpo", "Cuidar da aparência e dos materiais"],
        howToLose: "Se houver falta de higiene ou descuido com o uniforme, o grau pode ser retirado pela família."
      },
      {
        number: 5,
        color: "#3A8F3A",
        accent: "#F9E04C",
        title: "Exemplo Rio21",
        motto: "Não é só sobre ti. É sobre como inspiras os outros.",
        points: [
          "Manter todos os graus anteriores durante 1 mês",
          "Ser presente dentro e fora do tatame",
          "Demonstrar os valores da Rio21 todos os dias"
        ],
        howToLose:
          "Se perder algum dos graus anteriores durante o mês, o grau é retirado e o ciclo recomeça no mês seguinte."
      }
    ]
  },
  teaser: {
    eyebrow: "Esta semana no tatame",
    text: "O que cada turma está a treinar esta semana, segundo o currículo Rio21.",
    cta: "Ver o método completo"
  },
  cta: {
    title: "Experimenta o método numa aula grátis",
    text: "Marca a tua aula experimental e vem conhecer a equipa e a nossa forma de treinar."
  }
};
