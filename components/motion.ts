import type { CSSProperties } from "react";

/** Atraso das animações `.rise` e `[data-reveal]` (ex.: cartões a aparecer um a um). */
export function delay(ms: number): CSSProperties {
  return { "--delay": `${ms}ms` } as CSSProperties;
}
