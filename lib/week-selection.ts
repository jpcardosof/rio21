/** Semana mostrada no cartão grande: a escolhida pelo visitante, se existir nesta turma; senão, a atual. */
export function selectedWeek(picked: number | null, current: number, total: number): number {
  return picked !== null && picked >= 1 && picked <= total ? picked : current;
}
