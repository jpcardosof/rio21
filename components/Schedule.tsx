"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppIcon } from "@/components/icons";
import type { Dictionary } from "@/content/types";
import { beginnerFriendly, sessionMinutes, siteConfig, type SessionType } from "@/siteConfig";

type ScheduleProps = {
  schedule: Dictionary["schedule"];
  ctaLabel: string;
  whatsappHref: string;
};

/** 60 → "1h", 30 → "30 min" (igual em PT e EN). */
function duration(type: SessionType) {
  const minutes = sessionMinutes[type];
  return minutes % 60 === 0 ? `${minutes / 60}h` : `${minutes} min`;
}

function Dot() {
  return <span aria-hidden="true" className="inline-block h-2 w-2 shrink-0 rounded-full bg-accent ring-1 ring-fg/10" />;
}

export function Schedule({ schedule, ctaLabel, whatsappHref }: ScheduleProps) {
  const days = siteConfig.timetable;
  const [active, setActive] = useState(0);
  const [today, setToday] = useState<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Abre no dia de hoje (domingo → segunda). Feito após montar para evitar diferenças de hidratação.
  useEffect(() => {
    const weekday = new Date().getDay();
    if (weekday === 0) return;
    setActive(weekday - 1);
    setToday(weekday - 1);
  }, []);

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>) {
    const last = days.length - 1;
    const next =
      event.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : event.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null;
    if (next === null) return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  const isBeginner = (type: SessionType) => beginnerFriendly.includes(type);

  return (
    <section id="horario" aria-labelledby="horario-titulo" className="py-24 lg:py-32">
      <div className="shell">
        <div data-reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>{schedule.eyebrow}</SectionLabel>
            <h2 id="horario-titulo" className="title-section mt-5">
              {schedule.title}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-lg text-muted">{schedule.intro}</p>
            <p className="mt-4 flex items-center gap-2.5 text-sm font-semibold">
              <Dot />
              {schedule.legend}
            </p>
          </div>
        </div>

        {/* Telemóvel e tablet: um dia de cada vez */}
        <div data-reveal className="mt-12 lg:hidden">
          <div role="tablist" aria-label={schedule.tablistLabel} className="grid grid-cols-6 gap-1 rounded-full bg-surface p-1">
            {days.map((_, dayIndex) => {
              const selected = dayIndex === active;
              return (
                <button
                  key={dayIndex}
                  ref={(element) => {
                    tabs.current[dayIndex] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`dia-${dayIndex}`}
                  aria-selected={selected}
                  aria-controls="dia-painel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(dayIndex)}
                  onKeyDown={onTabKey}
                  className={`relative flex h-11 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                    selected ? "bg-bg text-fg shadow-soft" : "text-muted hover:text-fg"
                  }`}
                >
                  <span aria-hidden="true">{schedule.daysShort[dayIndex]}</span>
                  <span className="sr-only">{schedule.days[dayIndex]}</span>
                  {today === dayIndex && (
                    <span aria-hidden="true" className="absolute bottom-1.5 h-1 w-1 rounded-full bg-current" />
                  )}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id="dia-painel" aria-labelledby={`dia-${active}`} tabIndex={0} className="mt-6">
            <p className="eyebrow px-1">
              {schedule.days[active]}
              {today === active && ` · ${schedule.today}`}
            </p>
            <ul key={active} className="fade-in mt-3 grid gap-2">
              {days[active].map(([time, type]) => (
                <li key={`${time}-${type}`} className="card flex items-center gap-5 rounded-2xl px-5 py-4">
                  <time className="w-14 shrink-0 text-lg font-semibold tabular-nums">{time}</time>
                  <span className="flex-1">
                    {schedule.sessions[type]}
                    <span className="ml-2 text-sm text-muted">{duration(type)}</span>
                  </span>
                  {isBeginner(type) && (
                    <span className="flex items-center gap-2 text-xs font-semibold text-muted">
                      <Dot />
                      <span className="hidden sm:inline">{schedule.beginnerTag}</span>
                      <span className="sr-only sm:hidden">{schedule.beginnerTag}</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop: semana completa */}
        <div data-reveal className="mt-16 hidden grid-cols-6 gap-2 rounded-[2rem] bg-surface p-2 lg:grid">
          {days.map((sessions, dayIndex) => (
            <div
              key={dayIndex}
              className={`rounded-3xl p-1.5 transition-colors duration-500 ${today === dayIndex ? "bg-accent/25 dark:bg-accent/10" : ""}`}
            >
              <h3 className="flex h-12 items-center justify-between px-3 text-sm font-semibold">
                {schedule.days[dayIndex]}
                {today === dayIndex && (
                  <span className="rounded-full bg-accent px-2.5 text-[11px] font-semibold leading-6 text-accent-fg">
                    {schedule.today}
                  </span>
                )}
              </h3>
              <ul className="grid gap-1.5">
                {sessions.map(([time, type]) => (
                  <li
                    key={`${time}-${type}`}
                    className="rounded-2xl bg-bg px-4 py-3.5 transition-transform duration-300 ease-soft hover:-translate-y-0.5"
                  >
                    <p className="flex items-baseline justify-between gap-2">
                      <time className="font-semibold tabular-nums">{time}</time>
                      <span className="text-xs text-muted">{duration(type)}</span>
                    </p>
                    <span className="mt-0.5 flex items-center gap-2 text-sm text-muted">
                      {schedule.sessions[type]}
                      {isBeginner(type) && (
                        <>
                          <Dot />
                          <span className="sr-only">{schedule.beginnerTag}</span>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-12">
          <h3 className="eyebrow">{schedule.guideTitle}</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {schedule.guide.map((group) => (
              <div key={group.group} className="card rounded-3xl p-6">
                <p className="text-sm font-semibold">{group.group}</p>
                <dl className="mt-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 border-b border-line py-2.5 last:border-b-0 dark:border-bg"
                    >
                      <dt className="font-semibold">{item.name}</dt>
                      <dd className="text-sm text-muted">{item.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-muted">{schedule.note}</p>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary min-h-14 shrink-0 px-7">
            <WhatsAppIcon />
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
