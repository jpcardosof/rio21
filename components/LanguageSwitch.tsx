"use client";

import { Fragment, type MouseEvent } from "react";
import { localePath, locales, type Locale } from "@/content/types";

const names: Record<Locale, string> = { pt: "Português", en: "English" };
const hreflang: Record<Locale, string> = { pt: "pt-PT", en: "en" };

export function LanguageSwitch({
  current,
  label,
  className = "",
  paths = localePath
}: {
  current: Locale;
  label: string;
  className?: string;
  /** Caminho desta página em cada idioma (por defeito, a página principal). */
  paths?: Record<Locale, string>;
}) {
  // Mantém o visitante na mesma secção ao trocar de idioma.
  function keepSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (window.location.hash) {
      event.preventDefault();
      window.location.href = `${href}${window.location.hash}`;
    }
  }

  return (
    <nav aria-label={label} className={`flex items-center text-xs font-semibold tracking-[0.16em] ${className}`}>
      {locales.map((locale, index) => {
        const active = locale === current;
        return (
          <Fragment key={locale}>
            {index > 0 && (
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
            )}
            <a
              href={paths[locale]}
              hrefLang={hreflang[locale]}
              lang={hreflang[locale]}
              aria-current={active ? "true" : undefined}
              onClick={(event) => keepSection(event, paths[locale])}
              className={`grid h-11 min-w-10 place-items-center px-1 transition-colors ${
                active ? "text-fg" : "text-muted hover:text-fg"
              }`}
            >
              {locale.toUpperCase()}
              <span className="sr-only">, {names[locale]}</span>
            </a>
          </Fragment>
        );
      })}
    </nav>
  );
}
