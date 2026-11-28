"use client";

import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { useRef, useState, type KeyboardEvent } from "react";
import type { CurriculumWeek, MethodDictionary } from "@/content/curriculum.types";
import { useCycleWeek } from "@/components/useCycleWeek";
import { formatWeekLabel } from "@/lib/cycle";
import { selectedWeek } from "@/lib/week-selection";

type ProgramExplorerProps = {
  method: Pick<MethodDictionary, "programs" | "weekLabel" | "thisWeek" | "tablistLabel">;
  /** Semana calculada no servidor para ciclos de 16 e de 8 semanas. */
  initialWeeks: { 16: number; 8: number };
};

const ease = [0.16, 1, 0.3, 1] as const;

function WeekBlocks({ week }: { week: CurriculumWeek }) {
  return (
    <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {week.blocks.map((block) => (
        <div key={block.label}>
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-fg/70">{block.label}</dt>
          <dd className="mt-1.5">
            {block.title && <p className="font-semibold">{block.title}</p>}
            {block.detail.split("; ").map((line) => (
              <p key={line} className="text-[15px] leading-relaxed">
                {line}
              </p>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ProgramExplorer({ method, initialWeeks }: ProgramExplorerProps) {
  const { programs } = method;
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const program = programs[active];
  const total = program.weeks.length;
  const week16 = useCycleWeek(16, initialWeeks[16]);
  const week8 = useCycleWeek(8, initialWeeks[8]);
  const current = total === 8 ? week8 : week16;

  // Semana escolhida pelo visitante; ao mudar de turma volta à semana atual.
  const [picked, setPicked] = useState<number | null>(null);
  const selected = selectedWeek(picked, current, total);

  function selectProgram(index: number) {
    setActive(index);
    setPicked(null);
  }

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    const last = programs.length - 1;
    const next =
      event.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : event.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    selectProgram(next);
    tabs.current[next]?.focus();
  }

  const isCurrent = selected === current;

  return (
    <div>
      <div className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0">
        <div role="tablist" aria-label={method.tablistLabel} className="inline-flex gap-1 rounded-full bg-surface p-1">
          {programs.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.id}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`turma-${item.id}`}
                aria-selected={isActive}
                aria-controls={`turma-painel-${item.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectProgram(index)}
                onKeyDown={onTabKey}
                className={`h-11 whitespace-nowrap rounded-full px-5 text-sm font-semibold transition-all duration-300 ${
                  isActive ? "bg-bg text-fg shadow-soft" : "text-muted hover:text-fg"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel" id={`turma-painel-${program.id}`} aria-labelledby={`turma-${program.id}`} className="mt-10">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={program.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2 className="display text-3xl sm:text-4xl">{program.name}</h2>
              <p className="text-muted">
                {program.audience} · {program.duration}
              </p>
              {program.availability && (
                <span className="rounded-full border border-line-strong/60 px-3 py-1 text-xs font-semibold">
                  {program.availability}
                </span>
              )}
            </div>

            <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-accent p-7 text-accent-fg sm:p-10">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={`${program.id}-${selected}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.3, ease }}
                >
                  <p className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                    {isCurrent && (
                      <span className="rounded-full bg-ink px-3 py-1 text-xs uppercase tracking-[0.14em] text-white">
                        {method.thisWeek}
                      </span>
                    )}
                    {formatWeekLabel(method.weekLabel, selected, total)}
                  </p>
                  <p className="display mt-4 text-2xl sm:text-3xl">{program.weeks[selected - 1].headline}</p>
                  <div className="mt-8 border-t border-ink/15 pt-7">
                    <WeekBlocks week={program.weeks[selected - 1]} />
                  </div>
                </m.div>
              </AnimatePresence>
            </div>

            <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {program.weeks.map((week, index) => {
                const number = index + 1;
                const isSelected = number === selected;
                const isThisWeek = number === current;
                return (
                  <m.li
                    key={number}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease, delay: Math.min(index * 0.025, 0.4) }}
                  >
                    <button
                      type="button"
                      onClick={() => setPicked(number)}
                      aria-pressed={isSelected}
                      className={`flex h-full w-full flex-col items-start gap-1.5 rounded-2xl p-4 text-left transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 ${
                        isSelected ? "bg-fg text-bg" : "bg-surface hover:shadow-soft"
                      }`}
                    >
                      <span className="flex w-full items-center justify-between gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                        <span className={isSelected ? "" : "text-muted"}>{formatWeekLabel(method.weekLabel, number, total)}</span>
                        {isThisWeek && (
                          <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] tracking-[0.12em] text-accent-fg">
                            {method.thisWeek}
                          </span>
                        )}
                      </span>
                      <span className="text-sm font-semibold leading-snug">{week.headline}</span>
                    </button>
                  </m.li>
                );
              })}
            </ol>
          </m.div>
        </AnimatePresence>
      </div>

      {/* As outras turmas ficam no HTML (escondidas) para o currículo completo ser lido pelos motores de busca. */}
      {programs.map((item, index) =>
        index === active ? null : (
          <div key={item.id} role="tabpanel" id={`turma-painel-${item.id}`} aria-labelledby={`turma-${item.id}`} hidden>
            <h2>{item.name}</h2>
            <p>
              {item.audience} · {item.duration}
              {item.availability && ` · ${item.availability}`}
            </p>
            <ol>
              {item.weeks.map((week, weekIndex) => (
                <li key={weekIndex}>
                  <h3>
                    {formatWeekLabel(method.weekLabel, weekIndex + 1, item.weeks.length)}: {week.headline}
                  </h3>
                  <ul>
                    {week.blocks.map((block) => (
                      <li key={block.label}>
                        {block.label}: {block.title ? `${block.title}. ` : ""}
                        {block.detail}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        )
      )}
    </div>
  );
}
