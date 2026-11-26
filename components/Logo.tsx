import { siteConfig } from "@/siteConfig";

/**
 * O logótipo é um PNG branco com fundo transparente. Usamo-lo como máscara
 * para herdar a cor do texto (`currentColor`) — fica preto no modo claro e
 * claro no modo escuro, sem precisar de dois ficheiros.
 */
export function Logo({ className = "h-7" }: { className?: string }) {
  const mask = `url(${siteConfig.logo}) center / contain no-repeat`;
  return (
    <span
      aria-hidden="true"
      className={`block aspect-[1920/837] bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  );
}
