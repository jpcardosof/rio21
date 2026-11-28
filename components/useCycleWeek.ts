"use client";

import { useEffect, useState } from "react";
import { cycleWeek } from "@/lib/cycle";
import { siteConfig } from "@/siteConfig";

/**
 * Semana atual do ciclo. Começa com o valor calculado no servidor e corrige-se
 * no browser (a página é estática e pode ter sido gerada noutro dia).
 */
export function useCycleWeek(weeks: number, initial: number): number {
  const [week, setWeek] = useState(initial);

  useEffect(() => {
    const update = () => setWeek(cycleWeek(new Date(), siteConfig.curriculumStart, weeks));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, [weeks]);

  return week;
}
