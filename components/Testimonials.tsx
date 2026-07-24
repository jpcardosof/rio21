import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function Testimonials() {
  return (
    <section className="bg-graphite py-20 sm:py-24">
      <div className="section-shell">
        <SectionIntro
          eyebrow="A experiência Rio21"
          title={siteConfig.testimonials.title}
          text={siteConfig.testimonials.text}
        />
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2">
          {siteConfig.testimonials.items.map((testimonial) => (
            <blockquote
              key={testimonial}
              className="card-dark flex items-start gap-4 border-l-4 border-l-gold p-6"
            >
              <span
                className="mt-1 text-3xl font-black leading-none text-gold"
                aria-hidden="true"
              >
                “
              </span>
              <p className="text-lg font-bold leading-8 text-white">
                {testimonial}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
