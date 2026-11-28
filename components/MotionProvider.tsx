"use client";

import { LazyMotion, MotionConfig } from "motion/react";

// As funcionalidades de animação são descarregadas depois da página abrir.
const loadFeatures = () => import("motion/react").then((mod) => mod.domAnimation);

/** Motion leve: componentes `m.*`, respeita "reduzir movimento" do sistema. */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={loadFeatures} strict>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
