"use client";

import { SectionLabel } from "@/components/SectionLabel";
import { ArrowIcon } from "@/components/icons";
import { useCycleWeek } from "@/components/useCycleWeek";
import { formatWeekLabel } from "@/lib/cycle";

type ThisWeekProps = {
  eyebrow: string;
  text: string;
  cta: string;
  href: string;
  weekLabel: string;
  /** Só os temas de cada semana, para não enviar o currículo inteiro ao browser. */
  programs: { id: string; name: string; headlines: string[] }[];
  initialWeeks: { 16: number; 8: number };
};

/** Cartão da página principal: o que cada turma treina esta semana. */
export function ThisWeek({ eyebrow, text, cta, href, weekLabel, programs, initialWeeks }: ThisWeekProps) {
  const week16 = useCycleWeek(16, initialWeeks[16]);
  const week8 = useCycleWeek(8, initialWeeks[8]);

  return (
    <section aria-labelledby="esta-semana-titulo" className="pb-24 lg:pb-32">
      <div className="shell">
        <div data-reveal className="card grid gap-10 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
          <div className="flex flex-col lg:col-span-4">
            <SectionLabel>{eyebrow}</SectionLabel>
            <h2 id="esta-semana-titulo" className="display mt-5 text-[clamp(2.25rem,4vw,3.5rem)]">
              {formatWeekLabel(weekLabel, week16, 16)}
            </h2>
            <p className="mt-4 max-w-sm text-muted">{text}</p>
            <div aria-hidden="true" className="min-h-8 flex-1" />
            <a href={href} className="btn-ghost group min-h-12 self-start px-6">
              {cta}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="divide-y divide-line lg:col-span-8 dark:divide-bg">
            {programs.map((program) => {
              const total = program.headlines.length;
              const week = total === 8 ? week8 : week16;
              return (
                <li key={program.id} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <p className="font-semibold">
                    {program.name}
                    {total !== 16 && (
                      <span className="ml-2 text-xs font-normal text-muted">{formatWeekLabel(weekLabel, week, total)}</span>
                    )}
                  </p>
                  <p className="text-muted">{program.headlines[week - 1]}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
