/** Âncoras de secção ("#horario") apontam para a página principal quando se está noutra página. */
export function navHref(href: string, homeHref: string): string {
  return href.startsWith("#") ? `${homeHref}${href}` : href;
}
