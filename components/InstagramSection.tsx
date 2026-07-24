import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function InstagramSection() {
  const { featured, secondary } = siteConfig.instagramSection;
  const professorProfiles = siteConfig.social.instagram.filter(
    (profile) => profile.type === "Professor"
  );

  return (
    <section className="effect-section bg-ink py-20 sm:py-24">
      <div className="section-shell relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Instagram"
            title="Acompanha a comunidade Rio21"
            text="Treinos, graduações, competições e avisos de horários — tudo passa primeiro pelo Instagram oficial."
          />
          <a
            href={featured.url}
            className="button-primary w-full sm:w-auto"
            target="_blank"
            rel="noreferrer"
          >
            Seguir {featured.handle}
          </a>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="card-dark martial-panel hover-lift group overflow-hidden"
          >
            <div className="relative min-h-[420px] h-full">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="image-zoom object-cover"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute left-5 top-5 rounded-sm border border-white/20 bg-black/60 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold backdrop-blur">
                {featured.type}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-3xl font-black text-white sm:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-2 text-lg font-bold text-neutral-200">
                  {featured.handle}
                </p>
                <span className="kinetic-line mt-6 max-w-sm" />
              </div>
            </div>
          </a>

          <div className="flex flex-col gap-6">
            <a
              href={secondary.url}
              target="_blank"
              rel="noreferrer"
              className="card-dark martial-panel hover-lift group flex-1 overflow-hidden"
            >
              <div className="relative h-full min-h-[260px]">
                <Image
                  src={secondary.src}
                  alt={secondary.alt}
                  fill
                  className="image-zoom object-cover"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute left-4 top-4 rounded-sm border border-white/20 bg-black/60 px-2.5 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-gold backdrop-blur">
                  {secondary.type}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-black text-white">
                    {secondary.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-neutral-300">
                    {secondary.handle}
                  </p>
                </div>
              </div>
            </a>

            <div className="card-dark p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">
                Professores no Instagram
              </p>
              <div className="mt-4 grid gap-2">
                {professorProfiles.map((profile) => (
                  <a
                    key={profile.handle}
                    href={profile.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-gold/50"
                  >
                    <span className="text-sm font-black text-white">
                      {profile.name}
                    </span>
                    <span className="text-sm text-neutral-400">
                      {profile.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
