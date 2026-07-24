import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function Classes() {
  return (
    <section id="aulas" className="bg-paper py-20 text-ink sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="Aulas em Odivelas"
            title="Treinos para cada fase da tua jornada"
            text="Começa do zero, treina em família ou prepara-te para competir — sempre com acompanhamento técnico."
            tone="light"
          />
          <a
            href={siteConfig.contacts.whatsappUrl}
            className="button-dark w-full lg:w-auto"
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.ctas.primary}
          </a>
        </div>
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.classes.map((trainingClass, index) => (
            <article
              key={trainingClass.id}
              className="card-light hover-lift group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src={trainingClass.image}
                  alt={trainingClass.imageAlt}
                  fill
                  className="image-zoom object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-sm bg-ink/85 px-2.5 py-1.5 text-xs font-black text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-black text-white">
                  {trainingClass.title}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="leading-7 text-neutral-700">
                  {trainingClass.text}
                </p>
                <p className="mt-auto flex items-center gap-2 pt-5 text-xs font-black uppercase tracking-wide text-ember">
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
                  {trainingClass.schedule}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
