import Image from "next/image";
import { siteConfig } from "@/siteConfig";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[86svh] items-end overflow-hidden pt-24 text-white"
    >
      <Image
        src={siteConfig.media.heroImage}
        alt={siteConfig.media.heroImageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.94),rgba(7,7,7,0.68),rgba(7,7,7,0.24))]" />

      <div className="section-shell relative z-10 pb-12 pt-24 sm:pb-16 lg:pb-20">
        <div className="max-w-4xl">
          <p className="eyebrow mb-4">{siteConfig.hero.location}</p>
          <h1 className="display-title">{siteConfig.hero.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 sm:text-xl">
            {siteConfig.hero.subtitle}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {siteConfig.hero.highlights.map((highlight) => (
              <span
                key={highlight}
                className="rounded-sm border border-white/20 bg-black/40 px-3 py-2 text-xs font-black uppercase tracking-wide text-neutral-100 backdrop-blur"
              >
                {highlight}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.contacts.whatsappUrl}
              className="button-primary"
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.ctas.primary}
            </a>
            <a href="#aulas" className="button-secondary">
              {siteConfig.ctas.secondary}
            </a>
          </div>
          <p className="mt-6 max-w-xl border-l-2 border-ember pl-4 text-sm font-bold uppercase tracking-wide text-neutral-300">
            {siteConfig.slogan}
          </p>
        </div>
      </div>
    </section>
  );
}
