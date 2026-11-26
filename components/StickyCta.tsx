"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/icons";

/**
 * Barra fixa no telemóvel com o CTA da aula grátis. Aparece depois do hero e
 * esconde-se quando o bloco da aula grátis ou o contacto já estão no ecrã.
 */
export function StickyCta({ href, label }: { href: string; label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids = ["inicio", "aula-gratis", "contacto"];
    const onScreen = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target.id);
        else onScreen.delete(entry.target.id);
      }
      setVisible(onScreen.size === 0);
    });
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-500 ease-soft lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[120%] opacity-0"
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        tabIndex={visible ? 0 : -1}
        className="btn-primary min-h-14 w-full shadow-lift"
      >
        <WhatsAppIcon />
        {label}
      </a>
    </div>
  );
}
