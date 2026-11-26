import { SectionLabel } from "@/components/SectionLabel";
import type { Dictionary } from "@/content/types";

export function FAQ({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section id="faq" aria-labelledby="faq-titulo" className="py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div data-reveal className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <SectionLabel>{faq.eyebrow}</SectionLabel>
            <h2 id="faq-titulo" className="title-section mt-5">
              {faq.title}
            </h2>
          </div>
        </div>

        <div data-reveal className="grid content-start gap-3 lg:col-span-7 lg:col-start-6">
          {faq.items.map((item) => (
            <details key={item.question} className="faq-item card group rounded-2xl">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 font-semibold sm:text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bg transition-transform duration-500 ease-soft group-open:rotate-45"
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span className="absolute h-3 w-px bg-current" />
                </span>
              </summary>
              <p className="max-w-2xl px-6 pb-6 pr-14 text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
