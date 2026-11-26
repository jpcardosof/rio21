import Image from "next/image";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { delay } from "@/components/motion";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/siteConfig";

type HeroProps = {
  hero: Dictionary["hero"];
  ctaLabel: string;
  whatsappHref: string;
};

export function Hero({ hero, ctaLabel, whatsappHref }: HeroProps) {
  const image = siteConfig.images.hero;

  return (
    <section id="inicio" className="pb-20 pt-[calc(var(--header-h)+2.5rem)] lg:pb-28 lg:pt-[calc(var(--header-h)+4.5rem)]">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="rise eyebrow inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent motion-safe:animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-accent ring-1 ring-fg/10" />
            </span>
            {hero.eyebrow}
          </p>

          <h1 className="display mt-7 text-[clamp(3rem,6.1vw,5.5rem)]">
            {hero.title.map((line, index) => (
              <span key={line} className="rise block" style={delay(120 + index * 120)}>
                {line}
              </span>
            ))}
          </h1>

          <p className="rise mt-7 max-w-md text-lg text-muted" style={delay(380)}>
            {hero.subtitle}
          </p>

          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={delay(500)}>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary min-h-14 px-7">
              <WhatsAppIcon />
              {ctaLabel}
            </a>
            <a href="#horario" className="btn-ghost group min-h-14 px-7">
              {hero.secondaryCta}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <dl className="rise mt-14 grid gap-5 border-t border-line pt-7 sm:grid-cols-3 sm:gap-6" style={delay(640)}>
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-1.5 text-[15px] font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface sm:aspect-[5/4] lg:aspect-[6/7]">
            <Image
              src={image.src}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw"
              className="zoom-in object-cover object-[50%_35%] grayscale"
            />
            <span className="float absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg shadow-lift">
              {hero.badge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
