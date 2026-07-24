import Image from "next/image";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function Gallery() {
  const categories = Array.from(
    new Set(siteConfig.gallery.map((image) => image.category))
  );

  return (
    <section id="galeria" className="bg-paper py-20 text-ink sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Galeria"
          title="A equipa, os treinos e a comunidade"
          text="Momentos reais dos perfis oficiais da Rio21: treinos, kids, graduações e competição."
          tone="light"
        />
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-sm border border-black/10 bg-white px-3 py-2 text-xs font-black uppercase tracking-wide text-neutral-700"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.gallery.map((image) => (
            <figure
              key={image.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-black/75 px-4 py-3 text-sm font-black uppercase tracking-wide text-white">
                {image.category}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-sm text-neutral-600">
          Segue{" "}
          <a
            href={siteConfig.instagramSection.featured.url}
            className="font-black text-ember underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            @rio21.lisboa
          </a>{" "}
          para veres os treinos da semana.
        </p>
      </div>
    </section>
  );
}
