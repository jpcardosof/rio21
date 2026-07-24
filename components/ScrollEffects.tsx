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

    const reveal = (element: HTMLElement) => {
      element.classList.add("is-visible");
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
          }
        });
      },
      {
        // threshold 0 => reveals as soon as any pixel enters the viewport.
        // A ratio-based threshold can never be met by sections taller than the
        // viewport (e.g. the mobile gallery), leaving them stuck invisible.
        rootMargin: "0px 0px -12% 0px",
        threshold: 0
      }
    );

    // Safety net: never leave a full section as an invisible (black) void.
    // Reveal anything already in/above the viewport on load, and anything
    // taller than the viewport (which a fade barely helps anyway).
    const viewportHeight = window.innerHeight;
    revealTargets.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const tallerThanViewport = rect.height > viewportHeight;
      const alreadyInView = rect.top < viewportHeight && rect.bottom > 0;

      if (tallerThanViewport || alreadyInView) {
        reveal(element);
      } else {
        observer.observe(element);
      }
    });

    // Last-resort fallback: if anything is still hidden shortly after load,
    // force it visible so the page can never look broken.
    const fallback = window.setTimeout(() => {
      revealTargets.forEach((element) => {
        if (!element.classList.contains("is-visible")) {
          const rect = element.getBoundingClientRect();
          if (rect.top < viewportHeight) {
            reveal(element);
          }
        }
      });
    }, 1500);

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
      window.clearTimeout(fallback);
      observer.disconnect();
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerLeave);
    };
  }, []);

  return null;
}
