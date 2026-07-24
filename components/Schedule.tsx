import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

type UnitSchedule =
  | typeof siteConfig.schedule.odivelas
  | typeof siteConfig.schedule.vilaFrancaXira;

function sessionStyle(title: string) {
  if (title.includes("Kids") || title === "Adolescentes") {
    return "border-gold/45 bg-gold/10 text-yellow-950";
  }

  if (title === "Sparring") {
    return "border-ember/35 bg-ember/10 text-red-950";
  }

  if (title === "No-Gi") {
    return "border-steel/35 bg-steel/10 text-slate-950";
  }

  if (title === "Avançados") {
    return "border-neutral-800 bg-neutral-900 text-white";
  }

  return "border-black/10 bg-white text-ink";
}

function ScheduleCard({ unit }: { unit: UnitSchedule }) {
  return (
    <article className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
      <div className="flex flex-col gap-4 bg-ink px-5 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-sm border border-gold/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-gold">
              {unit.badge}
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-400">
              {unit.days}
            </p>
          </div>
          <h3 className="mt-3 text-2xl font-black sm:text-3xl">{unit.title}</h3>
        </div>
        <div className="border-l-2 border-ember pl-3 sm:text-right">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-400">
            Faixa horária
          </p>
          <p className="mt-1 font-black text-white">{unit.hours}</p>
        </div>
      </div>

      <div className="border-b border-black/10 bg-neutral-50 px-5 py-3 sm:hidden">
        <p className="text-xs font-bold text-neutral-600">
          Desliza para o lado para consultar todos os dias →
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="grid min-w-[920px] grid-cols-6">
          {unit.timetable.map((day, dayIndex) => (
            <section
              key={day.day}
              className={`min-h-[31rem] ${
                dayIndex > 0 ? "border-l border-black/10" : ""
              }`}
            >
              <h4 className="border-b border-black/10 bg-neutral-100 px-3 py-3 text-center text-xs font-black uppercase tracking-[0.16em] text-ink">
                {day.day}
              </h4>
              <div className="grid gap-2 p-2.5">
                {day.sessions.map((session) => (
                  <div
                    key={`${day.day}-${session.time}-${session.title}`}
                    className={`rounded-md border px-2.5 py-2.5 text-center ${sessionStyle(
                      session.title
                    )}`}
                  >
                    <time className="block text-lg font-black leading-none">
                      {session.time}
                    </time>
                    <span className="mt-1.5 block text-[10px] font-black uppercase leading-tight tracking-wide">
                      {session.title}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Schedule() {
  return (
    <section id="horarios" className="bg-paper py-20 text-ink sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Horários"
          title="Encontra o teu horário de treino"
          text="Consulta a programação semanal completa de Odivelas e Vila Franca de Xira."
          tone="light"
        />

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-black uppercase tracking-[0.14em] text-neutral-600 sm:mt-10">
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-sm bg-gold/40" /> Kids e adolescentes
          </span>
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-sm bg-ember/30" /> Sparring
          </span>
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-sm bg-steel/30" /> No-Gi
          </span>
          <span className="flex items-center gap-2">
            <i className="h-2.5 w-2.5 rounded-sm bg-neutral-900" /> Avançados
          </span>
        </div>

        <div className="mt-6 grid gap-8">
          <ScheduleCard unit={siteConfig.schedule.odivelas} />
          <ScheduleCard unit={siteConfig.schedule.vilaFrancaXira} />
        </div>

        <p className="mt-6 border-l-2 border-ember pl-4 text-sm font-bold text-neutral-700">
          {siteConfig.schedule.note}
        </p>
      </div>
    </section>
  );
}
