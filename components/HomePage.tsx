import { About } from "@/components/About";
import { Classes } from "@/components/Classes";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { RevealObserver } from "@/components/Reveal";
import { Schedule } from "@/components/Schedule";
import { StickyCta } from "@/components/StickyCta";
import { Team } from "@/components/Team";
import { Trial } from "@/components/Trial";
import { buildJsonLd, getDictionary } from "@/content";
import type { Locale } from "@/content/types";
import { siteConfig, whatsappUrl } from "@/siteConfig";

export function HomePage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const wa = whatsappUrl(dict.whatsappMessage);
  const cta = dict.ui.ctaWhatsapp;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
      />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-3 focus:text-accent-fg"
      >
        {dict.ui.skipToContent}
      </a>

      <Header locale={locale} nav={dict.nav} ui={dict.ui} whatsappHref={wa} />

      <main id="conteudo">
        <Hero hero={dict.hero} ctaLabel={cta} whatsappHref={wa} />
        <Trial trial={dict.trial} ui={dict.ui} whatsappHref={wa} instagramHref={siteConfig.contacts.instagramDm} />
        <Classes classes={dict.classes} ctaLabel={cta} whatsappHref={wa} />
        <Schedule schedule={dict.schedule} ctaLabel={cta} whatsappHref={wa} />
        <About about={dict.about} />
        <Team team={dict.team} />
        <FAQ faq={dict.faq} />
        <Contact contact={dict.contact} ui={dict.ui} whatsappHref={wa} />
      </main>

      <Footer footer={dict.footer} nav={dict.nav} />
      <StickyCta href={wa} label={cta} />
      <RevealObserver />
    </>
  );
}
