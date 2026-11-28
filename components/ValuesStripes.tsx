import { ArrowIcon } from "@/components/icons";
import { GradeSwatch } from "@/components/method/ValuesGrades";
import { SectionLabel } from "@/components/SectionLabel";
import { delay } from "@/components/motion";
import type { MethodDictionary } from "@/content/curriculum.types";

type ValuesStripesProps = {
  values: Pick<MethodDictionary["values"], "eyebrow" | "title" | "summary" | "more" | "grades">;
  moreHref: string;
};

/** Graus de Valores em versão curta, para a página principal: as 5 riscas e o essencial. */
export function ValuesStripes({ values, moreHref }: ValuesStripesProps) {
  return (
    <div data-reveal className="card mt-20 p-7 sm:p-10 lg:mt-28 lg:p-14">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <SectionLabel>{values.eyebrow}</SectionLabel>
          <h3 className="display mt-5 text-[clamp(1.75rem,3vw,2.5rem)]">{values.title}</h3>
          <p className="mt-4 max-w-xl text-muted">{values.summary}</p>
        </div>
        <a href={moreHref} className="btn-ghost group min-h-12 shrink-0 self-start px-6 lg:self-end">
          {values.more}
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      <ol className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        {values.grades.map((grade, index) => (
          <li
            key={grade.number}
            data-reveal
            style={delay(120 + index * 110)}
            className="flex items-center gap-4 rounded-2xl bg-bg p-4 transition-[transform,box-shadow] duration-300 ease-soft hover:-translate-y-0.5 hover:shadow-soft lg:flex-col lg:items-start lg:gap-4 lg:p-5"
          >
            <GradeSwatch grade={grade} className="h-3 w-10 shrink-0 lg:w-full" />
            <p className="text-sm font-semibold leading-snug">
              <span className="block text-xs font-semibold tabular-nums text-muted">{grade.number}</span>
              {grade.title}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
