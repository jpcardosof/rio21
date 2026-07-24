import { ContactForm } from "@/components/ContactForm";
import { SectionIntro } from "@/components/SectionIntro";
import { siteConfig } from "@/siteConfig";

export function TrialClassCTA() {
  return (
    <section id="contacto" className="bg-ink py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionIntro
            eyebrow="Aula experimental gratuita"
            title={siteConfig.trial.title}
            text={siteConfig.trial.text}
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {siteConfig.trial.objections.map((item) => (
              <p
                key={item}
                className="rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black uppercase tracking-wide text-neutral-200"
              >
                {item}
              </p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.contacts.whatsappUrl}
              className="button-primary"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp · {siteConfig.contacts.whatsappDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.contacts.email}`}
              className="button-secondary"
            >
              {siteConfig.contacts.email}
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            {siteConfig.poles.map((pole) => (
              <a
                key={pole.id}
                href={pole.instagramUrl}
                className="button-secondary flex-1"
                target="_blank"
                rel="noreferrer"
              >
                {pole.shortName} · {pole.instagram}
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
