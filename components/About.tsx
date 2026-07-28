import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function About() {
  return (
    <section id="sobre" className="bg-paper py-20 text-ink sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Sobre a Rio21"
            title={siteConfig.about.title}
            text={siteConfig.about.text}
            tone="light"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {siteConfig.about.values.map((value) => (
              <div
                key={value}
                className="card-light p-5 shadow-sm transition hover:-translate-y-1 hover:border-ember/40"
              >
                <p className="text-lg font-black">{value}</p>
                <span className="mt-4 block h-1 w-10 bg-ember" />
              </div>
            ))}
          </div>
        </div>
        <figure className="card-light martial-panel relative overflow-hidden">
          <div className="relative aspect-[3/4]">
            <Image
              src={siteConfig.about.image}
              alt={siteConfig.about.imageAlt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">
                Equipa técnica
              </p>
              <p className="mt-2 text-xl font-black text-white">
                {siteConfig.slogan}
              </p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
