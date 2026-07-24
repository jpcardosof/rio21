"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "main > section",
          "main article",
          "main figure",
          "main form",
          "main details",
          ".section-shell > .grid",
          ".section-shell > .flex"
        ].join(",")
      )
    ).filter((element) => !element.closest("header, footer"));

    revealTargets.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${(index % 5) * 70}ms`);
    });

    const motionTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main article, main figure, .martial-panel"
      )
    );

    motionTargets.forEach((element) => {
      element.dataset.motionCard = "";
    });

    if (reduceMotion) {
      revealTargets.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      }
    );

    revealTargets.forEach((element) => observer.observe(element));

    function handlePointerMove(event: PointerEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-motion-card]")
          : null;

      if (!target) {
        return;
      }

      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      target.style.setProperty("--tilt-x", `${(-y * 2.5).toFixed(2)}deg`);
      target.style.setProperty("--tilt-y", `${(x * 2.5).toFixed(2)}deg`);
      target.style.setProperty("--shine-x", `${((x + 0.5) * 100).toFixed(0)}%`);
      target.style.setProperty("--shine-y", `${((y + 0.5) * 100).toFixed(0)}%`);
    }

    function handlePointerLeave(event: PointerEvent) {
      const target =
        event.target instanceof Element
          ? event.target.closest<HTMLElement>("[data-motion-card]")
          : null;

      if (!target) {
        return;
      }

      target.style.removeProperty("--tilt-x");
      target.style.removeProperty("--tilt-y");
      target.style.removeProperty("--shine-x");
      target.style.removeProperty("--shine-y");
    }

    document.addEventListener("pointermove", handlePointerMove, {
      passive: true
    });
    document.addEventListener("pointerout", handlePointerLeave, {
      passive: true
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerLeave);
    };
  }, []);

  return null;
}
