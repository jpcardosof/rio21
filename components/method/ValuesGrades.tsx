import { SectionLabel } from "@/components/SectionLabel";
import { delay } from "@/components/motion";
import type { MethodDictionary, ValueGrade } from "@/content/curriculum.types";

/** Risca colorida de um grau (como os graus numa faixa). */
export function GradeSwatch({ grade, className = "h-2.5 w-14" }: { grade: ValueGrade; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block overflow-hidden rounded-full ring-1 ring-fg/15 ${className}`}
      style={{
        background: grade.accent
          ? `linear-gradient(${grade.color} 0 33%, ${grade.accent} 33% 66%, ${grade.color} 66%)`
          : grade.color
      }}
    />
  );
}

export function ValuesGrades({ values }: { values: MethodDictionary["values"] }) {
  return (
    <section id="graus" aria-labelledby="graus-titulo" className="py-24 lg:py-32">
      <div className="shell">
        <div data-reveal className="max-w-2xl">
          <SectionLabel>{values.eyebrow}</SectionLabel>
          <h2 id="graus-titulo" className="title-section mt-5">
            {values.title}
          </h2>
          <p className="mt-6 text-lg text-muted">{values.intro}</p>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.grades.map((grade, index) => (
            <li
              key={grade.number}
              data-reveal
              style={delay((index % 3) * 100)}
              className="card flex flex-col p-7 transition-[transform,box-shadow] duration-500 ease-soft hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <GradeSwatch grade={grade} />
                <span className="text-sm font-semibold tabular-nums text-muted">{grade.number}</span>
              </div>
              <h3 className="display mt-6 text-2xl">{grade.title}</h3>
              <p className="mt-2 text-muted">{grade.motto}</p>
              <ul className="mt-5 grid gap-2 text-[15px]">
                {grade.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-fg/40" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <p className="border-t border-line pt-4 text-sm text-muted dark:border-bg">
                  <span className="font-semibold text-fg">{values.howToLoseLabel}: </span>
                  {grade.howToLose}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
