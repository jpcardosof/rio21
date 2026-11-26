"use client";

import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { delay } from "@/components/motion";
import type { Dictionary, Locale } from "@/content/types";

type HeaderProps = {
  locale: Locale;
  nav: Dictionary["nav"];
  ui: Dictionary["ui"];
  whatsappHref: string;
};

export function Header({ locale, nav, ui, whatsappHref }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Cabeçalho transparente no topo; ganha fundo e linha suave ao fazer scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        solid ? "border-line bg-bg/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#inicio" aria-label={ui.logoHome} className="text-fg" onClick={() => setOpen(false)}>
          <Logo className="h-7 sm:h-8" />
        </a>

        <nav aria-label="Menu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors duration-300 hover:bg-surface hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitch current={locale} label={ui.languageLabel} className="hidden sm:flex" />
          <ThemeToggle label={ui.themeToggle} />
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary ml-1 hidden min-h-10 px-5 text-sm sm:inline-flex"
          >
            {ui.ctaShort}
          </a>
          <button
            type="button"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-surface lg:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-mobile" className="fade-in h-[calc(100dvh-var(--header-h))] overflow-y-auto bg-bg lg:hidden">
          <nav aria-label="Menu" className="shell flex min-h-full flex-col py-6">
            <ul>
              {nav.map((item, index) => (
                <li key={item.href} className="rise border-b border-line" style={delay(60 + index * 60)}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display flex items-center justify-between py-5 text-4xl"
                  >
                    {item.label}
                    <ArrowIcon className="h-5 w-5 text-muted" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="rise mt-auto flex flex-col gap-5 pt-10" style={delay(400)}>
              <LanguageSwitch current={locale} label={ui.languageLabel} />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary min-h-14 w-full"
              >
                <WhatsAppIcon />
                {ui.ctaWhatsapp}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
