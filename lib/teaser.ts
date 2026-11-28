import type { Program } from "../content/curriculum.types";

/** Turmas do cartão "Esta semana no tatame": só as que têm horário (o Feminino fica só na página Método). */
export function teaserPrograms<T extends Pick<Program, "availability">>(programs: T[]): T[] {
  return programs.filter((program) => !program.availability);
}
