"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle({ label }: { label: string }) {
  // Sem escolha guardada, acompanha as mudanças do sistema em tempo real.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem("theme")) {
          document.documentElement.classList.toggle("dark", event.matches);
        }
      } catch {
        /* storage indisponível */
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage indisponível */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid h-11 w-11 place-items-center text-fg transition-colors hover:text-muted"
    >
      <MoonIcon className="h-5 w-5 dark:hidden" />
      <SunIcon className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
