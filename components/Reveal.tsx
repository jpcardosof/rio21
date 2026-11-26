"use client";

import { useEffect } from "react";

/**
 * Mostra suavemente os elementos com `data-reveal` quando entram no ecrã.
 * Só atua se o script do <head> ativou as animações (classe `reveal` no <html>).
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("reveal")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
