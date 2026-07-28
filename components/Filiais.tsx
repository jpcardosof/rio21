import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function Filiais() {
  return (
    <section id="filiais" className="bg-ink py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionIntro
            eyebrow="As nossas filiais"
            title="Uma equipa, dois tatames"
            text="A sede da Rio21 fica em Odivelas e a filial em Vila Franca de Xira — a mesma cultura de treino: técnica, respeito e evolução real."
          />
          <a
            href={siteConfig.contacts.whatsappUrl}
            className="button-primary w-full sm:w-auto"
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.ctas.primary}
          </a>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
          {siteConfig.poles.map((pole) => (
            <article
              key={pole.id}
              className="card-dark martial-panel hover-lift flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={pole.image}
                  alt={pole.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-sm border border-ember/60 bg-black/70 px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-ember backdrop-blur">
                  {pole.role}
                </span>
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-ember">
                    {pole.location}
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                    {pole.name}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                <p className="leading-7 text-neutral-300">{pole.description}</p>

                <dl className="grid gap-4 text-sm text-neutral-300 sm:grid-cols-2">
                  <div>
                    <dt className="font-black uppercase tracking-wide text-white">
                      Professores
                    </dt>
                    <dd className="mt-1">{pole.teachers.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-black uppercase tracking-wide text-white">
                      Turmas
                    </dt>
                    <dd className="mt-1">{pole.classes.join(" · ")}</dd>
                  </div>
                </dl>

                <div className="overflow-hidden rounded-lg border border-white/15">
                  <iframe
                    src={pole.mapEmbedUrl}
                    title={`Mapa da ${pole.name}`}
                    className="h-52 w-full border-0 grayscale-[35%] contrast-[1.05]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-1 sm:flex-row">
                  <a
                    href={
                      pole.id === "odivelas"
                        ? siteConfig.contacts.whatsappUrl
                        : pole.instagramUrl
                    }
                    className="button-primary flex-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {pole.id === "odivelas"
                      ? "WhatsApp Odivelas"
                      : pole.instagram}
                  </a>
                  <a
                    href={pole.mapsUrl}
                    className="button-secondary flex-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
