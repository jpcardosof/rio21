"use client";

import { useState } from "react";
import { siteConfig } from "@/siteConfig";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
        <div className="section-shell flex min-h-20 items-center justify-between gap-4">
          <a
            href="#inicio"
            className="flex items-center gap-3 text-white"
            aria-label="Ir para o início da Rio21 BJJ"
          >
            <span className="grid h-11 w-11 place-items-center rounded-sm border border-ember bg-white text-sm font-black text-ink">
              R21
            </span>
            <span className="leading-none">
              <span className="block text-sm font-black uppercase tracking-[0.22em]">
                Rio21 BJJ
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Odivelas · Lisboa
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Menu principal">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-bold uppercase tracking-wide text-neutral-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={siteConfig.contacts.whatsappUrl}
              className="button-primary"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp · Marcar aula
            </a>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-sm border border-white/20 text-white lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                  isOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-current transition ${
                  isOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen ? (
          <nav className="border-t border-white/10 bg-ink px-4 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-sm px-3 py-3 text-sm font-bold uppercase tracking-wide text-neutral-200 hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.contacts.whatsappUrl}
                onClick={() => setIsOpen(false)}
                className="button-primary mt-2"
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.ctas.primary}
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <a
        href={siteConfig.contacts.whatsappUrl}
        className="fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl md:hidden"
        aria-label={`Contactar a Rio21 por WhatsApp em ${siteConfig.contacts.whatsappDisplay}`}
        target="_blank"
        rel="noreferrer"
        title="WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
          <path d="M8.8 8.2c.3 2.9 2.2 4.8 5.1 5.1l1.1-1.1 2 .9c-.2 1.1-1.2 2-2.4 2-4.2-.1-7.6-3.5-7.7-7.7 0-1.2.9-2.2 2-2.4l.9 2-1 1.2Z" />
        </svg>
      </a>
    </>
  );
}
