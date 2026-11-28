import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";
import { delay } from "@/components/motion";
import { ValuesStripes } from "@/components/ValuesStripes";
import type { MethodDictionary } from "@/content/curriculum.types";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/siteConfig";

type AboutProps = {
  about: Dictionary["about"];
  values: MethodDictionary["values"];
  valuesHref: string;
};

export function About({ about, values, valuesHref }: AboutProps) {
  const image = siteConfig.images.about;

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-24 lg:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-6 lg:col-start-7 lg:row-start-1">
          <SectionLabel>{about.eyebrow}</SectionLabel>
          <h2 id="sobre-titulo" className="title-section mt-5">
            {about.title}
          </h2>
          {about.text.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-xl text-lg text-muted">
              {paragraph}
            </p>
          ))}
          <ul className="mt-10 flex flex-wrap gap-2">
            {about.values.map((value, index) => (
              <li
                key={value}
                data-reveal
                style={delay(200 + index * 70)}
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold"
              >
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent ring-1 ring-fg/10" />
                {value}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-surface">
            <Image
              src={image.src}
              alt={about.imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover grayscale transition-[filter,transform] duration-700 ease-soft group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
      <div className="shell">
        <ValuesStripes values={values} moreHref={valuesHref} />
      </div>
    </section>
  );
}
