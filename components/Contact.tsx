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
    { label: contact.location, value: contact.locationValue, href: location.directionsUrl, external: true }
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
                <dd className="text-right">
                  <a
                    href={row.href}
                    {...(row.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group inline-flex min-h-11 items-center gap-1.5 whitespace-pre-line font-semibold transition-colors hover:text-muted"
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
          {/* O mapa inteiro é um link: abre o GPS (Google Maps) com a rota até à academia. */}
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-surface lg:aspect-auto lg:h-full lg:min-h-[30rem]">
            <iframe
              title={contact.mapTitle}
              src={location.mapEmbedUrl}
              loading="lazy"
              tabIndex={-1}
              referrerPolicy="no-referrer-when-downgrade"
              className="pointer-events-none absolute inset-0 h-full w-full scale-[1.01] border-0 grayscale transition-transform duration-700 ease-soft group-hover:scale-[1.04] dark:invert-[0.9] dark:hue-rotate-180"
            />
            <a
              href={location.directionsUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${contact.directions} — ${contact.locationValue.replace("\n", ", ")}`}
              className="absolute inset-0 flex items-start justify-start p-4 sm:p-5"
            >
              <span className="btn-primary pointer-events-none min-h-12 px-5 shadow-lift group-hover:-translate-y-0.5">
                {contact.directions}
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </a>
          </div>
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="group mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg"
          >
            {contact.viewOnMaps}
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
