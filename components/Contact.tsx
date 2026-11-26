import { SectionLabel } from "@/components/SectionLabel";
import { ArrowUpRightIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons";
import type { Dictionary } from "@/content/types";
import { siteConfig } from "@/siteConfig";

type ContactProps = {
  contact: Dictionary["contact"];
  ui: Dictionary["ui"];
  whatsappHref: string;
};

export function Contact({ contact, ui, whatsappHref }: ContactProps) {
  const { contacts, location } = siteConfig;
  const rows = [
    { label: contact.whatsapp, value: contacts.whatsappDisplay, href: whatsappHref, external: true },
    { label: contact.instagram, value: contacts.instagramHandle, href: contacts.instagram, external: true },
    { label: contact.email, value: contacts.email, href: `mailto:${contacts.email}`, external: false },
    { label: contact.location, value: contact.locationValue, href: location.mapsUrl, external: true }
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-titulo" className="py-24 lg:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-5">
          <SectionLabel>{contact.eyebrow}</SectionLabel>
          <h2 id="contacto-titulo" className="display mt-5 text-[clamp(2.75rem,6vw,5rem)]">
            {contact.title}
          </h2>
          <p className="mt-6 max-w-md text-lg text-muted">{contact.text}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary min-h-14 px-7">
              <WhatsAppIcon />
              {ui.ctaWhatsapp}
            </a>
            <a href={contacts.instagramDm} target="_blank" rel="noreferrer" className="btn-ghost min-h-14 px-7">
              <InstagramIcon />
              {ui.ctaInstagram}
            </a>
          </div>

          <dl className="mt-12">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between gap-6 border-b border-line py-3 first:border-t">
                <dt className="eyebrow">{row.label}</dt>
                <dd>
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group inline-flex min-h-11 items-center gap-1.5 font-semibold transition-colors hover:text-muted"
                  >
                    {row.value}
                    {row.external && (
                      <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-reveal className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-surface lg:aspect-auto lg:h-full lg:min-h-[30rem]">
            <iframe
              title={contact.mapTitle}
              src={location.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 grayscale dark:invert-[0.9] dark:hue-rotate-180"
            />
          </div>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg"
          >
            {contact.directions}
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
