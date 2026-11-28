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
    <div className="mt-20 grid gap-10 border-t border-line pt-14 lg:mt-28 lg:grid-cols-12 lg:gap-12">
      <div data-reveal className="lg:col-span-5">
        <SectionLabel>{values.eyebrow}</SectionLabel>
        <h3 className="display mt-5 text-[clamp(1.75rem,3vw,2.5rem)]">{values.title}</h3>
        <p className="mt-5 max-w-md text-muted">{values.summary}</p>
        <a
          href={moreHref}
          className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold transition-colors hover:text-muted"
        >
          {values.more}
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      <ol className="grid content-center gap-3 md:grid-cols-5 md:gap-4 lg:col-span-7">
        {values.grades.map((grade, index) => (
          <li
            key={grade.number}
            data-reveal
            style={delay(120 + index * 110)}
            className="flex items-center gap-4 md:flex-col md:items-start md:gap-3"
          >
            <GradeSwatch grade={grade} className="h-3 w-12 shrink-0 md:h-3.5 md:w-full" />
            <p className="text-sm font-semibold leading-snug">
              <span className="mr-1.5 tabular-nums text-muted">{grade.number}.</span>
              {grade.title}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
