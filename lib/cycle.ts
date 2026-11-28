/**
 * Contagem das semanas do currículo. Sem dependências (corre no browser, no
 * servidor e nos testes com `node --test`).
 */

const DAY_MS = 86_400_000;

const lisbonDate = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Lisbon",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

/** Número do dia (desde 1970-01-01) do calendário de Lisboa, para não depender do fuso do visitante. */
export function lisbonDayNumber(date: Date): number {
  const parts = lisbonDate.formatToParts(date);
  const get = (type: string) => Number(parts.find((part) => part.type === type)?.value);
  return Date.UTC(get("year"), get("month") - 1, get("day")) / DAY_MS;
}

/** Preenche um modelo como "Semana {week} de {total}". */
export function formatWeekLabel(template: string, week: number, total: number): string {
  return template.replace("{week}", String(week)).replace("{total}", String(total));
}

/** Semana do ciclo (1 a `weeks`) em que `now` cai, contando a partir da segunda-feira `startIso`. Repete sem pausas. */
export function cycleWeek(now: Date, startIso: string, weeks: number): number {
  const startDay = Date.parse(`${startIso}T00:00:00Z`) / DAY_MS;
  const elapsedWeeks = Math.floor((lisbonDayNumber(now) - startDay) / 7);
  return (((elapsedWeeks % weeks) + weeks) % weeks) + 1;
}
