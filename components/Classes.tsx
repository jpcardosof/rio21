import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { WhatsAppIcon } from "@/components/icons";
import { delay } from "@/components/motion";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/siteConfig";

type ClassesProps = {
  classes: Dictionary["classes"];
  ctaLabel: string;
  whatsappHref: string;
};

type Cell =
  | { kind: "class"; number: number; title: string; text: string; meta: string }
  | { kind: "photo"; src: string; alt: string; position: string };

export function Classes({ classes, ctaLabel, whatsappHref }: ClassesProps) {
  const photos: Cell[] = [
    { kind: "photo", src: siteConfig.images.submission.src, alt: classes.images.submission, position: "object-[50%_40%]" },
    { kind: "photo", src: siteConfig.images.armlock.src, alt: classes.images.armlock, position: "object-[50%_60%]" }
  ];
  const items: Cell[] = classes.items.map((item, index) => ({ kind: "class", number: index + 1, ...item }));

  // Mosaico 3×3 no desktop: 7 turmas + 2 fotos (2.ª posição e 7.ª posição).
  const cells: Cell[] = [items[0], photos[0], ...items.slice(1, 5), photos[1], ...items.slice(5)];

  return (
    <section id="aulas" aria-labelledby="aulas-titulo" className="py-24 lg:py-32">
      <div className="shell">
        <div data-reveal className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel>{classes.eyebrow}</SectionLabel>
            <h2 id="aulas-titulo" className="title-section mt-5">
              {classes.title}
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted lg:col-span-4 lg:col-start-9">{classes.intro}</p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {cells.map((cell, index) =>
            cell.kind === "photo" ? (
              <li
                key={cell.src}
                data-reveal
                style={delay((index % 3) * 100)}
                className="group relative min-h-[18rem] overflow-hidden rounded-3xl bg-surface"
              >
                <Image
                  src={cell.src}
                  alt={cell.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className={`object-cover grayscale transition-[filter,transform] duration-700 ease-soft group-hover:scale-[1.04] group-hover:grayscale-0 ${cell.position}`}
                />
              </li>
            ) : (
              <li
                key={cell.title}
                data-reveal
                style={delay((index % 3) * 100)}
                className="card flex flex-col p-7 transition-[transform,box-shadow] duration-500 ease-soft hover:-translate-y-1 hover:shadow-soft lg:p-8"
              >
                <span className="text-sm font-semibold tabular-nums text-muted">
                  {String(cell.number).padStart(2, "0")}
                </span>
                <h3 className="display mt-6 text-[1.75rem]">{cell.title}</h3>
                <p className="mt-3 text-[15px] text-muted">{cell.text}</p>
                <p className="mt-auto pt-7 text-xs font-semibold uppercase tracking-[0.14em]">{cell.meta}</p>
              </li>
            )
          )}
        </ul>

        <div data-reveal className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-lg">{classes.footnote}</p>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary min-h-14 shrink-0 px-7">
            <WhatsAppIcon />
            {ctaLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
