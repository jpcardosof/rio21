import type { CurriculumWeek, MethodDictionary } from "./curriculum.types";

/** Rio21 curricula, translated from the academy's PDFs with standard BJJ terminology. */

const miniKids = (
  [
    ["Standing strikes", "Safe stance + blocking punches + pushing the chest", "Bulldog"],
    ["Headlock", "Escaping a headlock by pushing the back and elbow", "Football"],
    ["Ground strikes", "Breakfall + kicking away + technical stand-up", "Tug of war"],
    ["Clinch & grips", "Breaking wrist grips", "Push out of the circle"],
    ["Standing strikes", "Jab + cross + double leg", "Dodgeball"],
    ["Headlock", "Escaping a rear headlock + forward leg takedown", "Red light"],
    ["Ground strikes", "Blocking punches from bottom guard + pushing away with the feet + technical stand-up", "Dodgeball"],
    ["Clinch & grips", "Front bear hug over the arms + pushing the hips + leg takedown", "Bulldog"],
    ["Standing strikes", "Stomp + double leg", "Elimination tag"],
    ["Headlock", "Escaping a headlock on the ground by swinging the leg over the head", "Football"],
    ["Ground strikes", "Kicking away from guard + technical stand-up", "Tug of war"],
    ["Clinch & grips", "Escaping a front bear hug with free arms + pushing the chin up with both hands", "Push out of the circle"],
    ["Standing strikes", "Defending a hook + leg takedown", "Dodgeball"],
    ["Headlock", "Defending a double leg + guillotine", "Red light"],
    ["Ground strikes", "Open guard + movement + stomp on the knee + technical stand-up", "Dodgeball"],
    ["Clinch & grips", "Windpipe choke (esgana galo)", "Bulldog"]
  ] as const
).map(
  ([category, detail, game]): CurriculumWeek => ({
    headline: `${category} · Game: ${game}`,
    blocks: [
      { label: "Conditioning", detail: "Coach's choice" },
      { label: "Self-defence & takedowns", title: category, detail },
      { label: "Game", detail: game }
    ]
  })
);

const kids = (
  [
    ["Standing strikes", "Safe stance + blocking punches + side clinch + hip throw", "Guard", "closed guard sweeps", "Sweep drills", "Bulldog", "Brotherhood"],
    ["Headlock", "Escaping a headlock by pushing the back and elbow", "Side control", "escaping side control", "Side control drills", "Football", "Mat etiquette"],
    ["Ground strikes", "Breakfall + kicking away + technical stand-up", "Guard", "closed guard passing", "Guard passing drills", "Tug of war", "Discipline"],
    ["Clinch & grips", "Breaking wrist grips", "Mount / Knee on belly", "escaping mount with the bridge", "Mount drills", "Push out of the circle", "Respect"],
    ["Standing strikes", "Breakfall + kicks to the knees + technical stand-up + fighting stance + jab + cross", "Guard", "closed guard submissions", "Submission and guard passing drills", "Dodgeball", "Progress"],
    ["Headlock", "Headlock escape + back takedown + armlock", "Back control", "defending and escaping the back", "Back control drills", "Red light", "Respecting your parents"],
    ["Ground strikes", "Blocking punches in closed guard + wrist control + triangle", "Guard", "half guard passing", "Half guard drills", "Dodgeball", "Inspiration"],
    ["Clinch & grips", "Front bear hug over the arms + pushing the hips + clinch + hip throw", "Side control", "side control or submission", "Side control drills", "Bulldog", "Values"],
    ["Standing strikes", "Striking stance + jab + cross + double leg", "Guard", "pendulum sweep", "Sweep drills", "Elimination tag", "Brotherhood"],
    ["Headlock", "Escaping a headlock on the ground under strikes", "Mount / Knee on belly", "escaping knee on belly", "Mount drills", "Football", "Mat etiquette"],
    ["Ground strikes", "Kicking away from guard + technical stand-up", "Guard", "escaping submissions in closed guard", "Guard passing drills", "Tug of war", "Discipline"],
    ["Clinch & grips", "Standing rear choke escape + forward takedown + armlock", "Back control", "back control and submission", "Back control drills", "Push out of the circle", "Respect"],
    ["Standing strikes", "Defending a side kick + inside trip + ankle lock", "Guard", "scissor sweep", "Sweep drills", "Dodgeball", "Progress"],
    ["Headlock", "Escaping a headlock on the ground by swinging the leg over the head", "Side control", "escaping side control", "Side control drills", "Red light", "Respecting your parents"],
    ["Ground strikes", "Defending punches in guard + armlock", "Guard", "closed guard passing", "Guard passing drills", "Dodgeball", "Inspiration"],
    ["Clinch & grips", "Defending a rear bear hug over the arms", "Mount / Knee on belly", "mount control + submission", "Mount and submission drills", "Bulldog", "Values"]
  ] as const
).map(
  ([category, detail, ground, groundDetail, drill, game, topic]): CurriculumWeek => ({
    headline: `${category} · ${ground}`,
    blocks: [
      { label: "Conditioning", detail: "Coach's choice" },
      { label: "Self-defence & takedowns", title: category, detail },
      { label: "Ground", title: ground, detail: `Instructor's choice: ${groundDetail}` },
      { label: "Drills", detail: drill },
      { label: "Game", detail: game },
      { label: "Topic", detail: topic }
    ]
  })
);

const beginnerWeeks = [
  ["Strikes", "Escaping mount under strikes + bridging + posture in guard", "Bottom guard", "Pulling closed guard with a foot on the hip; scissor sweep", "The Rio21 mission"],
  ["Headlock", "Escaping a standing side headlock + back takedown + technical mount + straight armlock", "Side control", "Escaping side control to turtle; double leg from turtle", "Mat etiquette"],
  ["Strikes", "Slipping the jab + double leg", "Top guard", "Standing guard opening + parallel sleeve control; knee-cut guard pass + side control", "Uniform hygiene"],
  ["Clinch & grips", "Escaping a front choke + knee defence + slipping the jab + body lock + transition to mount", "Mount / Knee on belly", "Escaping mount from a headlock using the bridge; escaping mount from a choke using the bridge", "Personal hygiene"],
  ["Strikes", "Defending strikes in closed guard + distance control + kicking away + technical stand-up", "Bottom guard", "Sweep controlling the heels when the opponent stands in closed guard; waiter sweep", "Commitment and attendance card"],
  ["Headlock", "Escaping a headlock on the ground by pushing the head away + straight armlock", "Back control", "Cross-collar choke from the back; escaping the back with the bridge, avoiding mount and side control", "Punctuality"],
  ["Strikes", "Distance control with the arm + stomp + body lock + side control", "Top guard", "Kneeling guard opening + over-the-leg pass; half guard pass with the hook, hip lift and transition to mount", "Grading"],
  ["Clinch & grips", "Blocking hooks + headlock takedown + straight armlock", "Side control", "Arm-triangle choke with the opponent's arm trapped; straight armlock spinning over the head", "The Rio21 method"],
  ["Strikes", "Blocking strikes from turtle + recovering closed guard", "Bottom guard", "Pendulum sweep; straight armlock when the opponent defends the pendulum sweep", "Brotherhood"],
  ["Headlock", "Standing guillotine", "Mount / Knee on belly", "Straight armlock from mount; americana from mount", "The Rio21 legacy"],
  ["Strikes", "Defending hooks + hip throw + straight armlock", "Top guard", "Standing guard opening with one hand on the collar and the other on the pants; stack pass with both arms under the leg", "Honesty"],
  ["Clinch & grips", "Escaping a front bear hug over the arms + hip throw + knee on belly", "Back / Turtle", "Taking the back from top turtle with a forearm grip, room for the knee, a pull and hooks; clock choke", "The Rio21 student"],
  ["Strikes", "Defending strikes in closed guard with a clinch + triangle", "Bottom guard", "Closed guard sit-up sweep into a kimura; kimura from closed guard", "The Rio21 black belt"],
  ["Headlock", "Escaping a headlock on the ground with the bridge + technical mount + straight armlock", "Side control", "Escaping side control and recovering half guard; half guard sweep with an underhook, controlling the opponent's foot", "Growth"],
  ["Strikes", "Defending a high side kick + inside trip + straight ankle lock", "Top guard", "Passing from De La Riva; leg drag pass", "Consistency"],
  ["Clinch & grips", "Escaping a rear bear hug under the arms + leg hook + hands to the mat + leg lock", "Mount / Knee on belly", "Escaping mount with the bridge; escaping mount to half guard", "Self-control"]
] as const;

const adultWeek = (week: (typeof beginnerWeeks)[number], topic: string): CurriculumWeek => {
  const [category, detail, sport, sportDetail] = week;
  return {
    headline: `${category} · ${sport}`,
    blocks: [
      { label: "Self-defence", title: category, detail },
      { label: "Sport Jiu-Jitsu", title: sport, detail: sportDetail },
      { label: "Topic of the week", detail: topic }
    ]
  };
};

const womenTopics = [
  "Welcome to Rio21 Women",
  "Our 3 pillars make Rio21",
  "Finding ways to celebrate success",
  "Make Jiu-Jitsu a way of life",
  "Setting boundaries and expectations",
  "Equality on the mat",
  "You are stronger than you think",
  "Moving to the next level"
];

const advanced = (
  [
    ["Guard pull or sacrifice throws", "Bottom guard"],
    ["Hip or hand throws", "Side control"],
    ["Leg pickups", "Top guard"],
    ["Leg takedowns", "Mount or knee on belly"],
    ["Guard pull or sacrifice throws", "Bottom guard"],
    ["Hip or hand throws", "Back control"],
    ["Leg pickups", "Top guard"],
    ["Hip or hand throws", "Side control"],
    ["Guard pull or sacrifice throws", "Bottom guard"],
    ["Leg takedowns", "Mount or knee on belly"],
    ["Leg pickups", "Top guard"],
    ["Leg takedowns", "Back control"],
    ["Guard pull or sacrifice throws", "Bottom guard"],
    ["Hip or hand throws", "Side control"],
    ["Leg pickups", "Top guard"],
    ["Leg takedowns", "Mount or knee on belly"]
  ] as const
).map(
  ([takedown, ground]): CurriculumWeek => ({
    headline: `${takedown} · ${ground}`,
    blocks: [
      { label: "Takedown", detail: takedown },
      { label: "Ground techniques", detail: ground }
    ]
  })
);

export const methodEn: MethodDictionary = {
  seo: {
    title: "Method and curriculum | Rio21 BJJ Odivelas",
    description:
      "Discover the Rio21 method: a week-by-week curriculum for Mini Kids, Kids, Beginners, Advanced and Women, plus the Values Stripes for children."
  },
  nav: "Method",
  eyebrow: "Rio21 Method",
  title: "A method planned week by week",
  intro:
    "Every class follows a structured 16-week curriculum (8 weeks for the Women's class). Each week has a defined technical theme, applied self-defence and a value practised on and off the mat. At the end of the cycle, the curriculum starts again.",
  weekLabel: "Week {week} of {total}",
  thisWeek: "This week",
  tablistLabel: "Classes",
  programs: [
    { id: "miniKids", name: "Mini Kids", audience: "Ages 3 to 6", duration: "30 min", weeks: miniKids },
    { id: "kids", name: "Kids I & II", audience: "Ages 7 to 12", duration: "50 min", weeks: kids },
    {
      id: "beginners",
      name: "Beginners",
      audience: "White belt up to 2 stripes",
      duration: "1h",
      weeks: beginnerWeeks.map((week) => adultWeek(week, week[4]))
    },
    { id: "advanced", name: "Advanced", audience: "White belt with 3+ stripes and above", duration: "1h", weeks: advanced },
    {
      id: "women",
      name: "Women",
      audience: "Women-only class",
      duration: "1h",
      availability: "Class available, no fixed schedule",
      weeks: womenTopics.map((topic, index) => adultWeek(beginnerWeeks[index], topic))
    }
  ],
  values: {
    eyebrow: "Values Stripes · For children",
    title: "Small actions, big achievements",
    intro:
      "At Rio21, Jiu-Jitsu goes beyond the mat. Our stripes represent values that help shape great athletes and, above all, great people.",
    summary:
      "Each stripe on the belt stands for a value practised at home, at school and on the mat. Families follow along and can remove a stripe if the value is no longer kept.",
    more: "See how it works",
    howToLoseLabel: "How it is lost",
    grades: [
      {
        number: 1,
        color: "#F28C28",
        title: "Put the phone down",
        motto: "Less time on the phone, more time on what really matters.",
        points: [
          "Avoid excessive phone use",
          "Be present in the moment and in activities",
          "More focus on family, friends and Jiu-Jitsu"
        ],
        howToLose: "If this rule is not kept for a period of time, the stripe can be removed by the family."
      },
      {
        number: 2,
        color: "#3A8F3A",
        title: "Do well at school",
        motto: "Knowledge is also a form of strength.",
        points: ["Do homework and study", "Get good grades", "Show effort and dedication"],
        howToLose:
          "If school performance keeps dropping or there is a lack of effort, the stripe can be removed by the family."
      },
      {
        number: 3,
        color: "#1E5AA8",
        title: "Respect parents and teachers",
        motto: "Respect shows in actions, every day.",
        points: ["Be polite and respectful", "Listen and follow guidance when needed", "Treat everyone around you well"],
        howToLose: "If there is disrespect, lying or behaviour against this value, the stripe can be removed by the family."
      },
      {
        number: 4,
        color: "#0A0A0A",
        title: "Hygiene",
        motto: "Taking care of yourself is also respecting others.",
        points: ["Keep your body clean", "Always wear a clean gi", "Look after your appearance and equipment"],
        howToLose: "If hygiene or care for the uniform is lacking, the stripe can be removed by the family."
      },
      {
        number: 5,
        color: "#3A8F3A",
        accent: "#F9E04C",
        title: "Rio21 example",
        motto: "It is not just about you. It is about how you inspire others.",
        points: [
          "Keep all previous stripes for 1 month",
          "Be present on and off the mat",
          "Show the Rio21 values every day"
        ],
        howToLose:
          "If any previous stripe is lost during the month, this stripe is removed and the cycle restarts the following month."
      }
    ]
  },
  teaser: {
    eyebrow: "This week on the mat",
    text: "What each class is training this week, following the Rio21 curriculum.",
    cta: "See the full method"
  },
  cta: {
    title: "Try the method in a free class",
    text: "Book your trial class and come meet the team and the way we train."
  }
};
