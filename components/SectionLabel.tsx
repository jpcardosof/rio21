export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow inline-flex items-center gap-2.5">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent ring-1 ring-fg/10" />
      {children}
    </p>
  );
}
